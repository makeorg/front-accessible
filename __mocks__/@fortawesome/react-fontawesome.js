
import React from 'react';

export const FontAwesomeIcon = ({ icon }) => (
  <svg
    lib="@fortawesome/react-fontawesome"
    icon={icon.iconName}
    prefix={icon.prefix}
  />
);
