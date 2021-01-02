import React from 'react';
import './Informations.css';

export default class Info extends React.Component{
    render(){
        return(
        <div>
            <h1>PROJET CYBERSECURITE</h1>
            <form action="/ma-page-de-traitement" method="post">
          <div>
            <label for="name">NOM : </label>
            <input type="text" id="name" name="user_name" />
          </div>
          <div>
            <label for="mail">E-MAIL : </label>
            <input type="email" id="mail" name="user_mail" />
          </div>
          <div>
            <label for="password">MOT DE PASSE : </label>
            <input type="password" id="password" name="user_password" />
        </div>
        <div class="button">
        <button type="submit">SOUMETTRE</button>
        </div>
        </form>
        </div>);
    }
}