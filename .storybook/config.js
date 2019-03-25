import { configure } from '@storybook/react';

function loadStories() {
  require('../src/client/js/stories/index.js');
}

configure(loadStories, module);