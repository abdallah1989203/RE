import Slide from '../components/Slide';
import { Typography, Box, Paper } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const HooksSlide = () => {
  const useStateExample = `
// useState Hook
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
  `;

  const useEffectExample = `
// useEffect Hook
useEffect(() => {
  // Wird nach jedem Render ausgeführt
  document.title = \`Count: \${count}\`;
}, [count]); // Nur wenn sich count ändert

useEffect(() => {
  // Wird nur einmal beim Mounting ausgeführt
  fetchData();
}, []); // Leeres Dependencies Array
  `;

  const customHookExample = `
// Custom Hook
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
  `;

  return (
    <Slide title="React Hooks">
      <Typography variant="h5" gutterBottom>
        Die wichtigsten Hooks
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          useState
        </Typography>
        <Paper sx={{ p: 2, bgcolor: '#1E1E1E' }}>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {useStateExample}
          </SyntaxHighlighter>
        </Paper>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          useEffect
        </Typography>
        <Paper sx={{ p: 2, bgcolor: '#1E1E1E' }}>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {useEffectExample}
          </SyntaxHighlighter>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Custom Hooks
        </Typography>
        <Paper sx={{ p: 2, bgcolor: '#1E1E1E' }}>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {customHookExample}
          </SyntaxHighlighter>
        </Paper>
      </Box>
    </Slide>
  );
};

export default HooksSlide;
