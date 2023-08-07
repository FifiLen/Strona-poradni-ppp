'use client'
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import Login_btn from '@components/Login_btn';


const UserPanelContent = () => {
  const { data, status } = useSession();

  const handleShowEnvValues = () => {
    console.log("GOOGLE_ID:", process.env.GOOGLE_ID);
    console.log("GOOGLE_SECRET:", process.env.GOOGLE_SECRET);

  };

  if (status === 'loading') return <h1> loading... please wait</h1>;

  if (status === 'authenticated' && data) {
    return (
      <div>
        <h1> hi {data.user.name}</h1>
        <img src={data.user.image} alt={data.user.name + ' photo'} />
        <button onClick={signOut}>sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => signIn('google')}>sign in with google</button>
      <button onClick={handleShowEnvValues}>Pokaż wartości z .env w konsoli</button>
    </div>
    
  );
}

const UserPanel = (props) => {
  return (
    <SessionProvider session={props.session}>
      <UserPanelContent />
    </SessionProvider>
  );
}

export default UserPanel;
