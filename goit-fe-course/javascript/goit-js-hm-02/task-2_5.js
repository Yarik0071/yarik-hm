const checkForSpam = function(message) {
   let string = message.toLowerCase();

    if (string.includes("spam")) {
        return ("true");
    } else if (string.includes("sale")) {
        return ("true")
    } else {
        return ("false")
    }
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true