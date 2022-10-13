import React from 'react'

//const title = <h1>helo React</h1>


const list = (
    <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
    </ul>
)


const Title = () => <h1>Hello React</h1>

const List = () => {
    let a = 10
    return(
        <ul>
            <li>list item {a + 1}</li>
            <li>list item 2</li>
            <li>list item 3</li>
        </ul>
    )
}

function App() {
    return  ( 
        <div className="App">
            <Title />
             <List/> {10+5}
        </div>
    )
}

export default App
