import React from 'react';
import { useCountdown } from './useCountdown';

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div>
                <p>{days}:{hours}:{minutes}:{seconds}</p>
        </div>
    );
};

export { CountdownTimer }