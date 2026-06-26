import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditRecipe() {

    const [form, setForm] = useState({
        title: "",
        category: "",
        cuisine: "",
        prepTime: "",
        cookTime: "",
        servings: "",
        ingredients: "",
        instructions: "",
        image: ""
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchRecipe() {

            const response = await fetch(
                `http://localhost:5050/recipes/${params.id}`
            );

            if (!response.ok) {
                console.error("Unable to load recipe.");
                return;
            }

            const recipe = await response.json();

            setForm(recipe);
        }

        fetchRecipe();

    }, [params.id]);

    function updateForm(value) {

        return setForm((prev) => {

            return {
                ...prev,
                ...value,
            };

        });

    }

    async function onSubmit(e) {

        e.preventDefault();

        await fetch(`http://localhost:5050/recipes/${params.id}`, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(form),

        });

        navigate("/");

    }

    return (

        <div>

            <h2>Edit Recipe</h2>

            <form onSubmit={onSubmit}>

                <div className="mb-3">
                    <label className="form-label">Recipe Name</label>
                    <input
                        className="form-control"
                        value={form.title}
                        onChange={(e) =>
                            updateForm({ title: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                        className="form-control"
                        value={form.category}
                        onChange={(e) =>
                            updateForm({ category: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cuisine</label>
                    <input
                        className="form-control"
                        value={form.cuisine}
                        onChange={(e) =>
                            updateForm({ cuisine: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Prep Time</label>
                    <input
                        className="form-control"
                        value={form.prepTime}
                        onChange={(e) =>
                            updateForm({ prepTime: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cook Time</label>
                    <input
                        className="form-control"
                        value={form.cookTime}
                        onChange={(e) =>
                            updateForm({ cookTime: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Servings</label>
                    <input
                        className="form-control"
                        value={form.servings}
                        onChange={(e) =>
                            updateForm({ servings: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Ingredients</label>
                    <textarea
                        rows="5"
                        className="form-control"
                        value={form.ingredients}
                        onChange={(e) =>
                            updateForm({ ingredients: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Instructions</label>
                    <textarea
                        rows="5"
                        className="form-control"
                        value={form.instructions}
                        onChange={(e) =>
                            updateForm({ instructions: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                        className="form-control"
                        value={form.image}
                        onChange={(e) =>
                            updateForm({ image: e.target.value })
                        }
                    />
                </div>

                <button
                    className="btn btn-warning"
                    type="submit"
                >
                    Update Recipe
                </button>

            </form>

        </div>

    );

}

export default EditRecipe;