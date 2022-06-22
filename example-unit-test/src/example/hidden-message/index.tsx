import { ChangeEvent, ReactNode, useState } from 'react';

type HiddenMessageProp = {
  children: ReactNode;
};

export const HiddenMessage = (props: HiddenMessageProp): JSX.Element => {
  const { children } = props;
  const [message, setMessage] = useState(false);

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.checked);
  };

  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input type="checkbox" id="toggle" checked={message} onChange={handleChecked} />
      {message ? children : null}
    </div>
  );
};
