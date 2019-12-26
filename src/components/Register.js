import React from 'react';

export default function Register({ setRoute }) {
  return (
    <div class=" flex flex-column pa5 pt0 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-20-l center">
      <h2 class="f2 fw6 ph0 mh0">Register</h2>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" htmlFor="email-address">
          Email
        </label>
        <input
          class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="email"
          name="email-address"
          id="email-address"
        />
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" htmlFor="password">
          Password
        </label>
        <input
          class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <input
        class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="submit"
        value="Register"
        onClick={() => setRoute('home')}
      />
    </div>
  );
}
