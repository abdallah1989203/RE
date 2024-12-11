import Slide from '../components/Slide';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const IntroSlide = () => {
  return (
    <Slide title="React Grundlagen">
      <Typography variant="h5" gutterBottom>
        Was ist React?
      </Typography>
      <List>
        <ListItem>
          <ListItemText 
            primary="JavaScript-Bibliothek für Benutzeroberflächen" 
            secondary="Entwickelt von Facebook (Meta)"
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Komponenten-basierte Architektur" 
            secondary="Wiederverwendbare UI-Elemente"
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Virtual DOM" 
            secondary="Effizientes Update der Benutzeroberfläche"
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Deklarativer Ansatz" 
            secondary="Beschreibe, wie deine App aussehen soll"
          />
        </ListItem>
      </List>
    </Slide>
  );
};

export default IntroSlide;
