"use client";
export default function Description({prop}: {prop : string}){
    return(
    <div>
        <p className="description">
            <span className="bold">Explaination: </span>
            {prop}
        </p>
    </div>
    );
}