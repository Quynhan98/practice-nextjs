import { Component } from "react";

function BoilingVerdict(props: { celsius: number }): JSX.Element {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>
  }

  return <p>The water would not boil</p>
}

const scaleNames: any = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

type Temperature = {
  scale: string;
  temperature: string;
  onTemperatureChange: Function;
}

class TemperatureInput extends Component {
  props: Temperature;

  constructor(props: Temperature) {
    super(props);
    this.props = props;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onTemperatureChange(e.target.value)
  }

  render(): JSX.Element {
    const temperature: string = this.props.temperature;
    const scale: string = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: Function): string {
  const input: number = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return '';
  }

  const output: number = convert(input);
  const rounded: number = Math.round(output * 1000) / 1000;

  return rounded.toString();
}

export class Calculator extends Component {
  state: {
    temperature: string;
    scale: string
  };

  constructor(props: Object) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange = (temperature: string): void => {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange = (temperature: string): void => {
    this.setState({ scale: 'f', temperature });
  }

  render(): JSX.Element {
    const scale: string = this.state.scale;
    const temperature: string = this.state.temperature;
    const celsius: string = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit: string = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

//Currency conversion (vnd -usd)
type CurrencyConversion = {
  value: number;
  onHandleChange: Function;
}

const USDtoVND = (props: CurrencyConversion): JSX.Element => {
  const convert = (usd: number): number => {
    return usd * 23000;
  }

  return (
    <div>
      <span>USD</span>
      <input
        onChange={(e) => {
          const usd: number = Number(e.target.value);
          const vnd: number = convert(usd);
          props.onHandleChange({
            usd,
            vnd
          });
        }}
        value={props.value}
      />
    </div>
  );
};

const VNDtoUSD = (props: CurrencyConversion): JSX.Element => {
  const convert = (vnd: number): number => {
    return vnd / 23000;
  }

  return (
    <div>
      <span>VND</span>
      <input
        onChange={(e) => {
          const vnd: number = Number(e.target.value);
          const usd: number = convert(vnd);
          props.onHandleChange({
            usd,
            vnd
          });
        }}
        value={props.value}
      />
    </div>
  );
};

export class AppCC extends Component {
  state: {
    usd: number;
    vnd: number;
  };

  constructor(props: CurrencyConversion) {
    super(props);
    this.state = {
      usd: 0,
      vnd: 0
    }
  }

  handleChange = (data: CurrencyConversion): void => {
    this.setState(data);
  };

  render(): JSX.Element {
    return (
      <div>
        <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
        <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
        <br />
      </div>
    );
  }
}
