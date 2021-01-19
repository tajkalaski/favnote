// YourComponent.stories.js

import React from 'react';
import Paragraph from './Paragraph';

// This default export determines where your story goes in the story list
export default {
  title: 'Paragraph',
  component: Paragraph,
};

// eslint-disable-next-line react/jsx-props-no-spreading
// const Template = (args) => <Button {...args}></Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Primary = (args) => <Paragraph {...args}>Hello, Do something Tajsonik</Paragraph>;
