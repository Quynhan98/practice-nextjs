import { SERVER_MESSAGES } from '@constant/messages';
export const postData = async <T>(requestData: T, url: string): Promise<T> => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  };

  const response = await fetch(url, config);

  if (response.ok) {
    return response.json();
  }

  throw new Error(SERVER_MESSAGES.SERVER_RESPONSE_ERROR);
};

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  }

  throw new Error(SERVER_MESSAGES.SERVER_GET_ERROR);
};

export const deleteData = async <T>(id: number, url: string): Promise<T> => {
  const config = {
    method: 'DELETE'
  };

  const response = await fetch(`${url}/${id}`, config);

  if (response.ok) {
    return response.json();
  }

  throw new Error(SERVER_MESSAGES.SERVER_DELETE_ERROR);
};

export const updateData = async <T>(id: number, url: string, data: T): Promise<T> => {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(SERVER_MESSAGES.SERVER_EDIT_ERROR);
};
