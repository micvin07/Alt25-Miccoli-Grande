'use client';

import { LanguageContext } from './store/LanguageContextProvider';
import React, { useContext } from 'react';
import useUsers from './store/users.store';

export default function NavBar() {
  const usersTotal = useUsers(state => state.users.length);

  return (
    <div>
      <a href="/">Home</a>
      <a href="/demo1">Demo1</a>
      <a href="/demo2">Demo2</a>
      <a href="/demo3">Demo3</a>
      <a href="/demo4">Demo4</a>
      <a href="/demo5">Demo5</a>
      <a href="/demo6">Demo6</a>
      <a>Utenti: {usersTotal}</a>
      <hr/>
    </div>
  )
}