import { keyframes } from 'styled-components';

// Fades
export const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const fadeInDown = keyframes`
	0% {
		transform: translateY(-20px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const fadeInUp = keyframes`
	0% {
		transform: translateY(20px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const fadeInScaleDown = keyframes`
	0% {
		transform: scale(1.05);
		opacity: 0;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
`;

// Move

export const MoveUp = keyframes`
	0% {
		transform: translateY(0px);
	}
	100% {
		transform: translateY(-5px);
	}
`;

// Loading Screen

export const LoadScreen = keyframes`
	0% {
		transform: scale(2);
		opacity: 1;
	}
	60% {
		opacity: 0;
	}
	99% {
		transform: scaleY(150.5);
		opacity: 0;
	}
	100% {
		transform: scaleY(0);
		opacity: 0;
	}
`;