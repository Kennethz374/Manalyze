import React, { Component } from 'react';
import{Route,Switch} from 'react-router-dom';
import axios from 'axios';
import Booking from './BookingPage/Booking';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click1 the button to load data!'
    }
  }

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }

  render() {
    return (
      <div>
       <Switch>
         <Route path='/booking' component={Booking}/>
       </Switch>
     </div>
    );
  }
}

export default App;
