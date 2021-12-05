import './App.css';
import React from 'react'
import data from './data/data';
import Category from './components/Category';


function App() {

  return (
    <main>
      {data.map((item) => <Category index={item.id} title={item.name} subcategories={item.categories} key={item.id} parentLength={item.categories.length} />)}
    </main>
  );
}

export default App;
