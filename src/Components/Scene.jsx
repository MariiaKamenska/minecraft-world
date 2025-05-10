import { OrbitControls } from "@react-three/drei";
import Ground from "./Ground";
import { useState } from "react";
import Block from "./Block";


export default function Scene() {
    const [blocks, setBlocks] = useState([]);

    const handleAddBlock = (position) => {
        setBlocks((prev) => [...prev, position]);
    };

    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.7} castShadow/>

            <OrbitControls />

            <Ground onAddBlock={handleAddBlock}/>
            {/* <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="green" />
            </mesh> */}

            {blocks.map((pos, idx) => (
                <Block key={idx} position={pos} onClick={handleAddBlock}/>
            ))}
        </>
    );
}