let englishBlock = document.getElementById('english');
let percent = document.querySelector('.percent');
let loader = document.querySelector('.english-loader');
let interval;
let current = 0;

let heightBlock = englishBlock.offsetHeight;
let offsetBlock = offset(englishBlock).top
const animStart = 1;
let animItemPoint = window.innerHeight - heightBlock / animStart;
function isVisible(elem) {

  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}
window.addEventListener('scroll', () => {
  
  if (
    scrollY > offsetBlock - animItemPoint &&
    screenY < offsetBlock + heightBlock
  ) {
    interval = setInterval(increment, 100);
  }
  
});
function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
function increment() {
  if (current <= 78) {
    current = current + 1;
    percent.innerHTML = current + "%";
    loader.classList.add("finish");
  } else {
    clearInterval(interval);
  }
}

let viewport = document.querySelector('.projects-slider').offsetWidth;
let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');
let slider = document.querySelector('.projects-container')
let viewSliders = document.querySelectorAll('.view-slide')
let viewSlide = 0
viewSliders[0].classList.add('active')
btnNext.addEventListener('click', () => {
  viewSliders[viewSlide].classList.remove('active')
if(viewSlide < 3){
  viewSlide++
} else {
  viewSlide=0
}

viewSliders[viewSlide].classList.add('active')
slider.style.left = -viewSlide * viewport + 'px'
})
btnPrev.addEventListener('click',() => {
  viewSliders[viewSlide].classList.remove('active')
  if(viewSlide > 0){
    viewSlide--
  } else {
    viewSlide=3
  }
  viewSliders[viewSlide].classList.add('active')
  slider.style.left = -viewSlide * viewport + 'px'
})

const btnTop = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 500) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

let isOpen = false;
const burger = document.querySelector('.burger-menu');
const burgerLine = document.querySelector('.burger-line');
const mobilenav = document.querySelector('.nav-mobile');
const link = document.querySelector('.nav-mobile-list');

burger.addEventListener('click', () => {
  if (!isOpen) {
    burger.classList.add('active');
    burgerLine.classList.add('active');
    mobilenav.classList.add('active');
    isOpen = true;
  } else {
    burger.classList.remove('active');
    burgerLine.classList.remove('active');
    mobilenav.classList.remove('active');
    isOpen = false;
  }
});

link.addEventListener("click", () => {
  burger.classList.remove("active");
  burgerLine.classList.remove("active");
  mobilenav.classList.remove("active");
  isOpen = false;
});


const language = document.querySelector(".change-language");
const english = document.getElementById("1");
const russian = document.getElementById("2");
const allLang = ['en','ru'];
function changeURLLanguage(event) {
  const currTab = event.target.dataset.btn;
  let lang;
  if(currTab==1){
    lang = "en";
  } else if(currTab==2){
    lang = "ru"
  }
  location.href = window.location.pathname + '#' + lang;
  location.reload()
}

language.addEventListener('click', changeURLLanguage);

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  console.log(hash)
  if(hash=="en"){
    english.classList.add('active');
    russian.classList.remove('active')
  } else if(hash=="ru"){
    english.classList.remove('active');
    russian.classList.add('active')
  }
  if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#en';
      location.reload();
  }
  for (let key in langArr) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
          elem.innerHTML = langArr[key][hash];
      }
      if(Array.isArray(langArr[key][hash])){
        let all = document.querySelectorAll('.lng-' + key)
        for(let elementKey = 0; elementKey < all.length; elementKey++){
          all[elementKey].innerHTML = langArr[key][hash][elementKey]
        }
      } 
  }
}
changeLanguage();