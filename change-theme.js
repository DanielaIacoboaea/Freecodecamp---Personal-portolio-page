{
let darkThemeButton = document.querySelector("#dark-theme-button");
let lightThemeButton = document.querySelector("#light-theme-button");
            
darkThemeButton.addEventListener("click", _ => {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
});

lightThemeButton.addEventListener("click", _ => {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
});
}