import './App.css';
import {createStore, combineReducers} from 'redux';
import Header from './components/header.js';
import Counter from './components/counter.js';
import CounterReducer from './reducers/counterReducer.js';
import FormReducer from './reducers/formReducer.js';
import {Provider} from 'react-redux';


function App() {
    
    const allReducers = combineReducers(
        {
            counter: CounterReducer, 
            form: FormReducer
        }
    );

    const store = createStore(allReducers);


    return (
        <div>
            <Provider store={store}>
                <Header />
                <Counter />
            </Provider>
        </div>
  );
}

export default App;
