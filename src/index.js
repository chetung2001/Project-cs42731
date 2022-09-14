import React from "react";
import ReactDOM from "react-dom";

//css

import './index.css';
// array book
const books = [
  { id:1,
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/851850/capsule_616x353.jpg?t=1653933519',
    title: 'Dragon Ball',
    author: 'I love you'
  },
  {
    img: 'https://wallpaperboat.com/wp-content/uploads/2019/04/naruto-wallpaper-hd-059.jpg',
    title: 'Naruto',
    author: 'I love you'
  },
  {
   id:2,
    img: 'https://wallpaperboat.com/wp-content/uploads/2019/04/naruto-wallpaper-hd-059.jpg',
    title: 'Naruto',
    author: 'I love you'
  },
  {
    id:3,
    img: 'https://wallpaperboat.com/wp-content/uploads/2019/04/naruto-wallpaper-hd-059.jpg',
    title: 'Naruto',
    author: 'I love you'
  },
];



function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return  <Book key={book.id} {...book}> </Book>;
        
      })}
    </section>);
}
    

const Book = ({img, title, author }) => {
 // console.log(props);
 //const { img, title, author } = props.book;
  
  //atribute, eventHandler
  return (
    <article className='book'>
    <img src={img}  alt='' />
      <h1>{title} </h1>
        
      <h4>Author: {author}</h4>
 
  </article>
  );
};


ReactDOM.render(<Booklist/>, document.getElementById('root'));