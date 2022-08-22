(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[data-about-modal-open]'),
    closeAboutModalBtn: document.querySelector('[data-about-modal-close]'),
    aboutmodal: document.querySelector('[data-about-modal]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleAboutModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleAboutModal);

  function toggleAboutModal() {
    refs.aboutmodal.classList.toggle('is-hidden');
  }
})();