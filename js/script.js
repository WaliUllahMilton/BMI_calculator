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
    if (bmi < 16 && bmi > 0) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "#953A3A";
        chart.innerHTML = "You are Severe Thinness.";
    } else if (bmi <= 16 && bmi > 17) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "#EA487F";
        chart.innerHTML = "You are Moderate Thinness.";
    } else if (bmi >= 17 && bmi <= 18.5) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "#EA487F";
        chart.innerHTML = "You are Mild Thinness";
    } else if (bmi >= 18.5 && bmi <= 25) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "green";
        chart.innerHTML = "You are Normal";
    } else if (bmi >= 25 && bmi <= 30) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "yellow";
        chart.innerHTML = "You are Overweight";
    } else if (bmi >= 30 && bmi <= 35) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "#FF010E";
        chart.innerHTML = "You are Obese Class I";
    } else if (bmi >= 35 && bmi <= 40) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "#A90009";
        chart.innerHTML = "You are Obese Class II";
    } else if (bmi > 40) {
        result.innerHTML = `BMI = ${bmi.toFixed(1)}`;
        chart.style.color = "red";
        chart.innerHTML = "You are Obese Class III";

    } else if (w == "" || h == "" || bmi < 0) {
        error.innerHTML = "please insert the value";

    } else {
        error.innerHTML = "invalid information";
    }
    abr(1);
})