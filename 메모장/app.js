const inputTitle = document.querySelector('#title');
const inputContent = document.querySelector('#content');
const uploadButton = document.querySelector('.upload-button');
const saveText = document.querySelector('.save-text');

const titlesArr = [];
const contentsArr = [];
const timesArr = [];

function saveArr() {
  const titles = JSON.stringify(inputTitle.value);
  const contents = JSON.stringify(inputContent.value);
  const now = new Date();
  const times = JSON.stringify(now.toLocaleString('ko-KR'));
  titlesArr.push(titles);
  contentsArr.push(contents);
  timesArr.push(times);
}

function saveArticle() {
  window.localStorage.setItem('title', titlesArr);
  window.localStorage.setItem('contents', contentsArr);
  window.localStorage.setItem('times', timesArr);
}

uploadButton.addEventListener('click', () => {
  if (inputTitle.value === '' && inputContent.value === '') {
    inputTitle.classList.add('error');
    inputContent.classList.add('error');
  } else if (inputTitle.value === '') {
    inputTitle.classList.add('error');
  } else if (inputContent.value === '') {
    inputContent.classList.add('error');
  } else {
    saveArr();
    saveArticle();
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const span = document.createElement('span');
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(span);
    saveText.appendChild(li);
    inputTitle.value = '';
    inputContent.value = '';
  }
});

inputTitle.addEventListener('input', () => {
  inputTitle.classList.remove('error');
});

inputContent.addEventListener('input', () => {
  inputContent.classList.remove('error');
});
