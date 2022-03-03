function snapCrackle(maxValue) {
  let myString = "";
  //let myArray = []
  // Acretido que em vez de string poderia usar array de maneira mais pratica e facil, porrem ainda estou tendo dificuldades com array, então vai string mesmo.
  for (let valueCounter = 1; valueCounter <= maxValue; valueCounter++) {

    if (valueCounter % 2 != 0 && valueCounter % 5 == 0) {
      myString += "SnapCrackle , ";

    } else if (valueCounter % 5 == 0) {
      myString += "Crackle , ";

    } else if (valueCounter % 2 != 0) {
      myString += "Snap , ";

    } else if (valueCounter % valueCounter == 0 && valueCounter % 1 == 0) {
      myString += valueCounter + " , ";
    }

  }
  return myString
