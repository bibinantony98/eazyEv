import { FunctionComponent, useState } from "react";
import "./result.scss";
import Places from "./places";

const data = [
	{
		name: "test",
		averageHotelPrice: "2000",
		wether: "21",
		bestSeason: "jan - dec",
		topHotel: [
			{
				name: "hotel1",
				price: 5000,
				img: ""
			},
			{
				name: "hotel1",
				price: 5000,
				img: ""
			}
		],
		recreations: [
			{
				name: "recreation1",
				img: ""
			}
		],
		images: [
			{
				url: ""
			},
			{
				url: ""
			}
		]
	}
];

export const Result: FunctionComponent = () => {
	const [index, setIndex] = useState(0);

	const prevClicked = () => {
		setIndex((prev) => prev - 1);	
	};

	const nextClicked = () => {
		setIndex((prev) => prev + 1);	
	};

	return (
		<div className="places_main_wrapper">
			<div className="place_out_pagination_container">
				<Places data={data[index]} />
			</div>
			<div className="pagination_switch_container">
				<button disabled={index <= 1} onClick={prevClicked} className="no_btn_theme">Previous</button>
				<button disabled={index < data.length} onClick={nextClicked} className="no_btn_theme">Next</button>
			</div>
		</div>
	);
};
export default Result;
