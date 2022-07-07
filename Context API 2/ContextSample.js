import React, { createContext, useContext, useState } from 'react';

// context를 만들 때 createContext를 사용
const MyContext = createContext('defaultValue');
const Context = createContext('defaultValue');

function Child () {
    // useContext는 context의 값을 읽어와서 사용할 수 있게 해주는 React 내장 Hook이다.
    const text = useContext(MyContext);
    return <div> 안녕하세요? {text} </div>;
};

function Parent() {
    return <Child />;
};

function GrandParent() {
    return <Child />;
};

function BoyorGirl() {
    const data = useContext(Context);

    return <h3> Are you boy or girl? {data} </h3>
}

function ContextSample() {
    const [value, setValue] = useState(true);
    const [sex, setSex] = useState(true);

    return (
        // Provider를 통해 value를 설정해 MyContext의 값을 설정할 수 있다.
        <Context.Provider value={sex ? "Boy" : "Girl"}>
            <BoyorGirl />
            <button onClick={() => setSex(!sex)}>Click Me!</button>
        </Context.Provider>
    )
}

export default ContextSample;

