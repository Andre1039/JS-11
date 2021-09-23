const firstSlides = document.querySelector('.main__first-slides'),
    secondSlides = document.querySelector('.main__second-slides'),
    leftBtn = document.querySelector('.left'),
    rightBtn = document.querySelector('.right'),
    container = document.querySelector('.container'),
    slideCount = firstSlides.querySelectorAll('div').length;

let activeSlideIndex = 0,
    activeSlideIndex2 = 0

secondSlides.style.left = `-${(slideCount - 1) * 100}vw`;


rightBtn.addEventListener('click', () => {
    changeSlide('right')
})

leftBtn.addEventListener('click', () => {
    changeSlide('left')
})

function changeSlide(str){
    if(str === 'right'){
        activeSlideIndex++
        activeSlideIndex2--
        if(activeSlideIndex === slideCount){
            activeSlideIndex = 0
            activeSlideIndex2 = slideCount - 1
    
        }
    }else if(str === 'left'){
        activeSlideIndex--
        activeSlideIndex2++
        if(activeSlideIndex < 0){
            activeSlideIndex = slideCount - 1
            activeSlideIndex2 = 0
        }
    }

    const width = 100;

    firstSlides.style.left = `-${activeSlideIndex * width}vw`;

    secondSlides.style.left = ''
    secondSlides.style.right = `${activeSlideIndex2 * width}vw`;
}



