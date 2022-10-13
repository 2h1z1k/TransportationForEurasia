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
        <React.Fragment>
            <ul>
                <li>list item {a + 1}</li>
                <li>list item 2</li>
                <li>list item 3</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minima temporibus soluta ipsam hic corrupti nisi facere cumque. Consectetur saepe nemo sapiente veritatis explicabo commodi modi enim. Dolor, corporis fuga!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minima temporibus soluta ipsam hic corrupti nisi facere cumque. Consectetur saepe nemo sapiente veritatis explicabo commodi modi enim. Dolor, corporis fuga!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minima temporibus soluta ipsam hic corrupti nisi facere cumque. Consectetur saepe nemo sapiente veritatis explicabo commodi modi enim. Dolor, corporis fuga!</p>
        </React.Fragment>
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
