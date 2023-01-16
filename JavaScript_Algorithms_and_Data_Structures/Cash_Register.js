function checkCashRegister(price, cash, cid) {
    let change;
    let money = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "DOLLAR": 1,
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
    console.log(totalcid);
    return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);