import logo from './logo.svg';
import './App.css';
import Weather from "./weatherPage/weatherMain";
// import {store} from "./store/store.ts";
// import {Provider} from "react-redux";

function App() {
  return (
//      <Provider store={store}>
        <div className="App">
          <Weather />
        </div>
//      </Provider>
  );
}

export default App;
