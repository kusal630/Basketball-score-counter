let displayEl = document.getElementById('display1')
let count=0

function increment1(){
  count+=1
  displayEl.textContent = count
}

function increment2(){
  count+=2
  displayEl.textContent = count
}

function increment3(){
  count+=3
  displayEl.textContent = count
}

let display2El = document.getElementById('display2')
let count1=0
function increment11(){
  count1+=1
  display2El.textContent = count1
}

function increment22(){
  count1+=2
  display2El.textContent = count1
}

function increment33(){
  count1+=3
  display2El.textContent = count1
}

function newgame(){
  count=0
  count1=0
  displayEl.textContent = count
  display2El.textContent = count1
}