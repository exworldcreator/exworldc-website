import './App.css';
import { useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Links from './components/Links';
import { useFlyingEffect } from './hooks/useFlyingEffect';
import Cat from './assets/images/cat.png';

function App() {
  const appBoxRef = useRef(null);
  const catImageRef = useRef(null);
  const cursorImageRef = useRef(null);
  const heartImageRef = useRef(null);

  useFlyingEffect({
    containerRef: appBoxRef,
    imageRefs: [catImageRef],
    baseSpeed: 1,
    imageSize: 100,
  });

  return (
    <div className="App">
      <div className="App-Box" ref={appBoxRef}>
        <div className="cat-flying-image" ref={catImageRef}>
          <img src={Cat} alt="Cat Image" width="50" height="50" />
        </div>
        <Header />
        <About />
        <Experience />
        <Links />
      </div>
    </div>
  );
}

export default App;