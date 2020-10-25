module.exports = function toReadable (number) {
    let result = '';
    const firstNineteenth = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number > 99) result += firstNineteenth[Math.floor(number / 100)] + ' hundred ';
    if (number % 100 > 19) {
        result += tens[Math.floor(number % 100 /  10)- 2];
        if (number % 10 !== 0) {
            result += ' ' + firstNineteenth[Math.floor(number % 10)];
        }
    }
    if (number % 100 <= 19) result += firstNineteenth[Math.floor(number % 100)];
    if (result.indexOf('zero') > 0 && result.length > 4) result = result.slice(0, -5);
    return result;
}
