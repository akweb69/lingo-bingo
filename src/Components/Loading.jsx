import React from "react";
import { BounceLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="h-screen w-screen bg-gray-900 flex items-center justify-center">
            <div className="text-center">
                <BounceLoader color="#2563EB" size={100} />

            </div>
        </div>
    );
};

export default Loading;
