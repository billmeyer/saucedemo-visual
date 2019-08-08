import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';

// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
import './themes/primereact.css';
import './themes/sauce-light/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/layout.scss';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="layout-main">
                <Route path="/" exact component={Dashboard}/>
            </div>
        )
    }
}

export default App;
