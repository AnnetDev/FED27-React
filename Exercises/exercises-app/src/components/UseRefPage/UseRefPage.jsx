import { useRef, useState, useEffect } from 'react';
import Layout from '../Layout';


export function UseRefPage() {
    const inputRef = useRef(null);  
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        inputRef.current.focus(); // focus the input element when the component mounts
    }, []); // empty dependency array means this effect runs only once after the initial render

    return (
        <Layout name="UseRefPage">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                <h1>UseRefPage</h1>
                <input style={{padding: '10px'}} ref={inputRef} type={'text'} placeholder="Type something..." />
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
        </Layout>
    );
}