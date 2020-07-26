import React from 'react';

function CreateElement() {
  return React.createElement(
    'h2',
    { className: 'title' },
    'Hello World using React.createElement'
  );
}

export default CreateElement;
