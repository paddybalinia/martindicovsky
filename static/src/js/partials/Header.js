(function () {
  "use strict";

  var Header = document.querySelector(".header"),
    ButtonScrollUp = document.querySelector(".scroll-up"),
    viewportHeight = window.innerHeight,
    lastScrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop,
    startSticky =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
    ticking = false;
  // Constructor
  function Constructor() {
    window.addEventListener("scroll", onScroll);
    var modHomeElement = document.querySelector(".mod-home");

    NavigationHover();
    // Verificar si es de escritorio antes de aplicar el estilo
    var viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    if (isDesktop()) {
      if (viewportHeight > 550) {
        modHomeElement.style.height = viewportHeight + "px";
      } else {
        modHomeElement.style.maxHeight = 550 + "px";
      }
    } else {
      modHomeElement.style.height = viewportHeight + "px";
    }
  }

  function NavigationHover() {
    const enlaces = document.querySelectorAll(".mod-home__title-js");
    var dataSection = "";
    var homeMod = document.querySelector(".mod-home");
    enlaces.forEach((enlace) => {
      enlace.addEventListener("mouseover", function () {
        dataSection = this.dataset.section;

        const element = homeMod.querySelector(
          "[data-image=" + dataSection + "]"
        );
        element.classList.add("active");
      });

      enlace.addEventListener("mouseout", function () {
        const element = homeMod.querySelector(
          "[data-image=" + dataSection + "]"
        );
        element.classList.remove("active");
      });
    });
  }

  // Función para verificar si es un dispositivo de escritorio
  function isDesktop() {
    return window.matchMedia("(min-width: 1024px)").matches;
  }

  /**
   * Evento onScroll
   * @return void
   */
  function onScroll() {
    lastScrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;

    requestTick();
  }
  /**
   * Validamos que se haya ejecutado correctamente el onScroll() antes de pintar
   * un nuevo frame.
   * @return void
   */
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }
  /**
   *
   *
   * @return void
   */
  function update() {
    const menuLinks = document.querySelectorAll(
      ".header__li__a,.mod-home__top__a"
    );

    var scrollPosition = lastScrollY;
    var updateScroll = Math.max(
      scrollPosition - viewportHeight - Header.offsetHeight
    );

    Header.classList[scrollPosition >= 70 ? "add" : "remove"](
      "header--beforesticky"
    );

    if (scrollPosition > viewportHeight && updateScroll < 0) {
      Header.style.position = "fixed";
      Header.style.top = updateScroll + "px";
    }

    if (updateScroll >= 0) {
      Header.style.top = 0 + "px";
    }

    if (scrollPosition < viewportHeight) {
      // Header.style.position = "absolute";
      Header.style.top = "-70px";
    }

    menuLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      const bounding = section.getBoundingClientRect();

      if (
        bounding.top <= window.innerHeight / 2 &&
        bounding.bottom >= window.innerHeight / 2
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
    ticking = false;
  }
  // Export
  window.Header = Constructor();
})();
