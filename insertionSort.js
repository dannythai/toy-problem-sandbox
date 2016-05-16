function insertionSort(array) {

	var results = [];
	var revert = false;

	//converts array of numbers to array of objects
	if (typeof array[0] !== "object") {
	  revert = true;

	  array = array.map(function(item, index) {
	    return {
	      value: item,
	      order: index
	    };
	  });
	}

	results[0] = array[0];

	for(var i = 1; i < array.length; i++) {
		var extract = array[i];
		for(var j = results.length - 1; j > -1; j--) {
			var result = results[j];
			if(extract.value > result.value || extract === result && extract.order > result.order) {
				results.splice(j+1, 0, extract);
				break;
			}
			if(extract.value < result.value && j === 0) {
				results.splice(j, 0, extract);
				break;
			}
		}
	} // end of for loop

	if(revert) {
		results = results.map(function(item) {
			return item.value;
		});
	}
	return results;
}



