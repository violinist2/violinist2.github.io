      var pageHeader = document.querySelector('.page-header__control-panel');
      var Burger = document.querySelector('.page-header__burger');
      var Menu = document.querySelector('.menu');

      Burger.classList.remove('page-header__burger--hidden');
      pageHeader.classList.add('page-header__transparent');
      Menu.classList.add('menu__hidden');

      Burger.addEventListener('click', function () {
        if (pageHeader.classList.contains('page-header__transparent')) {
          pageHeader.classList.remove('page-header__transparent');
          Burger.classList.remove('page-header__burger');
          Burger.classList.add('page-header__burger--cross');
          Menu.classList.remove('menu__hidden');
        }
        else {
          Menu.classList.add('menu__hidden');
          Burger.classList.remove('page-header__burger--cross');
          Burger.classList.add('page-header__burger');
          pageHeader.classList.add('page-header__transparent');
        }
      });

      var popUpRed = document.querySelector('.pop-up-red-field');
      var popUpRedClose = document.querySelector('.pop-up-red-field__close');
      var competitionFormBtn = document.querySelector('.competition-form__send-btn');
      var popUpSend = document.querySelector('.pop-up-send');
      var postForm = document.getElementById('post');
      var telform = document.getElementById('tel');
      var surnameform = document.getElementById('surname');
      var nameform =document.getElementById('first-name');
      var patronymicForm = document.getElementById('patronymic');
      var popUpClose = document.querySelector('.pop-up-send__close');


      competitionFormBtn.addEventListener("click", function(event) {
          //  event.preventDefault();
          if(surnameform.value !='' && nameform.value !='' && patronymicForm.value !=''  && telform !='' && postForm.value !='') {
          popUpSend.style.display= "block";
        }
        else popUpRed.style.display="block";

        });

        popUpRedClose.addEventListener("click", function(event) {
          event.preventDefault();
          popUpRed.style.display="none";
        });

        popUpClose.addEventListener("click", function(event) {
          popUpSend.style.display="none";
        });


