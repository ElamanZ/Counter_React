import React, {useState} from 'react';

function MainPage(props) {
    const [count, setCount] = useState(0)

    const clickPlus = () => {
        setCount(count + 1)
    }
    const clickMinus = () => {
        setCount(count - 1)
    }
    return (
        <>
            <div className="MainBlock">
                <h2 className="MainTitle">Счетчик:</h2>
                <h1 className="MainCount">{count}</h1>
                <div>
                    <button onClick={clickPlus} className="MainPlus">+</button>
                    <button onClick={clickMinus} className="MainMinus">-</button>
                </div>
            </div>
        </>

    );
}

export default MainPage;