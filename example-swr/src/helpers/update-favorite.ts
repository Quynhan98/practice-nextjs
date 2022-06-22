import { URL } from "../constants/url";
import { postData } from "./fetch-api";

export const updateFavorite = async (id: number, is_favorite: boolean) => {
  let isStatus = true;
  const body = {
    media_type: 'movie',
    media_id: id,
    favorite: !is_favorite,
  };

  const statusResponse = await postData(URL.UPDATE_FAVORITE, body);

  if (!statusResponse.ok) {
    isStatus = false
  }

  return isStatus;
};
