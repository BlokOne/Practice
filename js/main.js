const   slides = document.querySelectorAll('.slide');
        dots = document.querySelectorAll('.dot');
        btnplay = document.getElementById('btnplay');
        youtube = document.getElementById('youtube');
        plug = document.getElementById('plug');



btnplay.addEventListener("click", () => {
    youtube.style.display = "block" 
    plug.style.display = "none"
});
        







    let index = 0;



const nextSlide = () => {
    if(index == slides.length -1) {
        index = 0; 
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
  
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove("active");
    }
    dots[n].classList.add("active");
}

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove("active");
    }
    slides[n].classList.add("active")
}

dots.forEach((item, indexDot)=> {
    item.addEventListener("click", () => {
        index = indexDot;
        prepareCurrentSlide();
    })
})


const  timerId = setInterval(nextSlide, 2000);

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}
