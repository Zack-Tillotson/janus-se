import React from 'react';
import styles from './styles';

export default function Header({preferencesOpen}) {
  return (
    <header>
      <a href="/">
        <h1>
          <div className="imageContainer">
            Janus
          </div>
        </h1>
      </a>
    </header>
  );
}