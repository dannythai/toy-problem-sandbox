// https://www.hackerrank.com/challenges/time-conversion

function timeConverter(time) {
    var arr = time.split(":");
    var hour = arr[0];
    var min = arr[1];
    var seconds = arr[2].substring(0, 2);
    var period = arr[2].substring(2, 4);

    if(period === 'PM') {
      if(hour == '12') {
        var militaryHr = '12';
      } else {
        var militaryHr = JSON.stringify(12 + Number(hour));
      }
    } else {
      if(hour == '12') {
        var militaryHr = '00'
      } else {
        if(hour.length < 2) {
          var militaryHr = '0'+ hour;
        } else {
          var militaryHr = hour;
        }
      }
    }

    var militaryTime = militaryHr +":"+ min +":"+ seconds;
    console.log(militaryTime);
}
