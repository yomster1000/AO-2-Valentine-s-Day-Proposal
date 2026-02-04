// Simple handlers used by index.html buttons

function handleYesClick() {
  // navigate to the yes page
  window.location.href = 'yes_page.html';
}

function handleNoClick() {
  // playful behavior: move the No button to a random position
  const btn = document.querySelector('.no-button');
  if (!btn) return;

  // Ensure the button can be absolutely positioned
  btn.style.position = 'absolute';

  const padding = 20;
  const maxX = Math.max(window.innerWidth - btn.offsetWidth - padding, padding);
  const maxY = Math.max(window.innerHeight - btn.offsetHeight - padding, padding);

  const x = Math.floor(Math.random() * (maxX - padding)) + padding;
  const y = Math.floor(Math.random() * (maxY - padding)) + padding;

  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
}
