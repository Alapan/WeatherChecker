import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputAutofill from '../src/js/components/InputAutofill.jsx';

storiesOf('My Weather App', module)
  .add('InputAutofill', () => {
    return <InputAutofill />
  })
  .add('with some emoji', () => {
    return <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  });