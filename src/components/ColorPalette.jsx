const COLORS = [
    "#0f172a",
    "#1e293b",
    "#dc2626",
    "#22d3ee",
    "#9ca3af",
    "#d1d5db",
    "#e5e7eb",
    "#f9fafb",
];
const ColorPalette = () => {
    return (
        <ul className="flex justify-center bg-black pt-5 pb-5">
            {COLORS.map((color) => (
                <li
                    key={color}
                    className="h-[100px] w-[100px]"
                    style={{ background: color }}
                ></li>
            ))}
        </ul>
    );
};

export default ColorPalette;
