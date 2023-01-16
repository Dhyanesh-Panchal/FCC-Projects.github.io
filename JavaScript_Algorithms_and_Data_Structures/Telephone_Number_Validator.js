function telephoneCheck(str) {

    if (str[0] == '-' || (str[0] == "(" && str[str.length - 1] == ')')) {
        console.log(str);
        return false;
    }
    // console.log(str.search(/[)]/), str.search(/[(]/))
    // Check if only single parenthesis is present or not
    if ((str.search(/[)]/) != -1 && str.search(/[(]/) == -1) || (str.search(/[)]/) == -1 && str.search(/[(]/) != -1)) {
        // console.log("invalid bracket pair");
        return false;
    }
    // let comp = str.split(/[-\s)(]/);
    let comp = str.split(/[-\s)(]/);
    comp = comp.filter(key => key);
    console.log(comp)

    if (comp.length == 1) {
        if (comp[0].length != 10) {
            // console.log("length problem")
            return false;
        }
        for (let i of comp[0]) {
            if (!Number(i) && i != '0') //NUmber(0) is a number but false eq in boolean
            {
                // console.log(i + " is not number")
                return false;
            }
        }
        return true;
    }
    else if (comp.length == 2) {
        if (comp[0] == '1') {
            return true;
        }
        return false;
    }
    else if (comp.length == 3) {
        if (comp[0].length == 3 && comp[1].length == 3 && comp[2].length == 4) {
            for (let k = 0; k < 3; k++) {
                for (let i of comp[k]) {
                    if (!Number(i) && i != '0') //NUmber(0) is a number but false eq in boolean
                    {
                        console.log(i + " is not number")
                        return false;
                    }
                }
            }

            return true;
        }
        return false;
    }
    else if (comp.length == 4) {

        if (comp[0] == '1') {
            if (comp[1].length == 3 && comp[2].length == 3 && comp[3].length == 4) {
                for (let k = 1; k < 4; k++) {
                    for (let i of comp[k]) {
                        if (!Number(i) && i != '0') //NUmber(0) is a number but false eq in boolean
                        {
                            // console.log(i + " is not number")
                            return false;
                        }
                    }
                }

                return true;
            }
            return false;
        }
        return false;
    }

    console.log("outer false");
    return false;
}

// console.log(telephoneCheck("1 555)555-5555"));
// console.log(telephoneCheck("(6054756961)"));
// console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("(555)555-5555"));
// console.log(telephoneCheck("(555-555-5555"));
