import React from 'react';
import CreateRemoveElementsInList from './add-delete-elements';
import Checkbox from './checkbox';
import CounterParentComponent from './counter-with-a-twist';
import FetchDataFromAPI from './display-data-from-api';
import ImageSlider from './image-slider';
import SearchAndFilterInList from './search-filter';

export default function AllExercises() {
  return (
    <>
      <CounterParentComponent />
      <CreateRemoveElementsInList />
      <FetchDataFromAPI />
      <SearchAndFilterInList />
      <ImageSlider />
      <Checkbox />
    </>
  );
}
