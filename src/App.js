import React from 'react';
import Controls from './Components/Controls';
import Timer from './Components/Timer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: 110,
      breakTime: 115,
      play: true,
      restore: true,
    };

    this.handleTimerControls = this.handleTimerControls.bind(this);
    this.handleWorkController = this.handleWorkController.bind(this);
    this.handleBreakController = this.handleBreakController.bind(this);
  }

  handleWorkController = (event) => {
    const { id } = event.target;
    const { workTime } = this.state;

    if (id === 'plus' && workTime < 120) {
      this.setState({ workTime: workTime + 1 });
    }
    if (id === 'subtract' && workTime > 0) {
      this.setState({ workTime: workTime - 1 });
    }
  };

  handleBreakController = (event) => {
    const { id } = event.target;
    const { breakTime } = this.state;

    if (id === 'plus' && breakTime < 120) {
      this.setState({ breakTime: breakTime + 1 });
    }
    if (id === 'subtract' && breakTime > 0) {
      this.setState({ breakTime: breakTime - 1 });
    }
  };

  handleTimerControls = (event) => {
    const { id } = event.target;
    const { play } = this.state;
    // console.log('Holaaa');
    // console.log(event.target);

    if (id === 'start_stop' && play) {
      return this.setState({
        workTime: 0,
        breakTime: 0,
        play: false,
        restore: true,
      });
    }
    if (id === 'start_stop' && !play) {
      return this.setState({
        workTime: 0,
        breakTime: 0,
        play: true,
        restore: true,
      });
    }
    if (id === 'reset') {
      return this.setState({
        workTime: 25,
        breakTime: 5,
        play: true,
        restore: true,
      });
    }

    if (id === 'info') {
      return 'info';
    }
    return 'hola';
  };

  render() {
    const { workTime, breakTime, play, restore } = this.state;
    return (
      <div className='app'>
        <h1 className='app__title'>Pomodoro Clock</h1>
        <Timer workTime={workTime} breakTime={breakTime} />
        <Controls
          workTime={workTime}
          breakTime={breakTime}
          play={play}
          restore={restore}
          handleTimerControls={this.handleTimerControls}
          handleWorkController={this.handleWorkController}
          handleBreakController={this.handleBreakController}
        />
      </div>
    );
  }
}

export default App;
