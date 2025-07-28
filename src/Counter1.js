import React from 'react';
class Counter extends React.Component {
 constructor(count) {
 super(count);
 this.state = { count: 0 };
 this.incrementCount = this.incrementCount.bind(this);
 this.decrementCount = this.decrementCount.bind(this);
 }
 incrementCount() {
 this.setState({ count: this.state.count + 1 });
 }
 decrementCount() {
 this.setState({ count: this.state.count - 1 });
 }
 componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
 }
 componentDidUpdate() {
 document.title = `You clicked ${this.state.count} times`;
 }
 render() {
 return (
 <div>
 <p>You clicked {this.state.count} times</p>
 <button onClick={this.incrementCount}>Increment</button>
 <button onClick={this.decrementCount}>Decrement</button>
 </div>
 );
 }
}
export default Counter;