import logo from '../assets/logo.svg'

export type User = {
  user: {
    avatarUrl?: string;
    name?: string;
  };
  text?: string;
};

function Avatar(props: User): JSX.Element {
  return (
    <img width="50px" height="50px" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props: User): JSX.Element {
  return (
    <div>
      <Avatar user={props.user} />
      <div>{props.user.name}</div>
    </div>
  );
}

export function Comment(): JSX.Element {
  const user: User = {
    user: {
      avatarUrl: logo,
      name: 'NhanLe',
    },
    text: 'ABC'
  }
  return (
    <div>
      <UserInfo user={user.user} />
      <div>{user.text}</div>
    </div>
  );
}
