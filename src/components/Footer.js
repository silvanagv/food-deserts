import React from 'react';
import { Link } from 'react-router'

export default function Footer(){
  return (
    <div>
        <section>
          <nav className="cl-effect-7">
            <Link to="contact">Contact</Link>
            <Link to="about">About</Link>
            <a href="https://medium.com/@svmgv">Blog</a>
            <Link to="sources">Sources</Link>
          </nav>
        </section>
    </div>
  )
}
