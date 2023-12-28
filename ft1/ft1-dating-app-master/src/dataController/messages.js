import { API_URL } from "../config/general";
import { callAxios } from "./dynamicAxios";
import { types } from "../redux/types/types";

export const callAPI = async (type, payload, headers) => {
	switch (type) {
		case types.BLOCK_USER:
			callAxios("post", API_URL + "/messages/blocked", {
				user_id: payload.userId,
				foreign_id: payload.foreignId,
			},
			{ headers: { token: headers.token } });
			break;

		case types.ADD_MESSAGE:
			console.log(type, payload, headers);
			callAxios(
				"post",
				API_URL + "/messages",
				{
					user_id: payload.userId,
					foreign_id: payload.foreignId,
					content: payload.content,
				},
				{ headers: { token: headers.token } }
			);
			break;

		case types.DELETE_MESSAGE:
			callAxios("delete", API_URL + "/messages/" + payload.messageId,
			{ headers: { token: headers.token }});
			break;

		case types.GET_USER_MESSAGES:
			const result = await callAxios("get", API_URL + "/messages", {
				headers: { token: headers.token },
			});
			return result;

		default:
			console.log("the default occurred in messages");
			break;
	}
};
