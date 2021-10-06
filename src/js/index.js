console.log('index')

import { Nav } from './component/nav.js';

const execute = () => {

    const navElement = new Nav('Google cloud platform', [{'notation':'Question', 'link':'#'}, {'notation':'Account', 'link':'#'}]);

    console.log('document.querySelector(#result) =', document.querySelector('#result'));
//    document.querySelector('#result').append(navElement.elementCreated());
//    document.querySelector('#result')
    document.querySelector('#result').insertAdjacentHTML('beforeend', navElement.createNav());
    console.log('document.querySelector(#result) =', document.querySelector('#result'));
};

execute();