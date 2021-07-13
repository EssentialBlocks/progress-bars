const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import icon from "./icon";
import example from "./example";

registerBlockType("progress-bars/progress-bar-block", {
	title: __("Progress Bars", "progress-bars"),
	description: __(
		"Make your website interactive with stunning progress bar",
		"progress-bars"
	),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
	example,
});
