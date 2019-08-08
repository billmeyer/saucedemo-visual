import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'primereact/button';

storiesOf('Button', module)
    .add('All', () => 
        <div>
            <Button label="Prime React Button with Label"/>
            <Button label="Primary"/>
            <Button label="Secondary" className="p-button-secondary"/>
            <Button label="Success" className="p-button-success"/>
            <Button label="Info" className="p-button-info"/>
            <Button label="Warning" className="p-button-warning"/>
            <Button label="Danger" className="p-button-danger"/>
            <Button label="Proceed" className="p-button-raised p-button-rounded"/>
        </div>
    )
    .add('with label', () => <Button label="Prime React Button with Label"/>)
    .add('primary with label', () => <Button label="Primary"/>)
    .add('secondary with label', () => <Button label="Secondary" className="p-button-secondary"/>)
    .add('Success', () => <Button label="Success" className="p-button-success"/>)
    .add('Info', () => <Button label="Info" className="p-button-info"/>)
    .add('Warning', () => <Button label="Warning" className="p-button-warning"/>)
    .add('Danger', () => <Button label="Danger" className="p-button-danger"/>)
    .add('Rounded Raised', () => <Button label="Proceed" className="p-button-raised p-button-rounded"/>);