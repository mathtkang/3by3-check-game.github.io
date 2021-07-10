const boxes = document.querySelectorAll(".parent div");
const score_board = document.querySelector("#score_board");
const miss_board = document.querySelector("#miss_board");
const flags = Array(9);
const correct = new Map(//객체화
  [
    ["7", 0], ["8", 1], ["9", 2],
    ["4", 3], ["5", 4], ["6", 5],
    ["1", 6], ["2", 7], ["3", 8]
  ]);
let score = 0;
let miss = 0;
console.log(boxes);

flags.fill(0);

//색칠하는 함수
function draw(){
    for (let i = 0; i < 9; i++){
        if(flags[i] === 1){
            boxes[i].style.backgroundColor = "blue";
        } else {
            boxes[i].style.backgroundColor = "white";
        }
    }
    //score점수 나오도록
    score_board.innerText = `점수 : ${score}`;
    miss_board.innerText = `놓친 개수 : ${miss}`;
}


setInterval(function () {
  for (let i = 0; i < 9; i++){
    if(flags[i] === 1) miss++;
    flags[i] = 0;
  }

    const rand1 = Math.floor(Math.random() * 9); //0~1사이의 난수 *9 곱해주고 소숫점 날려줌
    flags[rand1] = 1;

    draw();
}, 1500);

window.addEventListener("keydown", function(e){
    const keytype = e.key;
    const idx = correct.get(keytype);//없으면 값이 나오고, 없으면 undefined

    if (idx === undefined) return;
    if (flags[idx] === 1){
        score += 1;
        flags[idx] = 0;
        draw();

    }
});