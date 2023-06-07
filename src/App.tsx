import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Avatar } from "./Avatar";

function App() {
	return (
		<div className='App'>
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
