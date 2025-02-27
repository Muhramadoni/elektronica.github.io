const navbarlink = document.querySelector(".navbar-link");

document.querySelector("#menu").onclick = () => {
  navbarlink.classList.toggle("active");
};

const sidebar = document.querySelector("#menu");
document.addEventListener("click", function (klik_event) {
  if (!sidebar.contains(klik_event.target) && !navbarlink.contains(klik_event.target)) {
    navbarlink.classList.remove("active");
  }
});
