import { SERVER_MESSAGES } from '@constant/messages';
import useGetData from '@hooks/use-get-data';
import { act, renderHook } from '@testing-library/react-hooks';

describe('Test Hooks', () => {
  const data = [
    {
      id: 1,
      title: 'title',
      author: 'nhan',
      price: 123,
      desc: 'this is a book',
      image: 'url',
    }
  ]

  test('Hook call setData', () => {
    const { result } = renderHook(() => useGetData('get_url'));

    act(() => {
      result.current.setData(data);
    });

    expect(result.current.data).toEqual(data);
  });

  test('Hook call setError', () => {
    const { result } = renderHook(() => useGetData('get_url'));

    act(() => {
      result.current.setError(SERVER_MESSAGES.SERVER_GET_ERROR);
    });

    expect(result.current.error).toEqual(SERVER_MESSAGES.SERVER_GET_ERROR);
  });
})
