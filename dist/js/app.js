(() => {
  "use strict";
  (window.FLS = !0),
    (function (A) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          A(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (A) {
      let e = !0 === A ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    });
})();
