import React, { Component } from 'react';

import Header from '../../../common/header.jsx'
import dog_A from '../../../assets/dog/01-dog.png'
import dog_B from '../../../assets/dog/02-dog.png'
import dog_C from '../../../assets/dog/03-dog.png'
import myself from '../../../assets/dog/my.png'
import dogAudio from '../../../assets/dog/dogAudio.m4a'

class dog extends Component {
	constructor() {
		super();
		this.state = {

		}
	}
	goBack = () => {
		this.props.history.push("/");
	}
	render() {
		return (
			<div>
				<Header title='我与狗' goBack={this.goBack.bind(this)}></Header>
				
				<div class='dog-wrapper' style={styles.black}>
					<div class='box-template'  style={styles.wrapper}>
						<img style={styles.dogImg} src={dog_A} alt="gou1"/>:
						<div style={styles.text}>
							汪汪汪汪
						</div>
					</div>
					<div class='box-template'  style={styles.wrapper}>
						<img style={styles.dogImg} src={dog_B} alt="gou1"/>:
						<div>
							汪汪汪汪
						</div>
					</div>
					<div class='box-template'  style={styles.wrapper}>
						<img style={styles.dogImg} src={dog_C} alt="gou1"/>:
						<div>
							汪汪汪汪
						</div>
					</div>
					<div class='box-template'  style={styles.wrapper}>
						<img style={styles.dogImg} src={myself} alt="gou1"/>:
						<div>
							汪汪汪汪
						</div>
					</div>
				</div>
				<div>本作仅以记录2020-01-17早上06:40楼下3只狗在rap</div>
				<audio src={dogAudio}></audio>
			</div>
		)
	}
}
const styles = {
	dogImg: {
		width:"50px",
		heighe:"50px"
	},
	black:{
		marginTop: "50px",
		padding: "10px",
		background: "#000"
	},
	wrapper:{
		display:'flex',
		justifyContent:'flex-start',
		alignItems: 'center',
		padding: "20px 0",
		color:"#fff"
	},
	text:{
		overflow:"hidden",
		textIndent: '1em'
	}
}
export default dog