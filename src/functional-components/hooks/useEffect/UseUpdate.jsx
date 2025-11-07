import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseUpdate = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Count changed to ${count}`);
    }, [count]);
    return (
        <div>
            < h2 > Count: {count} </ h2 >
            < button onClick={() => setCount(count + 1)}>Increase </ button >
        </div>
    )
}

export default UseUpdate
