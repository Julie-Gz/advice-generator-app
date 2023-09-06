"use strict"
// Elements
const adviceNumber = document.querySelector(".number");
const quote = document.querySelector(".quote");
const diceBtn = document.querySelector("button");


const adviceProducer = async function () {
    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            const adviceData = response.json();
            return adviceData;
        }).then(data => {
            const adviceId = data.slip.id;
            const advice = data.slip.advice;
            adviceNumber.textContent = String(adviceId);
            quote.textContent = advice;
        })
};

adviceProducer();

diceBtn.addEventListener("click", adviceProducer);