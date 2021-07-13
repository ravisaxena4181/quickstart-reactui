import React, { Component } from 'react';
import axios from 'axios';

export default class About extends Component {
    constructor(props) {
        super(props);
    
        this.state = {person: []};
      }
    componentDidMount() {
        console.log('about loaded...')
        this.UserList();
    }
    UserList() {
        axios
        .get('https://randomuser.me/api/')
        .then(({ data })=> {
            this.setState({ person: data.results })
        })
        .catch((err)=> {
            console.log(err)
        })
      }
    
    render() {
        console.log('person',this.state.person)
        return (
            <div className="container section-100">
             
                <h1>About {this.state.person.length>0?this.state.person[0].name.title+' '+this.state.person[0].name.first +' '+this.state.person[0].name.last:'...'}</h1>
                <p className="text-mute mt-4">Multipurpose multipages Mobile HTML template with large number of components and ready to use elements sections. This template build with Bootstrap 4, HTML, CSS, SCSS styling and JQuery.</p>
            </div>
        )
    }
}