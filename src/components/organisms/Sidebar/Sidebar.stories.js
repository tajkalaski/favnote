// YourComponent.stories.js

import React from 'react';
import Sidebar from './Sidebar';

// This default export determines where your story goes in the story list
export default {
  title: 'Design System/Organisms/Sidebar',
  component: Sidebar,
};

// eslint-disable-next-line react/jsx-props-no-spreading
// const Template = (args) => <Sidebar {...args}></Sidebar>;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Primary = (args) => <Sidebar {...args} />;
