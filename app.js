const boy = document.querySelector(".boy");
const money = document.querySelector(".money");
const cursor = document.querySelector(".cursor")
const cycle = document.querySelector(".cycle")

window.addEventListener('mousedown', e=>{
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x, y);
    cursor.style.top = `${y - 20}px`
    cursor.style.left = `${x - 25}px`
})
money.addEventListener('mousedown', setCordination);

const bodyX = document.body.clientWidth;
const bodyY = document.body.clientHeight;

setCordination()
function setCordination(){
    let randomX = Math.floor(Math.random() * bodyX);
    let randomY = Math.floor(Math.random() * bodyY);
    console.log(randomX, randomY);

    money.style.top = `${randomY}px`;
    money.style.left = `${randomX}px`
}
