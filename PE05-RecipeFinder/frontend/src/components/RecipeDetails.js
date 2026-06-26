import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RecipeDetails() {

    const [recipe, setRecipe] = useState(null);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        async function fetchRecipe() {

            const response = await fetch(`http://localhost:5050/recipes/${id}`);

            if (!response.ok) {
                console.error("Unable to load recipe.");
                return;
            }

            const data = await response.json();

            setRecipe(data);

        }

        fetchRecipe();

    }, [id]);

    if (!recipe) {

        return <h3>Loading recipe...</h3>;

    }

    return (

        <div>

            <h2>{recipe.title}</h2>

            <hr />

            <p>

                <strong>Category:</strong> {recipe.category}

            </p>

            <p>

                <strong>Cuisine:</strong> {recipe.cuisine}

            </p>

            <p>

                <strong>Prep Time:</strong> {recipe.prepTime}

            </p>

            <p>

                <strong>Cook Time:</strong> {recipe.cookTime}

            </p>

            <p>

                <strong>Servings:</strong> {recipe.servings}

            </p>

            <h4>Ingredients</h4>

            <p style={{ whiteSpace: "pre-line" }}>
                {recipe.ingredients}
            </p>

            <h4>Instructions</h4>

            <p style={{ whiteSpace: "pre-line" }}>
                {recipe.instructions}
            </p>

            {recipe.image && (

                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="img-fluid rounded mb-3"
                    style={{ maxWidth: "400px" }}
                />

            )}

            <br />

            <button
                className="btn btn-secondary"
                onClick={() => navigate("/")}
            >
                Back
            </button>

        </div>

    );

}

export default RecipeDetails;