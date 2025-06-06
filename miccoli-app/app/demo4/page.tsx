"use client";

import { LanguageContext } from '../store/LanguageContextProvider';
import { useContext } from 'react';

export default function Demo4() {
  
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <main>
      <h1>Lingua: {language} </h1>
      <button className="bottone" onClick={() => setLanguage('it')}> IT </button>
      <button className="bottone" onClick={() => setLanguage('en')}> EN </button>
      <button className="bottone" onClick={() => setLanguage('kr')}> KR </button>
    </main>
  )
}