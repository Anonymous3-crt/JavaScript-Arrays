// 1. Create the array
let temperatures = [30, 28, 35, 22, 31];

// 2. Assume the first number is the highest to start
let highest = temperatures[0];

// 3. Use a for loop to compare every other number
for (let i = 1; i < temperatures.length; i++) {
  // If the current temperature is greater than our "highest"...
  if (temperatures[i] > highest) {
    highest = temperatures[i]; // ...update "highest" to this new value
  }
}

// 4. Print the final result
console.log("The highest temperature is: " + highest);