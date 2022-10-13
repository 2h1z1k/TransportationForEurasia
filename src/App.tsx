import React from 'react'
type TitleProps = {
    title:string
    text: string
    number: string
}

//const title = <h1>helo React</h1>


const Title = (props:TitleProps) => {
    return( 
        <>
            <h1>{props.text}{props.title}</h1>
            <ul>{props.number}</ul>
        </>
    )
   
}
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
            <Title title=" app.js" text="hi" number="10"/>
            <Title title=" test.js" text="hello" number="15"/>
            <List/> 
        </div>
    )
}

export default App
