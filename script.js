/*@TODO
    - 알파벳별 단어 모아보기 (일렬로? 한개씩?)
    - S1, S2, S3순으로 공부하기
    - W1, W2, W3순으로 공부하기
    - 단어 무작위로 보기 (하나씩 넘기기)
    - 단어뜻과 예문 필요... 링크를 삽입해야 할까? 바로 그 페이지와 함께 뜨게 해야 하나
    - 품사 뜻을 알려주는 페이지도 필요할 것 같음
    - longman3000에 대해서 알려주는 곳
    - s1, w1 등에 대해 알려주는 곳
    - pdf의 단어들이 3000개라 도저히 수작업으로 단어를 정리할 수 없음. 단어와 품사, 스피킹과 롸이팅을 분리하는 기능 필요.
    - 자기만의 단어장 기능이 있었으면 좋겠다. 예)못 외우는 거 저장
*/

$(document).ready(function () {
  const howToUse = $("#howToUseBtn");
  const partOfSpeech = $("#partOfSpeechBtn");
  const slwl = $("#slwlBtn");

  //이용법
  howToUse.on("click", function () {
    if ($(".howToUsePop").css("display") === "none") {
      $(".howToUsePop").show();
    } else {
      $(".howToUsePop").hide();
    }
  });

  //품사 도움말
  partOfSpeech.on("click", function () {
    if ($(".partOfSpeechPop").css("display" === "none")) {
      $(".partOfSpeechPop").show();
    } else {
      $(".partOfSpeechPop").hide();
    }
  });

  //S1~3, W1~3 도움말
  slwl.on("click", function () {
    if ($(".slwlPop").css("display" === "none")) {
      $(".slwlPop").show();
    } else {
      $(".slwlPop").hide();
    }
  });
});
