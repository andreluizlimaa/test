import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Sobremim from './components/pages/Sobremim';
import Blog from './components/pages/Blog';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
         <Container customClass="min-height">
            <Route exact path="/">
              <Home/>
              </Route>
              <Route exact path="/Sobremim">
              <Sobremim />
              </Route>
              <Route exact path="/Blog">
              <Blog />
              </Route>
         </Container>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
