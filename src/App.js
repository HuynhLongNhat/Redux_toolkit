
import './App.scss';
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Hello world</h1>

        <div>Count: {props.count}</div>

        <button onClick={() => props.increaseCounter()}>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>

      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)