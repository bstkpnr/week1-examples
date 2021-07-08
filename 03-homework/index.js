const accounts = [
  {
    iban: "trxx yyyy xxxx yyyy",
    balance: 100,
  },
  {
    iban: "trxx yyyy xxxx yyyx",
    balance: 5040,
  },
  {
    iban: "trxx yyyy xxxx xyyx",
    balance: 10594,
  },
];
var dropdown = document.getElementById("bankaHesabi");
var accounting = document.createElement("option");
accounting.innerHTML = accounts.map(function (e) {
  var account_number = `Hesap No: ${e.iban} - Bakiye: ${e.balance} £`;
  console.log(account_number);
  var hesaplar = document.createElement("option");
  hesaplar.innerText = account_number;
  dropdown.appendChild(hesaplar);
});
function startTimer(duration, display) {
  var start = Date.now(),
    diff,
    minutes,
    seconds;

  function timer() {
    diff = duration - (((Date.now() - start) / 1000) | 0);
    minutes = (diff / 60) | 0;
    seconds = diff % 60 | 0;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (display <= 0) {
      start = Date.now() + 1000;
    }
  }
  timer();
  setInterval(timer, 1000);
}
window.onload = function () {
  var twoMinutes = 60 * 2;
  display = document.querySelector("#time");
  startTimer(twoMinutes, display);
};

document.getElementById("yonlendir").onclick = function () {
  window.setTimeout(function () {
    location.href = "index2.html";
  });
};

function yolla() {
  var pasword = document.getElementById("sifre").value;

  if (pasword.length == 4) {
    if (pasword === "1234") {
      alert("Başarılı");
    } else {
      alert("ŞİFRE HATALI !!!");
    }
  } else {
    alert("KARAKTER UZUNLUĞU 4 OLMALI");
  }
}
