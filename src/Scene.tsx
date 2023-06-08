import { Suspense } from "react";
import { XR } from "@react-three/xr";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

export const Scene = () => {
	useThree(({ camera }) => {
		camera.position.y = 2;
	});

	return (
		<XR>
			<OrbitControls />
			<spotLight position={[0, 2, -1]} intensity={0.4} />
			<ambientLight intensity={0.65} />

			<gridHelper args={[6, 6, 0xff0000, "teal"]} />

			<Suspense fallback={null}>
				<Avatar />
			</Suspense>
		</XR>
	);
};
