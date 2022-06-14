import URL_PAGE from '../constants/url';
import { Todo } from '../interfaces/Todo';

export const getData = async (): Promise<Todo[]> => {
  const response = await fetch(URL_PAGE);

  return response.json();
};

export const postData = async (requestData: Todo): Promise<Todo> => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  };
  const response = await fetch(URL_PAGE, config);

  return response.json();
};

export const deleteData = async (id: number): Promise<Todo> => {
  const config = {
    method: 'DELETE'
  };
  const response = await fetch(`${URL_PAGE}/${id}`, config);

  return response.json();
};
