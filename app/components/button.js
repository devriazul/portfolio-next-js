"use client";
export default function Button() {
    return (
        <div className="text-center my-5 pt-5">
            <button onClick={() => console.log("Button Clicked")} className="btn bg-green-800 rounded-lg text-xl px-3 py-2 font-bold">
                Click Here
            </button>
        </div>
    );
}