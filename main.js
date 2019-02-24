// S E L E C T O R S

let rows = document.querySelectorAll('.dt-row');
// console.log(rows);
let paid1 = document.querySelectorAll('.installment-1.placeno');
// console.log(paid1);
let paid2 = document.querySelectorAll('.installment-2.placeno');
console.log(paid2);
let paid2NonPayed = document.querySelectorAll('.installment-2.neplaceno');
let paid3 = document.querySelectorAll('.installment-3.neplaceno');
let firstRate = document.querySelector('.ukm.ukm-1');
let secondRate = document.querySelector('.ukm.ukm-2');
let thirdRate = document.querySelector('.ukm.ukm-3');
// console.log(paid);

// A R A Y S

let firstRatePaid = [];
let secondRatePaid = [];
let secondRateUnpaid = [];
let possibleSecondRate = [];
let possibleThirdRate = [];

// F O R  L O O P S

for (let i = 0; i < paid1.length; i++) {
	x = paid1[i].innerText;
	x2 = parseInt(x);
	firstRatePaid.push(x2);
}
for (let i = 0; i < paid2.length; i++) {
	x = paid2[i].innerText;
	x2 = parseInt(x);
	secondRatePaid.push(x2);
}
for (let i = 0; i < paid2NonPayed.length; i++) {
	x = paid2NonPayed[i].innerText;
	x2 = parseInt(x);
	secondRateUnpaid.push(x2);
}
console.log(firstRatePaid);
console.log(secondRatePaid);
console.log(secondRateUnpaid);
// console.log(thirdRatePaid);
sum1();
sum2();
sum3();

// F U N C T I O N S

// functions for sum
function getSum(total , num){
	return total + num;
}

// first rate paid
function sum1(paid1){
	paidFirstRate = (firstRatePaid.reduce(getSum));
	console.log(paidFirstRate);
}
firstRate.innerHTML = paidFirstRate + '.00';

// second rate paid
function sum2(paid2){
	paidSecondRate = (secondRatePaid.reduce(getSum));

	//possible second rate paid
	for (let i = 0; i < paid1.length; i++) {
		if (paid1[i].nextElementSibling.className == 'column-sm installment-2 neplaceno') {
			x = paid1[i].nextElementSibling.innerText;
			x2 = parseInt(x);
			possibleSecondRate.push(x2);
			// console.log('radi');
		}
	}
	sumPossibleSecondRate = (possibleSecondRate.reduce(getSum));
}
secondRate.innerHTML = paidSecondRate + '.00 (' + sumPossibleSecondRate + '.00)';

//possible third rate paid
function sum3(paid3){
	possibleThirdRate = (secondRatePaid.reduce(getSum));
	console.log(possibleThirdRate);
}
thirdRate.innerHTML = '0.00 (' + possibleThirdRate + '.00)';