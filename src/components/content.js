import React, {Component} from 'react';
/*import {Link} from 'react-router';*/

class Content extends Component {
    render() {
        return (
            <section className="content">
                <header className="content__title">
                    <h1>xxx</h1>
                    <div className="actions">
                     {/*   <a href="#" className="actions__item zmdi zmdi-trending-up"/>
                        <a href="#" className="actions__item zmdi zmdi-check-all"/>*/}
                        <div className="dropdown actions__item">
                            <i data-toggle="dropdown" className="zmdi zmdi-more-vert"/>
                            <div className="dropdown-menu dropdown-menu-right">
                         {/*       <a href="#" className="dropdown-item">Refresh</a>
                                <a href="#" className="dropdown-item">Manage Widgets</a>
                                <a href="#" className="dropdown-item">Settings</a>*/}
                            </div>
                        </div>
                    </div>
                </header>
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">xxxYYYYYYYYYYYYYy</h2>
                        <small className="card-subtitle">xxxYYYYYYYYYYYYYYYYYYYYYYYYYYY</small>
                    </div>
                    <div className="card-block">
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;