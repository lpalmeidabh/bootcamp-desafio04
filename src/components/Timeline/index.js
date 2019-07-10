import React, { Component } from 'react';
import { StyledTimeline } from './styles';
import Post from '../Post';
import guedes from '../../assets/images/guedes.png';
import barbosa from '../../assets/images/barbosa.png';
import plinio from '../../assets/images/plinio.png';
import ari from '../../assets/images/ari.png';

export default class Timeline extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Guedes Antônio',
          avatar: guedes,
        },
        date: '10 Jun 2019',
        content: 'Lorem ipsum dolor sit amet',
        comments: [],
      },
      {
        id: 2,
        author: {
          name: 'Barbosa',
          avatar: barbosa,
        },
        date: '8 Jun 2019',
        content: 'Lorem ipsum dolor sit amet',
        comments: [],
      },
      {
        id: 3,
        author: {
          name: 'Ari',
          avatar: ari,
        },
        date: '4 Jun 2019',
        content: 'Lorem ipsum dolor sit amet',
        comments: [
          {
            id: 2,
            author: {
              name: 'Barbosa',
              avatar: barbosa,
            },
            date: '4 Jun 2019',
            content: 'Lorem ipsum dolor sit amet bla bla bla',
          },
          {
            id: 3,
            author: {
              name: 'Plinio',
              avatar: plinio,
            },
            date: '5 Jun 2019',
            content: 'lol',
          },
        ],
      },
      {
        id: 4,
        author: {
          name: 'Plínio',
          avatar: plinio,
        },
        date: '2 Jun 2019',
        content: 'Lorem ipsum dolor sit amet',
        comments: [],
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <StyledTimeline>
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </StyledTimeline>
    );
  }
}
