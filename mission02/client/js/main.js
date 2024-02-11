
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const nickName = document.querySelector('.nickName');
const mainImg = document.querySelector('.mainImg');
const nav = document.querySelector('.nav');
const ul = document.querySelector('ul');

function setBgColor(e){
    const li = e.target.closest('li');
    if(!li) return;
    const index = li.dataset.index
    const colorList = [data[index-1].color[0],data[index-1].color[1]];
    document.body.style.background = `linear-gradient(to bottom, ${colorList[0]}, ${colorList[1]})`;
}

function setImage(e){
    const li = e.target.closest('li');
    if(!li) return;
    const index = li.dataset.index
    mainImg.src = `./assets/${data[index-1].name}.jpeg`;
    mainImg.alt = data[index-1].alt;
    const ulNodeList = Array.from(ul.children);
    ulNodeList.forEach(item => {
        if(item.classList.contains('is-active')) item.classList.remove('is-active');
    })
    e.target.closest('li').classList.add('is-active');
}

function setNameText(e){
    const li = e.target.closest('li');
    if(!li) return;
    const index = li.dataset.index
    const colorList = [data[index-1].color[0],data[index-1].color[1]];
    nickName.textContent = data[index-1].name;
    nickName.style.color = colorList[0];
    nickName.style.backgroundColor = colorList[1];
}

nav.addEventListener('click',setBgColor);
nav.addEventListener('click',setImage);
nav.addEventListener('click',setNameText);









