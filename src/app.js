/*@TODO
    - 알파벳별 단어 모아보기 (일렬로? 한개씩?)
    - S1, S2, S3순으로 공부하기
    - W1, W2, W3순으로 공부하기
    - 단어 무작위로 보기 (하나씩 넘기기)
    - 단어뜻과 예문 필요... 링크를 삽입해야 할까?
    - 품사 뜻을 알려주는 페이지도 필요할 것 같음
    - longman3000에 대해서 알려주는 곳
    - s1, w1 등에 대해 알려주는 곳
    - 자기만의 단어장 기능이 있었으면 좋겠다. 예)못 외우는 거 저장
    - 로그인 기능 필요
*/


// top버튼 함수
const topBtn = document.querySelector('.topBtn');

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// json파일 받아오는 함수
function loadData() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.words);
}

// 테이블에 string 업데이트 시켜주는 함수
function inputData(words) {
  const container = document.querySelector('.words');
  container.innerHTML = words.map((word) => inputHtmlString(word)).join('');
}

// string 넣어주는 함수
function inputHtmlString(word) {
  return `
  <tr class="word">
    <td class="column1">${word.word}</td>
    <td class="column2">${word.partOfSpeech}</td>
    <td class="column3">${word.spokenLevel}</td>
    <td class="column4">${word.writtenLevel}</td>
  </tr>
  `;
}

function setEventListeners(words) {
  const logo = document.querySelector('.logo');
  // const buttons = document.querySelector('nav');
  logo.addEventListener('click', () => inputData(words));
  // buttons.addEventListener('click', () => onButtonClick(event, words));
}

// main
loadData()
  .then((words) => {
    inputData(words);
    setEventListeners(words);
  })
  .catch(console.log);

// 이용법 click했을 때
const howToUseBtn = document.querySelector('#howToUseBtn');
const howToUseDropdown = document.querySelector('#howToUseDropdown');
howToUseBtn.addEventListener('click', (event) => {
  if (this.active) {
    howToUseDropdown.classList.remove('active');
  } else {
    howToUseDropdown.classList.add('active');
  }

  this.active = !this.active;
});
howToUseDropdown.active = false;

// 이용법 외부 아무 곳이나 click했을 때
document.addEventListener("click", (event) => {
  if(event.target == howToUseBtn && howToUseDropdown.style.display != "block"){
    howToUseDropdown.style.display = "block";
  }
  else{
    howToUseDropdown.style.display = "none";
  }
});

// 품사 도움말 click했을 때
const partOfSpeechBtn = document.querySelector('#partOfSpeechBtn');
const partOfSpeechDropdown = document.querySelector('#partOfSpeechDropdown');
partOfSpeechBtn.addEventListener('click', (event) => {
  if (this.active) {
    partOfSpeechDropdown.classList.remove('active');
  } else {
    partOfSpeechDropdown.classList.add('active');
  }

  this.active = !this.active;
});
partOfSpeechDropdown.active = false;

// 품사 도움말 외부 아무 곳이나 click했을 때
document.addEventListener("click", (event) => {
  if(event.target == partOfSpeechBtn && partOfSpeechDropdown.style.display != "block"){
    partOfSpeechDropdown.style.display = "block";
  }
  else{
    partOfSpeechDropdown.style.display = "none";
  }
});

// SL? WL? click했을 때
const slwlBtn = document.querySelector('#slwlBtn');
const slwlDropdown = document.querySelector('#slwlDropdown');
slwlBtn.addEventListener('click', (event) => {
  if (this.active) {
    slwlDropdown.classList.remove('active');
  } else {
    slwlDropdown.classList.add('active');
  }

  this.active = !this.active;
});
slwlDropdown.active = false;

// SL? WL? 외부 아무 곳이나 click했을 때
document.addEventListener("click", (event) => {
  if(event.target == slwlBtn && slwlDropdown.style.display != "block"){
    slwlDropdown.style.display = "block";
  }
  else{
    slwlDropdown.style.display = "none";
  }
});




function dropdown (btn, menu) {
  btn.addEventListener('click', (event, menu) => {
    if (this.active) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  
    this.active = !this.active;
  });
  menu.active = false;
  
  document.addEventListener("click", (event, btn, menu) => {
    // const IsdisplayOn: Boolean = true
    // dropMenuOn(wl|ls type … ), dropMenuOff()
    if(event.target == btn && menu.style.display != "block"){
      menu.style.display = "block";
    }
    else{
      menu.style.display = "none";
    }
  });
}