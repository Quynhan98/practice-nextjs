import { Component, createRef, forwardRef, LegacyRef, ReactNode, RefObject } from 'react';

export class ForwardingRefExample extends Component {
  aRef: RefObject<HTMLButtonElement>;

  constructor(props: any) {
    super(props);
    this.aRef = createRef();
  }

  render(): ReactNode {
    return (
      <div>
        <h2>Forwarding Refs</h2>
        <Counter ref={this.aRef} />
        <button
          onClick={() => {
            console.log(this.aRef);
          }}
        >
          Ref
        </button>
      </div>
    );
  }
}

const Counter = forwardRef((_props, ref: LegacyRef<HTMLButtonElement>) => {
  class Counter extends Component {
    state: { count: number };

    constructor(props: any) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    render(): ReactNode {
      return (
        <div>
          Count: {this.state.count}
          <button ref={ref} onClick={() => this.setState({ count: this.state.count + 1 })}>
            Increment
          </button>
        </div>
      );
    }
  }

  return <Counter />;
});
