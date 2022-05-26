import { ChangeEvent, FormEvent } from 'react';
import './uploader.css';

export type UploaderProp = {
  label: string;
  messageErr?: string;
  name: string;
  baseImage: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onHandleBlur?: (e: FormEvent) => void;
};

export const Uploader = (props: UploaderProp) => {
  const { label, messageErr, name, baseImage, handleChange, onHandleBlur } = props;

  return (
    <div className="uploader">
      <label className="uploader-title">
        {label}
        <div className="uploader-input">
          <input
            onBlur={onHandleBlur}
            name={name}
            onChange={handleChange}
            className="input-content"
            type="file"
          />
          {baseImage && <img src={baseImage} className="uploader-image" />}
        </div>
      </label>
      {messageErr && <span className="input-error">{messageErr}</span>}
    </div>
  );
};
