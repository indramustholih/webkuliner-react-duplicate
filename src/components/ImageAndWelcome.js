import React from 'react'
import mainImage from '../assets/images/aneka-makanan.png';

const ImageAndWelcome = () => (
	<div className="container-fluid">
		<div className="row" style={{ marginBottom: 30}}>
			<img src={mainImage} width="100%" alt="aneka-makanan" />  
		</div>
		<div className="row">
			<div className="col">
				<div className="card text-white bg-success mb-3 text-center">
					<div className="card-header"> <h1>Welcome to Food Paradise </h1></div>
					<div className="card-body">
						<h4 className="card-title"> The Easiest Way to Find Restaurant and Food </h4>
						<p className="card-title"> You can grab information about restaurant, cafees, cuisines with just a few clicks </p>
						<p className="card-text"> Start by choosing the featured cities below, or search the city name </p>
					</div>
				</div>
			</div>
		</div>
	</div>

)

export default ImageAndWelcome;