import { FunctionComponent, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Locations } from "../../../../locations";
import "./places.scss";

export interface PlacesProps {
    data: any
}

export const Places: FunctionComponent<PlacesProps> = (props) => {
	const [searchParams] = useSearchParams();
	
	useEffect(() => {
		const places = searchParams.get("farmer");
		console.log(places);
	}, [searchParams]);

	const navigate = useNavigate();
	return (
		<div className="place_container">
			<div className="place_name_container">
				{props.data.name}
			</div>
			<div className="places_content_container">
				<div className="places_image_container">
					{props.data.images.map((d: any, i: number) => {
						return (
							<div className="places_image_holder" key={`place_img_${i}`}>
								<img src={d.url}  />
							</div>	
						);
					})}
				</div>
				<div className="w-100 py-3 h-100">
					<div className="place_details_container">
						<div className="places_image">{props.data.name}</div>
						<p className="places_details">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 
                            1960s with the release
						</p>
						<div className="best_time_weather">
                            Best time to visit: {props.data.bestSeason}
						</div>
						<div className="best_time_weather">
                            Wether: {props.data.wether}°C
						</div>
						<div className="top_list_header mt-2">
							<div className="d-flex align-items-center justify-content-between w-100">
								<div>
									<img src="/images/primary.png" />
								Top Hotels
								</div>		
								<div className="">
									Average hotel price: {props.data.averageHotelPrice}$
								</div>
							</div>
							
						</div>
						<div className="divider"></div>
						<div className="top_list_container">
							<div className="top_list_content">
								{props.data.topHotel.map((d: any) => {
									return (
										<div className="top_list" key={`top_hotel_${d.name}`}>
											<div className="top_list_image_container">
												<div className="top_list_image">
													<img src={d.img} alt="" />
												</div>
											</div>
											<div className="top_list_name">
												{d.name}
											</div>   
										
										</div>
									);
								})}  
							</div>
							<div className="top_list_next" onClick={() => navigate(Locations.RESULT_HOTEL)}>
								<img src="/images/next.png" />
							</div>	 
						</div>
						<div className="divider"></div>
						<div className="top_list_header">
							<img src="/images/Vector.png" />
                            Recreation Facilities
						</div>
						<div className="top_list_container">
							<div className="top_list_content">
								{props.data.recreations.map((d: any) => {
									return (
										<div className="top_list" key={`top_hotel_${d.name}`}>
											<div className="top_list_image_container">
												<div className="top_list_image">
													<img src={d.img} alt="" />
												</div>
											</div>
											<div className="top_list_name">
												{d.name}
											</div>   
										
										</div>
									);
								})} 
							</div>
							<div className="top_list_next">
								<img src="/images/next.png" />
							</div>	 
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
};
export default Places;
