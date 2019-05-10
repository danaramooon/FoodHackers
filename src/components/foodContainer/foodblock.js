import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SideBar from '../sidebar/sidebar'
import lagman from '../../images/lagman.jpg'
import shashlyk from '../../images/шашлык.jpg'
import plov from '../../images/plov.jpg'
import './foodblock.css';
import { connect } from 'react-redux'; 
import * as receiptActions from '../../actions/receiptActions';

class FoodBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	componentDidMount() {
		console.log("wefwef");
		this.props.getReceipts();
	}

    render() {
        return (
			<div className = "container">
				<SideBar/>
				<div className = "food_block_container">
					{ this.props.receipts.map(receipt=>
							<div className = "food_block">
								<div className="row">
									<img src={shashlyk} className = "food_img "/>
									<div className="text">
										<h3 className="name_food">{receipt.name}</h3>
										<p>{receipt.name}</p> 
									</div>
								</div>
							</div>
						)
					}	
				</div>
			</div>
        );
    }
}
const mapStateToProps = (state) => ({
	receipts: state.receipt.receipts,
	firstReceipt: state.receipt.firstReceipt
})
  
const mapDispatchToProps = {
	getReceipts: receiptActions.getReceipts,
	createReceipt: receiptActions.createReceipt
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FoodBlock);