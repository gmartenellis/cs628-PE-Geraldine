import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import CreateRecipe from "./components/CreateRecipe";
import EditRecipe from "./components/EditRecipe";

function App() {

  return (

    <div className="container">

      <Navbar />

      <div className="card shadow p-4">

        <Routes>

          <Route path="/" element={<RecipeList />} />

          <Route path="/recipes" element={<RecipeList />} />

          <Route path="/recipes/:id" element={<RecipeDetails />} />

          <Route path="/create" element={<CreateRecipe />} />

          <Route path="/edit/:id" element={<EditRecipe />} />

        </Routes>

      </div>

    </div>

  );

}

export default App;