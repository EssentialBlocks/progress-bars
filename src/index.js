import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import icon from "./icon";
import example from "./example";

registerBlockType("block/progress-bars", {
	title: __("Progress Bar", "block"),
	description: __(
		"Make your website interactive with stunning progress bar",
		"block"
	),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
	example,
});
