# React Grundlagen

## 1. Was ist React?
React ist eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen, entwickelt von Facebook. Es ermöglicht die Erstellung von interaktiven UIs durch wiederverwendbare Komponenten.

### Hauptmerkmale:
- **Deklarativ**: React macht es einfach, interaktive UIs zu erstellen
- **Komponentenbasiert**: Aufbau komplexer UIs aus kleinen, isolierten Codeteilen
- **Einmal lernen, überall schreiben**: React kann auch für mobile Apps verwendet werden

## 2. Komponenten
Komponenten sind die Grundbausteine jeder React-Anwendung.

### Funktionale Komponenten (Modern):
```jsx
function Welcome(props) {
  return <h1>Hallo, {props.name}</h1>;
}

// Verwendung:
<Welcome name="Max" />
```

### Klassenkomponenten (Legacy):
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hallo, {this.props.name}</h1>;
  }
}
```

## 3. JSX
JSX ist eine Syntaxerweiterung für JavaScript, die es ermöglicht, HTML-ähnlichen Code in JavaScript zu schreiben.

```jsx
const element = (
  <div>
    <h1>Willkommen</h1>
    <p>Dies ist JSX!</p>
  </div>
);
```

## 4. Props
Props sind Eigenschaften, die von einer übergeordneten Komponente an eine untergeordnete Komponente weitergegeben werden.

```jsx
function UserInfo(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Alter: {props.age}</p>
    </div>
  );
}

// Verwendung:
<UserInfo name="Anna" age={25} />
```

## 5. State
State ist der lokale Zustand einer Komponente, der sich über die Zeit ändern kann.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anzahl: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Erhöhen
      </button>
    </div>
  );
}
```

## 6. Hooks
Hooks sind Funktionen, die es ermöglichen, React-Features in funktionalen Komponenten zu nutzen.

### useState
```jsx
const [state, setState] = useState(initialState);
```

### useEffect
```jsx
useEffect(() => {
  // Wird nach jedem Render ausgeführt
  document.title = 'Neue Nachricht';
}, [/* Abhängigkeiten */]);
```

### Custom Hooks
```jsx
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
```

## 7. Event Handling
React-Events werden in camelCase geschrieben und als JSX-Attribute übergeben.

```jsx
function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button wurde geklickt!');
  };

  return <button onClick={handleClick}>Klick mich!</button>;
}
```

## 8. Bedingte Rendering
In React können Sie Elemente bedingt rendern.

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Willkommen zurück!</h1>
      ) : (
        <h1>Bitte einloggen.</h1>
      )}
    </div>
  );
}
```

## 9. Listen und Keys
Bei der Rendering von Listen müssen eindeutige Keys verwendet werden.

```jsx
function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
```

## 10. Formulare
Formulare in React können kontrolliert oder unkontrolliert sein.

```jsx
function ControlledForm() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Absenden</button>
    </form>
  );
}
```

## 11. React Router (Navigation)
Für clientseitige Navigation in React-Anwendungen.

```jsx
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 12. Context API
Für globales State Management ohne Props Drilling.

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}
```

## Beste Praktiken:
1. Komponenten klein und fokussiert halten
2. Props und State unveränderlich behandeln
3. Keys für Listen-Items verwenden
4. Funktionale Komponenten und Hooks bevorzugen
5. Code wiederverwenden durch Custom Hooks
6. Performance optimieren (useMemo, useCallback)
7. Sinnvolle Komponenten-Hierarchie erstellen

## Nächste Schritte:
- Redux für komplexes State Management
- Testing mit Jest und React Testing Library
- Server-Side Rendering mit Next.js
- TypeScript für bessere Typsicherheit
- Performance-Optimierung
- Styling-Lösungen (CSS-in-JS, Styled Components)
