import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function nextColor() {
        setColorIndex((colorIndex + 1) % COLORS.length);
    }

    return (
        <Button onClick={nextColor}>
            Next Color
        </Button>
    );
}

function ColorPreview(): JSX.Element {
    const [colorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor />
                <ColorPreview />
            </div>
        </div>
    );
}
