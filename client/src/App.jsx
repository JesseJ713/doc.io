import TextEditor from './TextEditor';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path='/documents/:id' exact>
          <TextEditor />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
