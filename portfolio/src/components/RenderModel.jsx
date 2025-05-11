// components/RenderModel.jsx
'use client';

import React, { Suspense } from 'react'; // Standard import convention for React
import { Canvas } from '@react-three/fiber';
// Wizard import is here, but not used directly in RenderModel.
// It would typically be part of the {children} passed to RenderModel.
import Wizard from '@/models/Wizard';
import clsx from 'clsx';

const RenderModel = ({ children, className }) => {
  return (
    // Use the Canvas component imported from @react-three/fiber
    <Canvas className={clsx('w-screen h-screen -z-10 relative', className)}>
      {/* Suspense should be inside the R3F Canvas */}
      <Suspense fallback={null}>
        {/* Render the children passed to this component */}
        {/* These children should be R3F elements like meshes, lights, controls, etc. */}
        {children}
      </Suspense>
      <Environment preset="dawn"
    </Canvas>
  );
};

export default RenderModel; // Added export default assuming it's the main export