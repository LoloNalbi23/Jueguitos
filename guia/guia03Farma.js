function rotString(input) {
    const Abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    input = input.toUpperCase();

    for (let i = 0; i < input.length; i++) {
        let LetraCode = input[i];
        let index = Abc.indexOf(LetraCode);

        if (index !== -1) {
            let NextlETRA = Abc[(index + n) % Abc.length];
            result += NextlETRA;
        } else {
            result += LetraCode;
        }
    }

    return result;
}
const n = 1
let input = "MATE";
console.log(rotString(input));