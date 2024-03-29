import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { VRM, VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { Object3D } from "three";
import { useControls } from "leva";

export const Avatar = () => {
	const { leftShoulder, rightShoulder } = useControls({
		leftShoulder: { value: 0, min: -1, max: 1 },
		rightShoulder: { value: 0, min: -1, max: 1 },
	});
	const { scene, camera } = useThree();
	const gltf = useGLTF("/Anon.vrm", false, false, (loader) =>
		loader.register((parser) => new VRMLoaderPlugin(parser))
	);
	const avatar = useRef<VRM>();
	const [bones, setBones] = useState<{ [part: string]: Object3D }>({});

	useEffect(() => {
		if (gltf) {
			const vrm = gltf.userData.vrm;
			VRMUtils.removeUnnecessaryJoints(gltf.scene);
			VRMUtils.rotateVRM0(vrm);
			vrm.lookAt.target = camera;

			const bones = {
				neck: vrm.humanoid.getRawBoneNode("neck"),
				hips: vrm.humanoid.getRawBoneNode("hips"),
				leftShoulder: vrm.humanoid.getRawBoneNode("leftShoulder"),
				rightShoulder: vrm.humanoid.getRawBoneNode("rightShoulder"),
			};

			setBones(bones);
		}
	}, [scene, gltf, camera]);

	useFrame(({ clock }, delta) => {
		if (avatar.current) {
			avatar.current.update(delta);
		}

		if (bones.neck) {
			const t = clock.getElapsedTime();
			bones.neck.rotation.y = (Math.PI / 4) * Math.sin(t * Math.PI);
		}

		if (bones.leftShoulder) {
			bones.leftShoulder.rotation.y = leftShoulder;
		}

		if (bones.rightShoulder) {
			bones.rightShoulder.rotation.y = rightShoulder;
		}
	});

	return <primitive object={gltf.scene} position={[0, 0, 0]}></primitive>;
};
