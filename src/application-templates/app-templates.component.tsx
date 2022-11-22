import React from 'react';
import ApplicationTemplates from './templates.component';

export default function AppTemplatesLayout() {
  const layoutWrapper = 'flex flex-col justify-center items-center gap-5';
  const title = 'text-primary-1 font-bold self-center mt-6 text-2xl';

  return (
    <div className={layoutWrapper}>
      <h1 className={title}>Select a project template to navigate</h1>
      <ApplicationTemplates />
    </div>
  );
}
