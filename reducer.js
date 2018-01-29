import actions from "./actions";

// a reducer takes in two things

// 1) the action (information about what happened)
// 2) a copy of current state

function message(state = [], action)
{
	function shouldBeVisible(text)
	{
		if (text != null && text.trim() != "") return true;
		return false;
	}

	switch(action.type)
	{
		case actions.SET_MESSAGE_TEXT:
			return {
				text: action.text,
				className: state.className,
				titleText: state.titleText,
				titleClassName: state.titleClassName,
				isVisible: shouldBeVisible(action.text)
			}

		case actions.SET_MESSAGE_STYLE:
			return {
				text: state.text,
				className: action.className,
				titleText: state.titleText,
				titleClassName: state.titleClassName,
				isVisible: shouldBeVisible(state.text)
			}

		case actions.SET_MESSAGE_TITLE_TEXT:
			return {
				text: state.text,
				className: state.className,
				titleText: action.text,
				titleClassName: state.titleClassName,
				isVisible: shouldBeVisible(state.text)
			}

		case actions.SET_MESSAGE_TITLE_CLASS:
			return {
				text: state.text,
				className: state.className,
				titleText: state.titleText,
				titleClassName: action.className,
				isVisible: shouldBeVisible(state.text)
			}

		case actions.CLEAR_MESSAGE:
			return {
				text: null,
				className: "message-text",
				titleText: "An error has occurred:",
				titleClassName: "message-title",
				isVisible: false
			}

		default:
			return state;
	};
}

export default message;
