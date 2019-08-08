import React from 'react';

import {storiesOf} from '@storybook/react';
import {SplitButton} from "primereact/splitbutton";

const state = {
    items: [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: (e) => {
                this.growl.show({severity: 'success', summary: 'Updated', detail: 'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: (e) => {
                this.growl.show({severity: 'success', summary: 'Delete', detail: 'Data Deleted'});
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: (e) => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: (e) => {
                window.location.hash = "/fileupload"
            }
        }
    ]
};

storiesOf('SplitButton', module)
    .add('All', () =>
        <div>
            <SplitButton label="Primary"/>
            <SplitButton label="Secondary" className="p-button-secondary" model={state.items}/>
            <SplitButton label="Success" className="p-button-success" model={state.items}/>
            <SplitButton label="Info" className="p-button-info" model={state.items}/>
            <SplitButton label="Warning" className="p-button-warning" model={state.items}/>
            <SplitButton label="Danger" className="p-button-danger" model={state.items}/>
            <SplitButton icon="pi pi-plus" label="Hello Prime React Button" model={state.items}/>
        </div>
    )
    .add('Primary', () => <SplitButton label="Primary"/>)
    .add('Secondary', () => <SplitButton label="Secondary" className="p-button-secondary" model={state.items}/>)
    .add('Success', () => <SplitButton label="Success" className="p-button-success" model={state.items}/>)
    .add('Info', () => <SplitButton label="Info" className="p-button-info" model={state.items}/>)
    .add('Warning', () => <SplitButton label="Warning" className="p-button-warning" model={state.items}/>)
    .add('Danger', () => <SplitButton label="Danger" className="p-button-danger" model={state.items}/>)
    .add('with text', () => <SplitButton icon="pi pi-plus" label="Hello Prime React Button" model={state.items}/>);
