module.exports = function check(str, bracketsConfig) {
    let copyStr = str;
    let stringFromMass = bracketsConfig.map((item) => item.join(''));
    for (let i of str) {
        for (let i = 0; i < stringFromMass.length; i++) {
            copyStr = copyStr.replace(stringFromMass[i], '');
        }
    }
    return copyStr === '';
}
