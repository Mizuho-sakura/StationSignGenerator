//------------------
//ナンバリング自動調整
//------------------
function adjustNumberingPosition() {
  const text = document.getElementById("input-ja").value;
  const group = document.getElementById("numbering-group");
  // 基準位置
  let baseX = -600;
  // 文字数に応じて右へ逃がす
  if (text.length >= 6) baseX = -700;

  group.setAttribute("transform", `translate(${baseX}, -300) scale(0.6)`);
}

// 入力のたびに調整
document.getElementById("input-ja").addEventListener("input", adjustNumberingPosition);

function adjustHiraganaScale() {
  const text = document.getElementById("input-ja").value;
  const group = document.getElementById("name-ja-group");

  let scaleX = 1; // 通常サイズ

  if (text.length >= 7) {
    scaleX = 0.8;   // 少し縮める
  }
  if (text.length >= 8) {
    scaleX = 0.7;   // さらに縮める
  }
  if (text.length >= 9) {
    scaleX = 0.62;   // 長い駅名用
  }
  if (text.length >= 10) {
    scaleX = 0.55;   // 長い駅名用
  }

  group.setAttribute("transform", `translate(1800, 600) scale(${scaleX}, 1)`);
}

document.getElementById("input-ja").addEventListener("input", adjustHiraganaScale);

function updateHiragana() {
  const text = document.getElementById("input-ja").value;
  const ja = document.getElementById("station-ja");

  // まず中身をクリア
  ja.innerHTML = "";

  const len = text.length;

  // ▼ 5文字以上 → 通常表示（tspan 使わない）
  if (len >= 5) {
    ja.textContent = text;
    return;
  }

  // ▼ ここから 4文字以下だけ字間調整
  const chars = [...text];

  // 文字数ごとの spacing
  let spacing = 0;

  if (len === 4) spacing = 520;   // ← 4文字のときの字間
  if (len === 3) spacing = 760;   // ← 3文字のときの字間
  if (len === 2) spacing = 1300;   // ← 2文字のとき
  if (len === 1) spacing = 0;     // ← 1文字は中央に置くだけ

  // 全体幅（中心から左右に配置するため）
  const totalWidth = (chars.length - 1) * spacing;

  // ▼ tspan を使って中心から均等配置
  chars.forEach((ch, i) => {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    t.textContent = ch;

    const x = -totalWidth / 2 + i * spacing;
    t.setAttribute("x", x);
    t.setAttribute("y", 0);

    ja.appendChild(t);
  });
}

document.getElementById("input-ja").addEventListener("input", updateHiragana);
function adjustHiraganaScale() {
  const text = document.getElementById("input-ja").value;
  const group = document.getElementById("name-ja-group");

  let scaleX = 1; // 通常サイズ

  if (text.length >= 7) {
    scaleX = 0.8;   // 少し縮める
  }
  if (text.length >= 8) {
    scaleX = 0.7;   // さらに縮める
  }
  if (text.length >= 9) {
    scaleX = 0.62;   // 長い駅名用
  }
  if (text.length >= 10) {
    scaleX = 0.55;   // 長い駅名用
  }

  group.setAttribute("transform", `translate(1800, 600) scale(${scaleX}, 1)`);
}
document.getElementById("input-ja").addEventListener("input", adjustHiraganaScale);



function updateKanji() {
  const text = document.getElementById("input-kana").value;
  const ja = document.getElementById("station-kana");

  // まず中身をクリア
  ja.innerHTML = "";

  const len = text.length;

  // ▼ 5文字以上 → 通常表示（tspan 使わない）
  if (len >= 5) {
    ja.textContent = text;
    return;
  }

  // ▼ ここから 4文字以下だけ字間調整
  const chars = [...text];

  // 文字数ごとの spacing
  let spacing = 0;

  if (len === 4) spacing = 200;   // ← 4文字のときの字間
  if (len === 3) spacing = 300;   // ← 3文字のときの字間
  if (len === 2) spacing = 600;   // ← 2文字のとき
  if (len === 1) spacing = 0;     // ← 1文字は中央に置くだけ

  // 全体幅（中心から左右に配置するため）
  const totalWidth = (chars.length - 1) * spacing;

  // ▼ tspan を使って中心から均等配置
  chars.forEach((ch, i) => {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    t.textContent = ch;

    const x = -totalWidth / 2 + i * spacing;
    t.setAttribute("x", x);
    t.setAttribute("y", 0);

    ja.appendChild(t);
  });
}

document.getElementById("input-kana").addEventListener("input", updateKanji);


function adjustbsScale() {
  const text = document.getElementById("input-bs").value;
  const group = document.getElementById("name-bs-group");

  let scaleX = 1; // 通常サイズ

  if (text.length >= 7) {
    scaleX = 0.8;   // 少し縮める
  }
  if (text.length >= 8) {
    scaleX = 0.7;   // さらに縮める
  }
  if (text.length >= 9) {
    scaleX = 0.62;   // 長い駅名用
  }
  if (text.length >= 10) {
    scaleX = 0.55;   // 長い駅名用
  }

  group.setAttribute("transform", `translate(720, 1950) scale(${scaleX}, 1)`);
}
document.getElementById("input-bs").addEventListener("input", adjustbsScale);


function adjustnsScale() {
  const text = document.getElementById("input-ns").value;
  const group = document.getElementById("name-ns-group");

  let scaleX = 1; // 通常サイズ

  if (text.length >= 7) {
    scaleX = 0.8;   // 少し縮める
  }
  if (text.length >= 8) {
    scaleX = 0.7;   // さらに縮める
  }
  if (text.length >= 9) {
    scaleX = 0.62;   // 長い駅名用
  }
  if (text.length >= 10) {
    scaleX = 0.55;   // 長い駅名用
  }

  group.setAttribute("transform", `translate(2880, 1950) scale(${scaleX}, 1)`);
}

document.getElementById("input-ns").addEventListener("input", adjustnsScale);



function updatebsScale() {
  const text = document.getElementById("input-bs").value;
  const ja = document.getElementById("b_station_ja");

  // まず中身をクリア
  ja.innerHTML = "";

  const len = text.length;

  // ▼ 5文字以上 → 通常表示（tspan 使わない）
  if (len >= 5) {
    ja.textContent = text;
    return;
  }

  // ▼ ここから 4文字以下だけ字間調整
  const chars = [...text];

  // 文字数ごとの spacing
  let spacing = 0;

  if (len === 4) spacing = 200;   // ← 4文字のときの字間
  if (len === 3) spacing = 300;   // ← 3文字のときの字間
  if (len === 2) spacing = 600;   // ← 2文字のとき
  if (len === 1) spacing = 0;     // ← 1文字は中央に置くだけ

  // 全体幅（中心から左右に配置するため）
  const totalWidth = (chars.length - 1) * spacing;

  // ▼ tspan を使って中心から均等配置
  chars.forEach((ch, i) => {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    t.textContent = ch;

    const x = -totalWidth / 2 + i * spacing;
    t.setAttribute("x", x);
    t.setAttribute("y", 0);

    ja.appendChild(t);
  });
}

document.getElementById("input-bs").addEventListener("input", updatebsScale);