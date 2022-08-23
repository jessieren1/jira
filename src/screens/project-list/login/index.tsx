import { AuthForm } from 'model';
import React, { FormEvent } from 'react';

export const LoginScreen = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const login = (param: AuthForm) => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id={'username'} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id={'password'} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
