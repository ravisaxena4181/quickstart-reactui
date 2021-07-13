import React, { Component } from 'react';

export default class Home extends Component {
    componentDidMount() {
        console.log('I am loaded...')
    }


    render() {
        return (
            <div className="container section-100">
                <h1>Wlecome</h1>
                <p className="text-mute mt-4">Multipurpose multipages Mobile HTML template with large number of components and ready to use elements sections. This template build with Bootstrap 4, HTML, CSS, SCSS styling and JQuery.</p>
            </div>

        )
    }
}