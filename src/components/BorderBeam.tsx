import { motion } from "framer-motion";

interface BorderBeamProps {
    duration?: number;
    delay?: number;
    size?: number;
    colorFrom?: string;
    colorTo?: string;
}

export const BorderBeam = ({
    duration = 10,
    delay = 0,
    size = 300,
    colorFrom = "#00E0C8", // Standard Teal
    colorTo = "#0F766E",   // Darker Teal
}: BorderBeamProps) => {
    return (
        <div
            className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 overflow-hidden"
            style={{
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
                padding: "2px",
            }}
        >
            {/* Snake/Beam rotating effect */}
            <motion.div
                className="absolute inset-[-100%]" // 300% size ensures full coverage
                style={{
                    // Create a "snake" effect: mostly transparent with a colored tail
                    background: `conic-gradient(from 0deg, transparent 0deg 270deg, ${colorFrom} 320deg, ${colorTo} 360deg)`,
                    willChange: "transform",
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 4, // Smooth rotation speed
                    ease: "linear",
                    repeat: Infinity,
                    delay: delay,
                }}
            />
        </div>
    );
};
