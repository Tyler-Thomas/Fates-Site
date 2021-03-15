
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chapters from './Chapters.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/chapters" component={Chapters}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
