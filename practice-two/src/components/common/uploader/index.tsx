import { ChangeEvent } from 'react';
import './uploader.css';

export type UploaderProp = {
  label: string;
  messageErr?: string;
  name: string;
  baseImage: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Uploader = (props: UploaderProp) => {
  const { label, messageErr, name, baseImage, handleChange } = props;

  return (
    <div className="uploader">
      <label className="uploader-title">
        {label}
        <div className="uploader-input">
          <input name={name} onChange={handleChange} className="input-content" type="file" />
          {baseImage && <img src={baseImage} className="uploader-image" />}
        </div>
      </label>
      {messageErr && <span className="input-error">{messageErr}</span>}
    </div>
  );
};
