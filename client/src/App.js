import { Profiler } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Search from "./pages/Search";
import SingleRecipe from "./pages/SingleRecipe";
import Profile from "./pages/Profile";
import ProfileRecipe from "./pages/ProfileRecipe";
import AddRecipe from "./pages/AddRecipe"
import Error from './pages/Error'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const App = () => {

  return(
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={ <About/> } />
          <Route path="search" element={ <Search /> } />
          <Route path="search/detail" element={ <SingleRecipe/> } />
          <Route path="profile" element={ <Profile /> } />
          <Route path="profile/recipe" element={ <ProfileRecipe/> } />
          <Route path="profile/recipe/add" element={ <AddRecipe/> } />
          <Route path="*" element={ <Error/> } />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;

