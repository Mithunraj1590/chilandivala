"use client"; // Ensure this only runs on the client side for Next.js

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";  // Import OrbitControls

const ThreeDModel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, and Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
      alpha: true, // Enable transparency
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);  // Soft light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);  // Stronger light
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Ground Plane (for model to sit on)
    const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.1 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2; // Rotate to make it flat
    plane.position.y = -1; // Position it below the model
    scene.add(plane);

    // Load 3D Model
    const loader = new GLTFLoader();
    let mixer;
    loader.load(
      "/spider/scene.gltf", // Path to your model
      (gltf) => {
        const model = gltf.scene;
        console.log("Model loaded successfully", model);
        scene.add(model);

        // Scale the model (Make it larger)
        model.scale.set(2, 2, 2); // Adjust this value to control size

        // Check if the model has animations
        if (gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }

        // Position adjustments
        model.position.set(0, 0, 0);
      },
      undefined,
      (error) => {
        console.error("Error loading the model:", error);
      }
    );

    // Camera Position
    camera.position.set(0, 2, 6);  // Adjust the camera's position for a better view
    camera.lookAt(0, 0, 0);  // Ensure the camera is looking at the origin

    // OrbitControls for mouse interaction (rotate, zoom, pan)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;  // Smooth camera movement
    controls.dampingFactor = 0.25;  // Control the damping effect
    controls.screenSpacePanning = false;  // Limit panning to the screen space
    controls.enableZoom = false;  // Disable zooming with mouse scroll
    controls.enableRotate = true;  // Allow rotation with mouse movement
    controls.enablePan = true; // Allow panning (if desired)

    // Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      if (mixer) {
        const delta = clock.getDelta();
        mixer.update(delta); // Update the mixer to animate the model
      }

      controls.update(); // Update OrbitControls

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        background: "transparent",
      
      }}
    />
  );
};

export default ThreeDModel;
