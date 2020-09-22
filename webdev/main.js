window.addEventListener('DOMContentLoaded',()=>{
    "use strict";

    function increaseIcon(selectorBtn,selectorImg,selText){
        let img = document.querySelectorAll(selectorImg),
            btn = document.querySelectorAll(selectorBtn),
            textBlock = document.querySelectorAll(selText);
    
        btn.forEach((item,i)=>{
            item.addEventListener("mouseover",(e)=>{
                e.preventDefault();
                img[i].classList.add('email-section__btn__img_hover');
                if(textBlock.length){
                    textBlock[i].style.backgroundColor = "#009CC2";
                }
            });
            item.addEventListener("mouseout",(e)=>{
                e.preventDefault();
                img[i].classList.remove('email-section__btn__img_hover');
                if(textBlock.length){
                    textBlock[i].style.backgroundColor = "#00AFDB";
                }
            });
        });
    }
    increaseIcon('.email-section__btn','.email-section__btn__img');
    increaseIcon('.download__block-btn__btn','.download__block-btn__block-img__img','.download__block-btn__text');
});
