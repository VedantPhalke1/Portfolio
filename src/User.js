import React, { Component } from 'react';
import PropTypes from 'prop-types';
class User extends React.Component {
render() {
return (
<div>
 <h1>ReactJS Props validation example</h1>
 <table>
 <tr>
 <th>User details</th>
 <th>Value</th>
 </tr>
 <tr>
 <td>User name</td>
 <td>{this.props.propString}</td>
 </tr>
 <tr>
 <td>User age</td>
 <td>{this.props.propNumber}</td>
 </tr>
 <tr>
 <td>User Skills</td>
 <td>{this.props.propArray}</td>
 </tr>
 <tr>
 <td>User active</td>
 <td>{this.props.propBool ? "yes" : "no"}</td>
</tr>

 <tr>
 <td>User function</td>
 <td>{this.props.propFunc("hello welcome user")}</td>
 </tr>
 </table>
</div>
 );
 }
}
User.propTypes = {
 propArray: PropTypes.array.isRequired,
 propBool: PropTypes.bool.isRequired,
 propFunc: PropTypes.func,
 propNumber: PropTypes.number,
 propString: PropTypes.string,
}
User.defaultProps = {
 propArray: ["C","C++","JAVA"],
 propBool: true,
 propFunc: function(x){return x},
 propNumber: 25,
 propString: "John",
}
export default User;