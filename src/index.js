import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
import {users} from "./data"
import "./style.css"

const createBodyHtml=document.querySelector(".userBlock");

const createCardHtml=({dataname, datatime, lorem}) =>`
    <div class="user-block"> 
        <p class="id">id: ${dataname}</p>
        <p class="name">name: ${datatime}</p>
        <p class="age">age: ${lorem}</p>
    <div>`
    
const render= () => {
    const usersCard= users.map((user) => {
        const card = document.createElement("div")
        card.className = "userCard main"
        card.innerHTML = createCardHtml(user)

        return card;
    });

    createBodyHtml.innerHTML = ""
    createBodyHtml.append(...usersCard)
}
render()