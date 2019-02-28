/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // k is any integer in preferences
  function getIndOfFirstLover(preferences, k) {
    let indexOfFirstLover;
    let n = indexOfFirstLover;
  
    n = preferences[k] - 1;
  
    return n;
  }
  
  function getIndOfSecondLover(preferences, k) {
    let indexOfSecondLover;
    let n = indexOfSecondLover;
  
    n = preferences[getIndOfFirstLover(preferences, k)] - 1;
  
    return n;
  }
  
  function getIndOfThirdLover(preferences, k) {
    let indexOfThirdLover;
    let n = indexOfThirdLover;
  
    n = preferences[getIndOfSecondLover(preferences, k)] - 1;
  
    return n;
  }
    
    let numberoflovetriangles = 0;
    for (let k = 0; k < preferences.length; k++) {
      if (
        k === getIndOfThirdLover(preferences, k) &&
        preferences[k] !== preferences[getIndOfFirstLover(preferences, k)] &&
        preferences[k] !== preferences[getIndOfSecondLover(preferences, k)]
      ) {
        numberoflovetriangles++;
        delete preferences[getIndOfSecondLover(preferences, k)];
        delete preferences[getIndOfFirstLover(preferences, k)];
        delete preferences[k];
      }
    }
    return numberoflovetriangles;
  };
