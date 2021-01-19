// YourComponent.stories.js

import React from 'react';
import Heading from './Heading';

// This default export determines where your story goes in the story list
export default {
  title: 'Heading',
  component: Heading,
};

// eslint-disable-next-line react/jsx-props-no-spreading
// const Template = (args) => <Button {...args}></Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Big = (args) => <Heading {...args}>This is heading</Heading>;
Big.args = {
  big: true,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Small = (args) => <Heading {...args}>This is heading</Heading>;
