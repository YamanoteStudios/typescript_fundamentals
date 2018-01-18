// interface ICustomConsole {
//     log(argument: string) : void;
// }
// declare var customConsole : ICustomConsole;
// customConsole.log("A log entry!");  // error”
// console.log("Log Entry!");
// var host = window.location.hostname;
var AlertLevel;
(function (AlertLevel) {
    AlertLevel[AlertLevel["info"] = 0] = "info";
    AlertLevel[AlertLevel["warning"] = 1] = "warning";
    AlertLevel[AlertLevel["error"] = 2] = "error";
})(AlertLevel || (AlertLevel = {}));
//   function getAlertSubscribers(level : AlertLevel){
//     var emails = new Array<string>();
//     switch(level){
//       case AlertLevel.info:
//          emails.push("cst@domain.com");
//           break;
//          case AlertLevel.warning:
//             emails.push("development@domain.com");
//             emails.push("sysadmin@domain.com");
//             break;
//          case AlertLevel.error:
//            emails.push("development@domain.com");
//            emails.push("sysadmin@domain.com");
//            emails.push("management@domain.com");
//            break;
//          default:
//            throw new Error("Invalid argument!");
//         }
//     }
var y = new Array(1, 2, 3, 4, 5, 6, 7);
var z = new Array(4, 5, 6, 7, 1, 2, 3); // true
var twin_z = new Array(1, 2, 3, 4, 5, 6, 7); // true
var unequal_z = new Array(1, 2, 3, 4, 5, 6); // false
var array2e = new Array(4, 5, 6, 7, 0, 2, 3); // false
var array2c = new Array(4, 5, 6, 9, 1, 2, 3); // false
var array2a = new Array(4, 5, 6, 7, 8, 1, 2, 3); // false
function isRotation(a, b) {
    var value_a = a;
    // console.log('Assigning ' + b + ' value_b');
    var value_b = b;
    // verifyArrays(value_a, value_b);
    // if(isBothArraysEqualInLength(value_a, value_b)) {
    if (value_a.length == value_b.length) {
        console.log('both arrays lengths are equal');
        // let value_aKey = value_a[0];
        var key_i = -1;
        var idx = 0;
        var iterable_b = value_b;
        var iterable_a = value_a;
        var iterable_bLengthMinusOne = (iterable_b.length - 1);
        var iterable_aLengthMinusOne = (iterable_a.length - 1);
        for (var position = 0; position < iterable_bLengthMinusOne; position++) {
            console.log('Checking if ' + iterable_b[position] + ' is in the second Array....');
            if (iterable_b[position] == value_a[0]) {
                console.log(' Found  ' + value_a[0] + ' @ position: ' + position + ' returning true.....');
                // if we find
                key_i = position;
            }
        }
        if (key_i == -1) {
            return false;
        }
        for (var position = 0; position < iterable_aLengthMinusOne; position++) {
            var specialIndex = (key_i + position) % iterable_a.length;
            console.log(specialIndex);
            console.log('inside the second forLoop');
            console.log(iterable_a[position] + ' & ' + iterable_b[position]);
            // compare each item in the array
            if (iterable_a[position] != iterable_b[specialIndex]) {
                return false;
            }
            return true;
        }
    }
}
// function log(message, variable) {
//     console.log(message, variable);
// }
// function verifyArrays(firstArray, secondArray) {
//     console.log('Calling the verifyingArrays() ');
//     console.log('verifying Arrays.....');
//     console.log(firstArray);
//     console.log(secondArray);
//     console.log(firstArray.length);
//     console.log(secondArray.length);
// }
// function isBothArraysEqualInLength(firstArray, secondArray) {
//     console.log('Calling the isBothArraysEqualInLength() ');
//     console.log('Determining if the Arrays are equal.....');
//     if (firstArray.length != secondArray.length) {
//         console.log('UNEQUAL!');
//         console.log('Returning false and leaving this function');
//         return false;
//     } else {
//         console.log('EQUAL!');
//         console.log('Returning True and leaving this function');
//         return true;
//     }
// }
// console.log(isRotation(y, z));
// for (var i: number = 0; i < 9; i++) {
//     console.log(i);
//  }
// console.log(isRotation(twin_y,twin_z));
// console.log(isRotation(unequal_y,unequal_z));
