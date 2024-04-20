
import './App.scss';
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

import { useSelector, useDispatch } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
const App = (props) => {

  const dispatch = useDispatch();
  const newCount = useSelector((state) => {
    return state.counter.count
  })
  //event handler
  const handleIncrease = () => {
    // dispatch actions
    // props.increaseCounter()
    dispatch(increaseCounter())
  }
  const handleDecrease = () => {
    // props.decreaseCounter()
    dispatch(decreaseCounter())
  }
  return (
    // <div className="App">
    //   <header className="App-header">

    //     <h1>Hello world</h1>

    //     <div>Count: {newCount}</div>

    //     <button className='btn' onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => handleDecrease()}>Decrease Count</button>

    //   </header>
    // </div>
    <Home />
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App