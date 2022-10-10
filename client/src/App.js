import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Search from "./pages/Search";
import SingleRecipe from "./pages/SingleRecipe";
import Profile from "./pages/Profile";
import ProfileRecipe from "./pages/ProfileRecipe";
import AddRecipe from "./pages/AddRecipe"
import Error from './pages/Error'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BuyAndCook from "./pages/BuyAndCook";
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from "./pages/AuthWrapper";




const App = () => {

  return(
    <AuthWrapper>
    <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path="/" element={ <PrivateRoute><Home /></PrivateRoute> } />
          <Route path="search" element={ <Search/> } />
          <Route path="search/:id" element={ <SingleRecipe/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="profile" element={ <Profile /> } />
          <Route path="buy" element={ <BuyAndCook/> } />
          <Route path="profile/:recipe" element={ <ProfileRecipe/> } />
          <Route path="addrecipe" element={ <AddRecipe/> } />
          <Route path="*" element={ <Error/> } />
        </Routes>
  {/*     <Footer/> */}
    </BrowserRouter>
    </AuthWrapper>
  )
}
export default App;

