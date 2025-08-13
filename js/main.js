// All component loading is done here
fetch("components/navbar.html")
  .then((r) => r.text())
  .then((d) => (document.getElementById("navbar-placeholder").innerHTML = d));

fetch("components/hero.html")
  .then((r) => r.text())
  .then((d) => (document.getElementById("hero-placeholder").innerHTML = d));

fetch("components/services.html")
  .then((r) => r.text())
  .then((d) => {
    document.getElementById("services-placeholder").innerHTML = d;
    initServices(); // Call from services.js
  });

fetch("components/about.html")
  .then((r) => r.text())
  .then((d) => (document.getElementById("about-placeholder").innerHTML = d));

fetch("components/ourPartners.html")
  .then((r) => r.text())
  .then(
    (d) => (document.getElementById("our-partners-placeholder").innerHTML = d)
  );

fetch("components/mediaCenter.html")
  .then((r) => r.text())
  .then(
    (d) => (document.getElementById("mediaCenter-placeholder").innerHTML = d)
  );

fetch("components/footer.html")
  .then((r) => r.text())
  .then((d) => (document.getElementById("footer-placeholder").innerHTML = d));
