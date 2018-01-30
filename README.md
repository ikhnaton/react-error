##react-error
This is a very simple library designed to work with React and Redux to display a basic, highly customizable, message popup.

The default css styling is:

```css
.message-backdrop
{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: grey;
	z-index: 4000;
	opacity: 0.5;
}

.message-container
{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: auto;
	width: 45%;
/*	min-height: 20%;*/
	border: none;
	border-radius: 32px;
	background-color: #edf1ea;
	padding: 20px;
	opacity: 1;
	z-index: 4001;
}

.message-container button
{
	position: absolute;
	right: 15px;
	top: 15px;
	border-radius: none;
	border: none;
	background-color:inherit;
	font-size: 16px

}

.message-container div
{
	max-width: calc(100% - 25px);
}

.message-title-default
{
	margin-bottom: 4px;
	font-weight: 900;
}

.message-text-default
{
	white-space: pre;
}

.message-title
{
	color: black;
}

.message-text
{
	color: red;
}
```

Any of the css styling can be overriden by specifying `.react-error` before the style as follows:

```
.react-error .message-backdrop
{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: blue;
	z-index: 4000;
	opacity: 0.5;
}
```

further documentation coming soon.