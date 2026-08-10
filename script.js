const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

slidesPerView: 3.6,
centeredSlides: true,
spaceBetween: 120,
centerInsufficientSlides: true,

loopedSlides: 8,
  
  autoplay: {
    delay:5000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

const overlay = document.querySelector(".image-overlay");
const bigImage = document.querySelector("#bigImage");

document.querySelectorAll(".swiper-slide img").forEach(img => {
    img.addEventListener("click", () => {
        overlay.style.display = "flex";
        bigImage.src = img.src;
    });
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});



const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");

openBtn.addEventListener("click",
  function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });
  modal.addEventListener("click",
    function (e) {
      if(e.target === modal) {
        modal.style.display = "none";
      }
    });

    const modal2 = document.getElementById("modal2");
const openBtn2 = document.getElementById("openModal2");

openBtn2.addEventListener("click", function(e){
    e.preventDefault();
    modal2.style.display = "flex";
});

modal2.addEventListener("click", function(e){
    if(e.target === modal2){
        modal2.style.display = "none";
    }
});


const cardsBlock = document.querySelector(".rit");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cardsBlock.classList.add("show");
            observer.unobserve(cardsBlock);
        }
    });
}, {
    threshold: 0.2
});

observer.observe(cardsBlock);

const leftColumn = document.querySelector(".leftt");
const rightColumn = document.querySelector(".rightt");
const bannerTitle = document.querySelector(".chasti");

const bannerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            leftColumn.classList.add("show");
            rightColumn.classList.add("show");
            bannerTitle.classList.add("show");

            bannerObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

bannerObserver.observe(document.querySelector(".banner"));

const pidhod = document.querySelector(".pidhod");

const pidhodObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            pidhod.classList.add("show");
            pidhodObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

pidhodObserver.observe(pidhod);

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuOverlay = document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
});

menuOverlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});