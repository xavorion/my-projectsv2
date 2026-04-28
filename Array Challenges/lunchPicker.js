const lunchOptions = ["pizza","burger","ramen","fried chicken","sushi"];

function getLunch(arr, items) {

  const chosenLunches = [];

  while(chosenLunches.length < 3) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const lunch = arr[randomIndex];

    if(!chosenLunches.includes(lunch)) {
      chosenLunches.push(lunch);
    }
  }

  return chosenLunches;

}

console.log(getLunch(lunchOptions, 3));