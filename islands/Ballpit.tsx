import { useEffect, useRef } from "preact/hooks";
import { JSX } from "preact";

// Helper function to get a random integer
const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Array of vibrant colors for the balls
const colors: string[] = [
  "#FFFFFF", // White
  "#FF5733", // Red-Orange
  "#33FF57", // Green
  "#3357FF", // Blue
  "#F333FF", // Magenta
  "#33FFF5", // Cyan
  "#F3FF33", // Yellow
  "#FF33A8", // Pink
  "#A833FF", // Purple
  "#FF8C33", // Orange
];

// Define a minimum velocity to maintain constant motion
const MIN_VELOCITY = 0.2;

// Define the BouncingBall class with types and new properties
class BouncingBall {
  x: number;
  y: number;
  radius: number;
  color: string;
  dx: number;
  dy: number;
  friction: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = getRandomInt(0, canvasWidth);
    this.y = getRandomInt(0, canvasHeight);
    this.radius = getRandomInt(2, 6);
    this.color = colors[getRandomInt(0, colors.length - 1)];
    // Set initial velocity to a minimum value
    this.dx = (Math.random() - 0.5) * MIN_VELOCITY;
    this.dy = (Math.random() - 0.5) * MIN_VELOCITY;
    this.friction = 0.98;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(canvasWidth: number, canvasHeight: number): void {
    // Apply friction to velocities
    this.dx *= this.friction;
    this.dy *= this.friction;

    // Maintain a minimum velocity to prevent the ball from stopping
    if (Math.abs(this.dx) < MIN_VELOCITY && Math.abs(this.dx) > 0) {
      this.dx = (this.dx / Math.abs(this.dx)) * MIN_VELOCITY;
    }
    if (Math.abs(this.dy) < MIN_VELOCITY && Math.abs(this.dy) > 0) {
      this.dy = (this.dy / Math.abs(this.dy)) * MIN_VELOCITY;
    }

    // Boundary collision
    if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
      if (this.x + this.radius > canvasWidth) {
        this.x = canvasWidth - this.radius;
      }
      if (this.x - this.radius < 0) this.x = this.radius;
    }
    if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
      if (this.y + this.radius > canvasHeight) {
        this.y = canvasHeight - this.radius;
      }
      if (this.y - this.radius < 0) this.y = this.radius;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

export const useBouncingBalls = (
  numBalls: number = 100,
  repulsionRadius: number = 80,
  repulsionForce: number = 2,
) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const balls = useRef<BouncingBall[]>([]);
  const mouse = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = globalThis.innerWidth;
      canvas.height = globalThis.innerHeight;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    setCanvasSize();
    globalThis.addEventListener("resize", setCanvasSize);
    globalThis.addEventListener("mousemove", handleMouseMove);

    // Initialize balls
    balls.current = [];
    for (let i = 0; i < numBalls; i++) {
      balls.current.push(new BouncingBall(canvas.width, canvas.height));
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouseX = mouse.current.x;
      const mouseY = mouse.current.y;

      balls.current.forEach((ball) => {
        // Apply repulsion if mouse is within range
        if (mouseX !== null && mouseY !== null) {
          const dx = ball.x - mouseX;
          const dy = ball.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repulsionRadius) {
            const angle = Math.atan2(dy, dx);
            const forceMagnitude = (repulsionRadius - distance) /
              repulsionRadius * repulsionForce;
            const repulseDx = Math.cos(angle) * forceMagnitude;
            const repulseDy = Math.sin(angle) * forceMagnitude;
            ball.dx += repulseDx;
            ball.dy += repulseDy;
          }
        }

        ball.update(canvas.width, canvas.height);
        ball.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      globalThis.removeEventListener("resize", setCanvasSize);
      globalThis.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [numBalls, repulsionRadius, repulsionForce]);

  return canvasRef;
};

export default function Ballpit() {
  const canvasRef = useBouncingBalls(150); // Using 150 balls this time for variety

  const canvasStyle: JSX.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return <canvas ref={canvasRef} style={canvasStyle} />;
}
