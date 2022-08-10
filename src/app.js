/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let indexNum = num[Math.floor(Math.random() * num.length)];
document.querySelector("#number").innerHTML = indexNum;

let suit = ["♦", "♥", "♠", "♣"];
let indexSuit = suit[Math.floor(Math.random() * suit.length)];
document.querySelector("#bottom-suit").innerHTML = indexSuit;
document.querySelector("#top-suit").innerHTML = indexSuit;

if (indexSuit == suit[1] || indexSuit == suit[0]) {
  document.querySelector("#top-suit").style.color = "red";
  document.querySelector("#bottom-suit").style.color = "red";
}
