(() => {
  'use strict';
  const menu = document.querySelector('#main-nav');
  const menuToggle = document.querySelector('#menu-toggle');
  function closeMenu() {
    const restoreFocus = menu.dataset.open === 'true' && menu.contains(document.activeElement);
    menu.dataset.open = 'false'; menuToggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) menuToggle.focus();
  }
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menu.dataset.open = String(open);
    if (open) menu.querySelector('a').focus();
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  document.querySelectorAll('.pixel-icon').forEach(icon => {
    const pattern = icon.dataset.pixels.padEnd(9, '0');
    for (const bit of pattern) { const pixel = document.createElement('span'); if (bit === '1') pixel.className = 'on'; icon.append(pixel); }
  });
  document.querySelectorAll('.tile-field').forEach((field, fieldIndex) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 192; i++) {
      const tile = document.createElement('span'); tile.className = 'tile';
      if ((i + fieldIndex * 11) % 47 === 0 || (fieldIndex === 1 && i % 31 === 0)) {
        tile.classList.add('lit'); tile.style.setProperty('--delay', `${-(i % 7)}s`);
      }
      fragment.append(tile);
    }
    field.append(fragment);
  });

  const dialog = document.querySelector('#demo');
  const goal = document.querySelector('#goal');
  const status = document.querySelector('#demo-status');
  const results = document.querySelector('#demo-results');
  const reset = document.querySelector('#demo-reset');
  let opener;
  function resetDemo() { results.replaceChildren(); status.textContent = ''; reset.hidden = true; }
  document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click', () => {
    opener = button;
    document.querySelector('#demo-plan').textContent = `Exploring ${button.dataset.plan || 'Starter'}`;
    resetDemo();
    dialog.showModal();
    goal.focus();
  }));
  document.querySelector('#demo-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener?.focus());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => { goal.value = button.dataset.example; resetDemo(); goal.focus(); }));
  document.querySelector('#demo-form').addEventListener('submit', event => {
    event.preventDefault(); resetDemo();
    const value = goal.value.trim();
    if (!value) { status.textContent = 'Please describe a goal before previewing the workflow.'; goal.focus(); return; }
    const steps = [
      ['01 · Gather context', `Start with the goal: “${value}”. Identify the inputs, constraints, and information the workflow would need.`],
      ['02 · Plan the work', 'Separate the goal into focused tasks, choose a sensible sequence, and identify the points that need a human review.'],
      ['03 · Review the result', 'Bring the outputs together into a clear handoff. Check them against the goal before taking any real action.']
    ];
    for (const [title, text] of steps) {
      const item = document.createElement('li');
      const heading = document.createElement('strong'); heading.textContent = title;
      item.append(heading, document.createTextNode(text)); results.append(item);
    }
    status.textContent = 'Simulation complete. These are example steps; no external work was performed.';
    reset.hidden = false;
  });
  reset.addEventListener('click', () => { resetDemo(); goal.value = ''; goal.focus(); });
})();
