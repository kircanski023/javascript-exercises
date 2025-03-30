const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    let cleanedString = str
    .toLowerCase()
    .split("")
    .filter((element) => alphanumerical.includes(element))
    .join("");

    let reversedString = cleanedString.split("").reverse().join("")

    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
