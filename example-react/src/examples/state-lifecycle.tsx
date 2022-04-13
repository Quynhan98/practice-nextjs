import { Component } from "react";

export class Clock extends Component {
  state: { date: Date };
  timerId!: number;

  constructor(props: Object) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render(): JSX.Element {
    return <h1>{this.state.date.toLocaleString()}</h1>;
  }
}

//
type State = {
  brand: string;
  model: string;
  color: string;
  year: number;
}
export class Car extends Component {
  state: State;

  constructor(props: State) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  changeColor() {
    this.setState({ color: "blue" });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={() => this.changeColor()}>
          Change color
        </button>
      </div>
    );
  }
}

export class Test extends Component {
  state: { hello: string };

  constructor(props: Object) {
    super(props);
    this.state = { hello: "World!" };
  }

  // Gets invoked once before the render()
  componentWillMount(): void {
    console.log("componentWillMount(1)");
  }

  // Gets invoked once after the render()
  componentDidMount(): void {
    console.log("componentDidMount(2)");
  }

  changeState = (): void => {
    // Is used to update the state of a component
    this.setState({ hello: "NhanLe!" });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Hello {this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState}>Click Here!</a>
        </h2>
      </div>
    );
  }

  // Is invoked before rendering an already mounted component when new props or state are being received
  // If returned false then the subsequent steps of rendering will not be carried out.
  shouldComponentUpdate(): boolean {
    console.log("shouldComponentUpdate(3)");
    return true;
  }

  // Gets invoked once before the render() function is executed after the updation of State or Props.
  componentWillUpdate(): void {
    console.log("componentWillUpdate(4)");
  }

  // Gets invoked once after the render() function is executed after the updation of State or Props.
  componentDidUpdate(): void {
    console.log("componentDidUpdate(5)");
  }
}
