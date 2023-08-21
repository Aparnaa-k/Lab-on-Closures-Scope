const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 9;
const NEG_INF = -1000000;
function createPop() {
  const title = document.createElement('h3');
  let currIndex = NEG_INF;
  let check = false;

  function searchForElement() {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] === itemToSearch) {
        currIndex = i;
        check = true;
        break;
      }
    }
  }

  searchForElement();

  return function() {
    if (check) {
      return title.textContent = `The item is present and is at index ${currIndex}`;
      
    } else {
      return title.textContent = `The item is not present and is at index ${currIndex}`;
    }
  };
}

const popFunction = createPop();
popFunction();
