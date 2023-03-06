import React, { useState } from 'react';

const elements = ['Movie', 'Theater', 'Opera', 'Nothing'];

export default function Checkbox() {
  const [checkedOption, setCheckedOption] = useState<boolean>(false);

  function checkSelectedOption(e: React.ChangeEvent<HTMLInputElement>) {
    setCheckedOption(e.target.checked);
  }

  return (
    <>
      {elements.map((element, index) => {
        return (
          <div key={index}>
            <input type="checkbox" value={checkedOption as any} onChange={(e) => checkSelectedOption(e)} />
            <h3>{element}</h3>
          </div>
        );
      })}
    </>
  );
}
