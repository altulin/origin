$(function () {
  if ($(window).width() < 768) {
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


  //валидация полей форм
  $(`.modal-request__form`).on(`submit`, (e) => {
    e.preventDefault();
    sendForm(e);
  });

  // отправка форм
  const sendForm = (e) => {
    const form = e.target;
    const data = $(form).serialize();
    $.ajax({
      url: 'https://httpbin.org/anything',
      method: 'post',
      dataType: 'json',
      data: data,
      success: function () {
        successHandler(e)
      }
    });
  };


  // после отправки открываем страницу
  const successHandler = (e) => {
    e.target.reset();
    $('#modal-thanks').modal();
  }

  // mask input tel
  $(`#phone`).inputmask("+7 (999) 999-99-99", { "placeholder": "_" });


  // turn-content__link
  const turn_link = $(`.turn-content__link`);
  if (turn_link.length > 0) {
    turn_link.on(`click`, (e) => {
      e.preventDefault();
      $(`.turn-content__description`).toggleClass(`turn-content__description--shadow`)
      $(`.turn-content__link`).toggleClass(`turn-content__link--shadow`)
      $(`.turn-content__link`).text((i, text) => {
        return text === `Прочитать еще` ? `Скрыть` : `Прочитать еще`
      })
    })
  }

  // other__link--head
  const other_link = $(`.other__link--head`);
  const head = $(`.other__link--head`);
  if ($(window).width() < 768 && head.length > 0) {
    head.text((i, text) => {
      return `Другие услуги`
    })
  }

  if (other_link.length > 0) {
    other_link.on(`click`, (e) => {
      e.preventDefault()

      if ($(window).width() < 768) {
        $(`.other__list`).toggleClass(`other__list--show`)
      }
    })
  }

  $('.faq__accordion').accordion({
    "transitionSpeed": 0
  });

  let map;

  if ($(`#map`).length > 0) {
    DG.then(function () {
      map = DG.map('map', {
        center: [52.266605, 104.220707],
        zoom: 15,
        scrollWheelZoom: false
      });

      const myIcon = DG.icon({
        iconUrl: '/img/marker.png',
        iconSize: [48, 60]
      });

      DG.marker([52.266605, 104.220707], {
        // draggable: true,
        icon: myIcon
      }).addTo(map);

    })
  }

  // header top fixed
  const header = $(`#header`);

  if (header.length > 0) {

    if ($(window).width() < 768) {
      $('#header').scrollUpMenu({
        waitTime: 40,
        transitionTime: 0,
        menuCss: { 'position': '', 'top': '' }
      });
    }
  }


  const hide_menu = $(`.hide-menu`);
  if (hide_menu.length > 0) {

    if ($(window).width() > 1000) {
      $('.hide-menu').scrollUpMenu({
        waitTime: 50,
        transitionTime: 0,
        menuCss: { 'position': 'fixed', 'bottom': '0' }
      });
    }
  }
});
