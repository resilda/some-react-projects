import React from 'react';

export interface TemplateLayoutProps {
  id: number;
  title: string;
  details?: string;
}

export const templateLayoutComponents: TemplateLayoutProps[] = [
  {
    id: 1,
    title: 'Crypto',
    details: 'New Crypto Template',
  },
];

export default function AppTemplatesLayout() {
  return (
    <>
      <h1>Select a project template to navigate</h1>;
      {templateLayoutComponents.map((templateComponent, index) => {
        <ol>
          <li key={index}>{templateComponent.title}</li>;
        </ol>;
      })}
    </>
  );
}
