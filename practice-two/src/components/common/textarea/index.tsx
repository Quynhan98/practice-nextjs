import { ChangeEvent, FormEvent, MutableRefObject, useRef } from 'react';
import './textarea.css';

export type TextareaProp = {
  rows?: number;
  cols?: number;
  label: string;
  messageErr?: string;
  name: string;
  value?: string;
  handleInput: (input: { [key: string]: string }) => void;
  onHandleBlur?: (e: FormEvent) => void;
};

export const Textarea = (props: TextareaProp): JSX.Element => {
  const { label, messageErr, name, rows, cols, value, handleInput, onHandleBlur } = props;
  const inputRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = { [e.target.name]: inputRef.current.value };

    handleInput(inputValue);
  };

  return (
    <div className="input">
      <label className="input-title">
        {label}
        <textarea
          ref={inputRef}
          value={value}
          id={name}
          rows={rows}
          cols={cols}
          name={name}
          onChange={handleChange}
          className="textarea-content"
          onBlur={onHandleBlur}
        />
      </label>
      {messageErr && (
        <span className="input-error" data-testid="input-error">
          {messageErr}
        </span>
      )}
    </div>
  );
};
