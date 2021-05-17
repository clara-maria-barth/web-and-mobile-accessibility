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

  for (var j = 0; j < dropDownMenus.length; j++) {
    dropDownMenus[j].classList.remove('show');
    ariaLabel.setAttribute('aria-expanded', 'false');
  }

  if (!isOpen) {
    currentDropDownMenu.classList.add('show');

    ariaLabel.setAttribute('aria-expanded', 'true');
    

    // //Exist opened sub-menu using escape
    window.onkeydown = function (e) {
      if (e.keyCode === 27) {
        e.preventDefault();
        currentDropDownMenu.classList.remove('show');
        ariaLabel.setAttribute('aria-expanded', 'false');
      }
    };
  }

  //adding hovering effect
  var dropdownItem = currentDropDownButton.parentNode.querySelectorAll(
    '.dropdown-menu .dropdown-item'
  );

  dropdownItem.forEach(itm => {
    itm.addEventListener('mouseover', function (e) {
      itmHover(e, 'blue', 'white');
    });
  });
  dropdownItem.forEach(itm => {
    itm.addEventListener('mouseout', function (e) {
      itmHover(e, 'black', 'white');
    });
  });

  //To exit when a sub-menu is open using escape
  dropdownItem.forEach(itm => {
    itm.addEventListener('keyup', function (e) {
      if (e.keyCode === 27) {
        e.preventDefault();
        currentDropDownMenu.classList.remove('show');
        ariaLabel.setAttribute('aria-expanded', 'false');
      } 
    });
  });

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

/**
 * Adding effect when hoving over the navigation content
 * @param {object} event - The DOM event
 */
function itmHover(e, fontCol, bgCol) {
  e.target.style.color = fontCol;
  e.target.parentElement.style.background = bgCol;
  e.target.parentElement.style.borderRadius = '20px';
}

document.addEventListener('DOMContentLoaded',function () {
    var dropDownToggles = document.querySelectorAll(
      '#nav-bar-content .dropdown-toggle'
    );

    const navItem = document.querySelectorAll('.nav-link');

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

    //Adding effect when hovering over an item
    navItem.forEach(el => {
      el.addEventListener('mouseover', function (e) {
        itmHover(e, 'black', 'white');
      });
    });
    navItem.forEach(el => {
      el.addEventListener('mouseout', function (e) {
        itmHover(e, 'white', '#343a40');
      });
    });
    for (var i = 0; i < dropDownToggles.length; i++) {
      dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document
      .querySelector('.navbar-toggler')
      .addEventListener('click', toggleNavigation, false);
  },
  false
);

//task left
/*
1. add underlin whne item is hovered 
2. add focun on menu bar after espce button is presed --done 
*/
