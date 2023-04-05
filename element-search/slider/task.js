let arrowRight = document.getElementsByClassName('slider__navigation').item(0).querySelector(".slider__arrow_next");
let arrowLeft = document.getElementsByClassName('slider__navigation').item(0).querySelector(".slider__arrow_prev");
let sliderItemArray = Array.from(document.getElementsByClassName('slider__item'));

arrowRight.onclick = changeToNext;
arrowLeft.onclick = changeToPrev;

function changeToNext() {
    let indexActiveSlide = sliderItemArray.findIndex(searchActiveSlide);
    sliderItemArray[indexActiveSlide].classList.remove('slider__item_active');
    let nextIndex = indexActiveSlide === sliderItemArray.length - 1 ? 0 : indexActiveSlide + 1;
    sliderItemArray[nextIndex].classList.add('slider__item_active');
}

function changeToPrev() {
    let indexActiveSlide = sliderItemArray.findIndex(searchActiveSlide);
    sliderItemArray[indexActiveSlide].classList.remove('slider__item_active');
    let nextIndex = indexActiveSlide === 0 ? sliderItemArray.length - 1 : indexActiveSlide - 1;
    sliderItemArray[nextIndex].classList.add('slider__item_active');
}

function searchActiveSlide(i) {
    if (i.className === "slider__item slider__item_active") {
        return i;
    }
}
