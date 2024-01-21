
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

  async function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const urlEncoded = new URLSearchParams(formData).toString();

    const params = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: urlEncoded,
      method: "POST"
    };
    const response = await fetch('http://localhost:3000/mailer', params)
    console.log(response);
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
  
  form.addEventListener('submit', submitForm);


