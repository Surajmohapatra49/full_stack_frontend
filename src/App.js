import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Home from './components/Home';
import Register from './components/pages/register/Register';
import Dashboard from './components/pages/dashboard/Dashboard';
import PropertyList from './components/PropertyList';
// import PropertyUpdate from './components/PropertyUpdate';
import Profile from './components/pages/profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPropertyForm from './components/AddPropertyForm';


const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login  />} />
        <Route path='/profile' element={<Profile  />} />
        <Route path='/dashboard' element={<Dashboard />}>

        <Route path='AddpropertyForm' element={<AddPropertyForm  />} />
          <Route path='propertyList' element={<PropertyList  />} />
          {/* <Route path='update/:id' element={<PropertyUpdate  />} /> */}
        </Route>
      </Routes>
    </Router>


  );
};

export default App;
