import { type FC, type ReactNode } from 'react';
import ResourceProgressBar from '../progress_bars/ResourceProgressBar';

interface Props {
    header: string;
    subheader?: string;
    progress?: number;
    max?: number;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
}

/**
 * A standardized linkable card component meant to be used in a list of other like-components.
 * @param header A string of bold text serving as the title for the card
 * @param children ReactNode compoment, allowing sub-components to be added further down the chain of this component.
 * @param className Allows Tailwind classes to be added at the point of use as opposed to setting explicit styles in this code. Allows for customization upon reuse.
 * @returns A clickable card component that will display information and redirect elsewhre when clicked.
 */
const ResourceButton: FC<Props> = ({
    header,
    subheader,
    progress = 0,
    max = 100,
    onClick,
    children,
    className,
}) => {
    return (
        <button
            className={`crosshair m-4 h-64 w-64 grow rounded-2xl bg-[#1e293b] shadow-md ${className}`}
            onClick={onClick}
        >
            <h3 className="text-md mb-1 text-center text-lg font-semibold">
                {header}
            </h3>
            <h6 className="mb-1 text-center text-sm">{subheader}</h6>
            <div className="flex h-20 flex-col items-center justify-center">
                {children}
            </div>
            <ResourceProgressBar progress={progress} max={max} />
        </button>
    );
};

export default ResourceButton;
