//*>>>>>>> for navbar when it scrolls down
const navSection = document.querySelector('nav')
const changingNumSection = document.querySelector('#fourth-section')
window.addEventListener('scroll', () => {
  if (window.scrollY > 830) {
    navSection.classList.add('scrolled');
  } else {
    navSection.classList.remove('scrolled');
  }
})
//* for navbar when it scrolls down <<<<<<<<


//?>>>>>>> for number animation when it scrolls down
function animateNumber(element, targetNumber, duration) {
  let startNumber = 0;
  const increment = targetNumber / (duration / 16); 

  const interval = setInterval(() => {
    startNumber += increment;

    if (startNumber >= targetNumber) {
      element.textContent = targetNumber; 
      clearInterval(interval); 
    } else {
      element.textContent = Math.floor(startNumber);
    }
  }, 16); 
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const num1 = document.querySelector('.num1');
      const num2 = document.querySelector('.num2');
      const num3 = document.querySelector('.num3');

      animateNumber(num1, 100, 1500); 
      animateNumber(num2, 70, 1500);
      animateNumber(num3, 63, 1500);

      observer.disconnect(); 
    }
  });
});

observer.observe(document.querySelector('.percentage-cards'));

//? for number animation when it scrolls down <<<<<<<


//*>>>>>>>>> For Hamburger menu

const menuButton = document.querySelector('.menu-icon')
const menuData = document.querySelector('.menu-for-devices')
const exitMenu = document.querySelector('.exit')
menuButton.addEventListener('click', () => {
  menuData.style.display = 'block'
})
exitMenu.addEventListener('click', () => {
  menuData.style.display = 'none'
})

//* For Hamburger menu <<<<<<<<<

//*>>>>>>> For Hamburger menu links
const productsMenu = document.querySelector('.products-menu');
const solutionsMenu = document.querySelector('.solutions-menu');
const resourcesMenu = document.querySelector('.resources-menu');

const productNav = document.querySelector('.prodct');
const solutionNav = document.querySelector('.soln');
const resourceNav = document.querySelector('.resorc');

// Utility functions to show and hide menus
const showMenu = (menu) => {
  menu.style.display = 'block';
};

const hideMenu = (menu, relatedTarget, navElement) => {
  if (!menu.contains(relatedTarget) && !navElement.contains(relatedTarget)) {
    menu.style.display = 'none';
  }
};

// Products menu
productNav.addEventListener('mouseover', () => showMenu(productsMenu));
productNav.addEventListener('mouseout', (e) => hideMenu(productsMenu, e.relatedTarget, productNav));
productsMenu.addEventListener('mouseover', () => showMenu(productsMenu));
productsMenu.addEventListener('mouseout', (e) => hideMenu(productsMenu, e.relatedTarget, productNav));

// Solutions menu
solutionNav.addEventListener('mouseover', () => showMenu(solutionsMenu));
solutionNav.addEventListener('mouseout', (e) => hideMenu(solutionsMenu, e.relatedTarget, solutionNav));
solutionsMenu.addEventListener('mouseover', () => showMenu(solutionsMenu));
solutionsMenu.addEventListener('mouseout', (e) => hideMenu(solutionsMenu, e.relatedTarget, solutionNav));

// Resources menu
resourceNav.addEventListener('mouseover', () => showMenu(resourcesMenu));
resourceNav.addEventListener('mouseout', (e) => hideMenu(resourcesMenu, e.relatedTarget, resourceNav));
resourcesMenu.addEventListener('mouseover', () => showMenu(resourcesMenu));
resourcesMenu.addEventListener('mouseout', (e) => hideMenu(resourcesMenu, e.relatedTarget, resourceNav));

//* For Hamburger menu links <<<<<<<<<

document.addEventListener('contextmenu', (e) => {
  e.preventDefault() 
  alert('Sorry Right Click Option and also selecting any text is disabled in this website')
});

// Disable keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'i' || e.key === 'I')) {
    e.preventDefault();
  }
});