import React, {Component} from 'react';
/*import {Link} from 'react-router';*/

class Aside extends Component {
    render() {
        return (
            <aside className="chat">
                <div className="chat__header">
                    <h2 className="chat__title">Chat <small>Currently 20 contacts online</small></h2>
                    <div className="chat__search">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <i className="form-group__bar"/>
                        </div>
                    </div>
                </div>
                <div className="listview listview--hover chat__buddies scrollbar-inner">
                    <a className="listview__item chat__available">
                        <img src="/static/templates/matherialadm/demo/img/profile-pics/7.jpg"
                             className="listview__img" alt=""/>
                        <div className="listview__content">
                            <div className="listview__heading">Jeannette Lawson</div>
                            <p>hey, how are you doing.</p>
                        </div>
                    </a>
                    <a className="listview__item chat__available">
                        <img src="/static/templates/matherialadm/demo/img/profile-pics/5.jpg"
                             className="listview__img" alt=""/>
                        <div className="listview__content">
                            <div className="listview__heading">Jeannette Lawson</div>
                            <p>hmm...</p>
                        </div>
                    </a>
                    <a className="listview__item chat__away">
                        <img src="/static/templates/matherialadm/demo/img/profile-pics/3.jpg"
                             className="listview__img" alt=""/>
                        <div className="listview__content">
                            <div className="listview__heading">Jeannette Lawson</div>
                            <p>all good</p>
                        </div>
                    </a>
                    <a className="listview__item">
                        <img src="/static/templates/matherialadm/demo/img/profile-pics/8.jpg"
                             className="listview__img" alt=""/>
                        <div className="listview__content">
                            <div className="listview__heading">Jeannette Lawson</div>
                            <p>morbi leo risus portaac consectetur vestibulum at eros.</p>
                        </div>
                    </a>
                    <a className="listview__item">
                        <img src="/static/templates/matherialadm/demo/img/profile-pics/6.jpg"
                             className="listview__img" alt=""/>
                        <div className="listview__content">
                            <div className="listview__heading">Jeannette Lawson</div>
                            <p>fusce dapibus</p>
                        </div>
                    </a>
                    <a className="listview__item chat__busy">
                        <img src="/static/templates/matherialadm/demo/img/profile-pics/9.jpg"
                             className="listview__img" alt=""/>
                        <div className="listview__content">
                            <div className="listview__heading">Jeannette Lawson</div>
                            <p>cras mattis consectetur purus sit amet fermentum.</p>
                        </div>
                    </a>
                </div>
                <a href="messages.html" className="btn btn--action btn--fixed btn-danger"><i
                    className="zmdi zmdi-plus"/></a>
            </aside>
        )
    }
}

export default Aside;