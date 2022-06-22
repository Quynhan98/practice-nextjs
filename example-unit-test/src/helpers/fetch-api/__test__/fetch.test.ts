import { fetcher } from "..";
import fetch from 'jest-fetch-mock';

describe('Api methods', () => {
  test('get successfully', async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch.mockResponseOnce(JSON.stringify({ status: 200 }));
    const response: Response = await fetcher(url);
    expect(fetch).toBeCalled();
    // expect(response.status).toEqual(200);
    // expect(fetch).toHaveBeenCalledWith(url);
  });

  test('get error', async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch.mockResponseOnce(JSON.stringify({ status: 404 }));
    const response: Response = await fetcher(url);
    // expect(response.status).toEqual(404);
    // expect(fetch).not.toHaveBeenCalledWith(url);
  });
});
