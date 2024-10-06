
import React, { useEffect, useState, Component } from 'react'
import { Card, CardTitle, CardGroup, CardBody, Row, Col, Form } from 'reactstrap';
import Navbar from '../../layout/ANavbar'
import Footer from '../../Footer'
import ADashMenuBar from '../AdminDashMenubar';
import Plot from 'react-plotly.js';
import axios from 'axios'

export default class TurnOver extends Component {

	constructor(props) {
		super(props);
		this.state = { data: [] }
	};

	componentDidMount() {
		const endpoint = axios.get(`http://localhost:5000/api/AnnualReport/1`).then(res => {
			{ this.setState({ data: res.data }) }
		});
	}

	transformData(data) {
		console.log(data)
		let plot_data = [];

		let x = ['AirIndia', 'SpiceJet', 'kingfisher', 'IndiGo', 'AirAsia', 'AllianceAir'];
		let y = [];
		y.push(data.airIndia)
		y.push(data.spiceJet)
		y.push(data.kingfisher)
		y.push(data.indiGo)
		y.push(data.airAsia)
		y.push(data.allianceAir)

		plot_data['x'] = x;
		plot_data['y'] = y;

		// console.log(plot_data)

		return plot_data
	}

	render() {
		return (
			<div><Navbar />

            <div className='py-5'>

                <Row>
                    <Col md={2}>
                        <div>
                                <ADashMenuBar/>
                            </div>
                    </Col>
					<Col>

					
					
			<div>
				<div className="container">
					<div className={'row'}>
						<div className={'card col-12'} id={'formbody2'}>
							<Plot
								data={[
									{
										type: 'bar',
										mode: 'lines',
										x: this.transformData(this.state.data)['x'],
										y: this.transformData(this.state.data)['y'],
										marker: { color: '#ed022d' }
									}
								]}
								layout={{ width: 925, height: 500, title: 'Annual TurnOver Report' }}
							/>
						</div>
					</div>
				</div>
			</div>
			</Col></Row></div>
			<Footer />
					</div>
		)
	}
}

