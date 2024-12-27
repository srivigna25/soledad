const mobileBtn = document.querySelector('.fa-bars');
mobileBtn.addEventListener('click',function(){
  const navMenu = document.querySelector('.Open_close_section');
  navMenu.classList.add('show');
})
const sidebtn = document.querySelector('.fa-circle-xmark');
sidebtn.addEventListener('click',function(){
  const navMenu = document.querySelector('.Open_close_section');
  navMenu.classList.toggle('show');
})
const search = document.querySelector('.search_glass');
search.addEventListener('click',function(){
  const searchBar = document.querySelector('.search_icon');
  searchBar.classList.toggle('show');
})
const subMenu = document.querySelector('.fa_angle');
subMenu.addEventListener('click',function(){
  const subMenuList = document.querySelector('.sub_menu');
  subMenuList.classList.toggle('show');
})