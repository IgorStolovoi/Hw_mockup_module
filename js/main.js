const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  // on: {
  //   beforeInit: function () {
  //     if (document.documentElement.clientWidth < 520) {
  //       this.disable();
  //     }
  //   },
  //   resize: function () {
  //     if (document.documentElement.clientWidth > 520) {
  //       this.enable();
  //     } else {
  //       this.disable();
  //     }
  //   },
  // },
});
