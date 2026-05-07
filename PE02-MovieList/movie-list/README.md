# Input 
The application takes a predefined array of movie objects stored in the MovieList component. Objects include title, genre, and release year. Users can interact by providing input through a dropdown menu listing all unique genres from the movie dataset, including an "all genres" option. Additionally, there is an alert, or pop-up message when a user interacts with any one of the movie cards. 

# Process
The program uses React state and hooks to manage key values, which are the movie list and selected genres. Upon selection of a genre from the dropdown, the state updates and triggers the pop-message. The app fiilters the movie array based on the selected item. Event handlers are used to detect clicks on individual movie cards, which trigger the pop-up message. 

# Output
The output is a dynamic movie list displayed as cards showing title, genre, and release year, updating instantly when filters are applied or clicking on a specific movie card. 
