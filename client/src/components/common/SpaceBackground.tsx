"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const SpaceBackground = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // 개선된 버텍스 쉐이더
    const vertexShader = `
      uniform vec2 uMouse;
      uniform float uTime;
      
      attribute float size;
      attribute vec3 customColor;
      
      varying vec3 vColor;
      varying float vDistanceToMouse;
      
      void main() {
        vColor = customColor;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        
        // 마우스와의 3D 거리 계산
        vec2 mousePos = uMouse * 50.0;
        float distanceToMouse = length(worldPosition.xy - mousePos);
        vDistanceToMouse = distanceToMouse;
        
        // 더 자연스러운 크기 변화
        float particleSize = size * (1.0 + 0.2 * sin(uTime + position.x * 0.1));
        gl_PointSize = particleSize * (150.0 / -mvPosition.z);
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    // 개선된 프래그먼트 쉐이더
    const fragmentShader = `
      uniform float uTime;
      
      varying vec3 vColor;
      varying float vDistanceToMouse;
      
      void main() {
        // 더 부드러운 원형 그라데이션
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        
        // 부드러운 알파 페이딩
        float alpha = smoothstep(0.5, 0.1, dist);
        
        // 마우스 근처에서의 색상 변화
        vec3 color = vColor;
        float mouseInfluence = smoothstep(10.0, 0.0, vDistanceToMouse);
        
        // 시간에 따른 미묘한 색상 변화
        color += 0.2 * vec3(
          sin(uTime * 0.3 + vDistanceToMouse * 0.05),
          sin(uTime * 0.4 + vDistanceToMouse * 0.05),
          sin(uTime * 0.5 + vDistanceToMouse * 0.05)
        ) * mouseInfluence;
        
        // 최종 색상 출력
        gl_FragColor = vec4(color, alpha * 0.6);
      }
    `;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 파티클 시스템 생성
    const particles = 5000;
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);
    const sizes = new Float32Array(particles);

    // 더 자연스러운 파티클 분포
    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;

      // 나선형 분포 계산
      const radius = Math.random() * 40;
      const spinAngle = radius * 0.3 + Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 2;

      positions[i3] = Math.cos(spinAngle) * radius;
      positions[i3 + 1] = height * (radius * 0.2); // 높이를 반지름에 비례하게 조절
      positions[i3 + 2] = Math.sin(spinAngle) * radius;

      // 거리에 따른 색상 변화
      const distance = radius / 40;
      const hue = 0.6 + distance * 0.1;
      const color = new THREE.Color().setHSL(hue, 0.8, 0.8);

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // 다양한 크기 설정
      sizes[i] = Math.random() * 1.5 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("customColor", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // 마우스 이벤트 처리
    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 애니메이션
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      material.uniforms.uTime.value = elapsedTime;
      material.uniforms.uMouse.value.set(
        mouseRef.current.x,
        mouseRef.current.y
      );

      // 전체 회전
      points.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
      return requestAnimationFrame(animate);
    };

    const animationId = animate();

    // 리사이즈 처리
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ background: "#1a191d" }}
    />
  );
};

export default SpaceBackground;
