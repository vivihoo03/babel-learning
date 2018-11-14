import {person} from './lib';

let test = () => console.log(123);

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts));