import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRecipe() {

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

    const navigate = useNavigate();

    function updateForm(value) {
        setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {

        e.preventDefault();

        await fetch("http://localhost:5050/recipes", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(form),

        });

        navigate("/");

    }

    return (

        <div>

            <h2>Add Recipe</h2>

            <form onSubmit={onSubmit}>

                <div className="mb-3">

                    <label className="form-label">
                        Recipe Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={form.title}
                        onChange={(e) =>
                            updateForm({ title: e.target.value })
                        }
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Category
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={form.category}
                        onChange={(e) =>
                            updateForm({ category: e.target.value })
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Cuisine
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={form.cuisine}
                        onChange={(e) =>
                            updateForm({ cuisine: e.target.value })
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Prep Time
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={form.prepTime}
                        onChange={(e) =>
                            updateForm({ prepTime: e.target.value })
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Cook Time
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={form.cookTime}
                        onChange={(e) =>
                            updateForm({ cookTime: e.target.value })
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Servings
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={form.servings}
                        onChange={(e) =>
                            updateForm({ servings: e.target.value })
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Ingredients
                    </label>

                    <textarea
                        className="form-control"
                        rows="5"
                        value={form.ingredients}
                        onChange={(e) =>
                            updateForm({ ingredients: e.target.value })
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Instructions
                    </label>

                    <textarea
                        className="form-control"
                        rows="5"
                        value={form.instructions}
                        onChange={(e) =>
                            updateForm({ instructions: e.target.value })
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Image URL
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={form.image}
                        onChange={(e) =>
                            updateForm({ image: e.target.value })
                        }
                    />

                </div>

                <button
                    className="btn btn-success"
                    type="submit"
                >
                    Add Recipe
                </button>

            </form>

        </div>

    );

}

export default CreateRecipe;