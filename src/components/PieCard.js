import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, CardImg, Button } from 'reactstrap';
// import ActionButtons from './ActionButtons';
function PieCard(props) {
	const profileStyles = {
		backgroundColor: '#FFFFFF',
		borderRadius: '1.5em',
		padding: '1.5em',
		maxWidth: '20em',
		maxHeight: '27em',
		minHeight: '22em'
	};

	const imgStyles = {
		maxHeight: '14vh',
		maxWidth: '27vw',
		margin: '.25em',
		border: 'solid 1px black'
	};
	return (
		<React.Fragment>
			<Card style={profileStyles} body>
				<h3>
					<CardTitle>{props.name}</CardTitle>
				</h3>
				<center>
					<CardImg
						style={imgStyles}
						top
						width="100%"
						src={props.img}
						alt="Card image cap"
					/>
				</center>
				<CardText>
					React was originally developed by Facebook to manage the dynamic
				</CardText>
				<hr />
				<Button
					onClick={() => {
						props.onPurchase(props.key);
					}}
					color="success"
				>
					Buy {props.name} <br />Quantity Left: {props.count}
				</Button>
			</Card>
		</React.Fragment>
	);
}

PieCard.propTypes = {
	img: PropTypes.string,
	count: PropTypes.number,
	onPurchase: PropTypes.func
};

export default PieCard;
