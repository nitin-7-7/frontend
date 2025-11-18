const chessboard = document.querySelector(".main");
const FirstRow = `<div class = box></div>`.repeat(8);
const SecondRow = `<div class="rbox"></div>`.repeat(8);

const CompleteRow = `${FirstRow} ${SecondRow}`.repeat(4);
chessboard.innerHTML = CompleteRow; 
