/* eslint-disable max-len */
import React, { useState } from 'react';
// built in slide animation from react-burger-menu
import { slide as Menu } from 'react-burger-menu';
import { useLogout, useSession } from '../../state/AuthContext';
import './NavMenu.scss';

const NavMenu = () => {
  const logout = useLogout();
  const user = useSession();
  const [isOpen, setIsOpen] = useState(null);

  const handleDelete = (e) => {
    e.preventDefault();
    logout();
    setIsOpen(false);
  };

  return (
    <>
      <div className="Header">
        {user
          ? (
            <>
              <Menu
                right
                width = {'20rem'}
                isOpen={isOpen}>
                <a href="/">Home</a>
                <a href="/shorten">Shortener</a>
                <a href="/login">Login</a>
                <a onClick={handleDelete} href="/">Log Out</a>
              </Menu>
            </>
          ) : (
            <>
              <Menu
                right={true}
                isOpen={isOpen}
                width = {'20rem'}>
                <a href="/">Home</a>
                <a href="/shorten">Shortener</a>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
              </Menu>
            </>
          )}
      </div>
    </>
  );
};

export default NavMenu;
