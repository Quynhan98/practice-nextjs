import { deleteData, getData, postData, updateData } from '@services/fetch-api';
import fetch from 'jest-fetch-mock';

describe('Api methods', () => {
  beforeEach(async function () {
    fetch.resetMocks();
  });

  test('get successfully', async () => {
    const url = 'get_url';
    fetch.mockResponseOnce(JSON.stringify({ status: 'OK' }));
    const response: Response = await getData(url);

    expect(fetch).toBeCalled();
    expect(response.status).toEqual('OK');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  // TODO
  test('get error', async () => {
    const url = 'get_url';
    fetch.mockResponseOnce(JSON.stringify({ status: 'Bad Request' }));

    const response: Response = await getData(url);
    expect(fetch).toBeCalled();
    expect(response.status).toEqual('Bad Request');
    expect(fetch).toThrow();
  });

  test('post', async () => {
    const url = 'post_url';
    fetch.mockResponseOnce(JSON.stringify({ status: 'OK' }));

    const response: any = await postData({ data: 'test' }, url);
    expect(fetch).toBeCalled();
    expect(response.status).toEqual("OK");
    expect(fetch).toHaveBeenCalledWith(url, {
      method: 'POST',
      body: JSON.stringify({ data: 'test' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  test('Delete', async () => {
    const url = 'remove_url';
    const id = 1;
    fetch.mockResponseOnce(JSON.stringify({ status: 'OK' }));
    const response: any = await deleteData(id, url);
    expect(fetch).toBeCalled();
    expect(response.status).toEqual("OK");
    expect(fetch).toHaveBeenCalledWith(`${url}/${id}`, {
      method: 'DELETE',
    });
  });

  test("update", async () => {
    const url = "update_url";
    const id = 1;
    fetch.mockResponseOnce(JSON.stringify({ status: "OK" }));
    const response: any = await updateData(id, url, { data: "test" });
    expect(fetch).toBeCalled();
    expect(response.status).toEqual("OK");
    expect(fetch).toHaveBeenCalledWith(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: "test" }),
    });
  });



});
