import React from 'react';

import {storiesOf} from '@storybook/react';
import {Button} from "primereact/button";
import {Card} from "primereact/card";

const header = <img alt="Card" src='assets/demo/images/usercard.png'/>;
const footer = <span>
                <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
             </span>;

storiesOf('Card', module)
    .add('Basic', () =>
        <Card>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
        </Card>
    );

storiesOf('Card', module)
    .add('With Title', () =>
        <Card title={"Advanced Card"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
        </Card>
    );

storiesOf('Card', module)
    .add('With Title & Subtitle', () =>
        <Card title={"Advanced Card"} subTitle={"Subtitle"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
        </Card>
    );

storiesOf('Card', module)
    .add('With Title, Subtitle & Header/Footer', () =>
        <Card title={"Advanced Card"} subTitle={"Subtitle"} header={header} footer={footer}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
        </Card>
    );
