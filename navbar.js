document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('#navbarMenu');
    const menuItems = menu.querySelectorAll('.navbar-item[href^="#"]');


    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
      })
    })
  });


