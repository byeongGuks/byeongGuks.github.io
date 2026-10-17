document.querySelectorAll(".bib-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var pre = btn.closest(".body").querySelector("pre.bibtex");
    pre.classList.toggle("open");
  });
});
(function () {
  var root = document.documentElement;
  var moon = document.getElementById("icon-moon"), sun = document.getElementById("icon-sun");
  function sync() {
    var dark = root.getAttribute("data-theme") === "dark";
    moon.style.display = dark ? "none" : "block";
    sun.style.display = dark ? "block" : "none";
  }
  sync();
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
})();
