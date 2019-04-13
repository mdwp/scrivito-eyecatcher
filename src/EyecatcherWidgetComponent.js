import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('EyecatcherWidget', ({ widget }) => {
    const classNames = [];

    let backgroundColor = widget.get('backgroundColor') || 'transparent';
    const gradient = widget.get('useGradient');
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

    if (gradient === 'yes')
        classNames.push(`bg-gradient-${backgroundColor}`);
    else
        classNames.push(`bg-${backgroundColor}`);
    if (widget.get('alignment')) {
        classNames.push(`text-${widget.get('alignment')}`);
    }
    classNames.push(`p-${textSize}`);

    return (<Scrivito.ContentTag tag="p"
        className={classNames.join(' ')}
        content={widget}
        attribute="text" />
    );
});