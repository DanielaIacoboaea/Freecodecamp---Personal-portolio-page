{
let darkThemeButton = document.querySelector("#dark-theme-button");
let lightThemeButton = document.querySelector("#light-theme-button");

darkThemeButton.addEventListener("click", _ => {

    if (document.body.classList.contains("dark-theme")){
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        lightThemeButton.checked = true;
    }else{
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    }
});

lightThemeButton.addEventListener("click", _ => {

    if (document.body.classList.contains("light-theme")){
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        lightThemeButton.checked = false;
    }else{
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
});
}