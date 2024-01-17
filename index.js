
  const navItems = document.getElementsByClassName('nav-item-list');

  function addActiveClassToNavItem(event) {
    event.preventDefault();
    const navItemId = event.target.id;
    const navItem = document.getElementById(navItemId);
    const classToBeAdded = 'active';
    if (navItem.classList.contains(classToBeAdded)) {
      navItem.classList.remove(classToBeAdded);
    } else {
      navItem.classList.add(classToBeAdded);
    }
  }

  for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', addActiveClassToNavItem);
  }

