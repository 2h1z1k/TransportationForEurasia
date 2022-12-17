import React, { useState } from 'react'
import {
    Card,
    CardContent,
    TextareaAutosize,
    Typography,
    Container,
} from '@mui/material'
import "./Reviews.scss"

type Props = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReview: Props[] = [
        {
            name: 'Ava',
            text: "I am addicted to this chair! It was pretty easy to set up. Make sure you don't accidentally nail the back pillow to the thingy that holds the butt and the back pieces together",
        },
        {
            name: 'Stan Woods',
            text: 'Chair looks as advertised, assembly took less than 10 min. The only drawback would be the way arm is mounted to the seat. It’s a little weak.',
        },
    ]

    const [reviews, setReviews] = useState<Props[]>(arrReview)

    const [newReview, setNewReview] = useState<Props>({ name: '', text: '' })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Props) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Props) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('all fields are required')
        } else {
            setReviews((prevState: Props[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }
    return (
        <>
            <div className="background">
                <Container>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            margin: '40px 0',
                        }}
                    >
                        Reviews
                    </Typography>
                    {reviews.map(({ name, text }: Props, i) => (
                        <Card
                            sx={{
                                margin: '20px 0',
                            }}
                            key={i}
                        >
                            <CardContent className='textContent'>
                                <div>{name}</div>
                                <div>{text}</div>
                            </CardContent>
                        </Card>
                    ))}
                    <form className="cardContent" onSubmit={onSend}>
                        <Typography variant="h5">
                            Please leave a review
                        </Typography>
                        <div
                            style={{
                                margin: '15px 0',
                            }}
                        >
                            <input  
                                type="text"
                                placeholder='Your name'
                                className='textField'
                                value={newReview.name}
                                onChange={handleChangeName}
                            />
                        </div>
                        <TextareaAutosize
                            className='textAutosize'
                            minRows={5}
                            placeholder="Your message"
                            onChange={handleChangeText}
                            value={newReview.text}
                            color="#2f343a"
                        />
                        <div>
                            <button type="submit" className='buttonText'>
                                Send
                            </button>
                        </div>
                    </form>
                </Container>
            </div>
        </>
    )
}

export default Reviews
