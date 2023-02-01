import { Select } from "antd";
import { FunctionComponent } from "react";
import LogoSvg from "../components/logo-svg";
import "./destination.scss";

export const Destination: FunctionComponent = () => {
	const { Option } = Select;
	return (
		<div className="destination_container">
			<div className="destination_bg">
				<img src="/images/destinations.png" />
			</div>
			<div className="destination_content_container">
				<div className="destination_header">
					<LogoSvg />
				</div>
				<div className="d-flex align-items-center">
					<div className="destination_input_container">
						<Select 
							mode="multiple"
							allowClear
						>
							<Option key={"key"} value={1}>
								{"test"}
							</Option>
						</Select>
					</div>
					<button className="primary_border_btn destination_btn ml-3">Explore</button>
				</div>
			</div>
		</div>
	);
};
export default Destination;