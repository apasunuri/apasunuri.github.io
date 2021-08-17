import './App.css';
import Content from './components/Content';
import About from './components/About';
import Particles from 'react-tsparticles';

function App() {
  return (
      <div className="App">
        <header className="jumbotron jumbotron-fluid">
          <div id="tsparticles">
            <Particles
              options={{
                background: {
                  color: {
                    value: "#1a222c",
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 0.25,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.25,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 3,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                    value: 82,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 2,
                  },
                },
                detectRetina: true,
              }}
            />
            </div>
          <div className="App-header container">
            <Content />
          </div>
        </header>
        <div id="content">
          <About />
        </div>
      </div>
  );
}

export default App;
