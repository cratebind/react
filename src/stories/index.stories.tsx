import React from 'react';

import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';

import ExampleComponent from '../index';

const stories = storiesOf('Components', module);

stories.add(
  'ExampleComponent',
  () => <ExampleComponent text="test" />
);

// storiesOf('Components/Button', module).addWithJSX(
//   'basic PrimaryButton',
//   () => (
//     <ExampleComponent
//       text="test"
//     />
//   ),
//   {
//     info: {
//       text: `

//   ### Notes

//   light button seen on <https://zpl.io/aM49ZBd>

//   ### Usage
//   ~~~js
//   <PrimaryButton
//     label={text('label', 'Enroll')}
//     disabled={boolean('disabled',false)}
//     onClick={() => alert('hello there')}
//   />
//   ~~~

// `,
//     },
//   }
// );


// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// addDecorator(withInfo);

// storiesOf('ExampleComponent', module)
//   .add('default', () => (
//     <ExampleComponent text="test" />
//   ))

// const stories = storiesOf('ExampleComponent', module);

// stories.addDecorator(withInfo);
// stories.addParameters({ info: { inline: true } });

// // import { Button, Welcome } from '@storybook/react/demo';

// // storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// // storiesOf('Test', module)
// //   .add('default', () => <div>Hello Test</div>, { info: { inline: true } })

// stories.add('default', () => <ExampleComponent text="test" />)