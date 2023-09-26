import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>This is header text</h1>;
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <div>
                <h1>Hello World</h1>
                <img
                    src="../assets/images/pet-ada.jpg"
                    alt="A picture of my cat Ada"
                />
            </div>
            ;
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            ;
            <div>
                <Container>
                    <Row>
                        <Col>
                            {" "}
                            <div className="red-rectangle"> </div>
                        </Col>
                        <Col>
                            <div className="red-rectangle"> </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            ;
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Gabriel J Fitzpatrick
            </p>
        </div>
    );
}

export function AppButton(): JSX.Element {
    return (
        <div>
            <Button>Click Me</Button>
        </div>
    );
}
export default App;
