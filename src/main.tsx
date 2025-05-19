
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Adicionar um estilo para o fade-in da aplicação
const style = document.createElement('style');
style.textContent = `
  #root {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }
  #root.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(style);

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Adicionar a classe 'loaded' para fazer o fade-in da aplicação
window.addEventListener('load', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    setTimeout(() => {
      rootElement.classList.add('loaded');
    }, 100);
  }
});
