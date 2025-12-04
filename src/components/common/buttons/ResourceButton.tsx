import { type FC, type ReactNode } from 'react';
import ResourceProgressBar from '../progress_bars/ResourceProgressBar';

interface Props {
    header: string;
    subheader?: string;
    progress?: number;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
}

/**
 * A standardized linkable card component meant to be used in a list of other like-components.
 * @param header A string of bold text serving as the title for the card.
 * @param subheader A string of text serving as the subtitle for the card.
 * @param progress A number between 0-100 representing the percentage filled of the progress bar on the card.
 * @param children ReactNode compoment, allowing sub-components to be added further down the chain of this component.
 * @param className Allows Tailwind classes to be added at the point of use as opposed to setting explicit styles in this code. Allows for customization upon reuse.
 * @returns A clickable card component that will display information and redirect elsewhre when clicked.
 */
const ResourceButton: FC<Props> = ({
    header,
    subheader,
    progress = 50,
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
            <div className="mt-4 flex flex-col items-center justify-center">
                {children}
            </div>
            <div className="mt-6 flex justify-center px-4">
                <ResourceProgressBar
                    progress={progress}
                    barClassName="h-4 w-full"
                />
            </div>
        </button>
    );
};

export default ResourceButton;
