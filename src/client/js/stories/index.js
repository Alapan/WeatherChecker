import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputAutofill from '../components/InputAutofill.jsx';

storiesOf('My Weather App', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('InputAutofill', () => {
    return <InputAutofill />
  })
  .add('with some emoji', () => {
    return <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  });
