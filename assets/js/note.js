/* Cycles the words in the hero note, the way the app does.
   The note renders its first word from the HTML, so this file is optional. */
(function () {
  var stage = document.querySelector('[data-note-demo]');
  if (!stage) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var words = [
    ['¡Buenos días!', 'BWAY-nos DEE-as',      'Good morning!'],
    ['la biblioteca',           'la bee-blyoh-TEH-ka',  'the library'],
    ['aprender',                'ah-pren-DEHR',         'to learn'],
    ['el atardecer',            'el ah-tar-deh-SEHR',   'the dusk'],
    ['todavía',            'toh-dah-VEE-ah',       'still, yet']
  ];

  var el = {
    word: stage.querySelector('.w-word'),
    pron: stage.querySelector('.w-pron'),
    mean: stage.querySelector('.w-mean')
  };
  if (!el.word || !el.pron || !el.mean) return;

  var i = 0, paused = false;

  // The real note pauses when the pointer comes near, so a word never
  // changes out from under you mid-read.
  stage.addEventListener('pointerenter', function () { paused = true; });
  stage.addEventListener('pointerleave', function () { paused = false; });
  document.addEventListener('visibilitychange', function () {
    paused = document.hidden;
  });

  setInterval(function () {
    if (paused) return;
    i = (i + 1) % words.length;
    var w = words[i];
    stage.dataset.swapping = '1';
    setTimeout(function () {
      el.word.textContent = w[0];
      el.pron.textContent = '[' + w[1] + ']';
      el.mean.textContent = w[2];
      stage.dataset.swapping = '0';
    }, 320);
  }, 3000);
})();
