import { useState } from 'react'

import './App.css'

import TravelList from "./components/TravelList";

export default function App() {
  return (
    <div className='w-90 h-[100%] bg-green-500 mx-auto'>
      <TravelList />
    </div>
  );
}
