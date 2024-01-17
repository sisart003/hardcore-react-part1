import { useState, useEffect } from 'react';

const Advice = () => {

    const [advice, setAdvice] = useState('');
    const [count, setCount] = useState(0);
  
    async function getAdvice(){
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const datas = await res.json();
      setAdvice(datas.title);
      setCount((c) => c + 1);
    }
  
    useEffect(function () {
      getAdvice()
    }, [])

    return (
        <div>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get Advice!</button>
            <p>You click the button <strong>{count}</strong> times</p>
        </div>
    )
}

export default Advice