import React from 'react';
import { createCn } from 'bem-react-classname';

import './vinyl-record-disk.css';

const cn = createCn('vinyl-record-disk');

const VinylRecordDisk = () => <div className={cn()}>
    <div className={cn('outer-border')}>

    </div>
</div>

export default VinylRecordDisk;