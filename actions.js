const actions =
{
	SET_MESSAGE_TEXT: "SET_ERROR_MESSAGE",
	SET_MESSAGE_STYLE: "SET_ERROR_STYLE",
	SET_MESSAGE_TITLE_TEXT: "SET_MESSAGE_TITLE_TEXT",
	SET_MESSAGE_TITLE_CLASS: "SET_MESSAGE_TITLE_CLASS",
	CLEAR_MESSAGE: "CLEAR_MESSAGE"
};

export default actions;


export function setMessageText(value)
{
	return {
		type: actions.SET_MESSAGE_TEXT,
		text: value
	};
}

export function setMessageClass(value)
{
	return {
		type: actions.SET_MESSAGE_CLASS,
		className: value
	};
}

export function setMessageTitleText(value)
{
	return {
		type: actions.SET_MESSAGE_TITLE_TEXT,
		text: value
	};
}

export function setMessageTitleClass(value)
{
	return {
		type: actions.SET_MESSAGE_TITLE_CLASS,
		className: value
	};
}

export function clearMessage()
{
	return {
		type: actions.CLEAR_MESSAGE
	}
}
