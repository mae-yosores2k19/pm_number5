import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super();
    this.state = {
      timerOn: false,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    };
  }
  timerHandler(time) {
    this.setState(state => {
      this.timer = setInterval(() => {
        const { minutes, seconds, milliseconds } = this.state;
        if (milliseconds > 0) {
          this.setState(({ milliseconds }) => ({
            milliseconds: milliseconds - 1
          }));
        } else {
          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1,
              milliseconds: 59
            }));
          } else {
            if (minutes === 0) {
              clearInterval(this.timer);
                
            } else {
              if (minutes > 0) {
                this.setState(({ minutes }) => ({
                  minutes: minutes - 1,
                  seconds: 59
                  
                }));
              }
            }
          }
        }
      }, 1000 / 60);
      return { timerOn: !state.timerOn };
    });
  }
  render() {
    const { minutes, seconds, milliseconds } = this.state;
    return (
      <div style={{ paddingTop: "20%" }}>
        <center>
          <div class="ui raised card" style = {{background:"linear-gradient(to bottom, #000000 0%, #ffffff 100%)"}}>
            <div class="content">
              <center>
                <div>
                    <h1 style ={{color:"red"}}>CountDown</h1>
                  <div class="ui left icon input">
                    <input
                      placeholder="Input minute/s"
                      onChange={e => this.setState({ minutes: e.target.value })}
                    ></input>
                    <i aria-hidden="true" class="hashtag icon"></i>
                  </div>

                  <br />
                  <h1 style ={{color: "blue"}}>
                    mm:{minutes}ss:{seconds}ms{milliseconds}
                  </h1>
                  <button class="ui primary button" onClick={time => this.timerHandler(time)}>
                    {this.timerOn ? "Stop" : "Start"}</button>
                  
                </div>
              </center>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default Countdown;
