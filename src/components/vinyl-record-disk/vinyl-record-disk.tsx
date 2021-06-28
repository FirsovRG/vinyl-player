import React from 'react';
import { createCn } from 'bem-react-classname';

import VinylRecordInfo from '../vinyl-record-info';

import './vinyl-record-disk.scss';

const cn = createCn('vinyl-record-disk');

const VinylRecordDisk = () => {
    
    const renderTrackStripe = (count = 0) => {
        if (count === 25) {
            return null;
        }
        
        return (
            <div className={cn('vinyl-track-stripe')}>
                {renderTrackStripe(count + 1)}
            </div>
        )
    }
    
    return (
        <div className={cn()}>
            <div className={cn('tracks')}>
                {renderTrackStripe()}
            </div>
            <div className={cn('vinyl-tracks-shadow')}>
                <div className={cn('shadow-wrapper')}>
                    <div className={cn('small-cirlce')}/>
                    <div className={cn('big-circle')}/>
                </div>
                <div className={cn('shadow-wrapper', {inverted: true})}>
                    <div className={cn('small-cirlce')}/>
                    <div className={cn('big-circle')}/>
                </div>
            </div>
            <div className={cn('vinyl-tracks-flare')}>
                <div className={cn('flare-sector')} />
                <div className={cn('flare-sector', {inverted: true})} />
            </div>
            <div className={cn('outer-track-border')}>
                <div className={cn('inner-track-border')}>
                    <VinylRecordInfo />
                </div>
            </div>
        </div>
    )
}

export default VinylRecordDisk;
