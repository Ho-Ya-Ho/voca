import './App.css';
import Header from "./component/Header";
import Daylist from "./component/DayList";
import Day from "./component/Day";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
             <Header />
              <Switch>
                  <Route exact path="/">
                    <Daylist />
                  </Route>
                  <Route path="/day/:day">
                    <Day />
                  </Route>
                  <Route path="/create_word">
                      <CreateWord />
                  </Route>
                  <Route>
                      <EmptyPage />
                  </Route>
              </Switch>
         </div>
      </BrowserRouter>
  );
}

export default App;
