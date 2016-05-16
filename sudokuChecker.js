function sudokuCheck (boardStr) {
  var obj = {columns: [], rows: [], cells: []}
  var result = "solved";

  function makeArray(boardStr) {
    var rmNewLinesArr = boardStr.split('\n');
    var joinStr = rmNewLinesArr.join('');
    var allNums = joinStr.split('');
    return allNums;
  }

  function createRows(all) {
    var copy = all.slice();
    while(copy.length > 0) {
      var newRow = [];
      for(var i = 0; i < 9; i++) {
        newRow.push(copy.shift());
      }
      obj.rows.push(newRow);
    }
  }

  function createColumns(all) {
    var copy = all.slice();
    for(var j = 0; j < 9; j++) {
      var newColumn = [];
      for(var i = j; i < copy.length; i += 9) {
        newColumn.push(copy[i]);
      }
      obj.columns.push(newColumn);
    }
  }

  
  function createCell() {
    var section = 0;
    var cellType = 0;
    while(obj.cells.length < 9) {
      //going down the board
      var newCell = [];

      if(section >= 0 && section < 3) {
        var startI = 0;
        var endI = 2;
      }
      if(section >= 3 && section < 6) {
        var startI = 3;
        var endI = 5;
      }
      if(section >= 6 && section < 9) {
        var startI = 6;
        var endI = 8;
      }

      //reset button
      if(section % 3 === 0) {
        cellType = 0;
      }

      for(var i = startI; i <= endI; i++) {
        //going from left to right
        if(cellType === 0) {
          var startJ = 0;
          var endJ = 2;
        }
        if(cellType === 1) {
          var startJ = 3;
          var endJ = 5;
        }
        if(cellType === 2) {
          var startJ = 6;
          var endJ = 8;
        }
        for(var j = startJ; j <= endJ; j++) {
          newCell.push(obj.rows[i][j]);
        }
      }
      cellType++;
      section++;
      obj.cells.push(newCell);
    }
  }

  function checkTotal(matrix) {
    for(var i = 0; i < matrix.length; i++) {
      var total = matrix[i].reduce(function(acc, curr) {
        return Number(acc) + Number(curr);
      });
      if(total !== 45) {
        result = "invalid";
      }
    }
  }

  var all = makeArray(boardStr);
  createRows(all);
  createColumns(all);
  createCell();
  checkTotal(obj.rows);
  checkTotal(obj.columns);
  checkTotal(obj.cells);

  return result;
}

var board = "895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214396857\n639578241"
var test = sudokuCheck(board);
console.log('OUTPUT: ', test);


