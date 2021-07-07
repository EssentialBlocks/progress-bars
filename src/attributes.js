const { __ } = wp.i18n;
import * as typoPrefixs from "./constants/typographyConstants";
import { generateTypographyAttributes } from "../util/helpers";
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
		default: "line"
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
	},
	displayProgress: {
		type: "boolean",
		default: false,
	},
	animationDuration: {
		type: "number",
		default: 1500,
	},
	titleColor: {
		type: "string",
	},
	progressColor: {
		type: "string",
	},
	// typography attributes
	...generateTypographyAttributes(Object.values(typoPrefixs)),
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
	progressGradient: {
		type: "string",
		default: "linear-gradient(45deg,#00F260,#0575E6)",
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
