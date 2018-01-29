import React from 'react';
import * as messageActions from './actions';

export default class Messages extends React.Component
{
	constructor(props)
	{
		super(props);
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal()
	{
		this.props.dispatch(messageActions.clearMessage());
	}

	render()
	{
		return (this.props.messages.isVisible === false)?null:(
			<div>
				<div className="message-backdrop">

				</div>
				<div className="message-container">
						<button onClick={this.closeModal}>X</button>
						<div className={`message-title-default${' ' + this.props.messages.titleClassName}`}>{this.props.messages.titleText}</div>
						<div className={`message-text-default${' ' + this.props.messages.className}`}>{this.props.messages.text}</div>
					</div>
			</div>
		);
	}
}
