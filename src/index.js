import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import { BrowserProvider } from "./context/browser-context";

const root = createRoot(document.getElementById('root'));
root.render(
      <BrowserProvider>
        <App />
      </BrowserProvider>
);

