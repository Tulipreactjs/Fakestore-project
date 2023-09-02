function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    console.log(randomIndex)
    return array[randomIndex];
   
  }
  
  // Usage example:
  const myArray = [1, 2, 3, 4, 5];
  const randomItem = getRandomItemFromArray(myArray);
  console.log(randomItem); // Output will be a random item from the array
  