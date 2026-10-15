
/* ---------- DONNÉES DU QUIZ ---------- */
const DATA = {
  proverbes: {
    label: "الأمثال",
    icon: "📜",
    qs: [
      {q:"أكمل المثل: «أعمل الخير وارمي في...»",o:["الواد","البحر","النار"],a:1},
      {q:"شنّوا معنى «الباب اللي تجيك منو الأرياح سدّو وارتاح»؟",o:["سكّر الشبابيك في الشتا","افتح الباب لكل الناس","ابعد على اللي يجيبلك المشاكل تتهنّى"],a:2},
      {q:"أكمل المثل: «الناس تعرف الناس والخيل تعرف...»",o:["الحشيش","الواد","ركّابها"],a:2},
      {q:"أكمل المثل: «إللّي يتبع الحمام الجالي...»",o:["يروّح للمغاغر","يرجع للمغاغر","يوصل للمغاغر"],a:0},
      {q:"أكمل المثل: «الجمل كان يرا حدبتو...»",o:["تتكسر رقبتو","تتقطع رقبتو","تتقطع قبتو"],a:1},
      {q:"أكمل المثل: «الفم المغلوق ما تدخله...»",o:["نملة","بقة","ذبّانة"],a:2},
      {q:"أكمل المثل: «الحركة بركة والبطالة...»",o:["خسارة","هلكة","مذلّة"],a:1},
      {q:"أكمل المثل: «إللّي خلّى النْباتْ...»",o:["ما فات","ما خاب","ما مات"],a:2},
      {q:"أكمل المثل: «النُخالة ما تصير دقيق والعدو...»",o:["ما يولي صديق","ما يصير صديق","ما يكون صديق"],a:1},
      {q:"أكمل المثل: «الضحك ساعة والبكي...»",o:["مشوار","ساعات","عمر"],a:0},
      {q:"أكمل المثل: «الدنيا كيف دار البرقادي، ادخل منا اخرج...»",o:["من تالي","من هنا","من غادي"],a:2},
      {q:"ما يبكيلك كان شفرك وما يحكلك كان...",o:["كفك","ظفرك","ذراعك"],a:1},
      {q:"أكمل المثل: «اللي يعشق يعشق السمح والي يزرع يزرع...»",o:["الشعير","الزيتون","القمح"],a:2},
      {q:"أكمل المثل: «بوس الكلب من فمو حتى...»",o:["تاخذ حقك منو","تقضي حاجتك منو","تفلت منو"],a:1},
      {q:"أكمل المثل: «إللّي يعطي سلاحو...»",o:["يخسر بيه","يندم عليه","يْموت بيه"],a:2},
      {q:"شنّوا الصيغة الصحيحة؟",o:["اليد في الطبق والعين في اللسعة","اليد في القصعة والعين في اللسعة","اليد في القصعة والعين في اللمسة"],a:1},
      {q:"شنّوا الصيغة الصحيحة؟",o:["إللّي ما يشبع من القصعة ما يشبع من لحيسها","إللّي ما يشبع من القصعة ما يشبع من لحسها","إللّي ما يشبع من الصحن ما يشبع من لحيسها"],a:0},
      {q:"شنّوا الصيغة الصحيحة؟",o:["إللّي ما فيه قلب يموت سمين معشعش","إللّي ما فيه قلب يموت سمين مفشفش","إللّي ما عندو قلب يموت سمين معشعش"],a:0},
      {q:"شنّوا الصيغة الصحيحة؟",o:["الشيب والعار","الشيب والعيب","الشيخ والعيب"],a:1},
      {q:"شنّوا الصيغة الصحيحة؟",o:["الباي باي حتى في شكارة","الباي باي حتى في غربال","الباي باشا حتى في شكارة"],a:0},
      {q:"شنّوا الصيغة الصحيحة؟",o:["ما يدوم في الواد كان حجرو","ما يبقى في الواد كان حجرو","ما يبقى في البحر كان حجرو"],a:1}
    ]
  },

  chansons: {
    label: "الأغاني",
    icon: "🎶",
    qs: [
      {q:"لاموني اللي غاروا مني وقالولي اش عجبك فيها...",o:["قلبي تعب من هواها والدموع تجري عليه","يا ليل خبّي أسراري ما نحب حد يحكي فيه","جاوبت الي جهلو فني خدوا عيني شوفو بيها"],a:2},
      {q:"كمّل الغناية «تحت الياسمينة في الليل ...»",o:["نسمة والورد محاذيني، الأغصان عليّا تميل","يا ليل ياعين، خلّي قلبي يرتاح","والقمر يسهر معايا، والنجوم تضوي الليل"],a:0},
      {q:"«...ياللا نعيش في عيون الليل»",o:["ونخلي النجوم تحكيلنا حكاية","وننسى الدنيا ونعيش في الهنا","ونقول للشمس تعالي تعالي، بعد سنة مش قبل سنة"],a:2},
      {q:"خمّن الأغنية: 🍃🌬️",o:["نسم علينا الهوى","رجعت الشتوية","كان عنا طاحون"],a:0},
      {q:"خمّن الأغنية: 🎶⭐🌙",o:["جانا الهوى — عبد الحليم حافظ","سهر الليالي — فيروز","بتونس بيك — وردة"],a:1},

      {q:"حبيتك طفلة وبنية، حبيتك كيف صرت...",o:["عروسة","صبية","أميرة"],a:1},
      {q:"كيف ما يرجع الفرططو...",o:["للنار اللي تحرقه","للبحر اللي غرقو","للحقل اللي عرقو"],a:0},
      {q:"كيف ما يرجع الفلاح...",o:["للنار اللي تحرقه","للحقل اللي عرقو","للبحر اللي غرقو"],a:1},
      {q:"كيف ما يرجع الملاح...",o:["للحقل اللي عرقو","للنار اللي تحرقه","للبحر اللي غرقو"],a:2},
      {q:"نرجع لك حاير و...",o:["مهني","غاضب","حزين"],a:0},

      {q:"عرضوني زوز صبايا، وحدة فنار والأخرى...",o:["وردة ضواية","شمعة ضواية","نجمة ضواية"],a:1},
      {q:"أنا داخل للزنقة، حطيت ايدي على...",o:["الحلقة","الشباك","الطاقة"],a:0},
      {q:"دقيت الباب بظفري وخرجت لي ولفتي...",o:["تغني","تضحك","تجري"],a:2},
      {q:"لبست لي جبة عكري تخطف...",o:["القلوب","الأنظار","العقول"],a:1},
      {q:"نايا قلبي باغيكم شعلتلي...",o:["النار","الشمعة","الضواية"],a:0},

      {q:"العين اللّي ما تشوفكشي، يا خسارة كل اللّي...",o:["سمعتو","حبيتو","راتو"],a:2},
      {q:"والقلب اللّي ما يحبّكشي، قل لي اش يعمل...",o:["بحياتو","بنهارو","بليلتو"],a:0},
      {q:"يا زهرة عمري يا...",o:["بيضاء","سمراء","حمراء"],a:1},
      {q:"يلي نورتي...",o:["نهاراتي","أحلامي","لياليّا"],a:2},
      {q:"كاينّي عنّقت القمرة وقطفت الشمس...",o:["بعينيّا","بيديّا","بقلبي"],a:0},

      {q:"كان عنا طاحون ع نبع...",o:["البحر","المي","الوادي"],a:1},
      {q:"وجدي كان يطحن للحي قمح و...",o:["حكايات","أغاني","سهريات"],a:2},
      {q:"آه يا سهر الليالي، آه يا حلو على...",o:["بالي","قلبي","روحي"],a:0},
      {q:"راحت الأيام وشوي شوي، سكت الطاحون ع كتف...",o:["الجبل","المي","الطريق"],a:1},
      {q:"وجدي صار طاحون...",o:["أحلام","أغاني","ذكريات"],a:2},

      {q:"بتونس بيك، وبلاقي في قربك...",o:["دنيايا","أحلامي","أمانيّا"],a:0},
      {q:"لما تقرب أنا بتونس بيك، وأما تبعد أنا...",o:["بستناّك","بتونس بيك","بنسى هواك"],a:1},
      {q:"وإن جاه صوتك، صوتك...",o:["بيحيرني","بيبعدني","بيونسني"],a:2},
      {q:"وهواك في البعد، في البعد...",o:["بيحرسني","بينساني","بيوجعني"],a:0},
      {q:"على طول في خيالي...",o:["بستناّك","بناديلك","بنسى لياليك"],a:1},
      {q:"يا تجيني يا هجيلك، من غير...",o:["كلام","عتاب","مواعيد"],a:2},

      {q:"على بابي واقف قمرين، واحد بالسما والثاني...",o:["أغلى من العين","أعلى من السما","أبعد من البحر"],a:0},
      {q:"يا قمرنا بالليالي احنا...",o:["المسافرين","العاشقين","الحائرين"],a:1},
      {q:"يا طالع بالعلالي خلينا...",o:["فرحانين","مرتاحين","سهرانين"],a:2},
      {q:"ولا نجمة بين قمرين، ولا نسمة بين...",o:["هلالين","بحرين","وردتين"],a:0},
      {q:"والناس عندها قمر وأنا عندي...",o:["ثلاثة","قمرين","واحد"],a:1},

      {q:"كلمة حلوة وكلمتين حلوة يا...",o:["حبيبي","عمري","بلدي"],a:2},
      {q:"غنوة حلوة وغنوتين حلوة يا...",o:["بلدي","قلبي","عيني"],a:0},
      {q:"أملي دايما كان يا بلدي إني...",o:["نسافر منك","أرجع لك","ننسى زمان"],a:1},
      {q:"أول حب كان في بلدي مش ممكن...",o:["أحكيه","أعيشه","أنساه"],a:2},
      {q:"كنا بنقول إن الفراق ده...",o:["مستحيل","جميل","قريب"],a:0},
      {q:"فين حبيب القلب يا بلدي كان...",o:["قريب مني","بعيد عني","واقف جنبي"],a:1},

      {q:"مغرم، مغرم أنا بيك...",o:["أحيانا","في الليالي","عَلطول"],a:2},
      {q:"وأنا صابر وصبري ف هوايا...",o:["دليل","جميل","طويل"],a:0},
      {q:"ليل ورا ليل ولا دوقت...",o:["الفرح","النوم","الراحة"],a:1},
      {q:"شوق وغرام لا عتاب ولا...",o:["كلام","فراق","لوم"],a:2},
      {q:"داري أنا اداري حيرتي و...",o:["مراري","أسراري","أفكاري"],a:0},
      {q:"داري أنا اداري حيرتي ومراري، وأنت...",o:["معايا","ولا داري","بتناديني"],a:1},

      {q:"وهران وهران رحتي...",o:["بعيدة","جميلة","خسارة"],a:2},
      {q:"هجروا منك ناس...",o:["شطارى","صغارى","كبارى"],a:0},
      {q:"قعدوا في الغربة...",o:["فرحارى","حيارى","سهرارى"],a:1},
      {q:"والغربة صعيبة و...",o:["جميلة","طويلة","غدّارة"],a:2},
      {q:"يا فرحي على أولاد...",o:["الحمري","الهواري","المدينة"],a:0},
      {q:"أولاد مدينة و...",o:["الحمري","سيدي الهواري","وهران"],a:1},
      {q:"عديت معاهم...",o:["شبابي","حياتي","صغري"],a:2}
    ]
  }
};

const CARDS = [["6","♥","red"],["7","♣","blk"],["2","♥","red"]];
const TIME = 30;

let cat, idx, score, t, tick;
let answered = [];

/* ---------- FOND : CARTES ---------- */
(function () {
  const bg = document.getElementById('bg');

  // login.html ne contient pas l'élément bg
  if (!bg) return;

  const ranks = ['7','J','6','8','10','A','Q','K','2','4','9','3'];
  const suits = [['♣','blk'],['♦','red'],['♠','blk'],['♥','red']];

  for (let i = 0; i < 22; i++) {
    const d = document.createElement('div');
    const s = suits[i % 4];

    d.className = 'bgc ' + s[1];
    d.innerHTML = ranks[i % ranks.length] + '<small>' + s[0] + '</small>';
    d.style.left = (i % 6) * 18 - 6 + Math.random() * 6 + '%';
    d.style.top = Math.floor(i / 6) * 30 - 6 + Math.random() * 8 + '%';
    d.style.transform = 'rotate(' + (Math.random() * 120 - 60) + 'deg)';

    bg.appendChild(d);
  }
})();

/* ---------- OUTIL ---------- */
const $ = id => document.getElementById(id);

/* ---------- FORMULAIRE REJOINDRE ---------- */
const loginForm = $('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = $('username').value.trim();
    const message = $('message');

    if (username.length < 2) {
      if (message) {
        message.textContent = 'Entre un nom de 2 caractères minimum.';
      }
      return;
    }

    sessionStorage.setItem('quizUsername', username);
    window.location.href = 'index.html';
  });
}

/* ---------- NOM SUR L'ACCUEIL ---------- */
function showUserGreeting() {
  const username = sessionStorage.getItem('quizUsername');
  const greeting = $('userGreeting');

  if (!greeting) return;

  greeting.textContent = username
    ? `Hi, ${username} ! 👋`
    : 'Hi, invité ! 👋';
}

showUserGreeting();

/* ---------- NAVIGATION ---------- */
function go(id) {
  clearInterval(tick);

  const section = $(id);

  // Évite une erreur si la section n'existe pas sur cette page
  if (!section) return;

  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('on');
  });

  section.classList.add('on');
}

/* ---------- CATEGORIES ---------- */
const catList = $('catList');

if (catList) {
  catList.innerHTML = Object.keys(DATA).map(k =>
    `<div class="cat" onclick="start('${k}')">
      <b>${DATA[k].icon}</b>${DATA[k].label}
    </div>`
  ).join('');
}

/* ---------- JEU ---------- */
function start(k) {
  if (!DATA[k]) return;

  cat = k;
  idx = 0;
  score = 0;
  answered = [];

  if (cat === 'chansons') {
    DATA.chansons.qs.sort(() => Math.random() - 0.5);
  }

  show();
}

function show() {
  if (!DATA[cat]) return;

  const Q = DATA[cat].qs[idx];
  if (!Q) return;

  go('quiz');

  if ($('qNum')) {
    $('qNum').textContent =
      `Question ${idx + 1}/${DATA[cat].qs.length}`;
  }

  if ($('score')) {
    $('score').textContent = `Score : ${score}`;
  }

  if ($('qText')) {
    $('qText').textContent = Q.q;
  }

  const hand = $('hand');
  if (!hand) return;

  const letters = ['أ','ب','ج'];

  hand.innerHTML = Q.o.map((o, i) => {
    const c = CARDS[i];

    return `<div class="card" onclick="pick(${i})">
      <div class="tl ${c[2]}">${c[0]}<small>${c[1]}</small></div>
      ${letters[i]}- ${o}
      <div class="br ${c[2]}">${c[0]}<small>${c[1]}</small></div>
    </div>`;
  }).join('');

  startTimer();
}

/* ---------- CHRONOMETRE ---------- */
function startTimer() {
  clearInterval(tick);
  t = TIME;
  upd();

  tick = setInterval(() => {
    t -= 0.1;
    upd();

    if (t <= 0) {
      clearInterval(tick);
      result(false, true);
    }
  }, 100);
}

function upd() {
  if ($('timer')) {
    $('timer').textContent =
      '⏱ ' + Math.max(0, Math.ceil(t)) + 's';
  }

  if ($('barIn')) {
    $('barIn').style.width =
      Math.max(0, t / TIME * 100) + '%';
  }
}

/* ---------- REPONSE ---------- */
function pick(i) {
  if (!DATA[cat] || !DATA[cat].qs[idx]) return;

  clearInterval(tick);

  const Q = DATA[cat].qs[idx];
  const good = i === Q.a;

  document.querySelectorAll('#hand .card').forEach((c, j) => {
    if (j === Q.a) {
      c.classList.add('ok');
    } else if (j === i) {
      c.classList.add('ko');
    }
  });

  if (good) {
    score += Math.round(50 + t * 5);
  }

  setTimeout(() => result(good), 700);
}

/* ---------- RESULTAT DE LA QUESTION ---------- */
function result(good, timeout) {
  clearInterval(tick);

  const fbBox = $('fbBox');
  const fbMsg = $('fbMsg');

  if (fbBox) {
    fbBox.className = 'fbbox ' + (good ? 'win' : 'lose');
  }

  if (fbMsg) {
    fbMsg.innerHTML = good
      ? '<span class="crown">👑</span>nty le roi<br>'
      : 'habibi.....allo!!!<small>hors service!!</small>';
  }

  go('fb');

  clearTimeout(window.autoNext);

  window.autoNext = setTimeout(() => {
    const fb = $('fb');

    if (fb && fb.classList.contains('on')) {
      nextQ();
    }
  }, 3500);
}

/* ---------- QUESTION SUIVANTE ---------- */
function nextQ() {
  if (!DATA[cat]) return;

  idx++;

  if (idx >= DATA[cat].qs.length) {
    end();
  } else {
    show();
  }
}

/* ---------- QUESTION PRECEDENTE / SUIVANTE ---------- */
function nav(d) {
  if (!DATA[cat]) return;

  const n = idx + d;

  if (n >= 0 && n < DATA[cat].qs.length) {
    idx = n;
    show();
  }
}

/* ---------- FIN DU QUIZ ---------- */
async function end() {
  if (!DATA[cat]) return;

  const max = DATA[cat].qs.length * 100;
  const p = score / max;

  if ($('finalScore')) {
    $('finalScore').textContent = score + ' pts';
  }

  if ($('finalMsg')) {
    $('finalMsg').textContent = p < 0.3
      ? '🐣 Débutant... tu peux mieux faire !'
      : p < 0.65
        ? '😎 Pas mal, tu connais ton sujet !'
        : '👑 LÉGENDE !';
  }

  go('res');
  await loadLeaderboard();

  // L'enregistrement nécessite une route backend compatible
  try {
    const response = await fetch('/api/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        username: sessionStorage.getItem('quizUsername') || 'invité',
        score: score,
        categorie: cat
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.message || 'Le score n’a pas été enregistré.');
    }
  } catch (error) {
    console.error('Erreur d’enregistrement du score :', error);
  }
}

/* ---------- CLASSEMENT ---------- */
async function loadLeaderboard() {
  const list = $('leaderboardList');

  if (!list) return;

  list.textContent = 'جاري تحميل الترتيب...';

  try {
    const response = await fetch('/api/leaderboard');
    const joueurs = await response.json();

    if (!response.ok) {
      throw new Error(joueurs.message || 'Erreur de chargement');
    }

    if (!Array.isArray(joueurs) || joueurs.length === 0) {
      list.textContent = 'ما زال ما فما حتى نتيجة محفوظة.';
      return;
    }

    list.innerHTML = joueurs.map((joueur, index) => `
      <div class="leaderboard-item">
        <span>${index + 1}. ${joueur.username}</span>
        <strong>${joueur.score} pts</strong>
      </div>
    `).join('');

  } catch (error) {
    console.error(error);
    list.textContent = 'تعذّر تحميل الترتيب.';
  }
}
