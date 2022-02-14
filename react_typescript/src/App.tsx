import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = "hello";

const someObj1 = {
  foo: 'あああ',
  bar: 'いいい',
  baz: 'うううう',
}

type someObj2 = {
  foo: string,
  bar: string,
  baz: number,
}

let obj1: keyof typeof someObj1;
let obj2: keyof someObj2;
obj2 = 'bar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
