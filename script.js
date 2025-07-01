// Master Script: script.js
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const offcanvasMenu = document.querySelector('.offcanvas-menu');
  const offcanvasBackdrop = document.querySelector('.offcanvas-backdrop');
  const offcanvasClose = document.querySelector('.offcanvas-close');
  const offcanvasListItems = document.querySelectorAll('.offcanvas-list > li');
  const offcanvasFindItFastBtn = document.getElementById('offcanvasFindItFastBtn');

  const findItFastBtn = document.getElementById('findItFastBtn');
  const megaMenu = document.getElementById('mega-menu');
  const megaBackdrop = document.getElementById('mega-backdrop');
  const megaClose = document.getElementById('mega-close');

  function openOffcanvasMenu() {
    if (offcanvasMenu && offcanvasBackdrop) {
      offcanvasMenu.classList.add('open');
      offcanvasBackdrop.classList.add('show');
    }
  }

  function closeOffcanvasMenu() {
    if (offcanvasMenu && offcanvasBackdrop) {
      offcanvasMenu.classList.remove('open');
      offcanvasBackdrop.classList.remove('show');
      offcanvasMenu.querySelectorAll('.offcanvas-submenu').forEach(menu => menu.classList.remove('show'));
      offcanvasListItems.forEach(li => li.classList.remove('active'));
    }
  }

  function openMegaMenu(e) {
    e.preventDefault();
    closeOffcanvasMenu(); 
    if(megaBackdrop && megaMenu) {
        megaBackdrop.style.display = 'block';
        megaMenu.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
  }

  function closeMegaMenu() {
    if(megaBackdrop && megaMenu) {
        megaBackdrop.style.display = 'none';
        megaMenu.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
  }

  if (navToggle) {
    navToggle.addEventListener('click', openOffcanvasMenu);
  }

  if (offcanvasClose) {
    offcanvasClose.addEventListener('click', closeOffcanvasMenu);
  }

  if (offcanvasBackdrop) {
    offcanvasBackdrop.addEventListener('click', closeOffcanvasMenu);
  }

  offcanvasListItems.forEach(function(li) {
    const a = li.querySelector('a');
    const submenu = li.querySelector('.offcanvas-submenu');
    if (submenu) {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const parentLi = e.currentTarget.parentElement;
        parentLi.classList.toggle('active');
        submenu.classList.toggle('show');
        offcanvasListItems.forEach(otherLi => {
          if (otherLi !== parentLi) {
            otherLi.classList.remove('active');
            otherLi.querySelector('.offcanvas-submenu')?.classList.remove('show');
          }
        });
      });
    }
  });
  
  if (findItFastBtn) findItFastBtn.addEventListener('click', openMegaMenu);
  if (offcanvasFindItFastBtn) offcanvasFindItFastBtn.addEventListener('click', openMegaMenu);
  
  if (megaClose) megaClose.addEventListener('click', closeMegaMenu);
  if (megaBackdrop) megaBackdrop.addEventListener('click', closeMegaMenu);
});