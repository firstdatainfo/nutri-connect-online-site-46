
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Adicionar um estilo para o fade-in da aplicação
const style = document.createElement('style');
style.textContent = `
  #root {
    opacity: 1;
    transition: opacity 0.3s ease-out;
  }
  #root.loaded {
    opacity: 1;
  }
  
  /* Estilos para transição de página */
  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 0.2s;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 0.2s;
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

// Prevenir o comportamento padrão de página branca durante navegação
document.addEventListener('beforeunload', (event) => {
  event.preventDefault();
});
