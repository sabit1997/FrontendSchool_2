//  dropdown

const selectBtn = document.querySelector(".favorite-lang");
const selectMenu = document.querySelector(".lang-list");

selectBtn.addEventListener("click", () => {
  selectMenu.classList.toggle("active");
  selectBtn.classList.toggle("active");
});
