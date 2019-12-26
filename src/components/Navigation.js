import React from 'react';

export default function Navigation({ isSignedIn, setRoute }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {isSignedIn ? (
        <p
          onClick={() => setRoute('home')}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign out
        </p>
      ) : (
        <>
          <p
            onClick={() => setRoute('signIn')}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => setRoute('register')}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </>
      )}
    </nav>
  );
}
