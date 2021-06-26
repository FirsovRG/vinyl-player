import React from 'react';
import { createCn } from 'bem-react-classname';

import VinylRecordDisk from '../vinyl-record-disk';

import './app.css';

const cn = createCn('app');

const App = () => <div className={cn()}>
    <VinylRecordDisk />
</div>

export default App;