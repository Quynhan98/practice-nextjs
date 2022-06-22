import { API } from "./api-key";
import { BASE_URL } from "./base-url";

export const URL = {
  UPDATE_FAVORITE: `${BASE_URL}/account/${API.ACCOUNT_ID}/favorite?api_key=${API.API_KEY}&session_id=${API.SESSION_ID}`,
}
