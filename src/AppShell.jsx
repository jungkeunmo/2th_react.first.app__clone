import React from "react";

class GmButton extends React.Component {
    render() {
        return <button> 버튼 </button>
    };
};

class AppShell extends React.Component {
    render() {
        return (
            <div>
                <h1> HELLO WORD </h1>
                <GmButton />
            </div>
        );
    };
};

export default AppShell;