// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var money = currency;
    var coins = {};

    // H==50, Q==25, D==10, N==5, P==1;
    if (money > 0) {
        if (money < 10000) {
            if ( Math.floor(money/50) ) coins["H"] = Math.floor(money/50);
            if ( Math.floor((money%50)/25) ) {
                coins["Q"] = Math.floor((money%50)/25);
            } 
            if ( Math.floor(money%50%25/10) ) {
                coins["D"] = Math.floor(money%50%25/10);
            } 
            if ( Math.floor(money%50%25%10/5) ) {
                coins["N"] = Math.floor(money%50%25%10/5);            
            }
            if (money%5) {
                coins["P"] = money%5;            
            }

            return coins;
        } else {
            return coins =  {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }

    } else {
        return coins;
    }

}
