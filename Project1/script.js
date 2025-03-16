document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // Menampilkan 3 slide dalam satu waktu
        spaceBetween: 20, // Jarak antar slide
        loop: true, // Membuat slider berulang (loop)
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Geser otomatis setiap 3 detik
            disableOnInteraction: false, // Tetap autoplay setelah interaksi
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // Di tablet menampilkan 2 slide
            },
            480: {
                slidesPerView: 1, // Di HP hanya 1 slide
            },
        },
    });
});
setTimeout(() => {
    let iframe = document.getElementById("featured-video");
    iframe.src += "&autoplay=1";
}, 2000);
