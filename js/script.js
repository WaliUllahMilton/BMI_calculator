let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let chart = document.querySelector(".chart");
let bmi;

btn.addEventListener("click", () => {
    bmi = weight.value / (height.value * 0.3048) ** 2;
    result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
    if (bmi < 18.5) {
        chart.style.color = "red";
        chart.innerHTML = "You are Underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        chart.style.color = "green";
        chart.innerHTML = "You are Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        chart.style.color = "yellow";
        chart.innerHTML = "You are Overweight";
    } else {
        chart.style.color = "blue";
        chart.innerHTML = "You are obesity";
    }
})


// // bmi = 703 * (weight.value * 2.20462 / (height * 0.0833333) ** 2);
// bmi = 50 / 1.524 ** 2
// console.log(bmi)