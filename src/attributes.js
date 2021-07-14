const { __ } = wp.i18n;
import * as typoPrefixs from "./constants/typographyConstants";
import {
	PROGRESSBAR_HEIGHT,
	PROGRESSBAR_WIDTH,
	FILL_BACKGROUND,
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
		source: "attribute",
		selector: ".eb-progressbar",
		attribute: "data-layout",
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
		source: "attribute",
		selector: ".eb-progressbar",
		attribute: "data-count",
	},
	displayProgress: {
		type: "boolean",
		default: true,
	},
	animationDuration: {
		type: "number",
		default: 1500,
		source: "attribute",
		selector: ".eb-progressbar",
		attribute: "data-duration",
	},
	titleColor: {
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
		default: "linear-gradient(45deg,#00F260,#0575E6)",
	},
	showInline: {
		type: "boolean",
		default: false,
	},
	backgroundColor: {
		type: "string",
		default: "#eaeaea",
	},
	showStripe: {
		type: "boolean",
		default: false,
	},
	stripeAnimation: {
		type: "string",
		default: "none",
	},
	// typography attributes
	...generateTypographyAttributes(Object.values(typoPrefixs)),
	// range controller
	...generateResponsiveRangeAttributes(PROGRESSBAR_WIDTH),
	...generateResponsiveRangeAttributes(PROGRESSBAR_HEIGHT, {
		defaultRange: 12,
		noUnits: true,
	}),
	// background control
	...generateBackgroundAttributes(FILL_BACKGROUND, {
		defaultFillColor: "#000000",
		noOverlay: true,
		noMainBgi: true,
	}),
	// end new attributes
	height: {
		type: "number",
	},
	displayTitle: {
		type: "boolean",
		default: true,
	},
	displayPercentage: {
		type: "boolean",
		default: true,
	},
	colorType: {
		type: "string",
		default: "fill",
	},
	progressBackground: {
		type: "string",
	},
	titleFontSize: {
		type: "number",
		default: 16,
	},
	titleFontSizeUnit: {
		type: "string",
		default: "px",
	},
	percentageType: {
		type: "string",
		default: "tooltip",
	},
	tooltipBackground: {
		type: "string",
	},
	percentageColor: {
		type: "string",
	},
	heightUnit: {
		type: "string",
		default: "px",
	},
	titleFontFamily: {
		type: "string",
	},
	titleFontWeight: {
		type: "string",
		default: "normal",
	},
	titleLetterSpacing: {
		type: "number",
	},
	titleLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightUnit: {
		type: "string",
		default: "px",
	},
};

export default attributes;
