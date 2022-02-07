/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	SelectControl,
	TextControl,
	RangeControl,
	BaseControl,
	TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";

import objAttributes from "./attributes";

// import ColorControl from "../../../util/color-control";
// import ResponsiveRangeController from "../../../util/responsive-range-control";
// import ResponsiveDimensionsControl from "../../../util/dimensions-control-v2";
// import TypographyDropdown from "../../../util/typography-control-v2";
// import GradientColorControl from "../../../util/gradient-color-controller";
// import {
// 	mimmikCssForResBtns,
// 	mimmikCssOnPreviewBtnClickWhileBlockSelected,
// } from "../../../util/helpers";

const {
	// mimmikCssForResBtns,
	// mimmikCssOnPreviewBtnClickWhileBlockSelected,

	//
	ColorControl,
	ResponsiveRangeController,
	ResponsiveDimensionsControl,
	TypographyDropdown,
	GradientColorControl,
} = window.EBProgressBarsControls;

const editorStoreForGettingPreivew =
	eb_style_handler.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

import {
	LAYOUT,
	PX_PERCENTAGE,
	PROGRESSBAR_WIDTH,
	PROGRESSBAR_HEIGHT,
	PROGRESSBAR_SIZE,
	STROKE_WIDTH,
	BOX_WIDTH,
	BOX_HEIGHT,
	WRAPPER_MARGIN,
	TITLE_SPACE,
} from "./constants";
import {
	typoPrefix_title,
	typoPrefix_counter,
	typoPrefix_prefix,
} from "./constants/typographyConstants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,
		layout,
		title,
		titleTag,
		progress,
		displayProgress,
		animationDuration,
		titleColor,
		counterColor,
		progressColor,
		isProgressGradient,
		progressGradient,
		showInline,
		backgroundColor,
		showStripe,
		stripeAnimation,
		strokeColor,
		prefix,
		suffix,
		prefixColor,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	// useEffect(() => {
	// 	mimmikCssForResBtns({
	// 		domObj: document,
	// 		resOption,
	// 	});
	// }, [resOption]);

	// // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	// useEffect(() => {
	// 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
	// 		domObj: document,
	// 		select,
	// 		setAttributes,
	// 	});
	// 	return () => {
	// 		cleanUp();
	// 	};
	// }, []);

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
							title: __("General", "essential-blocks"),
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: __("Style", "essential-blocks"),
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: __("Advanced", "essential-blocks"),
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls " + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("Layout", "essential-blocks")}>
										<SelectControl
											label={__("Layout", "essential-blocks")}
											value={layout}
											options={LAYOUT}
											onChange={(newLayout) =>
												setAttributes({ layout: newLayout })
											}
										/>
										{(layout === "line" || layout === "line_rainbow") && (
											<ToggleControl
												label={__("Show Inline", "essential-blocks")}
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
											label={__("Title", "essential-blocks")}
											value={title}
											onChange={(newTitle) =>
												setAttributes({ title: newTitle })
											}
										/>
										<SelectControl
											label={__("Title HTML Tag", "essential-blocks")}
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
											label={__("Counter Value", "essential-blocks")}
											value={progress}
											onChange={(progress) => setAttributes({ progress })}
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
										{(layout === "line" || layout === "line_rainbow") && (
											<>
												<hr />
												<ToggleControl
													label={__("Show Stripe", "essential-blocks")}
													checked={showStripe}
													onChange={() => {
														setAttributes({
															showStripe: !showStripe,
														});
													}}
												/>
												{showStripe && (
													<SelectControl
														label={__("Stripe Animation", "essential-blocks")}
														value={stripeAnimation}
														options={[
															{ label: "Left To Right", value: "normal" },
															{ label: "Right To Left", value: "reverse" },
															{ label: "Disabled", value: "none" },
														]}
														onChange={(stripeAnimation) =>
															setAttributes({ stripeAnimation })
														}
													/>
												)}
											</>
										)}

										{(layout === "half_circle" ||
											layout === "half_circle_fill") && (
											<>
												<hr />
												<TextControl
													label={__("Prefix", "essential-blocks")}
													value={prefix}
													onChange={(newPrefix) =>
														setAttributes({ prefix: newPrefix })
													}
												/>
												<TextControl
													label={__("Suffix", "essential-blocks")}
													value={suffix}
													onChange={(newSuffix) =>
														setAttributes({ suffix: newSuffix })
													}
												/>
											</>
										)}
									</PanelBody>
									<PanelBody
										title={__("Settings", "essential-blocks")}
										initialOpen={false}
									>
										{(layout === "line" || layout === "line_rainbow") && (
											<>
												<ResponsiveRangeController
													baseLabel={__("Width", "essential-blocks")}
													controlName={PROGRESSBAR_WIDTH}
													resRequiredProps={resRequiredProps}
													units={PX_PERCENTAGE}
													min={100}
													max={1000}
													step={1}
												/>
												<ResponsiveRangeController
													baseLabel={__("Height", "essential-blocks")}
													controlName={PROGRESSBAR_HEIGHT}
													resRequiredProps={resRequiredProps}
													min={0}
													max={100}
													step={1}
													noUnits
												/>
											</>
										)}
										{(layout === "circle" ||
											layout === "circle_fill" ||
											layout === "half_circle" ||
											layout === "half_circle_fill") && (
											<>
												<ResponsiveRangeController
													baseLabel={__("Size", "essential-blocks")}
													controlName={PROGRESSBAR_SIZE}
													resRequiredProps={resRequiredProps}
													min={50}
													max={500}
													step={1}
													noUnits
												/>
												<ResponsiveRangeController
													baseLabel={__("Stroke Width", "essential-blocks")}
													controlName={STROKE_WIDTH}
													resRequiredProps={resRequiredProps}
													min={0}
													max={100}
													step={1}
													noUnits
												/>
											</>
										)}
										{layout === "box" && (
											<>
												<ResponsiveRangeController
													baseLabel={__("Width", "essential-blocks")}
													controlName={BOX_WIDTH}
													resRequiredProps={resRequiredProps}
													min={100}
													max={500}
													step={1}
													noUnits
												/>
												<ResponsiveRangeController
													baseLabel={__("Height", "essential-blocks")}
													controlName={BOX_HEIGHT}
													resRequiredProps={resRequiredProps}
													min={100}
													max={500}
													step={1}
													noUnits
												/>

												<ResponsiveRangeController
													baseLabel={__("Stroke Width", "essential-blocks")}
													controlName={STROKE_WIDTH}
													resRequiredProps={resRequiredProps}
													min={0}
													max={100}
													step={1}
													noUnits
												/>
											</>
										)}
										<RangeControl
											label={__("Animation Duration", "essential-blocks")}
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
									<PanelBody title={__("General", "essential-blocks")}>
										{(layout === "line" || layout === "line_rainbow") && (
											<>
												<ColorControl
													label={__("Background Color", "essential-blocks")}
													color={strokeColor}
													onChange={(strokeColor) =>
														setAttributes({ strokeColor })
													}
												/>
												{layout !== "line_rainbow" && (
													<>
														<BaseControl>
															<h3 className="eb-control-title">
																{__("Fill Color", "essential-blocks")}
															</h3>
														</BaseControl>
														<ToggleControl
															label={__(
																"Show Fill Gradient",
																"essential-blocks"
															)}
															checked={isProgressGradient}
															onChange={() => {
																setAttributes({
																	isProgressGradient: !isProgressGradient,
																});
															}}
														/>
														{isProgressGradient || (
															<ColorControl
																label={__("Color", "essential-blocks")}
																color={progressColor}
																onChange={(progressColor) =>
																	setAttributes({ progressColor })
																}
															/>
														)}
														{isProgressGradient && (
															<GradientColorControl
																label={__("Gradient Color", "essential-blocks")}
																gradientColor={progressGradient}
																onChange={(progressGradient) =>
																	setAttributes({ progressGradient })
																}
															/>
														)}
													</>
												)}
											</>
										)}
										{(layout === "circle" ||
											layout === "circle_fill" ||
											layout === "half_circle" ||
											layout === "half_circle_fill") && (
											<>
												<ColorControl
													label={__("Background Color", "essential-blocks")}
													color={backgroundColor}
													onChange={(backgroundColor) =>
														setAttributes({ backgroundColor })
													}
												/>
												<ColorControl
													label={__("Fill Color", "essential-blocks")}
													color={progressColor}
													onChange={(progressColor) =>
														setAttributes({ progressColor })
													}
												/>

												<ColorControl
													label={__("Stroke Color", "essential-blocks")}
													color={strokeColor}
													onChange={(strokeColor) =>
														setAttributes({ strokeColor })
													}
												/>
											</>
										)}
										{layout === "box" && (
											<>
												<ColorControl
													label={__("Background Color", "essential-blocks")}
													color={backgroundColor}
													onChange={(backgroundColor) =>
														setAttributes({ backgroundColor })
													}
												/>
												<BaseControl>
													<h3 className="eb-control-title">
														{__("Fill Color", "essential-blocks")}
													</h3>
												</BaseControl>
												<ToggleControl
													label={__("Show Fill Gradient", "essential-blocks")}
													checked={isProgressGradient}
													onChange={() => {
														setAttributes({
															isProgressGradient: !isProgressGradient,
														});
													}}
												/>
												{isProgressGradient || (
													<ColorControl
														label={__("Color", "essential-blocks")}
														color={progressColor}
														onChange={(progressColor) =>
															setAttributes({ progressColor })
														}
													/>
												)}
												{isProgressGradient && (
													<GradientColorControl
														label={__("Gradient Color", "essential-blocks")}
														gradientColor={progressGradient}
														onChange={(progressGradient) =>
															setAttributes({ progressGradient })
														}
													/>
												)}
												<ColorControl
													label={__("Stroke Color", "essential-blocks")}
													color={strokeColor}
													onChange={(strokeColor) =>
														setAttributes({ strokeColor })
													}
												/>
											</>
										)}
									</PanelBody>

									<PanelBody
										title={__("Title", "essential-blocks")}
										initialOpen={false}
									>
										<TypographyDropdown
											baseLabel={__("Typography", "essential-blocks")}
											typographyPrefixConstant={typoPrefix_title}
											resRequiredProps={resRequiredProps}
										/>
										<ColorControl
											label={__("Color", "essential-blocks")}
											color={titleColor}
											onChange={(titleColor) => setAttributes({ titleColor })}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={TITLE_SPACE}
											baseLabel={__("Space", "essential-blocks")}
										/>
									</PanelBody>
									<PanelBody
										title={__("Counter", "essential-blocks")}
										initialOpen={false}
									>
										<TypographyDropdown
											baseLabel={__("Typography", "essential-blocks")}
											typographyPrefixConstant={typoPrefix_counter}
											resRequiredProps={resRequiredProps}
										/>
										<ColorControl
											label={__("Color", "essential-blocks")}
											color={counterColor}
											onChange={(counterColor) =>
												setAttributes({ counterColor })
											}
										/>
									</PanelBody>
									{(layout === "half_circle" ||
										layout === "half_circle_fill") && (
										<>
											<PanelBody
												title={__("Prefix & Suffix", "progress-bar")}
												initialOpen={false}
											>
												<TypographyDropdown
													baseLabel={__("Typography", "essential-blocks")}
													typographyPrefixConstant={typoPrefix_prefix}
													resRequiredProps={resRequiredProps}
												/>
												<ColorControl
													label={__("Color", "essential-blocks")}
													color={prefixColor}
													onChange={(prefixColor) =>
														setAttributes({ prefixColor })
													}
												/>
											</PanelBody>
										</>
									)}
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody
										title={__("Margin", "essential-blocks")}
										initialOpen={true}
									>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_MARGIN}
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
