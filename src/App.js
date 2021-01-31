import Navbar from './components/layout/Navbar';
import { Component } from 'react';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import City from './pages/City';
import RestaurantDetail from './pages/RestaurantDetail';

class App extends Component {

  render(){
    return(
      <Router>
        <Navbar/>
          <Route path='/' exact component={Home} />
          <Route path='/city/:city_id' component={City} />
          <Route path='/restaurant/:restaurant_id' component={RestaurantDetail} />
        <Footer/>
      </Router>
    );
  }
}

export default App;