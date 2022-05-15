//  dropdown

const selectBtn = document.querySelector(".favorite-lang");
const selectMenu = document.querySelector(".lang-list");

selectBtn.addEventListener("click", () => {
  selectMenu.classList.toggle("active");
  selectBtn.classList.toggle("active");
});

// 선택 기능
//  나중에 더 간단하게 짜보기!
let selectItem = document.querySelectorAll(".list-item");
selectItem[0].addEventListener("click", () => {
  selectBtn.textContent = selectItem[0].textContent;
});
selectItem[1].addEventListener("click", () => {
  selectBtn.textContent = selectItem[1].textContent;
});
selectItem[2].addEventListener("click", () => {
  selectBtn.textContent = selectItem[2].textContent;
});
selectItem[3].addEventListener("click", () => {
  selectBtn.textContent = selectItem[3].textContent;
});
selectItem[4].addEventListener("click", () => {
  selectBtn.textContent = selectItem[4].textContent;
});
