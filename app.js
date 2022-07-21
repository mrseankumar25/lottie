const anim = bodymovin.loadAnimation({
  container: document.getElementById('frame'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './europlanet.json'
});