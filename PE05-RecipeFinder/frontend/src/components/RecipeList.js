import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        async function getRecipes() {

            const response = await fetch("http://localhost:5050/recipes");

            if (!response.ok) {
                console.error("Failed to fetch recipes.");
                return;
            }

            const data = await response.json();

            setRecipes(data);
        }

        getRecipes();

    }, []);

    async function deleteRecipe(id) {

        await fetch(`http://localhost:5050/recipes/${id}`, {
            method: "DELETE",
        });

        setRecipes(recipes.filter((recipe) => recipe._id !== id));
    }

    return (

        <div>

            <h2 className="mb-4">
                Recipe List
            </h2>

            <table className="table table-striped table-hover">

                <thead className="table-success">

                    <tr>

                        <th>Recipe</th>

                        <th>Category</th>

                        <th>Cuisine</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {recipes.map((recipe) => (

                        <tr key={recipe._id}>

                            <td>{recipe.title}</td>

                            <td>{recipe.category}</td>

                            <td>{recipe.cuisine}</td>

                            <td>

                                <Link
                                    className="btn btn-primary btn-sm me-2"
                                    to={`/recipes/${recipe._id}`}
                                >
                                    Details
                                </Link>

                                <Link
                                    className="btn btn-warning btn-sm me-2"
                                    to={`/edit/${recipe._id}`}
                                >
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteRecipe(recipe._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default RecipeList;