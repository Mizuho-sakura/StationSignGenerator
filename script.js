const stationJa   = document.getElementById("station-ja");
const stationKana = document.getElementById("station-kana");
const stationEn   = document.getElementById("station-en");
const locationEl  = document.getElementById("location");
const bStationJa  = document.getElementById("b_station_ja");
const bStationEn  = document.getElementById("b_station_en");
const nStationJa  = document.getElementById("n_station_ja");
const nStationEn  = document.getElementById("n_station_en");

document.getElementById("input-ja").addEventListener("input", e => stationJa.textContent = e.target.value);
document.getElementById("input-kana").addEventListener("input", e => stationKana.textContent = e.target.value);
document.getElementById("input-en").addEventListener("input", e => stationEn.textContent = e.target.value.toUpperCase());
document.getElementById("input-lc").addEventListener("input", e => locationEl.textContent = "(" + e.target.value + ")");
document.getElementById("input-bs").addEventListener("input", e => bStationJa.textContent = e.target.value);
document.getElementById("input-bs-en").addEventListener("input", e => bStationEn.textContent = e.target.value);
document.getElementById("input-ns").addEventListener("input", e => nStationJa.textContent = e.target.value);
document.getElementById("input-ns-en").addEventListener("input", e => nStationEn.textContent = e.target.value);

document.getElementById("png-btn").addEventListener("click", () => {
  const svg = document.getElementById("sign");
  const svgData = new XMLSerializer().serializeToString(svg);

  const img = new Image();
  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = 3600;
    canvas.height = 2500;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    const png = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = png;
    link.download = "station.png";
    link.click();
  };

  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData);
});
document.getElementById("img-input").addEventListener("change", function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    document.getElementById("uploaded-img").setAttribute("href", event.target.result);
  };

  reader.readAsDataURL(file);
});
// イニシャル
document.getElementById("line-initial").addEventListener("input", e => {
  document.getElementById("numbering-initial").textContent = e.target.value.toUpperCase();
});

// 駅番号
document.getElementById("station-number").addEventListener("input", e => {
  document.getElementById("numbering-num").textContent = e.target.value;
});

// 土台の色
document.getElementById("numbering-color").addEventListener("input", e => {
  document.getElementById("numbering-bg").setAttribute("fill", e.target.value);
});

// ON/OFF
document.getElementById("toggle-numbering").addEventListener("change", function() {
  document.getElementById("numbering-group").style.display = this.checked ? "block" : "none";
});


