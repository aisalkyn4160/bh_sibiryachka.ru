const header = document.querySelector(".header");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})

// ------------------------------------------swiper------------------------------------------
const productsSwiper = new Swiper('.products-swiper', {
    loop: true,
  
    navigation: {
      nextEl: '.products__swiper-button-next',
      prevEl: '.products__swiper-button-prev',
    },
    
    sliderPerView: 1,
    spaceBetween: 30,

  });

  const nestedSliders = document.querySelectorAll('.nested-slider');
    nestedSliders.forEach(nestedSlider => {
        new Swiper(nestedSlider, {
            navigation: {
                nextEl: nestedSlider.querySelector('.swiper-button-next'),
                prevEl: nestedSlider.querySelector('.swiper-button-prev'),
            },

            pagination: {
                el: nestedSlider.querySelector('.swiper-pagination'),
                clickable: true,
            },
            loop: true,
            sliderPerView: 1,
            spaceBetween: 30,
            nested: true
        });
    });


    const swiper = new Swiper('.news-swiper', {
        slidesPerView: 3,
        spaceBetween: 24,
        breakpoints: {
            320: {
                slidesPerView: 1.2,
            },
            600: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
      });
      
// ----------------------------------------faq-------------------------------------------

let coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if(this.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else{
        content.style.maxHeight = null;
    }
  });
}