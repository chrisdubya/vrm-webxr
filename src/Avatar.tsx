import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useLoader } from "@react-three/fiber";
import { VRM, VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";

export const Avatar = () => {
	const { scene, camera } = useThree();
	const gltf = useGLTF("/Anon.vrm", false, false, (loader) =>
		loader.register((parser) => new VRMLoaderPlugin(parser))
	);
	const avatar = useRef<VRM>();

	useEffect(() => {
		if (gltf) {
			const vrm = gltf.userData.vrm;
			VRMUtils.removeUnnecessaryJoints(gltf.scene);
		}
	});

	return <primitive object={gltf.scene}></primitive>;
};
