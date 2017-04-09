import React from 'react';
import { Link } from 'react-router'

export default function Menu(){
  return (
    <div>
       <section>
         <nav className="cl-effect-7">
           <Link to="problem">The Problem</Link>
           <Link to="solution">The Proposed Solution</Link>
           <Link to="stumblingblocks">Stumbling Blocks</Link>
           <Link to="whatnow">What Now?</Link>
         </nav>
       </section>
    </div>
  )
}
