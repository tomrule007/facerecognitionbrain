import React from 'react';

export default function SignIn({ setRoute }) {
  return (
    <div className=" flex flex-column pa5 pt0 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-20-l center">
      <h2 className="f2 fw6 ph0 mh0">Sign In</h2>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">
          Email
        </label>
        <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="email"
          name="email-address"
          id="email-address"
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">
          Password
        </label>
        <input
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <input
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="submit"
        value="Sign in"
        onClick={() => {
          setRoute('home');
        }}
      />
      <p
        onClick={() => setRoute('register')}
        className="f6 link dim black db pointer"
      >
        Register
      </p>
    </div>
  );
}
