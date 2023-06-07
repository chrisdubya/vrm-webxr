import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

function App() {
	return (
		<div className='h-screen'>
			<Canvas>
				<OrbitControls />
				<spotLight position={[0, 2, -1]} intensity={0.4} />
				<ambientLight intensity={0.65} />
				<Suspense fallback={null}>
					<Avatar />
				</Suspense>
			</Canvas>
		</div>
	);
}

export default App;
