//Generate an array with random characters and check for win


var wins = 0;
var money = 1000;
var cost = 5;
var bank = 0;
var profit = 0;

//generate a new array, log the array, check for win, display array, update money
function generate(){
    if (money >= cost){
      var arr1 = [Math.floor(Math.random()*3), Math.floor(Math.random()*3), Math.floor(Math.random()*3)];
      // console.log(arr1);
      check(arr1);
      displayIndex(arr1);
      update();
      profit = money - 1000 + bank;
      displayProfit(profit);
      highLow();
  }
}
//reset
function reset(){
  money = 1000;
  wins = 0;
  bank = 0;
  profit = 0;
  low = 0;
  high = 0;
  arr1 = [0,0,0];
  displayMoney(money);
  displayWins(wins);
  displayBank(bank);
  displayProfit(profit);
  displayIndex(arr1);
  displayLow(low);
  displayHigh(high);
}

//check if the each index is the same
function check(arr1){
  if (arr1[0] == arr1[1] && arr1[0] == arr1[2]){
    // console.log("winner");
    wins += 1;
    displayWins(wins);
    bank += 40;
    displayBank(bank);
  }
}

//change money
function update(){
  money -= cost;
  displayMoney(money);
}


//displays
function displayWins(wins){
  document.getElementById("wins").innerHTML = "Wins: " + wins;
}
function displayMoney(money){
  document.getElementById("money").innerHTML = "Money: " + money;
}
function displayBank(bank){
  document.getElementById("bank").innerHTML = "Bank: " + bank;
}
function displayProfit(profit){
  document.getElementById("profit").innerHTML = "Profit: " + profit;
}
function displayLow(low){
  document.getElementById("low").innerHTML = "Low: " + low;
}
function displayHigh(high){
  document.getElementById("high").innerHTML = "High: " + high;
}
function displayIndex(arr1){
  document.getElementById("[0]").innerHTML = arr1[0];
  document.getElementById("[1]").innerHTML = arr1[1];
  document.getElementById("[2]").innerHTML = arr1[2];
}

//take money from Bank
function fromBank(){
  money += bank;
  displayMoney(money);
  bank *= 0;
  displayBank(bank);
}


//run generate function automatically
//var test = setInterval(generate, 100);
var num = 1;
function autoGen(){
  if(num == 1){
  setInt = setInterval(generate, 100);
  num +=1;
  }
}
function stopGen(){
  if(num != 1){
  clearInterval(setInt);
  num -= 1;
  }
}

var low = 0;
var high = 0;

function highLow(){
  if (profit < low){
    low = profit;
    displayLow(low);
  }
  if (profit > high){
    high = profit;
    displayHigh(high);
  }
}
