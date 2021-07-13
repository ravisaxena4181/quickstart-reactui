import React, { Component } from 'react';
export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="row no-gutters">
                    <div className="col-auto align-self-center">
                        <figure className="avatar avatar-50">
                            <img src="img/user1.png" alt=""></img>
                        </figure>
                    </div>
                    <div className="col pl-3 align-self-center">
                        <p className="my-0">Maxartkiller</p>
                        <p className="text-mute my-0 small">United States</p>
                    </div>
                    <div className="col-auto align-self-center">
                        <a href="login.html" className="btn btn-link text-white p-2"><i className="material-icons">power_settings_new</i></a>
                    </div>
                </div>
                <div className="list-group main-menu my-4">
                    <a href="/" className="list-group-item list-group-item-action active"><i className="material-icons">home</i>Home</a>
                    <a href="about" className="list-group-item list-group-item-action"><i className="material-icons">business</i>About</a>  
                 
                  <a href="news" className="list-group-item list-group-item-action"><i className="material-icons">view_day</i>Latest news</a>
                    <a href="friends" className="list-group-item list-group-item-action"><i className="material-icons">insert_emoticon</i>Friends <small className="text-mute">(250)</small></a>
                    <a href="subscribed" className="list-group-item list-group-item-action"><i className="material-icons">library_books</i>Subscribed</a>
                    <a href="notifications" className="list-group-item list-group-item-action"><i className="material-icons">notifications</i>Notification <span className="badge badge-dark text-white">2</span></a>
                    <a href="setting" className="list-group-item list-group-item-action"><i className="material-icons">account_circle</i>Setting</a>
                    <a href="elements" className="list-group-item list-group-item-action"><i className="material-icons">account_circle</i>Pages & Elements</a>  
                </div>
            </div>
        )
    }
}