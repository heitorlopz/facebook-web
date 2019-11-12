import React, { Component } from 'react';
import PostItem from './PostItem';
import ts from '../assets/ts.png'
import hs from '../assets/hs.png'


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Harry Styles",
          avatar: hs
        },
        date: "07 Nov 2019",
        content: "Lançando novo álbum no dia 13 de Dezembro!",
        comments: [
          {
            id: 1,
            author: {
              name: "Taylor Swift",
              avatar: ts
            },
            content: "Engraçado... no dia do meu aniversário..."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Steve Rogers",
          avatar: 'https://66.media.tumblr.com/fa226c7440dcb6078cf382cec4068b44/tumblr_p84q7wSj8P1tk2oito3_250.png'
        },
        date: "23 Aug 2019",
        content: "Velho, porém feliz...!!",
        comments: [ 
          {
          id: 1,
          author: {
            name: "Tony Stark",
            avatar: 'https://66.media.tumblr.com/da5ec91bfa1766a3fffd94f06b03a2a7/tumblr_p8j74eRgEn1xpjiuvo9_250.png'
          },
          content: "..."
        },
        {
          id: 2,
          author: {
            name: "Natasha Romanova",
            avatar: 'https://pbs.twimg.com/profile_images/1160345494851411968/iz8VU74Z_400x400.jpg'
          },
          content: "Achei que morto não falava, Tony."
        },
        {
          id: 3,
          author: {
            name: "Tony Stark",
            avatar: 'https://66.media.tumblr.com/da5ec91bfa1766a3fffd94f06b03a2a7/tumblr_p8j74eRgEn1xpjiuvo9_250.png'
          },
          content: "Que hipocrisia..."
        }]
      },
      {
        id: 3,
        author: {
          name: "Steve Jobs",
          avatar: 'https://specials-images.forbesimg.com/imageserve/5b8576db31358e0429c734e3/416x416.jpg?background=000000&cropX1=211&cropX2=2381&cropY1=900&cropY2=3072'
        },
        date: "07 Jan 2019",
        content: "Lorem Ipsum é tudo de bom, ó.",
        comments: [ 
          {
          id: 1,
          author: {
            name: "Bill Gates",
            avatar: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg'
          },
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          }]
  }]};

  render(){
    return(
    <div className="post-list">
        {this.state.posts.map(post => (
        <PostItem key={post.id} {...post}/>
        ))}
     </div> 
    );
  }
}

export default PostList;
