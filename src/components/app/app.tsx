import React from 'react';
import { createCn } from 'bem-react-classname';

import VinylRecordDisk from '../vinyl-record-disk';
import imgsrc from '../../test.jpeg';

import './app.scss';

const cn = createCn('app');

const App = () => <div className={cn()}>
    <div className={cn('vinyl-player')}>
        <VinylRecordDisk />
    </div>
    <img src={imgsrc} alt='' style={{position: 'absolute',
    top: 0,
    zIndex: 0}}/>
</div>

export default App;