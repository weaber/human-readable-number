
const DIGITS = {
  '0': '',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14':'fourteen',
 '15':'fifteen',
 '16':'sixteen',
 '17':'seventeen',
 '18':'eighteen',
 '19':'nineteen', 
 '20': 'twenty',
}

const TENS = {
  '0': '',
  '2': 'twenty',
  '3': 'thirty',
  '4': 'forty',
  '5': 'fifty',
  '6': 'sixty',
  '7': 'seventy',
  '8': 'eighty',
  '9': 'ninety',
}

module.exports = function toReadable (number) {
  let str = number.toString().split('');
  let message = '';
  if (number === 0) {
    message = 'zero';
    return message
  } else if (number <= 20) {    
    message = DIGITS[number.toString()].trim();    
    return message;
  } else if (number < 100) {
    message = (TENS[str[0]] + ' ' + DIGITS[str[1]]).trim();    
    return message;
  } else if (number < 1000 && (number - Math.floor(number / 100) * 100) <= 20) {
    let a = number - Math.floor(number / 100) * 100;
    message = (DIGITS[str[0]] + ' ' + 'hundred' + ' ' + DIGITS[a.toString()]).trim();    
    return message;
  }
    else if (number < 1000) {
    message = (DIGITS[str[0]] + ' ' + 'hundred' + ' ' + TENS[str[1]] + ' ' + DIGITS[str[2]]).trim();    
    return message;
  }
}
