let charName = document.getElementById("character_name");
let charGender = document.getElementById("gender");
let charRace = document.getElementById("race");
let charClass = document.getElementById("class");
let selected_name = document.getElementById("selected_name");
let selected_gender = document.getElementById("selected_gender");
let selected_race = document.getElementById("selected_race");
let selected_class = document.getElementById("selected_class");

charName.addEventListener("input", (event) => {
    event.preventDefault();
    selected_name.innerHTML = event.target.value;
})

charGender.addEventListener("change", (event) => {
    if (event.target.value === "male") {
        selected_gender.innerHTML = `<i class="fa-solid fa-mars"></i>`;
    } else {
        selected_gender.innerHTML = `<i class="fa-solid fa-venus"></i>`;
    }
})

charRace.addEventListener("change", (event) => {
    if (event.target.value === "human") {
        selected_race.innerHTML = `<i class="fa-solid fa-person"></i>`;
    } else {
        selected_race.innerHTML = `<i class="fa-brands fa-wolf-pack-battalion"></i>`;
    }
})

charClass.addEventListener("change", (event) => {
    if (event.target.value === "fighter") {
        selected_class.innerHTML = `<i class="fa-solid fa-user-ninja"></i>`;
    }else {
        selected_class.innerHTML = `<i class="fa-solid fa-hat-wizard"></i>`;
    }
})
