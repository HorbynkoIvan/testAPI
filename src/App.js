import React, {Component} from 'react';
/*import Menu from "./components/menu";*/
import Header from "./components/header";
import Sidebar from "./components/sidebar/Sidebar";
import Aside from "./components/aside";
import Content from "./components/content";
import Footer from "./components/footer";


class App extends Component {
    render() {
        return (
            <main className="main">
                <div className="page-loader">
                    <div className="page-loader__spinner">
                        <svg viewBox="25 25 50 50">
                            <circle cx={50} cy={50} r={20} fill="none" strokeWidth={2} strokeMiterlimit={10}/>
                        </svg>
                    </div>
                </div>
                <Header/>
                <Sidebar/>
                <Aside/>
                <Content/>
                <Footer/>
            </main>
        );
    }
};

export default App;