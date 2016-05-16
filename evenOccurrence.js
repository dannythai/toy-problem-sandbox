function evenOccurrence (arr) {
	var countItem = {};
	for(var i = 0; i < arr.length; i++) {
		if(countItem[arr[i]] !== undefined) {
		    countItem[arr[i]]++;
		} else {
		    countItem[arr[i]] = 1;
		}
	}
	
	for(var key in countItem) {
	    if(countItem[key] % 2 === 0) {
	    	// '2' or 'word'
	      if(!isNaN(parseInt(key))) {
	      	// returns a number
	      	return parseInt(key);
	      } else {
	      	// returns a string
	      	return key;
	      }
	    } 
	}
	return null;
}