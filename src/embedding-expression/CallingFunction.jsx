import React from 'react'

const CallingFunction = () => {
    function Greeting(name) {
        return `Hello, ${name}`;
    }

    function GetGreeting(){
        return <h2>{Greeting("mithra")}</h2>;
    }
    return (
        <div>
            <GetGreeting/>
        </div>
    )
}

export default CallingFunction

// alt +shif+f= formate document