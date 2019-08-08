import React from 'react';

import {storiesOf} from '@storybook/react';
import {DataTable} from "primereact/datatable";
import {Card} from "primereact/card";
import {Column} from "primereact/column";

// import {logger} from '@storybook/client-logger';
// function log(name) {
//     logger.info(`LifecycleLogger: ${name}`);
// }

const cars = {
    "data": [
        {"brand": "Volkswagen", "year": 2012, "color": "White", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "White", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "White", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ]
};

const selectedCar = null;

storiesOf('Recent Sales', module)
    .add('Primary', () =>
        <Card>
            <h1 style={{fontSize: '16px'}}>Recent Sales</h1>
            <DataTable value={cars.data} style={{marginBottom: '20px'}}
                       responsive={true}
                       selectionMode="single"
                       selection={selectedCar}
                       onSelectionChange={(e) => this.setState({selectedCar: e.value})}>
                <Column field="vin" header="Vin" sortable={true}/>
                <Column field="year" header="Year" sortable={true}/>
                <Column field="brand" header="Brand" sortable={true}/>
                <Column field="color" header="Color" sortable={true}/>
            </DataTable>
        </Card>
    );
