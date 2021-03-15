import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

render(){
    return <div>Work in progress.<br/>
        <Link to= "/chapters">List of Chapters</Link>
    </div>
}

}

export default Home;