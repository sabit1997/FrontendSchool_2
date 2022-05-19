//  dropdown

const selectBtn = document.querySelector(".favorite-lang");
const selectMenu = document.querySelector(".lang-list");
const selectItem = selectMenu.querySelectorAll("li");

selectBtn.addEventListener("click", () => {
  selectMenu.classList.toggle("active");
  selectBtn.classList.toggle("active");
});

selectItem.forEach((el, i) => {
  selectItem[i].addEventListener("click", () => {
    selectBtn.textContent = selectItem[i].textContent;
  });
});
