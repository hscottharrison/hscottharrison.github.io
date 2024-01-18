
  // variable declarations
  const navItems = document.getElementsByClassName('nav-item');

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

  function submitForm(form) {
    debugger;
  }




  //init
  findActiveLink();

  //event listners
  for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', addActiveClassToNavItem);
  }


