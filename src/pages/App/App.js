import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import VisitPage from '../VisitPage/VisitPage';
import AnimalsPage from '../AnimalsPage/AnimalsPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/visit'>
          <VisitPage />
        </Route>
        <Route exact path='/animals'>
          <AnimalsPage />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}