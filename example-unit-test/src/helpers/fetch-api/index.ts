export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      return response.json();
    }

    throw response.status
  } catch (err) {
    throw err
  }
};
