// YourComponent.stories.js

import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.note};
`;

// This default export determines where your story goes in the story list
export default {
  title: 'Button Icon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBg>
        <Story />
      </YellowBg>
    ),
  ],
};

// eslint-disable-next-line react/jsx-props-no-spreading
// const Template = (args) => <Button {...args}></Button>;

export const Bulb = (args) => <ButtonIcon icon={bulbIcon} {...args} />;
export const Active = (args) => <ButtonIcon active icon={bulbIcon} {...args} />;
export const Logout = (args) => <ButtonIcon icon={logoutIcon} {...args} />;
export const Pen = (args) => <ButtonIcon icon={penIcon} {...args} />;
export const Twitter = (args) => <ButtonIcon icon={twitterIcon} {...args} />;
export const Plus = (args) => <ButtonIcon icon={plusIcon} {...args} />;
