import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Image } from 'react-bootstrap';
import axios from 'axios'
import React, { useState } from 'react'
import chuck from '../img/chuck.jpg';

export default function Api() {
    const [norris, setNorris] = useState("");

    function getJoke() {
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then((res) => {
                console.log(res.data)
                setNorris(res.data)
            })
            .catch((err) => console.log(err))
    };

    return (
        <div className='App'>
            <Container>
                <div style={{ paddingTop: "2em", display: "flex", justifyContent: "center" }}>
                    <Image className="chuck" src={chuck} roundedCircle />
                </div>
                <div>
                    <h1 style={{ paddingTop: "1em", display: "flex", justifyContent: "center" }}>Chuck Norris Joke Generator</h1>
                </div>
                <div className="button" style={{ paddingTop: "2em", display: "flex", justifyContent: "center" }}>

                    <Button variant="primary" onClick={() => {
                        getJoke();
                    }}>CLICK ME TO GET A NEW JOKE</Button>
                </div>
            </Container>

            <Container className='joke-container'>
                {norris &&
                    <Card border="primary" className='center'>
                        <Card.Body>
                            <Card.Text className="joke">
                                {norris.value}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }


            </Container>
        </div >


    )
}
