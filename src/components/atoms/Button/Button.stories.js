// YourComponent.stories.js

import React from 'react';
import Button from './Button';

// This default export determines where your story goes in the story list
export default {
  title: 'Design System/Atoms/Button',
  component: Button,
};

// eslint-disable-next-line react/jsx-props-no-spreading
// const Template = (args) => <Button {...args}></Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Primary = (args) => <Button {...args}>Close / Save</Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Secondary = (args) => <Button {...args}>Remove</Button>;
Secondary.args = {
  secondary: true,
};
