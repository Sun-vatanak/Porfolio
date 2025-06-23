import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AnimationTest() {
  const testRef = useScrollAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Force show animations after 1 second for testing
    const timer = setTimeout(() => {
      setIsVisible(true);
      const elements = document.querySelectorAll(
        ".scroll-animation, .scroll-animation-left, .scroll-animation-right, .scroll-animation-scale",
      );
      elements.forEach((el) => {
        el.classList.add("animate-in");
        el.classList.add("show-immediately");
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={testRef} className="py-20 bg-yellow-100">
      <div className="container-custom text-center">
        <h2 className="scroll-animation text-4xl font-bold mb-8">
          Animation Test Section
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="scroll-animation-left bg-red-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold">Left Animation</h3>
            <p>This should slide in from the left</p>
          </div>
          <div className="scroll-animation bg-blue-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold">Up Animation</h3>
            <p>This should slide up from bottom</p>
          </div>
          <div className="scroll-animation-right bg-green-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold">Right Animation</h3>
            <p>This should slide in from the right</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="scroll-animation-scale bg-purple-100 p-8 rounded-lg inline-block">
            <h3 className="text-xl font-bold">Scale Animation</h3>
            <p>This should scale up</p>
          </div>
        </div>
        <p className="mt-4 text-sm">
          Status: {isVisible ? "Animations should be visible" : "Waiting..."}
        </p>
      </div>
    </div>
  );
}
