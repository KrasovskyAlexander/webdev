window.addEventListener('DOMContentLoaded',()=>{
    "use strict";

    function increaseIcon(selectorBtn,selectorImg){
        let img = document.querySelectorAll(selectorImg),
            btn = document.querySelectorAll(selectorBtn);
    
        btn.forEach((item,i)=>{
            item.addEventListener("mouseover",(e)=>{
                e.preventDefault();
                img[i].classList.add('email-section__btn__img_hover');
            });
            item.addEventListener("mouseout",(e)=>{
                e.preventDefault();
                img[i].classList.remove('email-section__btn__img_hover');
            });
        });
    }
    increaseIcon('.email-section__btn','.email-section__btn__img');
    increaseIcon('.download__block-btn__btn','.download__block-btn__block-img__img');
});
