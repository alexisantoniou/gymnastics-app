const clients = ["Alexis", "Maria", "Nikos", "Elena", "Stavros"];
const pricePerSession = 35;

function showAllClients(clientList) {
  clientList.forEach((client) => {
    console.log("Client: " + client);
  });
}

function calculateEarnings(clientList, price) {
  return clientList.length * price;
}

showAllClients(clients);
console.log("Total clients:", clients.length);
console.log("Total earnings: €" + calculateEarnings(clients, pricePerSession));
