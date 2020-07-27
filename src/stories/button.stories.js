import React from 'react';
import {storiesOf} from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import {Button} from 'primereact/button';

export class ButtonDemo extends Button {

    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return super.render();
    }
}

storiesOf('Button', module)
    .addDecorator(withInfo)
    .add('All', () =>
        <ButtonDemo>
            <div>
                <Button label="Proceed" className="p-button-raised p-button-rounded"/>
                <Button label="Check" icon="pi pi-check"/>
                <Button label="Disabled" disabled="disabled"/>

                <h3 className="first">Basic</h3>
                <Button label="Click"/>
                <Button label="Click" icon="pi pi-check"/>
                <Button label="Click" icon="pi pi-check" iconPos="right"/>
                <Button icon="pi pi-check"/>
                <Button label="Click" disabled="disabled"/>

                <h3>Severities</h3>
                <Button label="Primary"/>
                <Button label="Secondary" className="p-button-secondary"/>
                <Button label="Success" className="p-button-success"/>
                <Button label="Info" className="p-button-info"/>
                <Button label="Warning" className="p-button-warning"/>
                <Button label="Danger" className="p-button-danger"/>

                <h3>Raised Buttons</h3>
                <Button label="Primary" className="p-button-raised"/>
                <Button label="Secondary" className="p-button-raised p-button-secondary"/>
                <Button label="Success" className="p-button-raised p-button-success"/>
                <Button label="Info" className="p-button-raised p-button-info"/>
                <Button label="Warning" className="p-button-raised p-button-warning"/>
                <Button label="Danger" className="p-button-raised p-button-danger"/>

                <h3>Rounded Buttons</h3>
                <Button label="Primary" className="p-button-rounded"/>
                <Button label="Secondary" className="p-button-rounded p-button-secondary"/>
                <Button label="Success" className="p-button-rounded p-button-success"/>
                <Button label="Info" className="p-button-rounded p-button-info"/>
                <Button label="Warning" className="p-button-rounded p-button-warning"/>
                <Button label="Danger" className="p-button-rounded p-button-danger"/>
            </div>
        </ButtonDemo>
    )
    .add('with label', () => <Button label="Prime React Button with Label"/>)
    .add('primary with label', () => <Button label="Primary"/>)
    .add('secondary with label', () => <Button label="Secondary" className="p-button-secondary"/>)
    .add('Success', () => <Button label="Success" className="p-button-success"/>)
    .add('Info', () => <Button label="Info" className="p-button-info"/>)
    .add('Warning', () => <Button label="Warning" className="p-button-warning"/>)
    .add('Danger', () => <Button label="Danger" className="p-button-danger"/>)
    .add('Rounded Raised', () => <Button label="Proceed" className="p-button-raised p-button-rounded"/>);