export default function Block({ position, onClick, onRemove }) {

    return (
        <mesh
            position={position}
            onClick={(e) => {
                e.stopPropagation();
                onClick(position);
            }}
            onContextMenu={(e) => {
                e.stopPropagation();
                onRemove(position);
            }}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#32CD32" />
         </mesh>
    );
}