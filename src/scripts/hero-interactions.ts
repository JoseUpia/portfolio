const typewriter = document.querySelector<HTMLElement>('[data-typewriter]');

if (typewriter && typewriter.dataset.initialized !== 'true') {
  typewriter.dataset.initialized = 'true';

  const phrases = JSON.parse(typewriter.dataset.phrases ?? '[]') as string[];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (phrases.length > 0 && reduceMotion) {
    typewriter.textContent = phrases[0];
  } else if (phrases.length > 0) {
    let phraseIndex = 0;
    let characterIndex = phrases[0].length;
    let deleting = true;

    const updateText = () => {
      const phrase = phrases[phraseIndex];
      typewriter.textContent = phrase.slice(0, characterIndex);

      if (!deleting && characterIndex === phrase.length) {
        deleting = true;
        window.setTimeout(updateText, 1500);
        return;
      }

      if (deleting && characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        window.setTimeout(updateText, 320);
        return;
      }

      characterIndex += deleting ? -1 : 1;
      window.setTimeout(updateText, deleting ? 42 : 74);
    };

    window.setTimeout(updateText, 1500);
  }
}

const copyEmailButton = document.querySelector<HTMLButtonElement>('[data-copy-email]');
const copyStatus = document.querySelector<HTMLElement>('[data-copy-status]');

copyEmailButton?.addEventListener('click', async () => {
  const email = copyEmailButton.dataset.email;
  if (!email) return;

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.dataset.copied = 'true';
    copyEmailButton.setAttribute('aria-label', 'Correo copiado');
    if (copyStatus) copyStatus.textContent = 'Correo electrónico copiado al portapapeles.';

    window.setTimeout(() => {
      delete copyEmailButton.dataset.copied;
      copyEmailButton.setAttribute('aria-label', 'Copiar correo electrónico');
      if (copyStatus) copyStatus.textContent = '';
    }, 1800);
  } catch {
    if (copyStatus) copyStatus.textContent = `No se pudo copiar. Correo: ${email}`;
  }
});
