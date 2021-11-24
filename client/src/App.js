import './App.css';
import WishList from './pages/WishListPage';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import MyGames from './pages/MyGamesPage';
import SingleGame from './pages/SingleGame';
import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/MyGames' elemtent={<MyGames/>}/>
        <Route exact path='/WishList' element={<WishList/>}/>
        <Route exact path='/SingleGame' elemtent={<SingleGame/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}/> 
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;