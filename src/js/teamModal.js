
  window.addEventListener('keydown', closeModalByEscape);
  function closeModalByEscape(e) {
    if (e.code === '27') {
      modal.close();
      window.removeEventListener('keydown', closeModalByEscape);
    }

  }
