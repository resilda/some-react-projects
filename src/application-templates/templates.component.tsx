import React from 'react';
import { Link } from 'react-router-dom';

export interface TemplateLayoutProps {
  id: number;
  title: string;
  slug: string;
  details?: string;
}

export const templateLayoutComponents: TemplateLayoutProps[] = [
  {
    id: 1,
    title: 'Crypto',
    slug: 'crypto',
    details: 'New Crypto Template',
  },
  {
    id: 2,
    title: 'Jobs Available',
    slug: 'jobsAvailable',
    details: 'Another template description',
  },
  {
    id: 3,
    title: 'Template',
    slug: 'template1',
    details: 'Another template description',
  },
  {
    id: 4,
    title: 'Template',
    slug: 'template2',
    details: 'Another template description',
  },
];

export default function ApplicationTemplates() {
  const templateWrapper =
    'flex flex-col items-center box-content p-4 ring-2 border-primary-2 ring-primary-3 hover:bg-primary-3 cursor-pointer';

  return (
    <div className="flex flex-wrap gap-x-4">
      {templateLayoutComponents.map((templateComponent) => {
        return (
          <Link to={`/${templateComponent.slug}`}>
            <div key={templateComponent.id} className={templateWrapper}>
              <h3>{templateComponent.title.toUpperCase()}</h3>
              <p>{templateComponent.details}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
