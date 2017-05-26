      var items = document.querySelectorAll(".buy");

      for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function (event) {
          event.preventDefault();
          buyPopUp.classList.add("modal-content-show-3");
        });

      }
      var buyPopUp = document.querySelector(".pop-up-basket");
      var buyClose = buyPopUp.querySelector(".pop-up-basket-close");

      buyClose.addEventListener("click", function (event) {
        event.preventDefault();
        buyPopUp.classList.remove("modal-content-show-3");
      });

      window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
          if (buyPopUp.classList.contains("modal-content-show-3")) {
            buyPopUp.classList.remove("modal-content-show-3");
          }
        }
      });

      var mapOpen = document.querySelector(".js-open-map");
      var mapPopup = document.querySelector(".modal-content-map");
      var mapClose = mapPopup.querySelector(".map-close");

      mapOpen.addEventListener("click", function (event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
      });

      mapClose.addEventListener("click", function (event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
          }
        }
      });



      var letterOpen = document.querySelector(".btn-feedback");
      var popUpLetter = document.querySelector(".pop-up-letter");
      var letterClose = popUpLetter.querySelector(".pop-up-basket-close");

      letterOpen.addEventListener("click", function (event) {
        event.preventDefault();
        popUpLetter.classList.add("modal-content-show-2");
      });

      letterClose.addEventListener("click", function (event) {
        event.preventDefault();
        popUpLetter.classList.remove("modal-content-show-2");
      });

      window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
          if (popUpLetter.classList.contains("modal-content-show-2")) {
            popUpLetter.classList.remove("modal-content-show-2");
          }
        }
      });


      if (window.localStorage) {
        var elements = document.querySelectorAll("[name]");

        for (var i = 0, length = elements.length; i < length; i++) {
          (function (element) {
            var name = element.getAttribute("name");

            element.value = localStorage.getItem(name) || "";

            element.onkeyup = function () {
              localStorage.setItem(name, element.value);
            };
          })(elements[i]);
        }
      }
