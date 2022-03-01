{
    let burgerMenu = document.querySelector(".nav-burger-label");
    let burgerMenuBlock = document.querySelector(".hidden-burger-menu");
    let burgerDisplay = window.getComputedStyle(burgerMenuBlock);

    burgerMenu.addEventListener("click", _ => {
        if (burgerDisplay.display === 'none')
        {
            burgerMenuBlock.style.display = 'flex';
        }else
        {
            burgerMenuBlock.style.display = 'none';
        }
    });

    const burgerMenuLinks = document.querySelector(".hidden-burger-dropdown").getElementsByTagName("li");

    for(link of burgerMenuLinks){
        link.addEventListener("click", _ => {
            burgerMenuBlock.style.display = 'none';
        });
    }
}