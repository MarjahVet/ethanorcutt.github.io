

/*export default function Navbar() {
    return (
        <nav className="nav">
            <a className="brand" href='#'>Ethan Orcutt</a>
            <div className="links">
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
        </nav>
    )
}*/

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <nav className="row">
        <a className="brand" href="#">Ethan Orcutt</a>

        <button className="ham" onClick={() => setOpen(v => !v)}>
          ☰
        </button>

        <div className={`menu ${open ? "open" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
