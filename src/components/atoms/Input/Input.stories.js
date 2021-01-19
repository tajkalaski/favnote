// YourComponent.stories.js

import React from 'react';
import Input from './Input';

// This default export determines where your story goes in the story list
export default {
  title: 'Input',
  component: Input,
};

// eslint-disable-next-line react/jsx-props-no-spreading
// const Template = (args) => <Button {...args}></Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Primary = (args) => <Input {...args} />;
Primary.args = {
  placeholder: 'Login',
};

export const Search = (args) => <Input {...args} />;
Search.args = {
  search: true,
  placeholder: 'Search',
};
