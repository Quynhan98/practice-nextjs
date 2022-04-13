import { MouseEvent } from "react";

export function Football(): JSX.Element {
  const shoot = (a: string): void => {
    alert(a);
  };

  return <button onClick={() => shoot("Goal!")}>Take the shot1!</button>;
}

export function Shoot(): JSX.Element {
  const shoot = (
    a: string,
    b: MouseEvent<HTMLButtonElement>
  ): void => {
    alert(b.type);
  };

  return <button onClick={(e) => shoot("Goal!", e)}>Take the shot2!</button>;
}
