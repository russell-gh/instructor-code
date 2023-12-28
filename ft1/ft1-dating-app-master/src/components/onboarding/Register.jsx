import {
	schema,
	joiDataReorder,
	timeConverter,
	dataConstructor,
} from "../../config/formConfig";
import Joi from "joi";
import RegisterPartOne from "./RegisterPartOne";
import RegisterPartTwo from "./RegisterPartTwo";
import RegisterPartThree from "./RegisterPartThree";
import "./register.css";
import Preferences from "./Preferences";
import { getLngLat } from "../../utils/generic";
import { types } from "../../redux/types/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Selfie from "./Selfie";
import { callAPI } from "../../dataController/onboarding";

const Register = () => {
	const dispatch = useDispatch();
	const regScreen = useSelector((state) => state.onboarding.regScreen);
	const newUserData = useSelector((state) => state.onboarding.newUserData);

	// Constructs user object structure, adds new user to database, changes screen and sets logged in status
	const addNewUser = async (image) => {
		let lifeStyleCombo = newUserData.relationship;
		let openToKids = Number(newUserData.wantKids);
		lifeStyleCombo = { ...lifeStyleCombo, openToKids };
		const coords = await getLngLat(newUserData.postCode);
		const newUserStructured = {
			personalDetails: {
				name: {
					firstName: newUserData.firstName,
					lastName: newUserData.lastName,
				},
				selfie: image,
				dob: timeConverter(newUserData.dateOfBirth),
				location: {
					town: newUserData.town,
					postCode: newUserData.postCode,
					longitude: coords.longitude,
					latitude: coords.latitude,
				},
				kids: Number(newUserData.haveKids),
				religion: Number(newUserData.religion),
				height: Number(newUserData.height),
				gender: Number(newUserData.gender),
				kidsAccepted: Number(newUserData.kidsAccepted),
				smokers: Number(newUserData.smokes),
			},
			preferences: {
				lifeStyle: lifeStyleCombo,
				age: {
					min: Number(newUserData.minAge),
					max: Number(newUserData.maxAge),
				},
				height: {
					min: Number(newUserData.minHeight),
					max: Number(newUserData.maxHeight),
				},
				gender: newUserData.genderPref,
				kidsAccepted: Number(newUserData.kidsAccepted),
				smokers: newUserData.smokersPref,
				acceptedDistance: Number(newUserData.acceptedDistance),
			},
			login: { email: newUserData.email, password: newUserData.password },
		};
		callAPI("ADD_USER", newUserStructured); // sends new user to the database
		dispatch({ type: types.SET_ONBOARDING_SCREEN, payload: 1 }); //sends user to login screen
		// dispatch({ type: types.SET_SCREEN, payload: 1 }); // sends user to matching screen
		// dispatch({ type: types.SET_LOGGED_IN_STATUS, payload: true }); // sets logged in status to true
	};

	// Joi (not so much joy...) validation
	const onValidate = async (data) => {
		const _joiInstance = Joi.object(schema);
		try {
			await _joiInstance.validateAsync(data);
			// await _joiInstance.validateAsync(data, { abortEarly: false });
			dispatch({ type: types.SET_REG_ERRORS, payload: { errors: "" } });
		} catch (errors) {
			dispatch({
				type: types.SET_REG_ERRORS,
				payload: joiDataReorder(errors.details),
			});
		}
	};

	return (
		<>
			<div className="containerReg">
				<form
					className="form"
					onInput={(e) => {
						dispatch({ type: types.ON_INPUT_REG, payload: e });
						{
							let value = dataConstructor(e);
							onValidate({ ...newUserData, [e.target.name]: value });
						}
					}}
					name="registerForm"
				>
					{regScreen === 0 && <RegisterPartOne />}
					{regScreen === 1 && <RegisterPartTwo />}
					{regScreen === 2 && <RegisterPartThree />}
					{regScreen === 3 && <Preferences />}
					{regScreen === 4 && <Selfie addNewUser={addNewUser} />}
				</form>
			</div>
		</>
	);
};

export default Register;
