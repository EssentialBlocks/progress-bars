const { __ } = wp.i18n;
import * as typoPrefixs from "./constants/typographyConstants";
import {
	PROGRESSBAR_HEIGHT,
	PROGRESSBAR_WIDTH,
	PROGRESSBAR_SIZE,
	STROKE_WIDTH,
	BOX_HEIGHT,
	BOX_WIDTH,
} from "./constants";
import {
	generateTypographyAttributes,
	generateResponsiveRangeAttributes,
	generateBackgroundAttributes,
} from "../util/helpers";
const attributes = {
	resOption: {
		type: "string",
		default: "Desktop",
	},
	// blockId attribute for making unique className and other uniqueness ⬇
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	// blockMeta is for keeping all the styles ⬇
	blockMeta: {
		type: "object",
	},
	// new attributes
	layout: {
		type: "string",
		default: "line",
	},
	wrapperAlign: {
		type: "string",
		default: "center",
	},
	title: {
		type: "string",
		default: __("Progress Bar", "progress-bar"),
	},
	titleTag: {
		type: "string",
		default: "div",
	},
	progress: {
		type: "number",
		default: 50,
	},
	displayProgress: {
		type: "boolean",
		default: true,
	},
	animationDuration: {
		type: "number",
		default: 1500,
	},
	titleColor: {
		type: "string",
	},
	counterColor: {
		type: "string",
	},
	progressColor: {
		type: "string",
		default: "#000000",
	},
	isProgressGradient: {
		type: "boolean",
		default: false,
	},
	progressGradient: {
		type: "string",
	},
	showInline: {
		type: "boolean",
		default: false,
	},
	backgroundColor: {
		type: "string",
	},
	showStripe: {
		type: "boolean",
		default: false,
	},
	stripeAnimation: {
		type: "string",
		default: "none",
	},
	strokeColor: {
		type: "string",
		default: "#eaeaea",
	},
	prefix: {
		type: "string",
	},
	suffix: {
		type: "string",
	},
	// typography attributes
	...generateTypographyAttributes(Object.values(typoPrefixs)),
	// range controller
	...generateResponsiveRangeAttributes(PROGRESSBAR_WIDTH),
	...generateResponsiveRangeAttributes(PROGRESSBAR_HEIGHT, {
		defaultRange: 12,
		noUnits: true,
	}),
	...generateResponsiveRangeAttributes(PROGRESSBAR_SIZE, {
		defaultRange: 200,
		noUnits: true,
	}),
	...generateResponsiveRangeAttributes(STROKE_WIDTH, {
		defaultRange: 12,
		noUnits: true,
	}),
	...generateResponsiveRangeAttributes(BOX_HEIGHT, {
		defaultRange: 200,
		noUnits: true,
	}),
	...generateResponsiveRangeAttributes(BOX_WIDTH, {
		defaultRange: 140,
		noUnits: true,
	}),
	// end new attributes
};

export default attributes;
