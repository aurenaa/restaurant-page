//for creating the homepage, and removing stuff
import createRestaurantHomePage from './restaurant';
import createTabs from './tabs';

function intialLoad() { //to initialize the page
    createRestaurantHomePage();
    createTabs();
}

export default intialLoad;