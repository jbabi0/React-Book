import React, { Component } from 'react';
import './App.css';


let books = [
  {
    'title': 'The Grinch',
    'id': 101,
    'author': 'Dr. Seuss',
    'url':'https://www.imdb.com/title/tt0170016/'
  },
  {
    'title': 'Red Fish, Blue Fish',
    'id': 102,
    'author': 'Dr. Seuss',
    'url':'https://www.amazon.com/Fish-Blue-Myself-Beginner-Books/dp/0756921333'
  }
];


class App extends Component {
  // first life cycle method - constructor
  // only runs when component gets istantiated
  constructor() {
    // gives us ability from the Component class to use state
    super();

    // us state to hold variables attached to instance of component
    this.state = {
      books: [],
      name:'Jeff Babio'
    }
  }


// second life cycle method - componentWillMount()
// generally good for initializing variables or the state
// gets hit before each rende
componentWillMount() {
  // use setState() method to alter books variable
  this.setState({
    books: books
  });
}



  // third life cycle method decides what gets returned and rendered on the browser
  // gets hit every render
  render() {
    // Thhis javascript
    const s = 'Hello, World';

    // below this line, within the return is JSX
    return (
      <div className="App">
      <h2>{this.state.name}</h2>
      {/* This is JSX inside of the retrun parenthesis */}
      {this.state.books.map(book =>
        <div key={book.id}>
          <span>
          <a href={book.url} target="_blank">{book.title}</a>
          </span>
          <span> {book.author} </span>
        </div>
      )}

      </div>
    ); // this is javascript again
  }
}

export default App;
