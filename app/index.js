import React from 'react';
import ReactDOM from 'react-dom';

// write your Color component here
const Color = (props) => {
	const color = props.color;
	let selected = '';
	const selectColor = props.selectColor;

	if (props.selected === color) {
		selected = 'selected';
	}

	return <div className={`${color} ${selected}`} onClick={() => selectColor(color)} />;
};

class Picker extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedColor: 'red'
		};
		// this.selectColor = this.selectColor.bind(this);
	}
	render() {
		return (
			<div id="container">
				<div id="navbar">
					<div>Currently selected: </div>
					<div className={this.state.selectedColor}>{this.state.selectedColor}</div>
				</div>
				<div id="colors-list">
					<Color color="red" selectColor={this.selectColor} selected={this.state.selectedColor} />
					<Color color="blue" selectColor={this.selectColor} selected={this.state.selectedColor} />
					<Color color="green" selectColor={this.selectColor} selected={this.state.selectedColor} />
				</div>
			</div>
		);
	}

	selectColor = (colorName) => {
		this.setState({
			selectedColor: colorName
		});
	};
}

ReactDOM.render(<Picker />, document.getElementById('app'));
