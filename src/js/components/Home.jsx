import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import Acordeon from "./Acordeon";

//create your first component
const Home = () => {
	const headers = [
		{
			id: 1,
			title: "Card #1",
			color: "red",
			image: "https://images.unsplash.com/photo-1740412662676-a3b16d74ee86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			id: 2,
			title: "Card #2",
			color: "blue",
			image: "https://images.unsplash.com/photo-1740765979831-2419b29c7cc1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			id: 3,
			title: "Card #3",
			color: "orange",
			image: "https://images.unsplash.com/photo-1740880250725-8b0d83ac9c23?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			id: 4,
			title: "Card #4",
			color: "white",
			image: "https://images.unsplash.com/photo-1740859743702-e52ec69325c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		}
	]

	return (
		<div>
			<Navbar />
			<Acordeon />
			<div className='container'>
				<div className='row d-flex m-3'>
					{
						headers.map(item => (<Card key={item.id} title={item.title} image={item.image} color={item.color}/>))
					}
				</div>
			</div>
		</div>
	);
};

export default Home;