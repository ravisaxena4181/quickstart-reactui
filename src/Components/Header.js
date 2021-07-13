import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="header fixed-top header-fill">
                <nav className="navbar">
                    <div>
                        <button className="menu-btn btn btn-link btn-44">
                            <span className="icon material-icons">menu</span>
                        </button>
                    </div>
                    <div>
                        <a className="navbar-brand" href="index.html">
                            <div className="logo">1<span>UX</span><span>UI</span></div>
                            <h4 className="logo-text"><span>OneUIUX</span><small>Mobile HTML</small></h4>
                        </a>
                    </div>
                    <div>
                        <form className="form-inline search"> 
                            <input className="form-control w-100" type="text" placeholder="Search..." aria-label="Search"></input>
                            <button className="btn btn-link btn-44" type="submit"><span className="icon_search"></span></button>
                        </form>
                        <button className="btn btn-link search-btn" type="button"><span className="icon_search"></span></button>
                    </div>
                </nav>

            </header>
        )
    }
}