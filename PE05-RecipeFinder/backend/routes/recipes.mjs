import express from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../db/conn.mjs";

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {

    const db = getDb();

    const collection = db.collection("recipes");

    const results = await collection.find({}).toArray();

    res.json(results);

});

// GET one recipe
router.get("/:id", async (req, res) => {

    const db = getDb();

    const collection = db.collection("recipes");

    const recipe = await collection.findOne({
        _id: new ObjectId(req.params.id)
    });

    res.json(recipe);

});

// POST new recipes
router.post("/", async (req, res) => {

    const db = getDb();

    const collection = db.collection("recipes");

    const recipe = {

        title: req.body.title,

        category: req.body.category,

        cuisine: req.body.cuisine,

        prepTime: req.body.prepTime,

        cookTime: req.body.cookTime,

        servings: req.body.servings,

        ingredients: req.body.ingredients,

        instructions: req.body.instructions,

        image: req.body.image

    };

    const result = await collection.insertOne(recipe);

    res.json(result);

});

//UPDATE recipes
router.patch("/:id", async (req, res) => {

    const db = getDb();

    const collection = db.collection("recipes");

    const updates = {

        $set: {

            title: req.body.title,

            category: req.body.category,

            cuisine: req.body.cuisine,

            prepTime: req.body.prepTime,

            cookTime: req.body.cookTime,

            servings: req.body.servings,

            ingredients: req.body.ingredients,

            instructions: req.body.instructions,

            image: req.body.image

        }

    };

    const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        updates
    );

    res.json(result);

});

//DELETE recipes
router.delete("/:id", async (req, res) => {

    const db = getDb();

    const collection = db.collection("recipes");

    const result = await collection.deleteOne({
        _id: new ObjectId(req.params.id)
    });

    res.json(result);

});

export default router;