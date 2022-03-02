{
    const contentButtons = document.querySelectorAll(".project-tile-btn");

    contentButtons.forEach(function(button) {
        button.addEventListener("click", _ => {
            let contentText = button.previousElementSibling;
            let contentTextOpacity = window.getComputedStyle(contentText);

            let contentImg = button.previousElementSibling.previousElementSibling;
            let contentImgOpacity = window.getComputedStyle(contentImg);
            
            if (contentTextOpacity.opacity === "0" && contentImgOpacity.opacity === "1")
            {
                contentText.style.opacity = "1";
                contentImg.style.opacity = "0";
            }else {
                contentText.style.opacity = "0";
                contentImg.style.opacity = "1";
            }
        });
    });
}