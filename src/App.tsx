import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame, useThree} from 'react-three-fiber';
import { Vector3, MOUSE } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    
    controls.minDistance = 1;
    controls.maxDistance = 3;
    controls.enablePan = false;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

function App() {
  return (
    <div className="App">
      <Canvas 
        style={{height: '100vh'}}
        camera={{
          position: new Vector3(1,1,1)
        }}
      >
      <CameraController />
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={'orange'} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
