
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Old Free Fire 2018!");

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      console.log("Navigating to " + link.hash);
    });
  });
});
