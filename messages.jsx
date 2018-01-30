import React from 'react';
import * as messageActions from './actions';

export default class Messages extends React.Component
{
	constructor(props)
	{
		super(props);
		this.closeModal = this.closeModal.bind(this);

		let reactErrorStyle = ".message-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;background-color:grey;z-index:4000;opacity:.5}.message-container{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:auto;width:45%;border:none;border-radius:32px;background-color:#edf1ea;padding:20px;opacity:1;z-index:4001}.message-container button{position:absolute;right:15px;top:15px;border-radius:none;border:none;background-color:inherit;font-size:16px}.message-container div{max-width:calc(100% - 25px)}.message-title-default{margin-bottom:4px;font-weight:900}.message-text-default{white-space:pre}.message-title{color:#000}.message-text{color:red}";

		let style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = reactErrorStyle;
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	closeModal()
	{
		this.props.dispatch(messageActions.clearMessage());
	}

	render()
	{
		return (this.props.messages.isVisible === false)?null:(
			<div className="react-error">
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
