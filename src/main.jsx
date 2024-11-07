import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from '@/store';
import { BrowserRouter as Router } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <Router>
        <Provider store={store}>
            <App />
        </Provider>
  </Router>
)
