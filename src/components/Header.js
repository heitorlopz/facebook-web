import React, { Component } from 'react';
import facebookLogo from '../assets/facebook-logo.png'
import searchIcon from '../assets/search-icon.png'
import profile from '../assets/profile.jpg'
import switchUser from '../assets/switch-user.png'
import notification from '../assets/notification.png'
import messenger from '../assets/messenger.png'

class Header extends Component {
  state = {
    userLabel: [{
      name: '',
      avatar: false    
    }],
    userIcons: []
  };

  render(){
    return (
    <div class="header">
      <img src={facebookLogo} />
      <input type="text" placeholder="Pesquisar"/>

      <div class="search-icon-content">
        <img src = {searchIcon} />
      </div>
      <div class="user-label-content">
        <img id="profile" src={profile}/> 
        <text>Heitor</text>
        <div class="vertical-line" />
        <text>Página Inicial</text>
        <div class="vertical-line" />
        <text>Criar</text>
        <div class="vertical-line" />
        <div class ="icons-content">
          <img src = {switchUser} />
          <img src = {messenger} />
          <img src = {notification} />
        </div>
      </div>
    </div>
    );
  }
}

export default Header;