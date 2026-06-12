const clients = [
  {
    name: "Alexis",
    age: 25,
    sessionsPerWeek: 3,
    pricePerSession: 35,
    isActive: true,
  },
  {
    name: "Maria",
    age: 30,
    sessionsPerWeek: 2,
    pricePerSession: 35,
    isActive: true,
  },
  {
    name: "Nikos",
    age: 22,
    sessionsPerWeek: 4,
    pricePerSession: 35,
    isActive: false,
  },
];

let totalEarnings = 0;

clients.forEach((client) => {
  if (client.isActive === true) {
    let weeklyPayment = client.sessionsPerWeek * client.pricePerSession;
    totalEarnings = totalEarnings + weeklyPayment;
    console.log(client.name + " pays €" + weeklyPayment + " per week");
  } else {
    console.log(client.name + " is inactive - no charge");
  }
});

console.log("Total weekly earnings: €" + totalEarnings);
