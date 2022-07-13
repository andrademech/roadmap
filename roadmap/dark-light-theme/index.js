let dark = document.querySelector("#theme");

dark.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  console.log(dark.getAttribute('src'));
  if(dark.getAttribute('src') == dark.getAttribute('src', 'img/light-btn.png')) {
    dark.setAttribute('src', 'img/dark-btn.png');
  } else {
    dark.setAttribute('src', 'img/light-btn.png');
  }
});
 