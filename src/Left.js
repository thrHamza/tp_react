import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function Left() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h2>Menu Left</h2>
            <div>
                <div onClick={() => navigate('/')}
                     style={{ cursor: "pointer", margin: "8px 0" }}>
                    StudentList
                </div>
                <div>
                    <Link to="/classes" style={{ textDecoration: "none", color: "inherit" }}>
                        Classes
                    </Link>
                </div>
            </div>
        </div>
    );
}
