/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/


const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

const userID = document.querySelector('.user-email-input');
const userPW = document.querySelector('.user-password-input');
const loginBTN = document.querySelector('.btn-login');

//1. email 정규표현식을 사용한 조건처리
function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase())
}

function validID(e){
  e.preventDefault();
  if(!emailReg(userID.value)){
    userID.classList.add('is--invalid')
  }else if(emailReg(userID.value)){
    userID.classList.remove('is--invalid')
    return emailReg(userID.value)
  }
}
userID.addEventListener('input', validID);

//2. pw 정규표현식을 사용한 validation
function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function validPW(e){
  e.preventDefault();
  if(!pwReg(userPW.value)){
    userPW.classList.add('is--invalid')
  }else if(pwReg(userPW.value)){
    userPW.classList.remove('is--invalid')
    return pwReg(userPW.value)
  }
}
userPW.addEventListener('input', validPW);

//3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교

function handleLogin(e){
  e.preventDefault();
  emailReg(userID.value) && user.id === userID.value ? userID.classList.remove('is--invalid') : userID.classList.add('is--invalid')
  pwReg(userPW.value) && user.pw === userPW.value ? userPW.classList.remove('is--invalid') : userPW.classList.add('is--invalid')

  if(user.id === userID.value && user.pw === userPW.value){
    window.location.href = 'welcome.html';
  }
}
loginBTN.addEventListener('click',handleLogin)


