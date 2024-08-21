const countries = [
  { name: "Estonia", coords: "390,50,410,60,420,50,410,40" },
  // Other countries...
];

// Accessing Estonia's coordinates
const estoniaCoords = countries.find(country => country.name === "Estonia").coords;
