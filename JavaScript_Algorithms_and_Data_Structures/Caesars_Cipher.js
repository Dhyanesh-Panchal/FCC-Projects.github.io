function rot13(str) {
    let words = str.split(/(?<=[A-Z])\W/);
    let ansStr = "";
    // console.log(words);
    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            // console.log(words[i]);
            for (let j = 0; j < words[i].length; j++) {
                // console.log(words[i][j]);
                // got actual word by circular number ranging
                let actChar = String.fromCharCode((words[i].charCodeAt(j) - 65 + 13) % 26 + 65);
                // console.log(actChar);
                // words[i].replace(words[i][j], "X");
                ansStr += actChar;
            }
            // console.log(words[i]);
            ansStr += " ";

        }
    }
    ansStr = ansStr.trimEnd();
    if (words[words.length - 1] == '')
        ansStr += str[str.length - 1]
    console.log(ansStr);

    return ansStr;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");