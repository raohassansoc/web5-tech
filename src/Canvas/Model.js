import React, { useEffect, useRef, useState } from "react";
import { Clone, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { Vector3 } from "three";

export default function Model(props) {
  const groupRef = useRef();
  const { scene, animations } = useGLTF("/Assets/robot.glb");
  const { actions } = useAnimations(animations, scene);
  let [scaleAmount, setScaleAmount] = useState(0.1);
  useEffect(() => {
    actions?.["ArmatureAction.001"]?.play();
  });
  function isElementInViewport(el) {
    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el?.[0];
    }

    var rect = el?.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    );
  }
  useFrame(({ mouse, viewport }) => {
    // Get the object's position
    if (isElementInViewport(props?.lastStage?.current)) {
      const domElement = props?.lastStage?.current;
      const domRect = domElement.getBoundingClientRect();
      const canvasWidth = viewport.width; // Replace with your canvas width
      const canvasHeight = viewport.height; // Replace with your canvas height
      // Calculate scaling factors
      const targetX = 0;

      const targetY =
        ((domRect.top + domRect.height / 2) / window.innerHeight) *
          canvasHeight *
          -1.1 +
        canvasHeight / 2;

      const animationDuration = 0.5; // Adjust the duration as needed

      // Calculate the distance between the current position and the target position
      const distanceX = targetX - groupRef.current.position.x;
      const distanceY = targetY - groupRef.current.position.y;

      // Calculate the amount to move the model per frame to make it move smoothly
      const moveAmountX = distanceX / (animationDuration * 60); // Assuming 60 FPS
      const moveAmountY = distanceY / (animationDuration * 60); // Assuming 60 FPS
      const size = domRect.height / window.innerHeight;
      const targetScale = (size * viewport.height) / 4;
      // Calculate the amount to scale the model per frame
      const scaleAmountX = targetScale / (animationDuration * 60);
      const scaleAmountY = targetScale / (animationDuration * 60);

      // Update the model's position
      if (Math.abs(distanceX) > Math.abs(moveAmountX)) {
        groupRef.current.position.x += moveAmountX;
      } else {
        // If the distance is small, directly set the position to the target
        groupRef.current.position.x = targetX;
      }

      if (Math.abs(distanceY) > Math.abs(moveAmountY)) {
        groupRef.current.position.y += moveAmountY;
      } else {
        // If the distance is small, directly set the position to the target
        groupRef.current.position.y = targetY;
      }

      // Update the model's scale
      if (
        Math.abs(targetScale - groupRef.current.scale.x) >
        Math.abs(scaleAmountX)
      ) {
        groupRef.current.scale.x +=
          scaleAmountX * Math.sign(targetScale - groupRef.current.scale.x);
        groupRef.current.scale.y +=
          scaleAmountX * Math.sign(targetScale - groupRef.current.scale.x);
        groupRef.current.scale.z +=
          scaleAmountX * Math.sign(targetScale - groupRef.current.scale.x);
      } else {
        actions?.["ArmatureAction.001"]?.play();
        groupRef.current.scale.x = targetScale;
        groupRef.current.scale.y = targetScale;
        groupRef.current.scale.z = targetScale;
      }
      // console.log(targetX, targetY);
    } else {
      const newScale =
        0.1 * (viewport.height * scaleAmount - groupRef.current.scale.x);
      groupRef.current.scale.x += newScale;
      groupRef.current.scale.y += newScale;
      groupRef.current.scale.z += newScale;

      if (isElementInViewport(props?.firstStage?.current)) {
        const div = props?.firstStage?.current;

        const domRect = div.getBoundingClientRect();
        const size = domRect.height / window.innerHeight;

        setScaleAmount(0.2 * size);

        const targetY =
          ((domRect.top + domRect.height / 2) / window.innerHeight) *
            viewport.height *
            -1 +
          viewport.height / 2;
        const changeY = 0.1 * (targetY - groupRef.current.position.y);
        groupRef.current.position.y += changeY;

        // groupRef.current.position.y +=
        //   0.01 * (targetY - groupRef.current.position.y);
      }
      const maxY = viewport.height / 2;
      const maxX = viewport.width / 2;

      if (props?.progress < 0.06) {
        const thisAnimation = props?.progress / 0.06;
        groupRef.current.rotation.y += 0.1 * (0 - groupRef.current.rotation.y);
        let targetX = (Math.cos(0.5 * Math.PI * thisAnimation) * maxX) / 2;
        if (window.innerWidth < 600.5) {
          targetX = 0;
        }
        groupRef.current.position.x +=
          0.1 * (targetX - groupRef.current.position.x);
      } else if (props?.progress > 0.08 && props?.progress < 0.2) {
        groupRef.current.position.y +=
          0.01 * (-viewport.height / 4 - groupRef.current.position.y);
        const thisAnimation = (2 * Math.PI * props?.progress) / 0.14;
        groupRef.current.rotation.y +=
          0.01 * (thisAnimation - groupRef.current.rotation.y);

        groupRef.current.position.y += 0.01 * (0 - groupRef.current.position.y);
        // actions?.["ArmatureAction.001"]?.reset();
        actions?.["ArmatureAction.001"]?.stop();
        groupRef.current.position.x += 0.1 * (0 - groupRef.current.position.x);
      } else {
        groupRef.current.rotation.y += 0.1 * (0 - groupRef.current.rotation.y);
        groupRef.current.position.x += 0.1 * (0 - groupRef.current.position.x);
        groupRef.current.position.y += 0.01 * (0 - groupRef.current.position.y);
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        groupRef.current.position.y += 0.01 * (0 - groupRef.current.position.y);
        groupRef.current.position.x += 0.1 * (0 - groupRef.current.position.x);
        groupRef.current.rotation.y += 0.1 * (0 - groupRef.current.rotation.y);
      }
      // console.log(props.progress, groupRef.current.position.x);
    }
  });
  return (
    <group ref={groupRef} position={[5, 5, -15]}>
      {/* <planeGeometry position={[0, -3, -3]} /> */}
      <group rotation={[0, -0.6, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}
