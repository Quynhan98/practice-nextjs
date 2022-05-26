import { ChangeEvent } from 'react';
import './textbox.css';

export type TextboxProp = {
  label: string;
  messageErr?: string;
  inputType: 'text' | 'number';
  name: string;
  value: string | number;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Textbox = (props: TextboxProp) => {
  const { label, messageErr, inputType, name, value, handleChange } = props;

  return (
    <div className="input">
      <label className="input-title">
        {label}
        <input
          name={name}
          value={value}
          onChange={handleChange}
          className="input-content"
          type={inputType}
        />
      </label>
      {messageErr && <span className="input-error">{messageErr}</span>}
    </div>
  );
};
