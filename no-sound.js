/* LikeStays — videos always play WITHOUT sound (no music, no copyright issues).
   Load this in <head> BEFORE other scripts. It forces every <video>/<audio> element silent,
   even if other page code tries to unmute, and hides the sound buttons. */
(function () {
  try {
    var mDesc = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'muted');
    var vDesc = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'volume');
    if (mDesc && mDesc.set) {
      Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
        configurable: true, enumerable: mDesc.enumerable,
        get: function () { return true; },
        set: function () { mDesc.set.call(this, true); }
      });
    }
    if (vDesc && vDesc.set) {
      Object.defineProperty(HTMLMediaElement.prototype, 'volume', {
        configurable: true, enumerable: vDesc.enumerable,
        get: function () { return 0; },
        set: function () { vDesc.set.call(this, 0); }
      });
    }
    var silence = function (el) {
      try {
        if (!el || !el.tagName) return;
        var t = el.tagName;
        if (t !== 'VIDEO' && t !== 'AUDIO') return;
        el.defaultMuted = true;
        el.setAttribute('muted', '');
        if (mDesc && mDesc.set) mDesc.set.call(el, true);
        if (vDesc && vDesc.set) vDesc.set.call(el, 0);
        if (t === 'VIDEO') el.setAttribute('controlsList', 'nodownload noremoteplayback');
      } catch (e) {}
    };
    var sweep = function (root) {
      try { (root || document).querySelectorAll('video,audio').forEach(silence); } catch (e) {}
    };
    // every media event on the page → make sure it is silent
    ['play', 'playing', 'loadstart', 'loadedmetadata', 'volumechange'].forEach(function (ev) {
      document.addEventListener(ev, function (e) { silence(e.target); }, true);
    });
    // elements created later (feed cards, details video, previews)
    new MutationObserver(function (list) {
      list.forEach(function (m) {
        m.addedNodes && m.addedNodes.forEach(function (n) {
          if (n.nodeType !== 1) return;
          silence(n);
          if (n.querySelectorAll) sweep(n);
        });
      });
    }).observe(document.documentElement, { childList: true, subtree: true });
    document.addEventListener('DOMContentLoaded', function () { sweep(); });
    // hide every sound button / volume control
    var st = document.createElement('style');
    st.textContent = '.feed-mute,.reel-mute,.mute-on,.mute-off{display:none!important}' +
      'video::-webkit-media-controls-mute-button,video::-webkit-media-controls-volume-slider,video::-webkit-media-controls-volume-control-container,video::-webkit-media-controls-volume-control-hover-background{display:none!important}';
    document.head.appendChild(st);
    window.LS_NO_SOUND = true;
  } catch (e) {}
})();
