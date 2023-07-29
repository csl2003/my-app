import { useState } from "react";
const Square = ({ value }) => {
    const [Count, setCount] = useState(value);
    const [Ref, setRef] = useState(0);
    function handleClick() {
        setCount('X');
        setRef(Ref + 1);
        if (Ref !== 0) {
            alert("Select other number");
        }
    };
    return (
        <button className="square" onClick={handleClick}>{Count}</button>
    );
};
const App1 = () => {
    const Count = Generate();
    return (
        <>
            <div className="board-row">
                <Square value={Count[0]} />
                <Square value={Count[1]} />
                <Square value={Count[2]} />
                <Square value={Count[3]} />
                <Square value={Count[4]} />
            </div>
            <div className="board-row">
                <Square value={Count[5]} />
                <Square value={Count[6]} />
                <Square value={Count[7]} />
                <Square value={Count[8]} />
                <Square value={Count[9]} />
            </div>
            <div className="board-row">
                <Square value={Count[10]} />
                <Square value={Count[11]} />
                <Square value={Count[12]} />
                <Square value={Count[13]} />
                <Square value={Count[14]} />
            </div>
            <div className="board-row">
                <Square value={Count[15]} />
                <Square value={Count[16]} />
                <Square value={Count[17]} />
                <Square value={Count[18]} />
                <Square value={Count[19]} />
            </div>
            <div className="board-row">
                <Square value={Count[20]} />
                <Square value={Count[21]} />
                <Square value={Count[22]} />
                <Square value={Count[23]} />
                <Square value={Count[24]} />
            </div>
        </>
    );
};
function getRandomNumber(min, ma) {
    let step1 = ma - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
function createArrayOfNumbers(st, end) {
    let myArray = [];
    for (let i = st; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}
function Generate() {
    let numbersArray = createArrayOfNumbers(1, 25);
    let output = [];
    for (let i = 0; i <= 25; i++) {
        let randomIndex = getRandomNumber(0, numbersArray.length - 1);
        let randomNumber = numbersArray[randomIndex]; numbersArray.splice(randomIndex, 1);
        output.push(randomNumber);
    };
    return output;
};
export default App1;