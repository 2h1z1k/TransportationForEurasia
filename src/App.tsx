import React from 'react'
type TitleProps = {
    title:string
    text?: string
}

//const title = <h1>helo React</h1>


const Title = (props:TitleProps) => <h1>{props.text}{props.title}</h1>

const List = () => {
    let a = 10
    return(
        <>
            <ul>
                <li>list item {a + 1}</li>
                <li>list item 2</li>
                <li>list item 3</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minima temporibus soluta ipsam hic corrupti nisi facere cumque. Consectetur saepe nemo sapiente veritatis explicabo commodi modi enim. Dolor, corporis fuga!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minima temporibus soluta ipsam hic corrupti nisi facere cumque. Consectetur saepe nemo sapiente veritatis explicabo commodi modi enim. Dolor, corporis fuga!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minima temporibus soluta ipsam hic corrupti nisi facere cumque. Consectetur saepe nemo sapiente veritatis explicabo commodi modi enim. Dolor, corporis fuga!</p>
        </>
    )
}


function App() {
    return  ( 
        <div className="App">
            <Title title="app.js"/>
            <Title title="test.js"/>
            <List/> 
        </div>
    )
}

export default App
