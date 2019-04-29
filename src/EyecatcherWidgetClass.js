import * as Scrivito from 'scrivito';

const EyecatcherWidget = Scrivito.provideWidgetClass('EyecatcherWidget', {
    attributes: {
        text: 'html',
        textSize: ['enum', { values: ['small', 'medium', 'large'] }],
        alignment: ['enum', { values: ['left', 'center', 'right'] }],
        border: ['enum', { values: ['yes', 'no'] }],
        shadow: ['enum', { values: ['small', 'large'] }],
        rounded: ['enum', { values: ['yes', 'no'] }],
        useGradient: ['enum', { values: ['yes', 'no'] }],
        backgroundColor: [
            'enum',
            {
                values: [
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'primary',
                    'secondary',
                    'transparent'



                ],
            },
        ],

    },
});


export default EyecatcherWidget;