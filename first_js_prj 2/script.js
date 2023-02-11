if (4 == 9 ) {
    console.log('OK!');
} else {
    console.log('Error');
}
const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else if (num > 50) {
    console.log('Error2');
} else {
    console.log('OK');
};
(num == 50) ? console.log('OK!!!') : console.log('Error2');

switch (num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 51:
        console.log('Error');
        break;
    default: 
    console.log('One more');
        break;
};