
  // variable declarations
  const navItems = document.getElementsByClassName('nav-item');
  const form = document.getElementById('contact-form');

  // function declarations
  function addActiveClassToNavItem(event) {
    const navItemId = event.target.id;
    const classToBeAdded = 'active';

    for(let i = 0; i < navItems.length; i++) {
      const navItemContainsClass = navItems[i].classList.contains(classToBeAdded);
      if (navItems[i].id === navItemId && !navItemContainsClass) {
        navItems[i].classList.add(classToBeAdded)
      } else if (navItems[i].id !== navItemId && navItemContainsClass) {
        navItems[i].classList.remove(classToBeAdded)
      }
    }
  }


  function findActiveLink() {
    const activeURL = window.location.href.split('#')[1];
    const idToFind = `nav-item-${activeURL}`;
    document.getElementById(idToFind).classList.add('active');
  }

  function submitForm(event, form) {
    event?.preventDefault();
    const name = document.getElementById('contact-form-name').value;
    const email = document.getElementById('contact-form-email').value;
    const phone = document.getElementById('contact-form-phone').value;
    const message = document.getElementById('contact-form-message').value;
    
    const obj = {name, email, phone, message};
  }

  function toggleNavMenu() {
    const menu = document.getElementById('nav-menu-wrapper');
    if (menu.classList.contains('nav-open')) {
      menu.classList.remove('nav-open');
    } else {
      menu.classList.add('nav-open');
    }
  }

  //init
  findActiveLink();

  //event listners
  for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', addActiveClassToNavItem);
  }
  
  // form.addEventListener('submit', submitForm);


