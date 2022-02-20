import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import { List } from './components/List';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Nikhil",
      age: 25,
      url: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      note: "Love music and books"
    },
    {
      name: "Nilesh",
      age: 23,
      url: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      note: "Love nature and games"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
