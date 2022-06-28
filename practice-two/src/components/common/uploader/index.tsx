import { convertBase64 } from '@helpers/encode';
import { FormEvent, useState } from 'react';
import './uploader.css';

export type UploaderProp = {
  label: string;
  messageErr?: string;
  name: string;
  baseImage: string;
  handleChange: (img: string) => void;
  onHandleBlur?: (e: FormEvent) => void;
};

export const Uploader = (props: UploaderProp) => {
  const { label, messageErr, name, baseImage, handleChange, onHandleBlur } = props;
  const [image, setImage] = useState(baseImage);

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];

    const srcImage = (await convertBase64(file)) as string;

    setImage(srcImage);
    handleChange(srcImage);
  };

  return (
    <div className="uploader">
      <label className="uploader-title">
        {label}
        <div className="uploader-input">
          <input
            data-testid="uploader-img"
            onBlur={onHandleBlur}
            name={name}
            onChange={uploadImage}
            className="uploader-content"
            type="file"
          />
          {image && <img data-testid="image-input" src={image} className="uploader-image" />}
        </div>
      </label>
      {messageErr && (
        <span data-testid="img-error" className="input-error">
          {messageErr}
        </span>
      )}
    </div>
  );
};
