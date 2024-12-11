import Slide from '../components/Slide';
import { Typography, Box, Paper } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ComponentsSlide = () => {
  const functionComponentExample = `
// Funktionale Komponente
function Welcome(props) {
  return <h1>Hallo, {props.name}</h1>;
}

// Arrow Function Komponente
const Welcome = (props) => {
  return <h1>Hallo, {props.name}</h1>;
}
  `;

  const classComponentExample = `
// Klassen Komponente
class Welcome extends React.Component {
  render() {
    return <h1>Hallo, {this.props.name}</h1>;
  }
}
  `;

  return (
    <Slide title="React Komponenten">
      <Typography variant="h5" gutterBottom>
        Arten von Komponenten
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Funktionale Komponenten (Modern)
        </Typography>
        <Paper sx={{ p: 2, bgcolor: '#1E1E1E' }}>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {functionComponentExample}
          </SyntaxHighlighter>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Klassen-Komponenten (Legacy)
        </Typography>
        <Paper sx={{ p: 2, bgcolor: '#1E1E1E' }}>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {classComponentExample}
          </SyntaxHighlighter>
        </Paper>
      </Box>
    </Slide>
  );
};

export default ComponentsSlide;
