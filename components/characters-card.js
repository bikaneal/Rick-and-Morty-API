import Image from "next/image";
import React from "react";

export const CharactersCard = ({ name, species, image }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Image src={image} width={256} height={256} />
            <span>{name}</span>
            <span>{species}</span>
        </div>
    );
};