function* generatorFunction() {
	for (let i=0; i<5;i++) {
		console.log(i);
		yield i;
	}
}

const iter = generatorFunction();
console.log(iter.next());;
console.log(iter.next());;
console.log(iter.next());;
console.log(iter.next());;
