function Staircase() {
    var n = 6;
    for(var i = 0; i < n; i++) {
      var numHashes = i+1;
      var numSpaces = n - numHashes;
      var str = "";
      for(var j = 0; j < numSpaces; j++) {
        str += " ";
      }
      for(var k = 0; k < numHashes; k++) {
        str += "#";
      }
      console.log(str);
    }
}

Staircase();
