// at()  (To display the  element of an array)
var busTicketPrice = [100,200,500,700,900,1200,1500];
var countOfTickets = busTicketPrice.at(-5);
console.log("Sleeper bus  ticket price amount:" +countOfTickets);


//indexof ()  (To display the index position of an array)
var busTicketPrice = [100, 200, 500, 700, 900, 1200, 1500 ,500,1500];
var countOfTickets = busTicketPrice.indexOf(1500);
console.log("Index position of busTicket:" + countOfTickets );


//lastIndexof() To display last index position of duplicate array element
var busTicketPrice = [100, 200, 500, 700, 900, 1200, 1500,3000,4000,1500];
var countOfTickets = busTicketPrice.lastIndexOf(1500);
console.log("1500 2nd index position is :",countOfTickets);
