import { Component, MouseEventHandler } from 'react';

export function Example(): JSX.Element {
  const counter: number = 5;

  return (
    <div>
      {
        (counter == 5) &&
        <h1>Hello World!!</h1>
      }
    </div>
  );
}

export function Display(props: { toDisplay: boolean }): JSX.Element | null {
  if (!props.toDisplay) {
    return null;
  }

  return <h1>Component is rendered</h1>;
}

//
function Message(props: { isLoggedIn: boolean }): JSX.Element {
  {
    if (props.isLoggedIn)
      return <h1>Welcome User!</h1>;
    else
      return <h1>Please Login!</h1>;
  }
}

function Login(props: { clickFunc: MouseEventHandler<HTMLButtonElement> }): JSX.Element {
  return (<button onClick={props.clickFunc}>Login</button>);
}

function Logout(props: { clickFunc: MouseEventHandler<HTMLButtonElement> }): JSX.Element {
  return (<button onClick={props.clickFunc}>Logout</button>);
}

export class HomePage extends Component {
  state: { isLoggedIn: boolean };

  constructor(props: Object) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLogin = (): void => {
    this.setState({ isLoggedIn: true });
  }

  handleLogout = (): void => {
    this.setState({ isLoggedIn: false });
  }

  render(): JSX.Element {
    return (
      <div>
        <Message isLoggedIn={this.state.isLoggedIn} />
        {
          (this.state.isLoggedIn)
            ? (<Logout clickFunc={this.handleLogout} />)
            : (<Login clickFunc={this.handleLogin} />)
        }
      </div>
    );
  }
}
