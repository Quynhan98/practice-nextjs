import { ChangeEvent, useState } from 'react';
import { validateString } from '../../helpers/validate';
import { DisplayName } from '../display-name';

export const User = () => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState(false);

  const setUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isValid = validateString(value);

    setError(isValid);
    setName(value);
  };

  return (
    <div>
      <DisplayName name={name} />
      <input type="text" value={name} onChange={setUsername} />
      {error && <div>Error!</div>}
    </div>
  );
};
