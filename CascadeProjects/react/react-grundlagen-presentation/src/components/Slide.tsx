import { motion } from 'framer-motion';
import { Paper, Typography, Box } from '@mui/material';

interface SlideProps {
  title: string;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          minHeight: '80vh', 
          display: 'flex', 
          flexDirection: 'column',
          m: 2
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ flex: 1 }}>
          {children}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Slide;
