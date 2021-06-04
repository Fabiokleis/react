import './App.css';
import {createStore} from 'redux';
import Header from './components/header.js';
import Counter from './components/counter.js';
import CounterReducer from './reducers/counterReducer.js';
import {Provider} from 'react-redux';


function App() {
    
    const store = createStore(CounterReducer);


    return (
        <div>
            <Provider store={store}>
                <Header>
                </Header>
                <Counter />
            </Provider>
        </div>
  );
}

export default App;
