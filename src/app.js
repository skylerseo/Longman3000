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
*/

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