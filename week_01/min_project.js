// They are const because they dont change
const BASE_PRICE = 45;

const AGE_LIMIT_12 = 12;
const AGE_LIMIT_18 = 18;

// They are let - because they change able
let totalTicketsSold = 0;
let totalRevenue = 0;

const customers = [
    {name: "דנה", age: 17, movieRating: "12+", isStudent: true},
    {name: "יוסי", age: 25, movieRating: "18+", isStudent: false},
    {name: "מיכל", age: 10, movieRating: "12+", isStudent: false},
    {name: "רון", age: 16, movieRating: "18+", isStudent: true},
    {name: "ליאת", age: 30, movieRating: "כל הגילאים", isStudent: false},
    {name: "אבי", age: 8, movieRating: "כל הגילאים", isStudent: false},
];

for (const customer  of customers) {
    if (customer.movieRating === "18+") {
        if (customer.age < 18) {
            // console.log(`${customer.name} (${customer.age}) - card to ${customer.movieRating} - price: ${price}`);
            continue;
        }
    }
    else if (customer.movieRating === "12+") {
        if (customer.age < 12) {
            console.log("Error: Customer is too young to the movie");
            continue;
        }
    }
    let price = BASE_PRICE;
    switch (customer.movieRating) {
        case "18+":
            price += 10;
            break;

        case "12+":
            price += 5;
            break;
        
        default:
            price = price;
    }

    let finalPrice = customer.age >= 65 ? ((price * 20) / 100) : customer.isStudent ? ((price * 15) / 100) : price;
        totalTicketsSold ++;
        totalRevenue += finalPrice;

    if (customer.age >= 65) {
        console.log(`${customer.name} (${customer.age}) - card - older to ${customer.movieRating} - cost: ${finalPrice} IL (20% discount)`);
    }
    else if (customer.isStudent) {
        console.log(`${customer.name} (${customer.age}) - student - card to ${customer.movieRating} - cost: ${finalPrice} IL (15% discount)`);
    }
    else {
        console.log(`${customer.name} (${customer.age}) - card to ${customer.movieRating} - cost: ${finalPrice} IL`);
    }

    if (totalTicketsSold == 4) {
        break;
    }
}

console.log("====================");
console.log("Total of sell cards: " + totalTicketsSold);
console.log("Total " + totalRevenue + "IL");
const average = totalTicketsSold > 0 ? totalRevenue / totalTicketsSold : 0;
console.log("Average Price for card " + average.toFixed());