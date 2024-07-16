import React from "react";

interface CandlestickProps {
    fill: string;
    x: number;
    y: number;
    width: number;
    height: number;
    low: number;
    high: number;
    openClose: [number, number];
}

const Candlestick: React.FC<CandlestickProps> = (props) => {
    const {
        x,
        y,
        width,
        height,
        low,
        high,
        openClose: [open, close],
    } = props;

    const isGrowing: boolean = open < close;
    const color: string = isGrowing ? "green" : "red";
    const ratio: number = Math.abs(height / (open - close));

    return (
        <g stroke={color} fill="none" strokeWidth="2">
            <path
                d={`
                    M ${x},${y}
                    L ${x},${y + height}
                    L ${x + width},${y + height}
                    L ${x + width},${y}
                    L ${x},${y}
                `}
            />
            {isGrowing ? (
                <path
                    d={`
                        M ${x + width / 2}, ${y + height}
                        v ${(open - low) * ratio}
                    `}
                />
            ) : (
                <path
                    d={`
                        M ${x + width / 2}, ${y}
                        v ${(close - low) * ratio}
                    `}
                />
            )}
            {isGrowing ? (
                <path
                    d={`
                        M ${x + width / 2}, ${y}
                        v ${(close - high) * ratio}
                    `}
                />
            ) : (
                <path
                    d={`
                        M ${x + width / 2}, ${y + height}
                        v ${(open - high) * ratio}
                    `}
                />
            )}
        </g>
    );
};

export default Candlestick;