import Interface from "./components/general/Interface";
import Title from "./components/general/Title";
import { useDispatch } from "react-redux";
import { types } from "./redux/types/types";
import { useSelector } from "react-redux";
import { callAPI as matchingCallAPI } from "./dataController/matching";
import { callAPI as messagingCallAPI } from "./dataController/messages";
import "./App.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
let token = undefined; // creating a global token to stop setInterval using the previous instance of token because functional components can behave like closures.

const App = () => {
	const dispatch = useDispatch();
	const currentUserId = useSelector((state) => state.general.currentUserId);
	const localToken = useSelector((state) => state.general.token);
  token = localToken;

	const getInitialData = async () => {
    if (!token){ 
      console.log("quiting early"); 
      return;} // ensures we don't try to get data if we don't have a token
		const messages = await messagingCallAPI(
			types.GET_USER_MESSAGES,
			{},
			{ token }
		);
		const users = await matchingCallAPI(types.GET_ALL_USERS,
			{},
			{ token });

		if (messages.data.status && users.data.status) {
      setTimeout(getInitialData, 10000)
			dispatch({
				type: types.SET_ALL_USERS,
				payload: users.data.payload,
			});
			dispatch({
				type: types.SET_ALL_MESSAGES,
				payload: messages.data.payload,
			});
		} else {
      console.log(users,messages)
			alert("something has gone wrong with the back end!");
		}
	};

	// gets initial data from database once user has logged in and has a token
	useEffect(() => {
		if (currentUserId) {
			getInitialData();
      setTimeout(getInitialData, 10000);
		}
	}, [currentUserId, token]);

	return (
		<>
			<Toaster position="top-right" reverseOrder={false} />
			<Title />
			<Interface />
		</>
	);
};

export default App;
