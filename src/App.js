import React from 'react';
import IdCard from './components/idcard/IdCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height="1.78m"
        birth={new Date('1992-07-14')}
        img="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        height="1.72"
        birth={new Date('1988-05-11')}
        img="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
