const test = require('node:test');
const assert = require('node:assert');
const { JSDOM } = require('jsdom');

test('Escape key closes opened card and overlay', async () => {
  const dom = new JSDOM(`
    <div class="loading-screen"><button class="start-button"></button></div>
    <div class="main-screen"><h1 class="greeting-text"></h1><div class="cards-container"></div></div>
    <div class="overlay"></div>
  `, { runScripts: 'outside-only' });

  global.window = dom.window;
  global.document = dom.window.document;
  global.confetti = () => {};

  require('./script.js');

  document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));

  const card = document.querySelector('.employee-card');
  assert(card, 'Card should be generated');

  card.click();
  const overlay = document.querySelector('.overlay');
  assert(card.classList.contains('flipped'));
  assert(overlay.classList.contains('active'));

  const event = new dom.window.KeyboardEvent('keydown', { key: 'Escape' });
  document.dispatchEvent(event);

  assert(!card.classList.contains('flipped'));
  assert(!overlay.classList.contains('active'));
});
