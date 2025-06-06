'use client';

import { LanguageContext } from './store/LanguageContextProvider';
import React, { useContext } from 'react';

export default function NavBar() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <a href="/">Home</a>
      <a href="/demo1">Demo1</a>
      <a href="/demo2">Demo2</a>
      <a href="/demo3">Demo3</a>
      <a href="/demo4">Demo4</a>
      <hr/>
    </div>
  )
}