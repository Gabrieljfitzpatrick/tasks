import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "teal",
        // Add more unique colors as needed
    ];

    const [selectedColor, setSelectedColor] = useState("");

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <label key={color} style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            onChange={() => handleColorChange(color)}
                            checked={selectedColor === color}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "10px",
                    marginTop: "10px",
                    color: "white",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
