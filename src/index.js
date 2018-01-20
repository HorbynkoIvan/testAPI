import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, hashHistory} from 'react-router';
import Repositorieslist from './components/repositorieslist';
import Favoritelist from './components/favoritelist';
import Contributorslist from './components/contributorslist';


ReactDOM.render(
        <Router history={hashHistory}>
            <Route exact path='/' component={App}>
                <Route path='repositorieslist' component={Repositorieslist}/>
                <Route path='favoritelist' component={Favoritelist}/>
                <Route path='contributorslist' component={Contributorslist}/>
            </Route>
        </Router>,
    document.getElementById('root'));

registerServiceWorker();
