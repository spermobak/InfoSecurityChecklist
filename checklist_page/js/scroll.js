let lastScrollTop = 0;

const header = document.querySelector('.header');
const menu = document.querySelector('.hover-underline-menu');
const formLeft = document.querySelector('.form-left');
const formRight = document.querySelector('.form-right');


const headerHeight = header.offsetHeight;


window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset;

 
  if (scrollTop <= headerHeight) {
    menu.style.position = 'static';
    formLeft.style.marginTop = '0';
  } 
 
  else {
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.left = '0';
    menu.style.right = '0';
    formLeft.style.marginTop = `${menu.offsetHeight}px`;
  }

  if (scrollTop > lastScrollTop) {
    header.style.top = `-${headerHeight}px`;
  } else {
    header.style.top = '0';
  }
  lastScrollTop = scrollTop;
});


window.addEventListener('load', () => {
  updateFormLeftHeight();
});

window.addEventListener('resize', () => {
  updateFormLeftHeight();
});

function updateFormLeftHeight() {
  const windowHeight = window.innerHeight;
  const headerHeight = header.offsetHeight;
  const menuHeight = menu.offsetHeight;
  const formTopOffset = formLeft.offsetTop;
  const formBottomPadding = parseInt(getComputedStyle(formLeft).paddingBottom);

  const formLeftHeight = windowHeight - headerHeight - menuHeight - formTopOffset - formBottomPadding;

  formLeft.style.height = `calc(${formLeftHeight}px)`;
}
