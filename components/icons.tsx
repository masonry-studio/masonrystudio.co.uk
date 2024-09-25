import { RefAttributes, SVGProps } from "react";

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export type IconProps = ComponentAttributes & {
	size?: string | number;
	absoluteStrokeWidth?: boolean;
};

const Icons = {
	Masonry: (props: SVGProps<SVGSVGElement>) => (
		<svg width="512" height="413" viewBox="0 0 512 413" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M257.384 256.616L1.38378 2.00004L0 134.843L257.384 393.611L512 134.843V2L257.384 256.616Z" fill="currentColor" />
			<path d="M511.806 274.541L373.428 412.919L511.806 412.92V274.541Z" fill="currentColor" />
			<path d="M0 274.541L137.67 411.536L0 411.536V274.541Z" fill="currentColor" />
		</svg>
	),
}

export default Icons;