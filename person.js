function getFullName(participant) {
	if (!participant?.firstName && !participant?.middleName && !participant?.lastName) {
		return "First name, middle name, and last name is required!"
	}
	
	if (!participant.lastName) {
		return "Last name is required!"
	}

	if (!participant.middleName) {
		return "Middle name is required!"
	}

	if (!participant.firstName) {
		return "First name is required!"
	}

  return participant.firstName + participant.middleName + participant.lastName;
}


module.exports = { getFullName};
