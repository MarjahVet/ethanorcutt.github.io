import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Navbar from "./components/Navbar";

// Filename - App.js

import React from "react";

function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://via.placeholder.com/150x50/blue/white?text=My+Logo"
                        />
                    </div>
                    <li>
                        <a href="#courses">Courses</a>
                    </li>
                    <li>
                        <a href="#tutorials">Tutorials</a>
                    </li>
                    <li>
                        <a href="#jobs">Jobs</a>
                    </li>
                    <li>
                        <a href="#student">Student</a>
                    </li>
                </ul>

                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            7 Best Tips To Speed Up Your Job
                            Search in 2022
                        </h1>
                        <p class="text-small">
                            Hunting down a relevant job
                            requires proper techniques for
                            showcasing your potential to the
                            employer. But with the advent of
                            COVID-19, it has become a bit
                            challenging and competitive to
                            reach out for your dream job.
                            Many individuals have lost their
                            jobs during these times, and on
                            the other hand, freshers are
                            facing difficulties while
                            applying for a new job. But
                            there is no need for panic, you
                            can change your ways and
                            streamline things in a way that
                            you get a proper result.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            JavaScript Tutorial
                        </h1>
                        <p class="text-small">
                            JavaScript is the world most
                            popular lightweight, interpreted
                            compiled programming language.
                            It is also known as scripting
                            language for web pages. It is
                            well-known for the development
                            of web page many non-browser
                            environments also use it.
                            JavaScript can be used for
                            Client-side developments as well
                            as Server-side developments.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Java Programming Language
                        </h1>
                        <p class="text-small">
                            When compared with C++, Java
                            codes are generally more
                            maintainable because Java does
                            not allow many things which may
                            lead to bad/inefficient
                            programming if used incorrectly.
                            For example, non-primitives are
                            always references in Java. So we
                            cannot pass large objects (like
                            we can do in C++) to functions,
                            we always pass references in
                            Java. One more example, since
                            there are no pointers, bad
                            memory access is also not
                            possible. When compared with
                            Python, Java kind of fits
                            between C++ and Python. The
                            programs are written in Java
                            typically run faster than
                            corresponding Python programs
                            and slower than C++. Like C++,
                            Java does static type checking,
                            but Python does not.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Machine Learning?
                        </h1>
                        <p class="text-small">
                            Machine Learning is the field of
                            study that gives computers the
                            capability to learn without
                            being explicitly programmed. ML
                            is one of the most exciting
                            technologies that one would have
                            ever come across. As it is
                            evident from the name, it gives
                            the computer that makes it more
                            similar to humans: The ability
                            to learn. Machine learning is
                            actively being used today,
                            perhaps in many more places than
                            one would expect.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    &copy; {new Date().getFullYear()} Ethan Orcutt. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default App;







/*function App() {
  return ( 
    <>
    <Navbar />
    <main className="container">
      <header className="hero">
        <h1>Welcome to Ethan Orcutt's Personal Website</h1>
        <p> Computer Science Student | Aspiring Software Engineer | Tech Enthusiast </p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p> Hello! I'm Ethan, a passionate computer science student with a keen interest in software development and technology.
           I love exploring new programming languages and frameworks, and I'm always eager to take on new challenges. </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
          <li> Project A </li>
          <li> Project B </li>
          <li> Project C </li>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p> Feel free to reach out to me via email or LinkedIn. </p>
      </section>

      <footer>
        <p> &copy; {new Date().getFullYear()} Ethan Orcutt. All rights reserved. </p>
      </footer>
    </main>
    </>
  )
}

export default App
*/
















/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/