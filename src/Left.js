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
                     className="mt-3"
                     style={{cursor: "pointer"}}>
                    StudentList
                </div>
                <div className="mt-3">
                    <Link to="/classes" style={{textDecoration: "none", color: "inherit"}}>
                        Classes
                    </Link>
                </div>
                <div className="mt-3">
                    <Link to="/posts" style={{textDecoration: "none", color: "inherit"}}>
                        posts
                    </Link>
                </div>
            </div>
        </div>
    );
}
