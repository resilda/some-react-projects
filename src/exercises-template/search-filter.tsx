import React, { useState } from 'react';

interface Item {
  id: number;
  text: string;
}

const list: Array<Item> = [
  { id: 1, text: 'Movie' },
  { id: 2, text: 'Movieee' },
  { id: 3, text: 'Cinema' },
  { id: 4, text: 'Theatre' },
  { id: 5, text: 'Nothing' },
];

export default function SearchAndFilterInList() {
  const [filterList, setFilterList] = useState<Array<Item>>(list);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) => item.text.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  return (
    <div>
      <div>
        Search: <input type="text" onChange={handleSearch} />
      </div>
      {filterList && filterList.map((item, index) => <div key={index}>{item.text}</div>)}
    </div>
  );
}
