# Input

The app's UI prompts the user to interact with it through two forms of input: typing a task or task description into a HTML text field, and via click events. When the user types in their task and clicks on the "Add Task" and "Delete" buttons, these actions trigger state changes which store or remove the information the user is entering through the UI.

# Process

When a user enters a new task, event handlers intercept the action and create a unique ID using the current timestamp. It then appends the new task object to the array. Conversely, when deleting a task, the item is evaluated and a new array is created in which the chosen task or id is removed. This whole process is handled by React's state management using useState hook for dynamic data handling.

# Output

Entering a new task item updates the UI by passing state arrays down to children components as props. The data is parsed using the map function to continuously render structured, interactive list items and their respective delete buttons.
