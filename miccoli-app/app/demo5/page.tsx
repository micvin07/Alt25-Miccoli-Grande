"use client";

import { ProfileContext } from '@/app/store/ProfileContextProvider';

import { useContext } from 'react';

export default function Demo5() {
  const { state, dispatch } = useContext(ProfileContext);
  const email = ['vincenzo.miccoli@itisandria.it','andrea.grande@itisandria.it','mariastella.merra@itisandria.it','hello@fabiobiondi.io'];
  const username = ['Vincenzo','Andrea','Mariastella','Fabio'];

  return (
    <main>
     <h1>Demo 5</h1>
      <button onClick={ () => {
            let randomUsername = username[Math.floor(Math.random() * username.length)];
            dispatch({ type: "CHANGE_USERNAME", payload: randomUsername })
      }}> Cambia username </button>

      <button onClick={ () => {
            let randomEmail = email[Math.floor(Math.random() * email.length)];
            dispatch({ type: "CHANGE_EMAIL", payload: randomEmail })
      }}> Cambia email </button>

      <div className="profile">
        <b>Username:</b> {state.username} <br/>
        <b>Email:</b> {state.email} <br/>
      </div>

    </main>
  )
}