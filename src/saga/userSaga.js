
const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* addCash() {
	yield delay(1000);
	yield put(addCash());
}

function* deleteCash() {

}