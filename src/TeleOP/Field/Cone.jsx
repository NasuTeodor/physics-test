/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshPhongMaterial } from 'three'
import { useBox } from '@react-three/cannon';

export default function Cone({ position, props }) {

  const { nodes, materials } = useGLTF('/cone.glb');

  useEffect(() => {
    function keyDown(e){
      if (e.key === "r") {
        coneAPI.position.set(position);
        coneAPI.velocity.set(0, 0, 0);
        coneAPI.angularVelocity.set(0, 0, 0);
        coneAPI.rotation.set(0, 0, 0);
        console.log("ai apasat");
      }
    }

    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };

  }, []);

  const [coneBody, coneAPI] = useBox(
    () => ({
      args: [0.23, .5, 0.23],
      mass: .8,
      position: position
    }),
    useRef(null)
  );

  return (
    <group ref={coneBody}>
      {/* <mesh>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial attach={"material"} />
      </mesh> */}
      <group {...props} dispose={null} scale={[0.0028, 0.0028, 0.0028]} position={[0, -.256, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial attach={"material"} color={0x373cdb} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/cone.glb')
