import React, { useState, useEffect } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    useEffect(() => {
        document.title = `You clicked ${count} times`
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>Increment counter </button>
        </div>
    )
}
export default Counter;