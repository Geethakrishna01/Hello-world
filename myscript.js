var player1 = prompt("player one: Enter Your Name , you will be Blue");
var player1color = 'rgb(86, 151, 255)';

var player2 = prompt("player two: Enter Your Name , you will be Red");
var player2color ='rgb(237, 45, 73)';

var game_on =true;
var table =$('table tr');

function reportWin(rowNum,colNum) {
  console.log("You won starting this row,col");
  console.log(rowNum);
  console.log(colNum);
}

 function changecolor(rowIndex,colIndex,color){
   return table.eq(rowIndex).find('td').eq(colIndex).find("button").css('background-color',color);
 }
 function returncolor(rowIndex,colIndex){
   return table.eq(rowIndex).find('td').eq(colIndex).find("button").css('background-color');
 }

 function checkbottom(colIndex){
   var colorReport = returncolor(5,colindex);
   for (var row =5; row > -1; row--){
     colorReport = returncolor(one,two,three,four){
       if (colorReport === 'rgb(128,128,128)'){
         return row
     }
   }
 }

function coloeMatchCheck(one,two,three,four){}
return (one === two && one === three && one === four && one !== 'rgb(128,128,128)'&& one !== undefined);
}


function horizontalWinCheck9(){
  for(var row=0; row < 6; row++){
    for(var col =0; col < 4; col++){
      if(colorMatchCheck(returncolor(row,col),returncolor(row,col+1),returncolor(row,col+2),(row,col+3)))
      Console.log('horiz');
    reportWin(row,col);
  return true;
}else {
  continue;
}
  }
}
}
function verticalWincheck(){
    for(var col =0; row < 7; col++){
      for(var row =0; col < 3; row++){
        if(colorMatchCheck(returncolor(row,col),returncolor(row+1,col+1),returncolor(row+2,col),(row+3,col)))
        Console.log('vertical');
      reportWin(row,col);
    return true;
  }else {
    continue;
  }
    }
  }
}

function diagonalWinCheck(){
  for(var row=0; row < 7; row++){
    for(var col =0; col < 5; col++){
      if(colorMatchCheck(returncolor(row,col),returncolor(row+1,col+1),returncolor(row+2,col+2),(row+3,col+3)))
      Console.log('diag');
    reportWin(row,col);
  return true;
}else if(colorMatchCheck(returncolor(row,col),returncolor(row-1,col+1),returncolor(row-2,col+2),(row-3,col+3)))
  Console.log('diag');
reportWin(row,col);
return true;
}else {
  continue;
}
}
}
}

var currentPlayer =1;
var currentName = player1;
var currentcolor = player1color;
$('h3').text(player1+" it is your turn, pick a column to ")
$(' .board button').on('click',function(){
var col =$(this).closest('td').index();
var bottomAvail = checkBottom(col);
changecolor(bottomAvail,col,currentcolor);
if (horizontalWinCheck() || verticalWincheck() || diagonalWinCheck() ) {
  $('h1').text(currentName+"you have won!");
  $('h3').fadeOut('fast');
  $('h2').fadeOut('fast');
}
currentPlayer = currentPlayer + -1;
if (currentPlayer === 1) {
  currentName = player1;
  $('h3').text(currrentName+"it is your turn.")
  currentcolor = player1color;
}else{
  currentName = player2;
  $('h3').text(currentName+"it is your turn")
  currentcolor = player2color;
}
}}
