import { useEffect } from 'react';

interface Vector {
  x: number;
  y: number;
}

interface FlyingEffectProps {
  containerRef: React.RefObject<HTMLElement | null>;
  imageRefs: React.RefObject<HTMLElement | null>[];
  baseSpeed?: number;
  imageSize?: number;
}

export const useFlyingEffect = ({
  containerRef,
  imageRefs,
  baseSpeed = 1,
  imageSize = 100,
}: FlyingEffectProps) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !imageRefs || imageRefs.length === 0) return;

    const { width, height } = container.getBoundingClientRect();

    const states = imageRefs.map(() => ({
      position: {
        x: Math.random() * (width - imageSize),
        y: Math.random() * (height - imageSize),
      },
      velocity: {
        x: baseSpeed * (Math.random() > 0.5 ? 1 : -1), 
        y: baseSpeed * (Math.random() > 0.5 ? 1 : -1),
      },
    }));

    const moveImages = () => {
      imageRefs.forEach((ref, index) => {
        const image = ref.current;
        if (!image) return;

        const { position, velocity } = states[index];

        position.x += velocity.x;
        position.y += velocity.y;

        const maxX = width - imageSize;
        const maxY = height - imageSize;

        if (position.x <= 0) {
          position.x = 0;
          velocity.x = Math.abs(velocity.x) + baseSpeed * 0.2;
        } else if (position.x >= maxX) {
          position.x = maxX;
          velocity.x = -Math.abs(velocity.x) + baseSpeed * 0.2;
        }

        if (position.y <= 0) {
          position.y = 0;
          velocity.y = Math.abs(velocity.y) + baseSpeed * 0.2;
        } else if (position.y >= maxY) {
          position.y = maxY;
          velocity.y = -Math.abs(velocity.y) + baseSpeed * 0.2;
        }

        const maxSpeed = baseSpeed * 2;
        velocity.x = Math.max(-maxSpeed, Math.min(maxSpeed, velocity.x));
        velocity.y = Math.max(-maxSpeed, Math.min(maxSpeed, velocity.y));

        image.style.transform = `translate(${position.x}px, ${position.y}px)`;
      });

      requestAnimationFrame(moveImages);
    };

    const animationFrame = requestAnimationFrame(moveImages);

    return () => cancelAnimationFrame(animationFrame);
  }, [containerRef, imageRefs, baseSpeed, imageSize]);
};