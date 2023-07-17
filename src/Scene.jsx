/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: Versal (https://sketchfab.com/versal)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/brain-areas-d64608a3978b47d8a39c5a15795ca8c4
Title: Brain Areas
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({id}) {
  const { nodes, materials } = useGLTF('/scene.gltf')

  return (

    <group scale={3} dispose={null}>
      <mesh geometry={nodes.Brain_Part_01_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2}/>
      <mesh geometry={nodes.Brain_Part_02_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
      <mesh geometry={nodes.Brain_Part_03_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
      <mesh geometry={nodes.Brain_Part_04_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
      <mesh geometry={nodes.Brain_Part_05_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
      <mesh geometry={nodes.Brain_Part_06_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
    </group>
  )

}

useGLTF.preload('/scene.gltf')
