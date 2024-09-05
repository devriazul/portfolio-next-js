"use client";
export default function Button() {
    return (
        <div className="text-center my-5 pt-5">
            <button onClick={() => console.log("Button Clicked")} className="btn btn-xl bg-green-800 p-3 rounded-lg text-xl font-bold">
                Click Here
            </button>
        </div>
    );
}