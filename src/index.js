import React from 'react';
import {createRoot} from 'react-dom/client';
import Heading from './components/App';
import Footer from './components/Footer';
import Note from './components/Note';


const container=document.getElementById('root');
const root = createRoot(container);
root.render(<div>
<Heading />
<Note />
<Footer />
</div>
);



