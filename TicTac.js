window.onload = function() {    //   // The function executes when window is loaded   // when usser press new game the script starts here
	//1. Initial states
	var num;                   // hold the number of canvas it exist (so 9 here)
	var box;                  //  It will hold the canvas element that was clicked by the user. 
	var ctx;                  // Canvas, make that we can draw in canvas 
	var turn = 1;             // The turn number, if it's not even human, and if it's even than it's ai that playes.          //
	var gameOver = false;  //  If true, the game should end.  
	var human = 'X';      // The symbol value this object give
	var ai = 'O';        // The symbol value this object give
	var result = {};    // 
	var filled = new Array(); // hold value if a box has a value or not 
	var symbol = new Array();  // Hold value saying wwhich symbol each box holds. 
	var winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];   //  These ar the winning pattern in the tic tac toe.		


	for(var i=0; i<9; i++) {                                                       //  loopes through the filled and symbol arrays, 9 times because of 9 canvas boxes 
		filled[i] = false;                                                       //  Put all the canvas boxes as empty array
		symbol[i] = '';                                                            // Put all symbol as empty in the array
	}

	//------------------------------------------------------------------------------------------------------------------------------------//
	//newGame - event + function
	var n = document.getElementById("new");               // find the button with id "new" and assign it to the variable n
	n.addEventListener("click",newGame);                  // add eventlistner to the varaible n, when button is pressed the function newGame will start 
	
	//Reload page
	function newGame() {                                // the function get started when user press new game 
		document.location.reload();                     // refresh the site, the script start above. 
	}

	//------------------------------------------------------------------------------------------------------------------------------------//


	
	//Canvas click + retrieving the box's number 
	//canvas click event

		          
// Find the id Tic=(all canvas) and add eventlistner to that. When a canvas is pressed in start  event object 
			document.getElementById("tic").addEventListener("click",function(e){  
				boxClick(e.target.id);
		// it start the function e that is event object. 
		// this calls for the boxClick function and send argument with it. The argument is the id of the canvas that was clicked. 
		// e.target.id says that the element that started the function what is the target id of that element. 
	});

	



	//2.Drawing X's and O's
	//Draw X
	function drawX() {             //the method/function drawX
		box.style.backgroundColor = "#fb5181";  // box is the id of the canvas, given in the function that started drawX (boxClick). Here we change background color
		ctx.beginPath();                       // begin the ctx 
		ctx.moveTo(15,15);                     // move the pen 15 from x and 15 from y
		ctx.lineTo(85,85);                   // draw to x 85 and y 85
		ctx.moveTo(85,15);                   // move the pen to x 85 and y 15
		ctx.lineTo(15,85);                  // draw from x 15 to y85
		ctx.lineWidth = 21;                // the width of the line 
		ctx.lineCap = "round";            // the line have round edge 
		ctx.strokeStyle = "white";        // white color of the line 
		ctx.stroke();                    // make the execution of the draw 
		ctx.closePath();                // close the ctx


		// EXTRA the ctx know where to draw on the element since it tells what id it should draw in the function boxClick
		
		symbol[num-1] = human;   // symbol array, gets the human value that is x and fills it in the array. The num value is given in the function "boxClick" that called the 
		// function Drawx. the reason behind -1 is that the num is based on the canvas and the first canvas starts on 1 and not 0 
	}
	
	//Drawing O
	function drawO(next) {
		box.style.backgroundColor = "#93f273";     // background color of the box
		ctx.beginPath();                // begin ctx
		ctx.arc(50,50,35,0,2*Math.PI);       // draw a circle 
		ctx.lineWidth = 20;                // width
		ctx.strokeStyle = "white";            // color of the circle 
		ctx.stroke();                       // execute 
		ctx.closePath();                 // close 
		
		symbol[next] = ai;  // the array symbol that contains all the information which player has clicked on a box update the array. The next value is the id that the function
		// drawO recived. The symbol array take thid id, and insert that it was ai that clicked here, since draw0 is for ai. 
		// symbol[5]=ai. this means that ai pressed on the sixth element, and this element was clicked by AI 
		
		}
	
	//3.Winner check function         // this is a function that gets called in the script, this function also recived 2 arguments 
	function winnerCheck(symbol,player) {                     // this function recived two arguments 
		for(var j=0;j<winner.length;j++) {                   // for loop, the winner arrays lenght, since it need to check all the possibilties in that array to clarify win or not 
			if((symbol[winner[j][0]] == player) && (symbol[winner[j][1]] == player) && (symbol[winner[j][2]] == player)) {  // 2 dimensionall array, check array 0 and box 0,1,2 in that array
// than it check arraybox 2 and in that box it check 0,1,2. Than his compare it to the "player" which is an argument it recived. This argument is x or o, to identifie which player it's 
// if all 3 arrays has been true with the player then, player has won. Since the win array contain for exampel 0,1,2, that say this is 3 in a row=win. It compare these
// spots with player to see if all these 3 spots is equal to player. If yes, than player hos won. 

				return true;   // return true if a player has win 
			} 
		}
		return false;   // return false if a player has lost.
	}



	//4.Box click function - human playing // since it's listening for clicks from the mouse, and that comes from a player 
	function boxClick(numId) {             // this function gets called by from the script, the script also send arguments to the function(e.target.id) which is the id of the element
		box = document.getElementById(numId);  // box contain the id that the function recived 
		ctx = box.getContext("2d");            // The box tells the ctx which canvas element should be drawed. The getContext ("2d") says that this can be drawed on
		switch(numId) {                        // switch, with argument id, the id is the id of the element pressed
			case "canvas1": num = 1;           // when the id is canvas1 the num gets =1 
							break;            
			case "canvas2": num = 2;		  // when the id is canvas2 the num gets =2 
							break;
			case "canvas3": num = 3;          // when the id is canvas3 the num gets =3
							break;
			case "canvas4": num = 4;          // when the id is canvas4 the num gets =4
							break;
			case "canvas5": num = 5;           // when the id is canvas5 the num gets =5
							break;
			case "canvas6": num = 6;          // when the id is canvas6 the num gets =6
							break;
			case "canvas7": num = 7;          // when the id is canvas7 the num gets =7
							break;
			case "canvas8": num = 8;         // when the id is canvas8 the num gets =8
							break;
			case "canvas9": num = 9;      // when the id is canvas9 the num gets =9
							break;
		}
		
		if(filled[num-1] === false) {          // if the id is 7 the num is 7 from code above, we have to take -1 since filled array starts on 0 and not canvas. 
			// if it's false, it means that the canvas is empty 
			if(gameOver === false) {    // check if it's gameover, if not, it continues with the value false 
				if(turn%2 !== 0) {      // check who is the player turn%2 is not equal to even number=human, even number=AI 
					drawX();           // start the drawx function
					turn++;           // increase the turn number, so it's ai turn this time
					filled[num-1] = true;    // fill the array with value true in the box number num-1 (canvas number-1)
					
					if(winnerCheck(symbol,symbol[num-1]) === true) {    // Control if there is a winner, start the function winnerCehck and send argument the symbol array 
						//and symbol [num-1]-that is the player (x or o). The true of the function is send on the function it called 
						document.getElementById("result").innerText = "Player '" + symbol[num-1] + "' won!";   // adjust the object with text of there is a winner 
						gameOver = true;           // give gamover true statement since the game is over, since of a winner. 
						
					}
					
					if(turn > 9 && gameOver !== true) {   // check if there is a draw, turn can not exeed 9
						document.getElementById("result").innerText = "GAME OVER! IT WAS A DRAW!";
						return;
					}
					
					if(turn%2 == 0) {// check if it's ai turn to play 2/2=0
						playAI();   // another ai function 
					}
				}
			}
			else {
				alert("Game over. Please click the New Game button to start again");     // if it was game over 
			}
		}
		else {
			alert("This box was already filled. Please click on another one.")   // if a box is filled 
		}
	}


	           //Find the empty boxes in the game /// AI use this. 
	//5. Find the empty boxes


    function emptyBoxes(newSymbol) { // function that gets called, this function receive an argument as array(this array is symbol array, contains what syymbol each canvax box has/has nott)
        var j = 0; 
        var empty =[];    // creeate a new array, that will contain what canvax boxes ar actually empy: This is the ai eye and this array is only local array
        for(var i=0;i<newSymbol.length;i++ ){              // loops through the array that came from argument(contains symbols)

            if(newSymbol[i] !== "X" && newSymbol[i] !== "O"){  // look at the recived array if it contains symbols 
                // if newSymbol[0] contains x or o, the script will jump away from the if statement 
                // if newSymbol[3] does not contain X or Y, the script will procedd with the if statement 
                 
				empty [j]= i;

				
                // the new created array empty  will have new value empty[0]=4
                // if newSymbol[4] does not contain X or Y
                 // the new created array Emty will have new value empty[1]=5
                j++    // add on thje j value, that define where in the new created array empty that new value should be inserted to.
            }

        }
        return empty;  // return the array. 


    }


	 /// MAKE THE AI PLAY


//playAI()
function playAI() {
    //symbol = ['X','','O','O','','O','','X','X'], 'O'
    //nextMove = {id:4,score:10}
    var nextMove = miniMax(symbol,ai); //object that stores id of next move and score of the box for next move
    var nextId = "canvas" + (nextMove.id + 1);
    box = document.getElementById(nextId);
    ctx = box.getContext("2d");
    if(gameOver === false) {
        if(turn%2 === 0) { //if turn is even
            drawO(nextMove.id);
            turn++;
            filled[nextMove.id] = true;
            
            //winner check - ai wins
            if(winnerCheck(symbol, symbol[nextMove.id]) === true) {
                document.getElementById("result").innerText = "Player '" + symbol[nextMove.id] + "' won!";
                gameOver = true;
            }
            
            //draw condition
            if(turn > 9 && gameOver !== true) {
                document.getElementById("result").innerText = "GAME OVER! IT WAS A DRAW!";
            }
        }
    }
    
    else {
        alert("Game is over. Please click the New Game button to start again");
    }
}

//Minimax function 
//For this example/explanation, AI - X, human - O
//symbol = ['X','','O','X','','O','','X','X'], 'O' -> human
function miniMax(newSymbol, player) {
    var empty = [];
    empty = emptyBoxes(newSymbol); //[]
    
    if(winnerCheck(newSymbol,human)) {
        return { score: -10 }; //human wins
    }
    else if(winnerCheck(newSymbol,ai)) {
        return { score: 10 }; //AI wins
    }
    else if(empty.length === 0) {
        if(winnerCheck(newSymbol,human)) {
            return { score: -10 };
        }
        else if(winnerCheck(newSymbol,ai)) {
            return { score : 10 };
        }
        return { score: 0 }; //game is draw
    }
    
    //if its not a terminal state
    //possible moves- their indices and score values
    var posMoves = []; 
    //[4] - Example
    for(var i=0; i<empty.length; i++) {
        //current move - index of current move,score
        var curMove = {};
        //generate the new board with the current move
        curMove.id = empty[i]; //4
        newSymbol[empty[i]] = player; //AI
        
        if(player === ai) {
            //result = [{id:4,score:-10}], 
            //curMove = {id:1,score:-10}
            result = miniMax(newSymbol, human); //index and score
            curMove.score = result.score; //10
        }
        else {
            //result = [{id:6, score:10}]
            //curMove = {id:6, score:10}
            result = miniMax(newSymbol, ai);
            curMove.score = result.score; //-10
            //level 2 move 1 curMove = {id: 6, score: 10}
            //level 3 move 1 -> posMoves = [{id:4,score:10}]
            //level 2 move 1 -> posMoves = [{id:6, score:10}]
        }
        
        //level 1 move 1 -> posMoves = [{id:4,score:-10},{id:6, score:10}]
        //level 0 -> posMoves = [{id:4,score:10},{id:6,score:10},{id:1,score:-10}]
        //empty:[1,4,6]
        newSymbol[empty[i]] = '';
        
        posMoves.push(curMove); //[{id: 1, score: -10}]
        
    }
    
    //Calculate score of intermediate states - best move + score with respect to that player + return statement 
    var bestMove;
    //AI - max player (always) -> choose maximum value, human - min player -> choose minimum value
    
    if(player === ai) {
        //posMoves = [{id:4,score:10},{id:6,score:10},{id:1,score:-10}]
        var highestScore = -1000;
        for(var j=0; j<posMoves.length;j++) {
            if(posMoves[j].score > highestScore) {
                highestScore = posMoves[j].score;
                bestMove = j; //0
            }
        }
    }
    //posMoves = [{id:4,score:-10},{id:6, score:10}]
    else {
        var lowestScore = 1000;
        for(var j=0; j<posMoves.length;j++) {
            if(posMoves[j].score < lowestScore) {
                lowestScore = posMoves[j].score;
                bestMove = j;
            }
        }
    }
    return posMoves[bestMove]; 
    //posMoves[0] = {id:4,score:10}
}



};











