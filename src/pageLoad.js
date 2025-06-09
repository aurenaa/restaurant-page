//for creating the homepage, and removing stuff
import createRestauranHomePage from './restaurant';
import createTabs from './tabs';

function intialLoad() { //to initialize the page
    createTabs();
    createRestauranHomePage();
}

export default intialLoad;