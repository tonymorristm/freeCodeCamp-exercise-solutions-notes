function rot13(str) { // LBH QVQ VG!

var stringFromcharCodeAt; // this will the string of code returned from .charCodeAt()
var arrayFromcharCodeAt = []; //  this is will the array of code returned from .charCodeAt()
var decodedArray = []; // this will be an array of rot13 codes
var answ; // this will be the string from decodedArray via fromCharCode

for (var i = 0; i < str.length; i++) {

	stringFromcharCodeAt = String(str[i]).charCodeAt();

	arrayFromcharCodeAt.push(stringFromcharCodeAt);


if (arrayFromcharCodeAt[i] === 32) {
	decodedArray.push(arrayFromcharCodeAt[i]);
}

if (arrayFromcharCodeAt[i] === 33 ||
    arrayFromcharCodeAt[i] === 63 ||
    arrayFromcharCodeAt[i] === 46) {
	decodedArray.push(arrayFromcharCodeAt[i]);
}

if (arrayFromcharCodeAt[i] > 64 && arrayFromcharCodeAt[i]<= 77) {
	decodedArray.push(arrayFromcharCodeAt[i] + 13);
}

if (arrayFromcharCodeAt[i] > 77) {
	decodedArray.push(arrayFromcharCodeAt[i] -13);
}

}

answ = String.fromCharCode.apply(String, decodedArray);

 	return answ;

}


// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
