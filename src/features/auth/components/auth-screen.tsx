"use client";

import { useState } from "react";
import { SignInFlow } from "../types";

export  const AuthScreen = () => {

    const [state , setState] = useState<SignInFlow>("signin");

    return(
        <div className="h-full flex items-center justify-center bg-[#5c3b58]">
            <div className="md:h-auto md:w-[420px]">
                Auth Screen
            </div>
        </div>
    )
}