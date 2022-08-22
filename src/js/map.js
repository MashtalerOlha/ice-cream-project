(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[data-map-modal-open]'),
    closeAboutModalBtn: document.querySelector('[data-map-modal-close]'),
    aboutmodal: document.querySelector('[data-map-modal]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleAboutModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleAboutModal);

  function toggleAboutModal() {
    refs.aboutmodal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    closeAboutModalBtn: document.querySelector('[data-map-modal-close]'),
    chicagoBtn: document.querySelector('.chicago-btn'),
    chicagoMap: document.querySelector('.chicago'),
    losAnBtn: document.querySelector('.los-an-btn'),
    losAnMap: document.querySelector('.los-an'),
    newYorkBtn: document.querySelector('.new-york-btn'),
    newYorkMap: document.querySelector('.new-york'),
    containerMap: document.querySelector('.map-sity__container'),
  };

  refs.chicagoBtn.addEventListener('click', showMapChicago);
  refs.losAnBtn.addEventListener('click', showMapLosAn);
  refs.newYorkBtn.addEventListener('click', showMapNY);
  refs.closeAboutModalBtn.addEventListener('click', showContainer);

  function showContainer() {
    refs.containerMap.classList.add('map-sity__container');
    refs.containerMap.classList.remove('hidden');
    refs.newYorkMap.classList.add('hidden');
    refs.losAnMap.classList.add('hidden');
    refs.chicagoMap.classList.add('hidden');

  }

  function showMapChicago() {
    refs.chicagoMap.classList.add('active');
    refs.chicagoMap.classList.remove('hidden');
    refs.losAnMap.classList.remove('active');
    refs.newYorkMap.classList.remove('active');
    refs.newYorkMap.classList.add('hidden');
    refs.losAnMap.classList.add('hidden');
    refs.containerMap.classList.add('hidden');
  }

  function showMapLosAn() {
    refs.losAnMap.classList.add('active');
    refs.losAnMap.classList.remove('hidden');
    refs.chicagoMap.classList.remove('active');
    refs.newYorkMap.classList.remove('active');
    refs.chicagoMap.classList.add('hidden');
    refs.newYorkMap.classList.add('hidden');
    refs.containerMap.classList.add('hidden');
    refs.containerMap.classList.remove('map-sity__container');
  }

  function showMapNY() {
    refs.newYorkMap.classList.add('active');
    refs.newYorkMap.classList.remove('hidden');
    refs.chicagoMap.classList.remove('active');
    refs.losAnMap.classList.remove('active');
    refs.chicagoMap.classList.add('hidden');
    refs.losAnMap.classList.add('hidden');
    refs.containerMap.classList.add('hidden');
    refs.containerMap.classList.remove('map-sity__container');
  }
})();
