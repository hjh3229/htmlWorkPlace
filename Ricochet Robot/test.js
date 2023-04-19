const startButton = document.querySelector('.button-start');
const createButton = document.querySelector('.button-create');
const mainSection = document.querySelector('.main');
const gameSection = document.querySelector('.game');
const logoSection = document.querySelector('.logo');
const inputName = document.querySelector('.input-name');
const playerName = document.querySelector('.player-name');
const customSection = document.querySelector('.game-custom');
const boardSection = document.querySelector('.game-board');
const gameStartButton = document.querySelector('.button-game-start');
const copyButton = document.querySelector('.button-copy');
const chatInput = document.getElementById('chat-input');
const chatBox = document.querySelector('.chat-box');
const submitButton = document.getElementById('submit-button');

function handleStartButtonClick() {
  logoSection.style.display = 'none'; // flex -> none
  mainSection.style.display = 'none'; // flex -> none
  gameSection.style.display = 'block'; // none -> block
};

function gameStartButtonClick() {
  customSection.style.display = 'none'; // block -> none
  boardSection.style.display = 'flex'; // none -> flex
};

function addRandomAddress() {
  var randomNumber = Math.floor(Math.random() * 1000000000000); // 999,999,999,999 까지의 난수 생성
  var homepageUrl = window.location.origin; // 현재 홈페이지 url
  var randomAddress = '/' + randomNumber; // /뒤에 난수 추가
  var newUrl = homepageUrl + randomAddress; // 현재 홈페이지 url에 랜덤 주소 추가
  
  window.location.href = newUrl; // 주소를 위 새로운 랜덤 주소로 바꿈
};

startButton.addEventListener('click', handleStartButtonClick); // 메인화면 시작 버튼 클릭시 게임 시작

createButton.addEventListener('click',handleStartButtonClick,addRandomAddress); // 메인화면 방 만들기 버튼 클릭시 게임 시작

gameStartButton.addEventListener('click', gameStartButtonClick); // 커스텀 화면 시작 버튼 클릭시 게임 시작

copyButton.addEventListener('mouseover', function() {
  copyButton.innerText = window.location.href;
}); // 링크 복사하기 버튼 위에 마우스를 올릴 때 링크 표시

copyButton.addEventListener('mouseout', function() {
  copyButton.innerText = '링크 복사하기';
}); // 마우스를 내렸을 때 글자 되돌리기

copyButton.addEventListener('click', function() {
  navigator.clipboard.writeText(window.location.href).then(function() {
    console.log('Link copied to clipboard');
  }, function() {
    console.error('Failed to copy link to clipboard');
  });
}); // 링크 복사하기 버튼 클릭 시 현 주소를 복사하고 성공시, 실패시 콘솔 메시지 설정

inputName.addEventListener('input', (event) => {
  playerName.innerHTML = event.target.value;
}); // 이름 입력 및 저장

submitButton.addEventListener('click', function() {
  let message = chatInput.value; 
  // 채팅 입력

  let chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message');
  chatMessage.innerText = message;
  // 메시지 저장

  chatBox.appendChild(chatMessage); // 채팅창에 메시지가 들어갈 위치 생성

  chatInput.value = '';
}); // 전송 버튼 클릭 시 채팅 입력하는 함수 생성 및 실행

chatInput.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) { // 13 is the code for the enter key
    submitButton.click();
  }
}); // 엔터키를 누를 경우 채팅 입력 기능