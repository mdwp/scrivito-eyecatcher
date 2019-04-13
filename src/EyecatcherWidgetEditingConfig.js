import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('EyecatcherWidget', {
    title: 'Eyecatcher',
    description: 'Eyecatcher Text',

    attributes: {
        alignment: {
            title: 'Alignment',
            description: 'Default: Left',
            values: [
                { value: 'left', title: 'Left' },
                { value: 'center', title: 'Center' },
                { value: 'right', title: 'Right' },
            ],
        },
        textSize: {
            title: 'Text size',
            description: 'Default: small (is larger as standard text)',
            values: [
                { value: 'small', title: 'Small' },
                { value: 'medium', title: 'Medium' },
                { value: 'large', title: 'Large' },
            ],
        },

        backgroundColor: {
            title: 'Background color',
            description: 'Does not apply if a background image is set. Default: Transparent',
            values: [
                { value: 'white', title: 'White' },
                { value: 'greywhite', title: 'White grey' },
                { value: 'greylight', title: 'Light grey' },
                { value: 'greymiddle', title: 'Grey' },
                { value: 'greydark', title: 'Dark grey' },
                { value: 'primary', title: 'Primary color' },
                { value: 'secondary', title: 'Secondary color' },
                { value: 'accent', title: 'Accent color' },
                { value: 'dark-color', title: 'Theme dark color' },
                { value: 'light-color', title: 'Theme light color' },
                { value: 'transparent', title: 'No color' },

            ],
        },
        useGradient: {
            title: 'Gradient',
            description: 'Default: no',
            values: [
                { value: 'yes', title: 'Yes' },
                { value: 'no', title: 'No' },
            ],
        },

        rounded: {
            title: 'Rounded corners',
            description: 'Click on Yes if you want the button to have rounded corners. Default: no',
            values: [
                { value: 'yes', title: 'Yes' },
                { value: 'no', title: 'No' },
            ],
        },
        border: {
            title: 'Border',
            description: 'Click on Yes if you want the box to have decoration borders inside the box.',
            values: [
                { value: 'yes', title: 'Yes' },
                { value: 'no', title: 'No' },
            ],
        },
        shadow: {
            title: 'Shadow',
            description: 'Shadow around the Eyecatcher. Default: no',
            values: [
                { value: 'small', title: 'Small' },
                { value: 'large', title: 'Large' },
            ],
        },
    },
    properties: [
        'alignment',
        'textSize',
        'border',
        'shadow',
        'backgroundColor',
        'useGradient',
        'rounded',

    ],
    initialContent: {
        alignment: 'left',
        textSize: 'small',
        border: 'no',
        useGradient: 'no',
        backgroundColor: 'white',
        rounded: 'no',

    },
});