$(function () {
  if ($(window).width() < 768) {
    console.log($(window).width())
    $(`#header-nav`).css("display", "block")
  }

  //mmenu
  if ($("#header-nav").length > 0) {
    const menu = new MmenuLight(
      document.querySelector("#header-nav"),
      "(max-width: 768px)"
    );


    const navigator = menu.navigation({
      title: ""
    });

    const drawer = menu.offcanvas({
      position: "right"
    });

    $(`.header__link-menu--open`).on(`click`, (e) => {
      e.preventDefault();
      $(`.header__link-menu--open`).addClass('hidden')
      $(`.header__link-menu--close`).removeClass('hidden')
      drawer.open();
    });

    $(`.header__link-menu--close`).on(`click`, (e) => {
      e.preventDefault();
      $(`.header__link-menu--open`).removeClass('hidden')
      $(`.header__link-menu--close`).addClass('hidden')
      drawer.close();
    });

    $(`.header-nav__item--top a`).on(`click`, () => {
      $(`.header__link-menu--open`).removeClass('hidden')
      $(`.header__link-menu--close`).addClass('hidden')
      drawer.close();
    })


    // modal
    $(`.header__link`).on(`click`, () => {
      $(`.header__link-menu--open`).removeClass('hidden')
      $(`.header__link-menu--close`).addClass('hidden')
      drawer.close();
      $('#modal-request').modal();
    });


  }


  // lightbox
  const promo_lightbox = GLightbox({
    selector: `.video-box__link`,
    autoplayVideos: true,
    touchNavigation: true,
    loop: true,
  });

  // modal




  //валидация полей форм
  // $(`.modal-request__form`).on(`submit`, (e) => {
  //   checkValidation(e);
  // });


  // const checkValidation = (e) => {
  //   let flag = false;
  //   e.preventDefault();
  //   $(e.target).parent().find(`.valid`).each((i, item) => {
  //     if ($(item).val().length === 0) {
  //       $(item).addClass(`not-valid`);
  //       droppingErr(item);

  //     } else {
  //       flag = true;
  //     }
  //   })

  //   if (flag) {
  //     sendForm(e);
  //   }
  // };


  // отправка форм
  // const sendForm = (e) => {
  //   const form = e.target;
  //   const data = $(form).serialize();
  //   $.ajax({
  //     url: 'https://httpbin.org/anything',
  //     method: 'post',
  //     dataType: 'json',
  //     data: data,
  //     success: function () {
  //       successHandler(e)
  //     }
  //   });
  // };


  // после отправки открываем страницу
  // const successHandler = (e) => {
  //   e.target.reset();
  //   $('#modal-thanks').modal();
  // }


  //сброс ошибки
  // const droppingErr = (item) => {
  //   $(item).on(`click`, () => {
  //     $(item).removeClass(`not-valid`);
  //   })
  // };

  // mask input tel
  // $(`#phone`).inputmask({ "mask": "+7 (999) 999-99-99" });


  // // confidence slider
  // if ($(window).width() < 768) {
  //   $('.confidence__list').slick({
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 1,
  //   });
  // }

  // lightbox modal-case
  // const case_bottomLightbox = GLightbox({
  //   selector: `.case-bottom__link`,
  // });

  // lighybox customers__list
  // const customersLightbox = GLightbox({
  //   selector: `.glight-box__link`,
  // });

  // lightbox result__list
  // const resultLightbox = GLightbox({
  //   selector: `.result__link`,
  // });

  // result slider
  // $('.result__list').slick({
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   draggable: false,
  //   responsive: [
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // team-slider__list slider

  // if ($(window).width() < 768) {
  //   $(`.team-slider__list`).slick({
  //     infinite: true,
  //     speed: 600,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   });
  // }



  // slider modal-case
  // const status = $(`.case-top__counter-text`)
  // let modalCaseSlick = $('.case-top__list');

  // modalCaseSlick.on('init reInit afterChange', function (evt, slick, currentSlide, nextSlide) {
  //   const i = (currentSlide ? currentSlide : 0) + 1;
  //   status.text(`${i}/${slick.slideCount}`);
  // })

  // $(`.modal-case__link-open`).on(`click`, (e) => {
  //   e.preventDefault();
  //   const modalId = $(e.target).attr('class').split(` `).pop()
  //   $(`#${modalId}`).modal();


  //   modalCaseSlick.slick({
  //     infinite: false,
  //     speed: 600,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   });

  //   $(`.modal-case a.close-modal`).on(`click`, () => {
  //     modalCaseSlick.slick('unslick')
  //   });
  // });


  // // team target
  // $(`.target__mark`).on(`mouseover`, (e) => {
  //   $(e.target).next().addClass(`target__text--visible`);
  // })

  // $(`.target__mark`).on(`mouseout`, (e) => {
  //   $(e.target).next().removeClass(`target__text--visible`);
  // })


  //  accordion__item
  // $('.accordion__item').accordion({
  //   "transitionSpeed": 400
  // });

  // map
  // let myMap;
  // const init = () => {
  //   myMap = new ymaps.Map('map', {
  //     center: [52.2825, 104.296372],
  //     zoom: 17,
  //     controls: []
  //   });

  //   const myPlacemark = new ymaps.Placemark([52.2825, 104.296372], {}, {
  //     iconLayout: 'default#image',
  //     iconImageHref: '../img/svg/marker.svg',
  //     iconImageSize: [48, 60],
  //     iconImageOffset: [, -50]
  //   });

  //   if ($(window).width() < 768) {
  //     myMap.behaviors.disable('drag');
  //   }

  //   myMap.geoObjects.add(myPlacemark);
  //   myMap.behaviors.disable('scrollZoom');
  // }

  // ymaps.ready(init);
});
