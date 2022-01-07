module.exports = function toReadable (number) {
  let result;
  let arrOnes = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let arrDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
 
  let n = number;
  number = [...number.toString()].reverse()
  let hunds = number[2]
  let tens  = number[1] 
  let units = number[0]

  let ones = Number.parseInt(tens + units);

  if (n == 0) {
  	result = 'zero';
  } else if (ones == 0) {
    result = arrOnes[hunds]  + ' ' + 'hundred';
  } else if (n <= 10 || n >= 10 && n <= 19) { 
    result = arrOnes[n];
  } else if (n >= 20 && n <= 100) {
    result = arrDozens[tens] + ' ' + arrOnes[units];
  } else if (ones <= 10 || ones > 10 && ones < 20) {
    result = arrOnes[hunds]  + ' ' + 'hundred' + ' ' + arrOnes[ones];
  } else {
     result = arrOnes[hunds]  + ' ' + 'hundred' + ' ' + arrDozens[tens] + ' ' + arrOnes[units];
  }
  return result.trim();

}
