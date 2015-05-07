function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(elSub) {
		return goodUsers.some(function(elGood) {
			return elSub.id === elGood.id;
		});
    });
  };
}

module.exports = checkUsersValid
