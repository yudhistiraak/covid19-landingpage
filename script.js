document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("my-profile");
  button.addEventListener("click", function () {
    var content = document.getElementById("content-profile");
    window.location.href = "#" + content.id;
    content.scrollIntoView({ behavior: "smooth" });
  });

  var button = document.getElementById("cari-tahu");
  button.addEventListener("click", function () {
    var content = document.getElementById("content-cari-tahu");
    window.location.href = "#" + content.id;
    content.scrollIntoView({ behavior: "smooth" });
  });

  var button = document.getElementById("lebih-lanjut");
  button.addEventListener("click", function () {
    var content = document.getElementById("content-penularan");
    window.location.href = "#" + content.id;
    content.scrollIntoView({ behavior: "smooth" });
  });

  var link = document.getElementById("beranda");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var content = document.getElementById("content-beranda");
    window.location.href = "#" + content.id;
    content.scrollIntoView({ behavior: "smooth" });
  });

  var link = document.getElementById("penularan");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var content = document.getElementById("content-penularan");
    window.location.href = "#" + content.id;
    content.scrollIntoView({ behavior: "smooth" });
  });

  var link = document.getElementById("gejala");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var content = document.getElementById("content-gejala");
    window.location.href = "#" + content.id;
    content.scrollIntoView({ behavior: "smooth" });
  });

  var link = document.getElementById("pencegahan");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var content = document.getElementById("content-pencegahan");
    window.location.href = "#" + content.id;
    content.scrollIntoView({ behavior: "smooth" });
  });

  var link = document.getElementById("float-beranda");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var content = document.getElementById("content-beranda");
    window.location.href = "#" + content.id;
    content.scrollIntoView({ behavior: "smooth" });
  });
});
