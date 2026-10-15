
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const { MongoClient, ObjectId } = require("mongodb");
const session = require("express-session");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
const PORT = process.env.PORT || 3000;

// Vérification de la configuration
if (!process.env.MONGODB_URI || !process.env.SESSION_SECRET) {
  console.error("Erreur : MONGODB_URI ou SESSION_SECRET manque dans .env");
  process.exit(1);
}

// Sécurité et middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src-attr": ["'unsafe-inline'"]
      }
    }
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 1000 * 60 * 60 * 2
    }
  })
);

app.use(express.static(path.join(__dirname, "public")));

const client = new MongoClient(process.env.MONGODB_URI);
let db;

// ======================================
// CONNEXION : conservée pour compatibilité
// ======================================
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email et mot de passe obligatoires."
      });
    }

    const emailNormalise = email.trim().toLowerCase();

    const user = await db.collection("users").findOne({
      email: emailNormalise
    });

    if (
      !user ||
      !user.password ||
      !(await bcrypt.compare(password, user.password))
    ) {
      return res.status(401).json({
        message: "Email ou mot de passe incorrect."
      });
    }

    req.session.userId = user._id.toString();

    return res.json({
      message: "Connexion réussie !",
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Erreur connexion :", error.message);
    return res.status(500).json({
      message: "Erreur lors de la connexion."
    });
  }
});

// ======================================
// VERIFIER LA SESSION
// ======================================
app.get("/api/me", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({
        message: "Aucune session connectée."
      });
    }

    const user = await db.collection("users").findOne(
      { _id: new ObjectId(req.session.userId) },
      { projection: { password: 0 } }
    );

    if (!user) {
      req.session.destroy(() => {});
      return res.status(401).json({
        message: "Session invalide."
      });
    }

    return res.json({
      id: user._id.toString(),
      username: user.username,
      email: user.email
    });
  } catch (error) {
    console.error("Erreur session :", error.message);
    return res.status(500).json({
      message: "Erreur lors de la vérification de la session."
    });
  }
});

// ======================================
// DECONNEXION
// ======================================
app.post("/api/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        message: "Erreur lors de la déconnexion."
      });
    }

    res.clearCookie("connect.sid");
    return res.json({
      message: "Déconnexion réussie."
    });
  });
});

// ======================================
// ENREGISTRER LE SCORE DU JOUEUR
// Le joueur entre uniquement son nom
// ======================================
app.post("/api/scores", async (req, res) => {
  try {
    const username = String(req.body.username || "").trim();
    const score = Number(req.body.score);
    const categorie = req.body.categorie;

    if (!username || username.length > 30) {
      return res.status(400).json({
        message: "Entre un nom de joueur valide."
      });
    }

    if (
      !Number.isSafeInteger(score) ||
      score < 0 ||
      !["proverbes", "chansons"].includes(categorie)
    ) {
      return res.status(400).json({
        message: "Score ou catégorie invalide."
      });
    }

    await db.collection("scores").insertOne({
      username,
      score,
      categorie,
      date: new Date()
    });

    return res.status(201).json({
      message: "Score enregistré avec succès !"
    });
  } catch (error) {
    console.error("Erreur enregistrement score :", error.message);
    return res.status(500).json({
      message: "Erreur lors de l'enregistrement du score."
    });
  }
});

// ======================================
// CLASSEMENT : les 10 meilleurs joueurs
// ======================================
app.get("/api/leaderboard", async (req, res) => {
  try {
    const classement = await db.collection("scores")
      .aggregate([
        {
          $match: {
            username: { $type: "string", $ne: "" },
            score: { $type: "number" }
          }
        },
        {
          $group: {
            _id: "$username",
            meilleurScore: { $max: "$score" }
          }
        },
        {
          $sort: {
            meilleurScore: -1,
            _id: 1
          }
        },
        { $limit: 10 },
        {
          $project: {
            _id: 0,
            username: "$_id",
            score: "$meilleurScore"
          }
        }
      ])
      .toArray();

    return res.json(classement);
  } catch (error) {
    console.error("Erreur leaderboard :", error.message);
    return res.status(500).json({
      message: "Erreur lors du chargement du classement."
    });
  }
});

// ======================================
// TEST DU SERVEUR ET DE MONGODB
// ======================================
app.get("/api/test", (req, res) => {
  res.json({
    message: "Le serveur Quiz Time fonctionne !",
    database: db ? "MongoDB Atlas connectée" : "Non connectée"
  });
});

// ======================================
// DEMARRAGE
// ======================================
async function startServer() {
  try {
    await client.connect();
    db = client.db("quiztime");

    // Vérifier que MongoDB répond
    await db.command({ ping: 1 });

    console.log("Connexion à MongoDB Atlas réussie !");

    app.listen(PORT, () => {
      console.log(
        `Quiz Time disponible sur http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "Erreur de connexion à MongoDB Atlas :",
      error.message
    );
    process.exit(1);
  }
}

startServer();
