import React, { Component } from 'react';

class Countdown extends Component {
   constructor(props) {
       super()
       this.state = {
           timerOn: false,
           minutes: 0,
           seconds: 0,
           milliseconds: 0
       }
   }
   timerHandler(time) {
       this.setState(state => {
           this.timer = setInterval(() => {
               const { minutes, seconds, milliseconds } = this.state;
               if (milliseconds > 0) {
                   this.setState(({ milliseconds }) => ({
                       milliseconds: milliseconds - 1
                   }))
               } else {
                   if (seconds > 0) {
                       this.setState(({ seconds }) => ({
                           seconds : seconds -1,
                           milliseconds: 59
                       }))
                   } else {
                       if (minutes === 0) {
                           clearInterval(this.timer);
                       } else {
                           if (minutes > 0) {
                               this.setState(({ minutes }) => ({
                                   minutes: minutes - 1,
                                   seconds : 59
                               }))
                           }
                       }
                   }
               }
           }, 1000 / 60);
           return { timerOn: !state.timerOn }
       })
   }
   render() {
       const { minutes, seconds, milliseconds } = this.state;
       return (
           <div>
               <center>
                   <div>
                       <input placeholder="Input minute/s" onChange={e => this.setState({ minutes: e.target.value })} ></input><br />
                       <div>mm:{minutes}ss:{seconds}ms{milliseconds}</div>
                       <button onClick={(time) => this.timerHandler(time)}>{this.timerOn ? "Stop" : "Start"}</button>
                   </div>
               </center>
           </div>
       )

   }

}
export default Countdown;
