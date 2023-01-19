function checkCashRegister(price, cash, cid) {
    let change = [];
    let changeAmount = cash - price;
    let money = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    let totalcid = 0;
    for (let i in cid) {
        totalcid += cid[i][1];
    }
    totalcid = (totalcid * 100) / 100; //rounding it to 2 decimal
    // console.log(totalcid);
    if (totalcid < changeAmount) {
        console.log({ status: "INSUFFICIENT_FUNDS", change: [] })
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    else if (totalcid == changeAmount) {
        console.log({ status: "CLOSED", change: cid })
        return { status: "CLOSED", change: cid }

    }
    cid = cid.reverse();
    // console.log(cid);

    for (let val of cid) {
        if (changeAmount >= val[1]) {
            // console.log(val);
            // console.log("inside 1st if: ", changeAmount, val[1])
            changeAmount -= val[1];
            change.push(val);
        } else {
            let unitChange = 0;
            while (changeAmount >= money[val[0]]) {
                console.log("inside while", changeAmount, money[val[0]])
                changeAmount -= money[val[0]];
                unitChange += money[val[0]];
                // console.log(money[val[0]], changeAmount, unitChange, change);
                changeAmount = (Math.round(changeAmount * 100)) / 100;
            }
            if (unitChange) {
                change.push([val[0], unitChange])
                // console.log("pusshing the value", change, changeAmount);
            }
        }
        if (changeAmount <= 0) {
            // console.log("Success!!!!!!!!", { status: "OPEN", change: change })
            // console.log("Before return")
            return { status: "OPEN", change: change };
        }
        console.log(changeAmount, change)
    };
    console.log("The last one:", { status: "INSUFFICIENT_FUNDS", change: [] })
    return { status: "INSUFFICIENT_FUNDS", change: [] };
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

// -> {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}