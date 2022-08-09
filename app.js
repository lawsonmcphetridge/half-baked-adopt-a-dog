import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load  async/await
// fetch all dogs//  defined in the fetch utils
// render and append all dog cards to the container render utils

async function loadData() {
    const dogs = await getDogs();

    for (let dog of dogs) {
        const dogContainer = renderDogCard(dog);
    
        dogListContainer.append(dogContainer);
    }
}

loadData();