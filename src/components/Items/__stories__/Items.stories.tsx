import React from 'react';
import { storiesOf } from '@storybook/react';
import Items from '../Items';
import { mockItems } from '../mockItems';

const stories = storiesOf('List Items', module);

stories.add('Items', () => <Items list={mockItems} />, { info: { inline: true } });
