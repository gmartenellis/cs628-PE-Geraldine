# Input 
The application includes a UI that collects city data. Users can interact with the Add City button/form, where they can enter a city's information, such as name, country, and population. These are captured through React state ('useState') in the App component. Each entry is identified using the 'Date.now().toString()' ensuring data integrity, and converting user input into JS objects that are passed to the component tree. 

# Process
React Router is implemented to manage navigation. When a user navigates to the list screen, the parent App component passes the data to the CitiesList component. When a user selects a city, the 'useParams' hook extracts the cityId from the link, and then the application filters the cities array to match the object in question. This enables rendering specific details without reloading the page. 

# Output
The application generates a dynamic, responsive view, outputting a list of links. The City Details section shows specific characteristics into a designated area in the application. Once we submit through the Add City form, the application automatically performs a navigation output, redirecting the user back to the list view showing the City List with the added data. 
