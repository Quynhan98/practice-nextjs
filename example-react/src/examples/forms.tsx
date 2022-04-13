import { useState, Component, FormEvent, ChangeEvent } from "react";

// Controlled Inputs
export function ContactForm(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('name:', name);
    console.log('email:', email);
    console.log('message:', message);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Form 1</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="message">Name</label>
        <input
          id="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export class NameForm extends Component {
  state: { value: string };

  constructor(props: Object) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('A name was submitted: ' + this.state.value);
  }

  render(): JSX.Element {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Form 2</h3>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export class EssayForm extends Component {
  state: { value: string };

  constructor(props: Object) {
    super(props);
    this.state = { value: 'Please write an essay about your favorite DOM element.' };
  }

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('An essay was submitted:' + this.state.value);
  }

  render(): JSX.Element {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Form 3</h3>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class FlavorForm extends Component {
  state: { value: string };

  constructor(props: Object) {
    super(props);
    this.state = { value: 'Coconut' };
  }

  handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('Your favorite flavor is: ' + this.state.value);
  }

  render(): JSX.Element {
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <h3>Form 4</h3>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class Reservation extends Component {
  state: {
    isGoing: boolean;
    numberOfGuests: number;
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 1
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target: EventTarget & HTMLInputElement = e.target;
    const value: string | boolean = target.type === 'checkbox' ? target.checked : target.value;
    const name: string = target.name;
    this.setState({
      [name]: value
    });
  }

  render(): JSX.Element {
    return (
      <form>
        <h3>Form 5</h3>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
