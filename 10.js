function ticketCounter() {
    let tickets = 0; // Private variable via lexical scoping
    
    function bookTicket() {
        tickets++;
        console.log(`Ticket booked. Total tickets: ${tickets}`);
    }
    
    return bookTicket;
}

const bookingSystem = ticketCounter();

bookingSystem(); // Ticket booked. Total tickets: 1
bookingSystem(); // Ticket booked. Total tickets: 2
bookingSystem(); // Ticket booked. Total tickets: 3