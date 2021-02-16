import React from 'react';
import Card from './Card';

// This default export determines where your story goes in the story list
export default {
  title: 'Design System/Molecules/Card',
  component: Card,
};

// const Template = (args) => <Button {...args}></Button>;

export const CardOptions = (args) => <Card {...args} />;

// export const Twitter = (args) => <Card cardType="twitter" {...args} />;

// export const Article = (args) => <Card cardType="article" {...args} />;
