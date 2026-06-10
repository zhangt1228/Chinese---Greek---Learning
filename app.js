const lessons = [
  {
    id: "alphabet1",
    title: "希腊字母 1",
    summary: "先认最常见的 12 个字母，不急着背完。",
    items: [
      word("alpha", "Α α", "a", "阿尔法 / a", "像英文 a。"),
      word("beta", "Β β", "vi-ta", "贝塔 / v", "现代希腊语里 β 发 v。"),
      word("gamma", "Γ γ", "ya-ma", "伽马 / y 或 g", "在 e、i 前常像 y。"),
      word("delta", "Δ δ", "thel-ta", "德尔塔 / th", "像 this 里的 th。"),
      word("epsilon", "Ε ε", "e-psi-lon", "短 e", "像 egg 的 e。"),
      word("zeta", "Ζ ζ", "zi-ta", "z", "像英文 z。"),
      word("eta", "Η η", "i-ta", "i", "现代希腊语读 i。"),
      word("theta", "Θ θ", "thi-ta", "th", "像 think 里的 th。"),
      word("iota", "Ι ι", "yo-ta", "i", "常读 i。"),
      word("kappa", "Κ κ", "ka-pa", "k", "像 k。"),
      word("lambda", "Λ λ", "lam-tha", "l", "像 l。"),
      word("mi", "Μ μ", "mi", "m", "像 m。")
    ]
  },
  {
    id: "alphabet2",
    title: "希腊字母 2",
    summary: "把剩下的字母慢慢认熟。",
    items: [
      word("ni", "Ν ν", "ni", "n", "像 n。"),
      word("xi", "Ξ ξ", "ksi", "ks", "像 x 的 ks。"),
      word("omicron", "Ο ο", "o-mi-kron", "o", "短 o。"),
      word("pi", "Π π", "pi", "p", "像 p。"),
      word("rho", "Ρ ρ", "ro", "r", "卷舌或轻弹 r。"),
      word("sigma", "Σ σ/ς", "sig-ma", "s", "ς 只放在词尾。"),
      word("tau", "Τ τ", "taf", "t", "像 t。"),
      word("upsilon", "Υ υ", "i-psi-lon", "i", "现代希腊语多读 i。"),
      word("phi", "Φ φ", "fi", "f", "像 f。"),
      word("chi", "Χ χ", "hi", "h / ch", "像轻轻哈气。"),
      word("psi", "Ψ ψ", "psi", "ps", "像 ps。"),
      word("omega", "Ω ω", "o-me-ga", "o", "长相不同，也读 o。")
    ]
  },
  {
    id: "greetings",
    title: "问候和礼貌",
    summary: "每天都会用，先练到能看懂。",
    items: [
      word("hello", "Γεια σας", "ya sas", "您好", "对陌生人、店员、邻居都合适。", [["Γεια", "你好"], ["σας", "您/你们"]]),
      word("hello-casual", "Γεια σου", "ya su", "你好", "对熟人或一个朋友。", [["Γεια", "你好"], ["σου", "你"]]),
      word("morning", "Καλημέρα", "ka-li-ME-ra", "早上好", "上午使用。", [["καλή", "好的"], ["μέρα", "一天"]]),
      word("evening", "Καλησπέρα", "ka-li-SPE-ra", "晚上好", "傍晚以后用。"),
      word("night", "Καληνύχτα", "ka-li-NIH-ta", "晚安", "睡前或晚上告别。"),
      word("thanks", "Ευχαριστώ", "ef-ha-ri-STO", "谢谢", "非常常用。"),
      word("please", "Παρακαλώ", "pa-ra-ka-LO", "请 / 不用谢", "既能表示请，也能回应谢谢。"),
      word("sorry", "Συγγνώμη", "si-GNO-mi", "不好意思 / 对不起", "打扰别人或道歉。"),
      word("yes", "Ναι", "ne", "是", "注意：听起来像 ne，但意思是“是”。"),
      word("no", "Όχι", "O-hi", "不是 / 不", "礼貌拒绝。"),
      word("ok", "Εντάξει", "en-DA-ksi", "好的", "表示明白或同意。")
    ]
  },
  {
    id: "survival",
    title: "听不懂时",
    summary: "真实生活最先需要的保护句。",
    items: [
      word("no-greek", "Δεν μιλάω ελληνικά", "then mi-LA-o e-li-ni-KA", "我不会说希腊语", "遇到听不懂时先说。", [["Δεν", "不"], ["μιλάω", "我说"], ["ελληνικά", "希腊语"]]),
      word("dont-understand", "Δεν καταλαβαίνω", "then ka-ta-la-VE-no", "我听不懂", "对方说太多时。", [["Δεν", "不"], ["καταλαβαίνω", "我明白"]]),
      word("slowly", "Μιλήστε πιο αργά, παρακαλώ", "mi-LIS-te pyo ar-GA pa-ra-ka-LO", "请说慢一点", "请对方放慢。", [["Μιλήστε", "请说"], ["πιο αργά", "更慢"], ["παρακαλώ", "请"]]),
      word("repeat", "Μπορείτε να το επαναλάβετε;", "bo-RI-te na to e-pa-na-LA-ve-te", "可以再说一遍吗？", "没听清时。"),
      word("write", "Γράψτε το, παρακαλώ", "GRA-pste to pa-ra-ka-LO", "请写下来", "听不懂时请对方写。"),
      word("phone", "Κοιτάξτε το κινητό μου", "ki-TA-kste to ki-ni-TO mu", "请看我的手机", "给对方看翻译或短句。"),
      word("moment", "Μια στιγμή", "mya stig-MI", "等一下", "打开手机或找家人时。"),
      word("family", "Πρέπει να τηλεφωνήσω στην οικογένειά μου", "PRE-pi na ti-le-fo-NI-so stin i-ko-YE-ni-a mu", "我需要打电话给家人", "需要家人帮助翻译。")
    ]
  },
  {
    id: "numbers",
    title: "数字和钱",
    summary: "买东西、坐车、预约都会用。",
    items: [
      word("one", "ένα", "E-na", "一", "中性形式。"),
      word("two", "δύο", "THI-o", "二", "常用。"),
      word("three", "τρία", "TRI-a", "三", "常用。"),
      word("four", "τέσσερα", "TE-se-ra", "四", "常用。"),
      word("five", "πέντε", "PEN-de", "五", "常用。"),
      word("six", "έξι", "E-ksi", "六", "常用。"),
      word("seven", "επτά", "e-PTA", "七", "也常听到 efta。"),
      word("eight", "οκτώ", "ok-TO", "八", "常用。"),
      word("nine", "εννέα", "e-NE-a", "九", "常用。"),
      word("ten", "δέκα", "THE-ka", "十", "常用。"),
      word("euro", "ευρώ", "ev-RO", "欧元", "价格单位。"),
      word("howmuch", "Πόσο κάνει;", "PO-so KA-ni", "多少钱？", "买东西问价格。", [["Πόσο", "多少"], ["κάνει", "它是/它要"]])
    ]
  },
  {
    id: "shopping",
    title: "超市购物",
    summary: "先学能买东西的词和句子。",
    items: [
      word("where", "Πού είναι ...;", "pu I-ne", "……在哪里？", "把商品名放中间。", [["Πού", "哪里"], ["είναι", "是"]]),
      word("bag", "σακούλα", "sa-KU-la", "袋子", "结账时常听到。"),
      word("need-bag", "Χρειάζομαι μία σακούλα", "hri-A-zo-me MI-a sa-KU-la", "我需要一个袋子", "结账时用。"),
      word("no-bag", "Δεν χρειάζομαι σακούλα", "then hri-A-zo-me sa-KU-la", "不需要袋子", "自带袋子时。"),
      word("card", "κάρτα", "KAR-ta", "卡", "银行卡、会员卡。"),
      word("cash", "μετρητά", "me-tri-TA", "现金", "付款方式。"),
      word("receipt", "απόδειξη", "a-PO-thi-ksi", "收据", "付款后可要。"),
      word("kilo", "κιλό", "ki-LO", "公斤", "买水果、肉、鱼。"),
      word("fresh", "φρέσκο", "FRES-ko", "新鲜的", "问食物新鲜吗。")
    ]
  },
  {
    id: "food",
    title: "餐厅咖啡",
    summary: "从点水、点咖啡、结账开始。",
    items: [
      word("menu", "Το μενού, παρακαλώ", "to me-NU pa-ra-ka-LO", "请给我菜单", "点餐前。"),
      word("water", "Νερό, παρακαλώ", "ne-RO pa-ra-ka-LO", "请给我水", "最常用。", [["Νερό", "水"], ["παρακαλώ", "请"]]),
      word("coffee", "Έναν καφέ, παρακαλώ", "E-nan ka-FE pa-ra-ka-LO", "请给我一杯咖啡", "咖啡店。"),
      word("sugar", "ζάχαρη", "ZA-ha-ri", "糖", "点饮料。"),
      word("no-sugar", "Χωρίς ζάχαρη", "ho-RIS ZA-ha-ri", "不要糖", "χωρίς = 没有。"),
      word("bill", "Τον λογαριασμό, παρακαλώ", "ton lo-ga-riaz-MO pa-ra-ka-LO", "请结账", "用餐结束。"),
      word("takeaway", "σε πακέτο", "se pa-KE-to", "打包", "带走或打包。"),
      word("allergy", "Έχω αλλεργία σε ...", "E-ho a-ler-YI-a se", "我对……过敏", "重要安全句。")
    ]
  },
  {
    id: "health",
    title: "药店和医生",
    summary: "身体不舒服时，先会说症状。",
    items: [
      word("pharmacy", "φαρμακείο", "far-ma-KI-o", "药店", "找药店。"),
      word("doctor", "γιατρός", "ya-TROS", "医生", "看病。"),
      word("hospital", "νοσοκομείο", "no-so-ko-MI-o", "医院", "紧急或检查。"),
      word("notwell", "Δεν αισθάνομαι καλά", "then es-THA-no-me ka-LA", "我不舒服", "看医生开头。"),
      word("headache", "Έχω πονοκέφαλο", "E-ho po-no-KE-fa-lo", "我头痛", "买止痛药。"),
      word("fever", "Έχω πυρετό", "E-ho pi-re-TO", "我发烧", "需要退烧药。"),
      word("cough", "Έχω βήχα", "E-ho VI-ha", "我咳嗽", "药店常用。"),
      word("pain", "Πονάω εδώ", "po-NA-o e-THO", "这里痛", "指着身体部位。"),
      word("medicine", "φάρμακο", "FAR-ma-ko", "药", "问怎么吃。")
    ]
  }
];

function word(id, greek, pron, meaning, note, pieces = []) {
  return { id, greek, pron, meaning, note, pieces };
}

const dailyGoal = 5;
const todayKey = new Date().toISOString().slice(0, 10);

const state = {
  lessonId: localStorage.getItem("lessonId") || lessons[0].id,
  index: Number(localStorage.getItem("cardIndex") || 0),
  known: new Set(JSON.parse(localStorage.getItem("knownWords") || "[]")),
  hard: new Set(JSON.parse(localStorage.getItem("hardWords") || "[]")),
  dailyDone: new Set(JSON.parse(localStorage.getItem(`dailyDone:${todayKey}`) || "[]")),
  reviewMode: false,
  query: "",
  quiz: null
};

const $ = (selector) => document.querySelector(selector);
const allItems = () => lessons.flatMap((lesson) => lesson.items.map((item) => ({ ...item, lessonId: lesson.id, lessonTitle: lesson.title })));
const currentLesson = () => lessons.find((lesson) => lesson.id === state.lessonId) || lessons[0];
const currentItems = () => state.reviewMode ? allItems().filter((item) => state.hard.has(item.id)) : currentLesson().items;
const currentItem = () => currentItems()[Math.min(state.index, Math.max(currentItems().length - 1, 0))];
let currentAudio = null;

function save() {
  localStorage.setItem("lessonId", state.lessonId);
  localStorage.setItem("cardIndex", String(state.index));
  localStorage.setItem("knownWords", JSON.stringify([...state.known]));
  localStorage.setItem("hardWords", JSON.stringify([...state.hard]));
  localStorage.setItem(`dailyDone:${todayKey}`, JSON.stringify([...state.dailyDone]));
}

function speakGreek(text, audioId) {
  if (audioId) {
    if (currentAudio) currentAudio.pause();
    currentAudio = new Audio(`audio/${audioId}.m4a`);
    currentAudio.play().catch(() => speakWithSystemVoice(text));
    return;
  }

  speakWithSystemVoice(text);
}

function speakWithSystemVoice(text) {
  if (!("speechSynthesis" in window)) {
    alert("这个浏览器不能播放声音。请检查手机音量，或换一个浏览器。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.replace(/[Α-Ω]\s/g, ""));
  const voice = window.speechSynthesis.getVoices().find((item) => item.lang && item.lang.toLowerCase().startsWith("el"));
  if (voice) utterance.voice = voice;
  utterance.lang = "el-GR";
  utterance.rate = 0.72;
  window.speechSynthesis.speak(utterance);
}

function renderTabs() {
  const tabs = $("#lessonTabs");
  tabs.innerHTML = "";
  lessons.forEach((lesson) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `lesson-tab${lesson.id === state.lessonId && !state.reviewMode ? " active" : ""}`;
    button.textContent = lesson.title;
    button.addEventListener("click", () => {
      state.lessonId = lesson.id;
      state.index = 0;
      state.reviewMode = false;
      state.quiz = null;
      save();
      render();
    });
    tabs.append(button);
  });
}

function renderCard() {
  const lesson = currentLesson();
  const items = currentItems();
  const item = currentItem();

  $("#lessonTitle").textContent = state.reviewMode ? "复习本" : lesson.title;
  $("#lessonSummary").textContent = state.reviewMode ? "这里都是点过“需要复习”的内容。" : lesson.summary;
  $("#knownCount").textContent = state.known.size;
  $("#reviewCount").textContent = `${state.hard.size} 个要复习`;

  if (!item) {
    $("#cardCount").textContent = "0 / 0";
    $("#cardGreek").textContent = "完成";
    $("#cardPron").textContent = "今天先休息";
    $("#cardMeaning").textContent = "复习本是空的";
    $("#cardNote").textContent = "遇到不会的卡片，点“需要复习”，它会出现在这里。";
    $("#splitBox").innerHTML = "";
    return;
  }

  $("#cardCount").textContent = `${state.index + 1} / ${items.length}`;
  $("#cardGreek").textContent = item.greek;
  $("#cardPron").textContent = item.pron;
  $("#cardMeaning").textContent = item.meaning;
  $("#cardNote").textContent = item.note;
  $("#splitBox").innerHTML = "";

  item.pieces.forEach(([greek, chinese]) => {
    const piece = document.createElement("span");
    piece.className = "piece";
    piece.innerHTML = `<strong>${greek}</strong><span>${chinese}</span>`;
    $("#splitBox").append(piece);
  });
}

function renderDailyGoal() {
  const done = Math.min(state.dailyDone.size, dailyGoal);
  const percent = Math.round((done / dailyGoal) * 100);
  $("#goalFill").style.width = `${percent}%`;
  $("#dailyTitle").textContent = done >= dailyGoal ? "今天完成了，很棒" : `今天学 ${dailyGoal} 张就很好`;
  $("#dailyMessage").textContent = done >= dailyGoal
    ? "可以停在这里，也可以只复习一两张。慢慢来最重要。"
    : `今天已经完成 ${done} / ${dailyGoal} 张。`;
}

function makeQuiz() {
  const pool = currentLesson().items.length >= 3 ? currentLesson().items : allItems();
  const answer = pool[Math.floor(Math.random() * pool.length)];
  const options = [answer];
  const others = allItems().filter((item) => item.id !== answer.id);

  while (options.length < 3 && others.length) {
    const pick = others.splice(Math.floor(Math.random() * others.length), 1)[0];
    options.push(pick);
  }

  state.quiz = {
    answer,
    options: options.sort(() => Math.random() - 0.5),
    answered: false
  };
}

function renderQuiz() {
  if (!state.quiz || state.quiz.answered) makeQuiz();
  const quiz = state.quiz;
  $("#quizPrompt").textContent = `“${quiz.answer.meaning}” 用希腊语怎么说？`;
  const box = $("#quizOptions");
  box.innerHTML = "";

  quiz.options.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = `${item.greek}  ·  ${item.pron}`;
    button.addEventListener("click", () => {
      if (quiz.answered) return;
      quiz.answered = true;
      if (item.id === quiz.answer.id) {
        button.classList.add("correct");
        state.known.add(item.id);
        state.hard.delete(item.id);
        $("#quizFeedback").textContent = "选对了。今天就这样一点点积累。";
      } else {
        button.classList.add("wrong");
        state.hard.add(quiz.answer.id);
        $("#quizFeedback").textContent = `没关系，正确答案是：${quiz.answer.greek}。已经放进复习本。`;
      }
      save();
      renderDailyGoal();
      $("#reviewCount").textContent = `${state.hard.size} 个要复习`;
    });
    box.append(button);
  });
}

function renderList() {
  const list = $("#wordList");
  const template = $("#wordTemplate");
  const query = state.query.trim().toLowerCase();
  const source = allItems().filter((item) => {
    if (!query && state.reviewMode) return state.hard.has(item.id);
    if (!query) return item.lessonId === state.lessonId;
    return `${item.greek} ${item.pron} ${item.meaning} ${item.note} ${item.lessonTitle}`.toLowerCase().includes(query);
  });

  list.innerHTML = "";
  if (!source.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "没有找到内容。";
    list.append(empty);
    return;
  }

  source.forEach((item) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector(".mini-greek").textContent = item.greek;
    card.querySelector(".mini-meaning").textContent = item.meaning;
    card.querySelector(".mini-pron").textContent = `${item.pron} · ${item.lessonTitle}`;
    card.querySelector(".open-word").addEventListener("click", () => {
      state.lessonId = item.lessonId;
      state.reviewMode = false;
      state.index = currentLesson().items.findIndex((entry) => entry.id === item.id);
      state.query = "";
      $("#searchInput").value = "";
      save();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    list.append(card);
  });
}

function render() {
  const items = currentItems();
  if (state.index >= items.length) state.index = Math.max(items.length - 1, 0);
  renderTabs();
  renderCard();
  renderDailyGoal();
  renderQuiz();
  renderList();
}

$("#prevCard").addEventListener("click", () => {
  state.index = Math.max(0, state.index - 1);
  save();
  render();
});

$("#nextCard").addEventListener("click", () => {
  state.index = Math.min(currentItems().length - 1, state.index + 1);
  save();
  render();
});

$("#playCard").addEventListener("click", () => {
  const item = currentItem();
  if (item) speakGreek(item.greek, item.id);
});

$("#markKnown").addEventListener("click", () => {
  const item = currentItem();
  if (!item) return;
  state.known.add(item.id);
  state.hard.delete(item.id);
  state.dailyDone.add(item.id);
  state.index = Math.min(currentItems().length - 1, state.index + 1);
  save();
  render();
});

$("#markHard").addEventListener("click", () => {
  const item = currentItem();
  if (!item) return;
  state.hard.add(item.id);
  state.dailyDone.add(item.id);
  state.index = Math.min(currentItems().length - 1, state.index + 1);
  save();
  render();
});

$("#newQuiz").addEventListener("click", () => {
  makeQuiz();
  $("#quizFeedback").textContent = "答错也没关系，系统会帮你多复习。";
  renderQuiz();
});

$("#reviewButton").addEventListener("click", () => {
  state.reviewMode = true;
  state.index = 0;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$("#resetButton").addEventListener("click", () => {
  if (!confirm("确定清空学习记录吗？")) return;
  state.known.clear();
  state.hard.clear();
  state.index = 0;
  state.reviewMode = false;
  save();
  render();
});

$("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
});

$("#clearSearch").addEventListener("click", () => {
  state.query = "";
  $("#searchInput").value = "";
  renderList();
});

$("#helpButton").addEventListener("click", () => $("#helpDialog").showModal());
$("#closeHelp").addEventListener("click", () => $("#helpDialog").close());

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

render();
