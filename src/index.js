module.exports = function reverse (n) {
    if (n >= 0) {
        result = +(n.toString().split('').reverse().join(''));
      }
      else {
        result = Math.abs(n).toString().split('').reverse().join('');
      }
        return result;
}

