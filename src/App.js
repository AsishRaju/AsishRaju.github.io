import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ReactGA from "react-ga4";

function App() {

    useEffect(() => {
        ReactGA.initialize('G-6WYLQBK503');
    }, [])

  return (
      <Router>
        <Nav/>
          <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
              <Route path='/Projects'>
                  <Projects/>
              </Route>
              <Route path='/About'>
                  <About/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
