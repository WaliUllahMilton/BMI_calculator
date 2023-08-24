let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let chart = document.querySelector(".chart");
let error = document.querySelector("p");
let bmi;

btn.addEventListener("click", () => {
    let w = weight.value;
    let h = height.value;
    weight = weight.value * 2.20462;
    height = height.value * 12;
    height = height ** 2;
    bmi = (weight / height) * 703;
    if (bmi < 18.5 && bmi > 15.9) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "red";
        chart.innerHTML = "You are Underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "green";
        chart.innerHTML = "You are Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "yellow";
        chart.innerHTML = "You are Overweight";
    } else if (w == "" || h == "") {
        error.innerHTML = "please insert the value"

    } else {
        error.innerHTML = "invalid information"
    }
})


// // bmi = 703 * (weight.value * 2.20462 / (height * 0.0833333) ** 2);
// bmi = 50 / 1.524 ** 2
// console.log(bmi)