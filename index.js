function calculateEarnings(clients, pricePerSession) {
  return clients * pricePerSession;
}

function greetClient(name) {
  return "Welcome to the gym, " + name + "!";
}

const trainerName = "Alexis";
const clients = 12;
const price = 35;

console.log(greetClient(trainerName));
console.log("Clients this month:", clients);
console.log("Earnings this month: €" + calculateEarnings(clients, price));
