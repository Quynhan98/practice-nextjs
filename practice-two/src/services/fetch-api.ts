export const postData = async <T>(requestData: T, url: string): Promise<T> => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  };

  const response = await fetch(url, config);

  return response.json();
};
