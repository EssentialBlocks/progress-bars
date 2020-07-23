import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import icon from "./icon";

registerBlockType("block/progress-bar", {
	title: __("Progress Bar", "block"),
	description: __("", "block"),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
});