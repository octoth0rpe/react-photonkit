import React from 'react';

export default class RadioGroup extends React.Component {
	onChange(index) {
		return this.setState({
			checkedIndex: index
		});
	}

	getCheckedIndex() {
		return this.state.checkedIndex;
	}

	getChildren() {
		const children = [];
		let index = 0;

		this.props.children.forEach((child, i) => {
			const extra = {
				key: i
			};
			const checked = this.state.checkedIndex === index;
			extra.name = this.props.name;
			extra.checked = checked;
			extra.onChange = this.onChange.bind(this, index++);
			children.push(React.cloneElement(child, extra));
		});

		this.children = children;
		return this.children;
	}

	render() {
		return (
			<div>
				{this.getChildren()}
			</div>
		);
	}
}

RadioGroup.defaultProps = {
	checkedIndex: 0
};

RadioGroup.propTypes = {
	children: React.PropTypes.node,
	name: React.PropTypes.string.isRequired
};
