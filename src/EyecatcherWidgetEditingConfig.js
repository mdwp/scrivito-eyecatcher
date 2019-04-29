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
            description: 'Default: Transparent',
            values: [
                { value: 'success', title: 'Success' },
                { value: 'info', title: 'Info' },
                { value: 'warning', title: 'Warning' },
                { value: 'danger', title: 'Danger' },
                { value: 'primary', title: 'Primary color' },
                { value: 'secondary', title: 'Secondary color' },
                { value: 'transparent', title: 'Transparent' },

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
        'rounded',

    ],
    initialContent: {
        alignment: 'left',
        textSize: 'small',
        border: 'no',
        backgroundColor: 'transparent',
        rounded: 'no',

    },
});