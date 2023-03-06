import React, { useState } from 'react';

interface Item {
  id: string;
  url: string;
}

const list: Array<Item> = [
  {
    id: '1',
    url: 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
  },
  {
    id: '2',
    url: 'https://catfriendly.com/wp-content/uploads/2021/08/cat-lying-down.jpg',
  },
  {
    id: '3',
    url: 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
  },
  {
    id: '4',
    url: 'https://catfriendly.com/wp-content/uploads/2021/08/cat-lying-down.jpg',
  },
];

export default function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  function displayPrevSlide() {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(list.length - 1);
    }
  }

  function displayNextSlide() {
    if (slideIndex !== list.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === list.length - 1) {
      setSlideIndex(0);
    }
  }

  return (
    <>
      <img src={list[slideIndex].url} alt={list[slideIndex].id} />
      <button onClick={displayPrevSlide}>Prev</button>
      <button onClick={displayNextSlide}>Next</button>
    </>
  );
}
