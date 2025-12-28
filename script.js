// --- 1. 要素の取得 ---
const stationJa     = document.getElementById("station-ja");
const stationKana   = document.getElementById("station-kana");
const stationEn     = document.getElementById("station-en");
const locationEl    = document.getElementById("location");
const bStationJa    = document.getElementById("b_station_ja");
const bStationEn    = document.getElementById("b_station_en");
const nStationJa    = document.getElementById("n_station_ja");
const nStationEn    = document.getElementById("n_station_en");

// --- 2. 基本的な入力反映 ---
document.getElementById("input-ja").addEventListener("input", e => stationJa.textContent = e.target.value);
document.getElementById("input-kana").addEventListener("input", e => stationKana.textContent = e.target.value);
document.getElementById("input-en").addEventListener("input", e => stationEn.textContent = e.target.value.toUpperCase());
document.getElementById("input-lc").addEventListener("input", e => locationEl.textContent = "(" + e.target.value + ")");
document.getElementById("input-bs").addEventListener("input", e => bStationJa.textContent = e.target.value);
document.getElementById("input-bs-en").addEventListener("input", e => bStationEn.textContent = e.target.value);
document.getElementById("input-ns").addEventListener("input", e => nStationJa.textContent = e.target.value);
document.getElementById("input-ns-en").addEventListener("input", e => nStationEn.textContent = e.target.value);

// ナンバリング関連
document.getElementById("line-initial").addEventListener("input", e => document.getElementById("numbering-initial").textContent = e.target.value.toUpperCase());
document.getElementById("station-number").addEventListener("input", e => document.getElementById("numbering-num").textContent = e.target.value);
document.getElementById("numbering-color").addEventListener("input", e => document.getElementById("numbering-bg").setAttribute("fill", e.target.value));

// --- 3. 表示/非表示の制御 ---

// ナンバリングの表示切替
document.getElementById("toggle-numbering").addEventListener("change", function() {
  document.getElementById("numbering-group").style.display = this.checked ? "inline" : "none";
});

// シンボルマークの表示切替
document.getElementById("toggle-img-box").addEventListener("change", function() {
  document.getElementById("img-box-group").style.display = this.checked ? "inline" : "none";
});

// 汚れ（質感）の表示切替
document.getElementById("toggle-grunge")?.addEventListener("change", function() {
  document.getElementById("grunge-layer").style.display = this.checked ? "inline" : "none";
});

// --- 4. 画像アップロード ---
document.getElementById("img-input").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = event => document.getElementById("uploaded-img").setAttribute("href", event.target.result);
  reader.readAsDataURL(file);
});

// --- 5. PNG出力（フォント埋め込み対応・安全なBlob方式） ---
document.getElementById("png-btn").addEventListener("click", async () => {
  const svg = document.getElementById("sign");

  // font.cssを読み込む
  const fontCSS = await fetch("font.css").then(r => r.text());

  // SVGを文字列化してCSSを埋め込む
  let svgData = new XMLSerializer().serializeToString(svg);
  svgData = svgData.replace(/<svg([^>]*)>/, `<svg$1><style>${fontCSS}</style>`);

  const img = new Image();
  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = 3600;
    canvas.height = 2500;
    const ctx = canvas.getContext("2d");

    // キャンバスを白く塗る
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 画像を描画
    ctx.drawImage(img, 0, 0);

    const png = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = png;
    link.download = `station_${stationJa.textContent}.png`;
    link.click();
    
    URL.revokeObjectURL(url);
  };

  img.src = url;
});
