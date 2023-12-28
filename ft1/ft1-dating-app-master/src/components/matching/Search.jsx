import { types } from "../../redux/types/types";
import { useDispatch, useSelector } from "react-redux";
import "./search.scss";
import gsap from "gsap";
import { useState } from "react";

// SEARCH: Where filter options can be enabled/disabled.
const Search = () => {
	const [menu, setMenu] = useState(false);

	const dispatch = useDispatch();
	const matchingFilter = useSelector((state) => state.general.matchingFilter);

	const buttons = [
		{ name: "ageFilter", displayName: "Age" },
		{ name: "genderFilter", displayName: "Gender" },
		{ name: "heightFilter", displayName: "Height" },
		{ name: "distanceFilter", displayName: "Location" },
		{ name: "existingKidsFilter", displayName: "Existing Kids" },
		{ name: "openToKidsFilter", displayName: "Open To Kids" },
		// { name: "seenFilter", displayName: "Seen" },
	];

	const onEnter = ({ currentTarget }) => {
		const newColour = matchingFilter[currentTarget.name] ? "#FFBC49" : "coral";
		gsap.to(currentTarget, { backgroundColor: newColour });
	};

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, { backgroundColor: "#f8f9fa" });
	};

	const filterText = menu ? "show" : "hide";

	return (
		<>
			<div className="search ">
				<h2>Find your someone:</h2>
				<p onClick={() => setMenu(!menu)} style={{ cursor: "pointer" }}>
					See below for your matches, <strong>click here</strong> to{" "}
					{filterText} your filters
				</p>

				{!menu ? (
					<div className="searchButtons ">
						{buttons.map((button, index) => {
							return (
								<button
									className="btn btn-light "
									key={index}
									name={button.name}
									onClick={(e) => {
										dispatch({
											type: types.SET_FILTER_OPTIONS,
											payload: e.target.name,
										});
									}}
									onMouseEnter={onEnter}
									onMouseLeave={onLeave}
								>
									{matchingFilter[button.name] ? "Remove " : "Add "}
									<span style={{ pointerEvents: "none" }}>
										{button.displayName}
									</span>
								</button>
							);
						})}
					</div>
				) : null}
			</div>
		</>
	);
};

export default Search;
