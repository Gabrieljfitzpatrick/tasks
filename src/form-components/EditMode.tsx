import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleSwitchChange = () => {
        setIsEditMode(!isEditMode);
    };

    const handleCheckboxChange = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <p>
                {isEditMode ? (
                    <div>
                        <label htmlFor="nameInput">Name:</label>
                        <input
                            type="text"
                            id="nameInput"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <label>
                            Student:
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={handleCheckboxChange}
                            />
                        </label>
                    </div>
                ) : (
                    <div>
                        {userName} is {isStudent ? "a student" : "not a student"}
                    </div>
                )}
            </p>
            <label>
                Edit Mode:
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={handleSwitchChange}
                />
            </label>
        </div>
    );
}
