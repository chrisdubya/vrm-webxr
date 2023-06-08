import { ARButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

function App() {
	return (
		<div className='h-screen bg-gray-800'>
			<ARButton />
			<Canvas camera={{ fov: 40 }}>
				<Scene />
			</Canvas>
		</div>
	);
}

export default App;
