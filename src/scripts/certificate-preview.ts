const dialogButtons = document.querySelectorAll<HTMLButtonElement>('[data-preview-dialog]');

dialogButtons.forEach((button) => {
  const dialogId = button.dataset.previewDialog;
  const dialog = dialogId ? document.getElementById(dialogId) : null;

  if (!(dialog instanceof HTMLDialogElement)) return;

  button.addEventListener('click', () => dialog.showModal());

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
