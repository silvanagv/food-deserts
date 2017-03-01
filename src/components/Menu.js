import React from 'react';
import { Link } from 'react-router'

export default function Menu(){
  return (
    <div>
      <header>
        <ul>
          <li><Link to="problem">The Problem</Link></li>
          <li><Link to="solution">The Solution</Link></li>
          <li><Link to="stumblingblocks">Stumbling Blocks</Link></li>
          <li><Link to="whatnow">What Now?</Link></li>
        </ul>
       </header>
    </div>
  )
}
