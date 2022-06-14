import { ChangeEvent, FormEvent, MutableRefObject, useRef } from 'react';
import './textbox.css';

export type TextboxProp = {
  label: string;
  messageErr?: string;
  inputType: 'text' | 'number';
  name: string;
  value: string | number;
  handleInput: (input: { [key: string]: string }) => void;
  onHandleBlur?: (e: FormEvent) => void;
};

export const Textbox = (props: TextboxProp) => {
  const { label, messageErr, inputType, name, value, handleInput, onHandleBlur } = props;
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = { [e.target.name]: inputRef.current.value };

    handleInput(inputValue);
  };

  return (
    <div className="input">
      <label className="input-title">
        {label}
        <input
          ref={inputRef}
          name={name}
          value={value}
          onChange={handleChange}
          className="input-content"
          type={inputType}
          onBlur={onHandleBlur}
        />
      </label>
      {messageErr && <span className="input-error">{messageErr}</span>}
    </div>
  );
};
