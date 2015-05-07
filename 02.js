function repeat(operation, num) {
	if (num <= 0) return;

	operation.call();
	return repeat(operation, --num);
}

module.exports = repeat
