import React from 'react'
import ReactDOM from 'react-dom/client'

const list = [{
    title:'React',
    url:'https://reactjs.org/',
    author:'Jordan Walke',
    num_comments:3,
    points:4,
    objectID:0
},
{
    title:'Redux',
    url:'https://redux.js.org/',
    author:'Dan Abramov, Andrew Clark',
    num_comments:2,
    points:5,
    objectID:1
}];

ReactDOM.createRoot(document.querySelector('#root'))
.render(
    <>
    <App/>
    <List/>
    <Search/>
    </>
);

function App()
{
    return (
        <>
        <h2>Hello Tarun</h2>
        </>
    );
}

function List(){
    return(
        <>
          <h1>My Hacker Stories</h1>
          <hr />
          <ul>
            {
                list.map(
                    function (item) 
                    {
                       return <li key={item.objectID}>
                        <span>{item.title}</span><br />
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span><br />
                        <span>{item.author}</span><br />
                        <span>{item.num_comments}</span><br />
                        <span>{item.points}</span><br />
                        </li>;
                    }
                )
            }
          </ul>
          </>
      
    );
}

function Search() {
    return (
        <>
        <label htmlFor="search">Search:</label><br />
        <input type="text"  placeholder='Search'/>
        </>
    );
}