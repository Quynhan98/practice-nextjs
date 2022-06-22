export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  }

  throw new Error('Fail fetching data!!!');
};


export const fetcherAll = <T>(...urls: string[]): Promise<T[]> => {
  return Promise.all(urls.map((url) => fetcher<T>(url)));
};

export const postData = async <T>(url: string, requestData: T) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  };

  return await fetch(url, config);
};
