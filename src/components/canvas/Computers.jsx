import { Suspense, useEffect, useState } from "react";
import { Canvas, events } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -1.6] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Membuat objek media query untuk mencocokkan ukuran layar maksimum 500px
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Mengatur state 'isMobile' berdasarkan hasil pencocokan media query saat ini
    setIsMobile(mediaQuery.matches);

    // Membuat fungsi penanganan perubahan media query
    const handleMediaQueryChange = (event) => {
      // Mengatur kembali state 'isMobile' berdasarkan hasil perubahan media query
      setIsMobile(event.matches);
    };

    // Menambahkan event listener ke media query untuk mendengarkan perubahan
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Membersihkan event listener saat komponen tidak lagi digunakan (unmount)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
