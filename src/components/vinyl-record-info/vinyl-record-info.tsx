import React from 'react';
import { createCn } from 'bem-react-classname';

import './vinyl-record-info.scss';

const cn = createCn('vinyl-record-info');

const VinylRecordInfo = () => (
	<div className={cn()}>
		<div className={cn('record-info')}>
			<span className={cn('record-title')}>
				Record Title
			</span>
		</div>
		<div className={cn('center-pick')} />
	</div>
);

export default VinylRecordInfo;
