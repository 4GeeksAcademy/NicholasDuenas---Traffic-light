import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("red")
	
	return (

		<>
		<div className="centerAll">
			<div className="post"></div>
			<div className="traffic-light">
				<div className={(selectedColor === "red") ? " redglow light red"  : "light red"} onClick={()=>setSelectedColor("red")}></div>
				<div className={(selectedColor === "yellow") ? " yellowglow light yellow" : "light yellow"} onClick={()=>setSelectedColor("yellow")}></div>
				<div className={(selectedColor === "green") ? " greenglow light green" : "light green"} onClick={()=>setSelectedColor("green")}></div>			
			</div>
		</div></>
	);
};

export default Home;
