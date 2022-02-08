/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { ProgressbarIcon } from "./icon";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import example from "./example";
import metadata from "../block.json";
import "./style.scss";
const { ebConditionalRegisterBlockType } = EBProgressBarsControls;

ebConditionalRegisterBlockType(metadata, {
	icon: ProgressbarIcon,
	attributes,
	keywords: [
		__("progress", "progress-bars"),
		__("bar", "progress-bars"),
		__("eb essential", "progress-bars"),
	],
	edit: Edit,
	save: Save,
	example,
});
