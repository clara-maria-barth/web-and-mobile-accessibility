/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
  event.stopPropagation();
  event.preventDefault();

  var currentDropDownButton = event.target;
  var currentDropDownMenu =
    currentDropDownButton.parentNode.querySelector('.dropdown-menu');
  var ariaLabel = currentDropDownMenu.closest('li').querySelector('.nav-link');
  var isOpen = currentDropDownMenu.classList.contains('show');
  var dropDownMenus = document.querySelectorAll(
    '#nav-bar-content .dropdown .dropdown-menu'
  );
  var dropdownItem = currentDropDownButton.parentNode.querySelectorAll(
    '.dropdown-menu .dropdown-item'
  );

  for (var j = 0; j < dropDownMenus.length; j++) {
    dropDownMenus[j].classList.remove('show');
    ariaLabel.setAttribute('aria-expanded', 'false');
  }

  if (!isOpen) {
    currentDropDownMenu.classList.add('show');
    ariaLabel.setAttribute('aria-expanded', 'true');
    
    var items = [...dropdownItem]
    //Close opened sub-menu using escape
    window.onkeyup = function (e) {
      if (e.keyCode === 27 || e.keyCode === 27 && items.some(itm => itm === document.activeElement)) {
        e.preventDefault();
        currentDropDownMenu.classList.remove('show');
        ariaLabel.setAttribute('aria-expanded', 'false');
        //focus missing
      }
    };
  }

  //To close any open sub-menu when focus if on an other element
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Tab') {
      var currentDropItms = [...dropdownItem];
      if (currentDropItms.some(itm => itm === document.activeElement)) {
        return;
      } else {
        currentDropDownMenu.classList.remove('show');
        ariaLabel.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
  event.stopPropagation();
  event.preventDefault();
  var content = document.getElementById('nav-bar-content');
  if (content.classList.contains('collapse')) {
    content.classList.remove('collapse');
  } else {
    content.classList.add('collapse');
  }
}

document.addEventListener('DOMContentLoaded',function () {
    var dropDownToggles = document.querySelectorAll(
      '#nav-bar-content .dropdown-toggle'
    );

    for (var i = 0; i < dropDownToggles.length; i++) {
      dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document
    .querySelector('.navbar-toggler')
    .addEventListener('click', toggleNavigation, false);
    //To enable drop-down item to be clicked using space when styles are turned of
    var dropdownItms = document.querySelectorAll('.dropdown-item');
    dropdownItms.forEach(itm => {
      itm.addEventListener('keydown', function (e) {
        if (e.keyCode === 32) {
          e.preventDefault();
          e.target.click();
        }
      });
    });
  },
  false
);

