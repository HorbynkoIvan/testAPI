import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
/*import './node_modules/queries/httpRequest';*/
/*import './node_modules/queries/fetch';*/
import Menu from './components/menu';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open(
            'GET',
            'http://www.mocky.io/v2/5a193c3b300000b91e63f4a7',
            true
        );
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return
            }
            console.log("finished");
            if (xhr.status === 200) {
                console.log('OK! result: ', JSON.parse(xhr.responseText));
                let data = JSON.parse(xhr.responseText);
                this.setState({
                    data: data
                })
            } else {
                console.log(`error', ${xhr.responseText}`);
            }
        };
    }

    render() {
        console.log('data', this.state.data);
        /*     let info =JSON.stringify(this.state.data);*/
        let info = this.state.data;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Menu/>
                {this.children}
            </div>
        );
    }
}

export default App;
