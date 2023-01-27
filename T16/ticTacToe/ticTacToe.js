// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you
function evaluatePlay(grid){

    // ------------------------------- Have -------------------------------------------
     let winner = '';
     let loser = '';
   
    // ------------------------------- Fun  -------------------------------------------
 
    for(let i=0;i<grid.length;i++)
    {
        for(let j=0;j<i;j++)
        {
            if(grid[0][0] == "O" && grid[0][1] == "O"  && grid[0][2] == "O")
            {
                winner = "X";
                loser = "O";
                console.log(`Row Win:\n\t${winner}   Won\n\t${loser}   Lost\n`);
                return false;
            }
            if(grid[0][1] == "X" && grid[1][1] == "X"  && grid[2][1] == "X")
            { 
                winner = "O";
                loser = "X";
                console.log(`Column Win:\n\t${winner}   Won\n\t${loser}   Lost\n`);
               return false;
            }
            if(grid[0][2] == "O" && grid[1][1] == "O"  && grid[2][0] == "O")
            {
                winner = "O";
                loser = "X";
                console.log(`Diagonal Win:\n\t${winner}   Won\n\t${loser}   Lost\n`);
                return false;
            }
            if(grid[0][0] == "X" && grid[1][1] == "X"  && grid[2][2] == "X")
            {
                winner = "X";
                loser = "O";
                console.log(`Diagonal Win Inverse:\n\t${winner}   Won\n\t${loser}   Lost\n`);
                return false;
            }
        }
    }
    
}

evaluatePlay(rowWin);
evaluatePlay(colWin);
evaluatePlay(diagonalWin);
evaluatePlay(diagonalWinInverse);