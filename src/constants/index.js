const { __ } = wp.i18n;

export const DEFAULT_PROGRESS = 50;
export const DEFAULT_HEIGHT = "30";
export const DEFAULT_BACKGROUND = "#edf1f7";
export const DEFAULT_TOOLTIP_COLOR = "#7967ff";
export const DEFAULT_PROGRESS_COLOR = "#7967ff";
export const DEFAULT_TOOLTIP_TEXT_COLOR = "#ffffff";

export const FONT_SIZES = [
	{ name: __("Small"), size: 12, slug: "s" },
	{ name: __("Medium"), size: 16, slug: "m" },
	{ name: __("Large"), size: 24, slug: "l" },
	{ name: __("Extra Large"), size: 36, slug: "xl" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];

export const LAYOUT = [
	{ label: __("Line"), value: "line" },
	{ label: __("Line Rainbow"), value: "line_rainbow" },
	{ label: __("Circle"), value: "circle" },
	{ label: __("Circle Fill"), value: "circle_fill" },
	{ label: __("Half Circle"), value: "half_circle" },
	{ label: __("Half Circle Fill"), value: "half_circle_fill" },
	{ label: __("Box"), value: "box" },
];

export const CONTAINER_CLASS = {
	line: "line",
	line_rainbow: "line",
	circle: "circle",
	circle_fill: "circle",
	half_circle: "circle",
	half_circle_fill: "circle",
	box: "box",
};

export const WRAPPER_CLASS = {
	line: "eb-progressbar-line",
	line_rainbow: "eb-progressbar-line eb-progressbar-line-rainbow",
	circle: "eb-progressbar-circle",
	circle_fill: "eb-progressbar-circle eb-progressbar-circle-fill",
	half_circle: "eb-progressbar-half-circle",
	half_circle_fill:
		"eb-progressbar-circle eb-progressbar-half-circle eb-progressbar-half-circle-fill",
	box: "eb-progressbar-box",
};

export const PX_PERCENTAGE = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
];

// responsive range controll
export const PROGRESSBAR_WIDTH = "wrpWidth";
export const PROGRESSBAR_HEIGHT = "wrpHeight";

// background controls
export const FILL_BACKGROUND = "fill";
