import Slide from '../components/Slide';
import { Typography, Box, Paper } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PropsStateSlide = () => {
  const propsExample = `
// Parent Komponente
function ParentComponent() {
  return (
    <ChildComponent 
      name="Max" 
      age={25} 
      onCustomEvent={() => console.log('Event!')} 
    />
  );
}

// Kind Komponente
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Alter: {props.age}</p>
      <button onClick={props.onCustomEvent}>
        Klick mich!
      </button>
    </div>
  );
}
  `;

  const stateExample = `
function Counter() {
  // State Definition
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // State Aktualisierung
  const increment = () => {
    setCount(prevCount => prevCount + 1);
    setIsActive(true);
  };

  return (
    <div>
      <p>Zähler: {count}</p>
      <p>Status: {isActive ? 'Aktiv' : 'Inaktiv'}</p>
      <button onClick={increment}>Erhöhen</button>
    </div>
  );
}
  `;

  return (
    <Slide title="Props & State">
      <Typography variant="h5" gutterBottom>
        Datenverwaltung in React
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Props: Datenübergabe zwischen Komponenten
        </Typography>
        <Paper sx={{ p: 2, bgcolor: '#1E1E1E' }}>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {propsExample}
          </SyntaxHighlighter>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          State: Lokale Komponentendaten
        </Typography>
        <Paper sx={{ p: 2, bgcolor: '#1E1E1E' }}>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {stateExample}
          </SyntaxHighlighter>
        </Paper>
      </Box>
    </Slide>
  );
};

export default PropsStateSlide;
