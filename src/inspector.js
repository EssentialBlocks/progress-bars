/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useEffect } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { select } = wp.data;
const {
	PanelBody,
	ToggleControl,
	SelectControl,
	TextControl,
	RangeControl,
	Button,
	BaseControl,
	TabPanel,
} = wp.components;

import objAttributes from "./attributes";
import faIcons from "../util/faIcons";
import ColorControl from "../util/color-control";
import ResponsiveRangeController from "../util/responsive-range-control";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BackgroundControl from "../util/background-control";
import BorderShadowControl from "../util/border-shadow-control";
import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

import { LAYOUT } from "./constants";
import {
	typoPrefix_title,
	typoPrefix_counter,
} from "./constants/typographyConstants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,
		layout,
		wrapperAlign,
		title,
		titleTag,
		progress,
		displayProgress,
		animationDuration,
		titleColor,
		progressColor,
		showInline,
		// new attributes
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: "Styles",
							className: "eb-tab styles",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("Layout")}>
										<SelectControl
											label={__("Layout", "progress-bars")}
											value={layout}
											options={LAYOUT}
											onChange={(newLayout) =>
												setAttributes({ layout: newLayout })
											}
										/>
										{layout === "line" && (
											<ToggleControl
												label={__("Show Inline", "progress-bar")}
												checked={showInline}
												onChange={() => {
													setAttributes({
														showInline: !showInline,
													});
												}}
											/>
										)}
										<hr />
										<TextControl
											label={__("Title", "progress-bars")}
											value={title}
											onChange={(newTitle) =>
												setAttributes({ title: newTitle })
											}
										/>
										<SelectControl
											label={__("Title HTML Tag", "progress-bars")}
											value={titleTag}
											options={[
												{ label: "H1", value: "h1" },
												{ label: "H2", value: "h2" },
												{ label: "H3", value: "h3" },
												{ label: "H4", value: "h4" },
												{ label: "H5", value: "h5" },
												{ label: "H6", value: "h6" },
												{ label: "div", value: "div" },
												{ label: "span", value: "span" },
												{ label: "p", value: "p" },
											]}
											onChange={(newTitleTag) =>
												setAttributes({ titleTag: newTitleTag })
											}
										/>
										<hr />
										<RangeControl
											label={__("Counter Value", "progress-bar")}
											value={progress}
											onChange={(newProgress) =>
												setAttributes({
													progress: newProgress,
												})
											}
											step={1}
											min={0}
											max={100}
										/>
										<ToggleControl
											label={__("Show Counter?", "progress-bar")}
											checked={displayProgress}
											onChange={() => {
												setAttributes({
													displayProgress: !displayProgress,
												});
											}}
										/>
										<hr />
										<RangeControl
											label={__("Animation Duration", "progress-bar")}
											value={animationDuration}
											onChange={(newAnimationDuration) =>
												setAttributes({
													animationDuration: newAnimationDuration,
												})
											}
											step={100}
											min={1000}
											max={10000}
										/>
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Typography", "progress-bar")}>
										<TypographyDropdown
											baseLabel={__("Title")}
											typographyPrefixConstant={typoPrefix_title}
											resRequiredProps={resRequiredProps}
										/>
										<ColorControl
											label={__("Title Color")}
											color={titleColor}
											onChange={(titleColor) => setAttributes({ titleColor })}
										/>
										<hr />
										<TypographyDropdown
											baseLabel={__("Counter")}
											typographyPrefixConstant={typoPrefix_counter}
											resRequiredProps={resRequiredProps}
										/>
										<ColorControl
											label={__("Counter Color")}
											color={progressColor}
											onChange={(progressColor) =>
												setAttributes({ progressColor })
											}
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
