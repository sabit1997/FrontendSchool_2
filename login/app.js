// keep-button

const keep = document.querySelector('.check-icon');

keep.addEventListener('click', function () {
  keep.classList.toggle('filled');
});

// login page

function opengooglePop() {
  window.open(
    'https://www.google.com/',
    'google login',
    'width=500px,height=500px,scrollbars=yes top=250px left=850px'
  );
}

function openfacebookPop() {
  window.open(
    'https://www.facebook.com/',
    'facebook login',
    'width=500px,height=500px,scrollbars=yes top=250px left=850px'
  );
}

function opennaverPop() {
  window.open(
    'https://www.naver.com/',
    'naver login',
    'width=500px,height=500px,scrollbars=yes top=250px left=850px'
  );
}

function openkakaoPop() {
  window.open(
    'https://www.kakaocorp.com/page/service/service/KakaoTalk',
    'kakao login',
    'width=500px,height=500px,scrollbars=yes top=250px left=850px'
  );
}

// modal 켜짐

const modal = document.querySelector('.login-page');
const btnModal = document.querySelector('#box-login-button');
btnModal.addEventListener('click', (e) => {
  modal.style.display = 'flex';
});

// modal 꺼짐
// 나중에 작성해보기...
