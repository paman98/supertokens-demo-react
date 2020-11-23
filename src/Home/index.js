import React, { useState, useEffect } from 'react';
import Logout from "./Logout";
import SuccessView from "./SuccessView";
import { useHistory } from "react-router-dom";

export default function Home() {
    const [userId, setUserId] = useState(undefined);
    const history = useHistory();

    async function logoutClicked() {
        // TODO: sign out
    }

    useEffect(() => {

        // TODO: check if a session exists

    }, []);


    if (userId === undefined) {
        return null;
    } else {
        return (
            <div className="fill">
                <Logout
                    logoutClicked={logoutClicked} />
                <SuccessView
                    userId={userId} />
            </div>
        );
    }
}