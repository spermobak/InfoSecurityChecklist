const navElems = document.querySelectorAll('.form-nav a');
const sectionElems = document.querySelectorAll('.form-section');

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener('click', e => {
    e.preventDefault();
    sectionElems.forEach((section) => {
      section.classList.remove('active');
      if (section.id === e.target.dataset.section) {
        section.classList.add('active');
      }
    });
    navElems.forEach((nav) => {
      nav.parentElement.classList.remove('active');
    });
    e.target.parentElement.classList.add('active');
  });
}