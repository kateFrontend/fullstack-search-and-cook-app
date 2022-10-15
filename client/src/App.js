import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormspreeProvider } from '@formspree/react';
import Home from "./pages/Home";
import Login from "./pages/Login"
import Search from "./pages/Search";
import SingleRecipe from "./pages/SingleRecipe";
import AddRecipev2 from "./pages/AddRecipev2";
import Error from './pages/Error'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BuyAndCook from "./pages/BuyAndCook";
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from "./pages/AuthWrapper";


const App = () => {

  return(
    <AuthWrapper>
      <FormspreeProvider project="{your-project-id}">
      <BrowserRouter>
        <Navbar/> 
          <Routes>
            <Route path="/" element={ <PrivateRoute><Home /></PrivateRoute> } />
            <Route path="search" element={ <Search/> } />
            <Route path="search/:id" element={ <SingleRecipe/> } />
            <Route path="login" element={ <Login/> } />
            <Route path="buy" element={ <BuyAndCook/> } />
            <Route path="addrecipe" element={ <AddRecipev2/> } />
            <Route path="*" element={ <Error/> } />
          </Routes>
      </BrowserRouter>
      </FormspreeProvider>
    </AuthWrapper>
  )
}
export default App;

