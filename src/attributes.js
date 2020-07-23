const attributes = {
	progress: {
		type: "number",
	},
	height: {
		type: "number",
	},
	displayTitle: {
		type: "boolean",
		default: true,
	},
	title: {
		type: "string",
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
	progressColor: {
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
	titleColor: {
		type: "string",
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
	titleTextTransform: {
		type: "string",
	},
	titleTextDecoration: {
		type: "string",
	},
};

export default attributes;
