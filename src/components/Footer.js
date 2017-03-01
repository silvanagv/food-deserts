import React from 'react';
import { Link } from 'react-router'

export default function Footer(){
  return (
    <div>
      <footer>
        <ul>
          <li> <Link to="contact">Contact</Link> </li>
          <li> <Link to="about">About</Link> </li>
            <li> <a href="https://medium.com/@svmgv">Blog</a> </li>
          <li> <Link to="sources">Sources</Link> </li>
        </ul>
       </footer>
    </div>
  )
}
