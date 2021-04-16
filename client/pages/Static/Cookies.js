import React from 'react';
import { MetaTags } from 'Client/app/MetaTags';

export const Cookies = () => (
  <>
    <MetaTags title="meta.cookies.title" />
    {/* Add page content here */}
  </>
);

// default export needed for loadable component
export default Cookies; // eslint-disable-line import/no-default-export
