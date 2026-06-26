# Input

The Recipe Finder application accepts recipe information entered by the user through a React form, where they provide the recipe name, category, the cuisine, prep and cooking time, ingredients, and instructions. Users can view, edit, or delete recipes form the list displayed on the homepage.

# Process

The frontend sends HTTP requests to the Express.js backend using the Fetch API. CRUD operations are processed through communication with a database created with MongoDB Atlas. The Router is in charge of navigation between the links associated w/ each page in the web app. With the useParams hook, users can visualize a selected recipe or update it. Each operation executed updates the interface to show the existing data stored in MongoDB.

# Output

The homepage shows a list of recipes stored in the MongoDB Atlas database. Users can add, view, edit, and delete recipes, which update the database and the React interface.
