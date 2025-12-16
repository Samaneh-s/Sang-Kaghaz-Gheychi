"use strict";
function sangKaghazGheychi(playerChoice, computerChoice) {
  const choice = ["سنگ", "کاغذ", "قیچی"];

  if (!choice.includes(playerChoice) || !choice.includes(computerChoice)) {
    console.log(
      "تو ورودی فقط می تونی سنگ،کاغذ،قیچی وارد کنی و این چیزی که وارد کردی اشتباهه "
    );
  }
  if (playerChoice === computerChoice) {
    console.log("مساوی شدیم که! اگه راست میگی بیا از اول بازی کنیم");
  }
  if (
    (playerChoice === "سنگ" && computerChoice === "کاغذ") ||
    (playerChoice === "کاغذ" && computerChoice === "قیچی") ||
    (playerChoice === "قیچی" && computerChoice === "سنگ")
  ) {
    console.log("ای بابا باختی...!");
  } else if (
    (playerChoice !== computerChoice &&
      computerChoice === "سنگ" &&
      playerChoice === "کاغذ") ||
    (computerChoice === "کاغذ" && playerChoice === "قیچی") ||
    (computerChoice === "قیچی" && playerChoice === "سنگ")
  ) {
    console.log("برنده شدیییییییی!");
  }
}
function makeComputerChoice() {
  const choice = ["سنگ", "کاغذ", "قیچی"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choice[randomChoice];
}

let player = "کاغذ";
let computer = makeComputerChoice();

console.log("تو:", player);
console.log("من:", computer);
console.log(sangKaghazGheychi(player, computer));
