import React from 'react';

import './App.css';

function App() {

    let styled = {
        InputBlock: {
            display: 'flex',
            alignItems: 'center',
            height: '50px',
        },
        InputBlockItem: {
            padding: "0 10px",
            background: "red",
            textDecoration: "none",
            height: '100%',
            minWidth: '300px',

            color: 'rgba(40,44,52,1)'

        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>ToDo list</h1>
                <div style={styled.InputBlock}>
                    <input style={styled.InputBlockItem} type="text"/>
                    <button>
                        <h1 style={{margin:0, fontSize: '32px', lineHeight: "50px"}}>+</h1>
                    </button>
                </div>


            </header>
        </div>
    );
}

export default App;
