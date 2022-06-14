import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const UserContext = createContext('');

export const ExampleUseContext = (): JSX.Element => {
  const [userName, setUsername] = useState('Nhan Le');

  useEffect(() => {
    setTimeout(() => {
      setUsername('Nhan, Nhan le');
    }, 3000);
  }, []);

  return (
    <UserContext.Provider value={userName}>
      <Layout>Main Content</Layout>
    </UserContext.Provider>
  );
};

interface LayoutProp {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProp): JSX.Element => {
  return (
    <div>
      <h2>useContext</h2>
      <Header />
      <main>{children}</main>
    </div>
  );
};

const Header = (): JSX.Element => {
  return (
    <header>
      <UserInfo></UserInfo>
    </header>
  );
};

const UserInfo = (): JSX.Element => {
  const userName = useContext(UserContext);
  return <span>{userName}</span>;
};
