import './App.css';
// import WishList from './components/WishListCard';
// import GameCards from './components/MyGamesCard';

import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/MyGames' elemtent={<MyGames/>}/>
        <Route exact path='/WishList' element={<WishList/>}/>
        <Route exact path='/SingleGame' elemtent={<SingleGame/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}/>

      <Footer />,
      <SignUp />,
      <Login />
      </Routes>
    </Router>
  );
}

export default App;