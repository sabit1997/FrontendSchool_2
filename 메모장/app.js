const inputTitle = document.querySelector('#title');
const inputContent = document.querySelector('#content');
const uploadButton = document.querySelector('.upload-button');
const saveText = document.querySelector('.save-text');

let titlesArr = [];
let contentsArr = [];
let timesArr = [];

function saveArr() {
  const titles = inputTitle.value;
  const contents = inputContent.value;
  const now = new Date();
  const times = JSON.stringify(now.toLocaleString('ko-KR'));
  titlesArr.push(titles);
  contentsArr.push(contents);
  timesArr.push(times);
}

function saveArticle() {
  window.localStorage.setItem('title', JSON.stringify(titlesArr));
  window.localStorage.setItem('contents', JSON.stringify(contentsArr));
  window.localStorage.setItem('times', JSON.stringify(timesArr));
}

function deleteArticle(event) {
  li = event.target.parentElements;
  li.remove();
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
    // // 나타내기
    const parseTitle = JSON.parse(window.localStorage.getItem('title'));
    const parseContents = JSON.parse(window.localStorage.getItem('contents'));
    const parseTimes = JSON.parse(window.localStorage.getItem('times'));
    // 엘레먼트 만들기
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteArticle);
    parseTitle.forEach((element) => {
      h3.textContent = element;
    });
    parseContents.forEach((element) => {
      p.textContent = element;
    });
    parseTimes.forEach((element) => {
      span.textContent = element;
    });
    titlesArr = parseTitle;
    contentsArr = parseContents;
    timesArr = parseTimes;
    // 위치 시키기
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(button);
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
