const fetcher = (url: string) => fetch(url).then((res) => res.json());
import useSWR from 'swr';

export const ExampleSWR = () => {
  const { data, error } = useSWR('https://api.github.com/repos/vercel/swr', fetcher);

  return (
    <div>
      <h2>{data?.name}</h2>
      <h3>{data?.description}</h3>
      <p>👁 {data?.subscribers_count}</p>
      <p>✨ {data?.stargazers_count}</p>
      <p>🍴 {data?.forks_count}</p>
    </div>
  );
};
