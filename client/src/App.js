import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";


const App = () => {

  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="login" element={ <h1>LogIn</h1> } />
        <Route path="signup" element={ <h1>SignUp</h1> } />
        <Route path="search" element={ <h1>SearchPage</h1> } />
        <Route path="search/detail" element={ <h1>DetailPage</h1> } />
        <Route path="profile" element={ <h1>ProfilePage</h1> } />
        <Route path="recipe" element={ <h1>AddRecipePage</h1> } />
        <Route path="recipe/detail" element={ <h1>DetailRecipePage</h1> } />
      </Routes>
    </BrowserRouter>
  )
}
export default App;

