/* Experiência 4x4 — interações da landing page */
(function () {
  "use strict";

  /* Header: muda estilo ao rolar */
  var nav = document.querySelector("header.nav");
  var onScroll = function () {
    if (window.scrollY > 30) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  var burger = document.querySelector(".burger");
  var links = document.querySelector(".nav-links");
  if (burger) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        burger.classList.remove("open");
        links.classList.remove("open");
      });
    });
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq button").forEach(function (b) {
    b.addEventListener("click", function () {
      var item = b.parentElement;
      var wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq").forEach(function (f) {
        f.classList.remove("open");
      });
      if (!wasOpen) item.classList.add("open");
    });
  });

  /* Galeria lightbox */
  var lb = document.querySelector(".lightbox");
  var lbImg = lb ? lb.querySelector("img") : null;
  document.querySelectorAll(".gallery a, .feedback").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var img = a.querySelector("img");
      if (lb && lbImg && img) {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lb.classList.add("open");
      }
    });
  });
  if (lb) {
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lb-close")) {
        lb.classList.remove("open");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") lb.classList.remove("open");
    });
  }

  /* Reveal on scroll */
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    io.observe(el);
  });

  /* Ano atual no rodapé */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
