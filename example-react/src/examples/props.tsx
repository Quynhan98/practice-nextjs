import { Component } from "react";

function ChildComponent(props: { text: string }): JSX.Element {
  return <p>{props.text}</p>;
}

export class ParentComponent extends Component {
  render(): JSX.Element {
    return (
      <h1>
        I'm the parent component.
        <ChildComponent text="I'm the 1st child" />
        <ChildComponent text="I'm the 2nd child" />
        <ChildComponent text="I'm the 3rd child" />
      </h1>
    );
  }
}
