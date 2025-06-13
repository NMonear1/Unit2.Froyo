const flavorInputString = prompt(
  "Please Enter Your Froyo Flavors separated by a comma",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const froyoFlavors = flavorInputString.split(",");

console.log(froyoFlavors);

const countFlavors = (froyoFlavors) => {
  const count = {};
  for (const flavor of froyoFlavors) {
    if (count[flavor]) {
      count[flavor] += 1;
    } else {
      count[flavor] = 1;
    }
  }
  return count;
};

console.table(countFlavors(froyoFlavors));
