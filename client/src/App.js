import './App.css';
import WishList from './pages/WishList';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import MyGames from './pages/MyGames';
import SingleGame from './pages/SingleGame';
import Header from './components/header';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/MyGames' element={<MyGames/>}/>
          <Route exact path='/WishList' element={<WishList/>}/>
          <Route exact path='/SingleGame/:id' element={<SingleGame/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/SignUp' element={<SignUp/>}/> 
        </Routes>
        <div className="push"></div>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;