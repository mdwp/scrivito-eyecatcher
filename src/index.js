import * as Scrivito from 'scrivito';
import * as React from 'react';

const EyecatcherParagraphWidget = Scrivito.provideWidgetClass('EyecatcherParagraphWidget', {
  attributes: {
    text: 'html',
    textSize: ['enum', { values: ['h1', 'h2', 'h3'] }],
    border: ['enum', { values: ['yes', 'no'] }],
    shadow: ['enum', { values: ['small', 'large'] }],
    rounded: ['enum', { values: ['yes', 'no'] }],
    backgroundColor: [
      'enum',
      {
        values: [
          'white',
          'greywhite',
          'greylight',
          'greymiddle',
          'brand-primary',
          'brand-secondary',
          'transparent',
        ],
      },
    ],

  },
});

Scrivito.provideEditingConfig('EyecatcherParagraphWidget', {
  title: 'Eyecatcher Paragraph',
  description: 'Eyecatcher Paragraph Text',

  attributes: {
    textSize: {
      title: 'Text size',
      description: 'Default: Small',
      values: [
        { value: 'h3', title: 'Small' },
        { value: 'h2', title: 'Medium' },
        { value: 'h1', title: 'Large' },
      ],
    },

    backgroundColor: {
      title: 'Background color',
      description: 'Default: Transparent',
      values: [
        { value: 'white', title: 'White' },
        { value: 'greywhite', title: 'White grey' },
        { value: 'greylight', title: 'Light grey' },
        { value: 'greymiddle', title: 'Grey' },
        { value: 'greydark', title: 'Dark grey' },
        { value: 'brand-primary', title: 'Primary color' },
        { value: 'brand-secondary', title: 'Secondary color' },
        { value: 'transparent', title: 'No color' },

      ],
    },
    rounded: {
      title: 'Rounded corners',
      description: 'Click on Yes if you want the box to have rounded corners. Default: no',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
    border: {
      title: 'Border',
      description: 'Click on Yes if you want the box to have decoration borders on top and bottom inside the box.',
      values: [
        { value: 'yes', title: 'Yes' },
        { value: 'no', title: 'No' },
      ],
    },
    shadow: {
      title: 'Shadow',
      description: 'Shadow around the box. Default: no',
      values: [
        { value: 'small', title: 'Small' },
        { value: 'large', title: 'Large' },
      ],
    },
  },
  properties: [
    'textSize',
    'border',
    'shadow',
    'backgroundColor',
    'rounded',

  ],
  initialContent: {
    textSize: 'h3',
    border: 'no',
    backgroundColor: 'white',
    rounded: 'no',

  },
});

Scrivito.provideComponent('EyecatcherParagraphWidget', ({ widget }) => {
  const classNames = ['eyecatcher'];

  let backgroundColor = widget.get('backgroundColor') || 'transparent';

  const rounded = widget.get('rounded');
  const border = widget.get('border');
  const shadow = widget.get('shadow');
  const textSize = widget.get('textSize');


  if (rounded === 'yes')
    classNames.push('rounded');
  if (shadow === 'small')
    classNames.push('shadow');
  else if (shadow === 'large')
    classNames.push('shadow-lg');
  if (border === 'yes')
    classNames.push('deco-border');


  classNames.push(`bg-${backgroundColor}`);

  classNames.push('text-center');

  classNames.push(`${textSize}`);

  return (<Scrivito.ContentTag tag="p"
    className={classNames.join(' ')}
    content={widget}
    attribute="text" />
  );
});


export default EyecatcherParagraphWidget;