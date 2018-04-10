     var Burger = document.getElementById('burger');
     var Menu = document.getElementById('menu');
   
      Burger.addEventListener('click', function (event) {
      Menu.classList.add('Slide-menu');
      Menu.classList.remove('Slide-menu__close');
    });  
      Menu.addEventListener('click', function (event) {
      Menu.classList.remove('Slide-menu');
      Menu.classList.add('Slide-menu__close'); 
  });
