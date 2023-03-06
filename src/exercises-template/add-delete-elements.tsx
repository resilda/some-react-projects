import React, { useState } from 'react';

export default function CreateRemoveElementsInList() {
  const [newItem, setNewItem] = useState<string>('');
  const [items, setItems] = useState<Array<string>>([]);

  function registerNewItem(e: React.ChangeEvent<HTMLInputElement>) {
    setNewItem(e.target.value);
  }

  function addItem() {
    setItems([...items, newItem]);
    setNewItem('');
  }

  function removeItem(element: string) {
    setItems(items.filter((item) => item !== element));
  }

  return (
    <>
      <form>
        <input type="text" value={newItem} onChange={registerNewItem} />
      </form>
      <button onClick={addItem}>Add</button>
      {items.map((item) => {
        return (
          <h3 key={item} onClick={() => removeItem(item)}>
            {item}
          </h3>
        );
      })}
    </>
  );
}
