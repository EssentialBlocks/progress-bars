/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
	BaseControl,
	Dropdown,
	Button,
} from "@wordpress/components";

/**
 *
 * Internal dependencies
 */
import {
	DEFAULT_PROGRESS,
	DEFAULT_HEIGHT,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "./constants";
import GradientColorController from "../util/gradient-color-controller";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		progress,
		height,
		displayTitle,
		displayPercentage,
		colorType,
		progressBackground,
		progressColor,
		progressGradient,
		titleFontSize,
		titleColor,
		percentageType,
		percentageColor,
		tooltipBackground,
		heightUnit,
		titleFontFamily,
		titleFontSizeUnit,
		titleFontWeight,
		titleTextTransform,
		titleTextDecoration,
		titleLineHeight,
		titleLineHeightUnit,
		titleLetterSpacing,
		titleLetterSpacingUnit,
	} = attributes;

	const TITLE_SIZE_MAX = titleFontSizeUnit === "em" ? 10 : 100;
	const TITLE_SIZE_STEP = titleFontSizeUnit === "em" ? 0.1 : 1;

	const TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;
	const TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;

	const TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;
	const TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;

	return (
		<InspectorControls key="controls">
			<PanelBody>
				<RangeControl
					label={__("Progress")}
					value={progress || DEFAULT_PROGRESS}
					allowReset
					onChange={(newValue) => setAttributes({ progress: newValue })}
					min={0}
					max={100}
				/>

				<UnitControl
					selectedUnit={heightUnit}
					unitTypes={[
						{ label: "px", value: "px" },
						{ label: "em", value: "em" },
					]}
					onClick={(heightUnit) => setAttributes({ heightUnit })}
				/>

				<RangeControl
					label={__("Height")}
					value={height || DEFAULT_HEIGHT}
					allowReset
					onChange={(newValue) => setAttributes({ height: newValue })}
					min={0}
					max={100}
				/>

				<ToggleControl
					label={__("Display Title")}
					checked={displayTitle}
					onChange={() => setAttributes({ displayTitle: !displayTitle })}
				/>

				<ToggleControl
					label={__("Display Percentage")}
					checked={displayPercentage}
					onChange={() =>
						setAttributes({ displayPercentage: !displayPercentage })
					}
				/>

				{displayPercentage && (
					<ToggleControl
						label={__("Inline percentage")}
						checked={percentageType === "inline"}
						onChange={() =>
							percentageType === "inline"
								? setAttributes({ percentageType: "tooltip" })
								: setAttributes({ percentageType: "inline" })
						}
					/>
				)}

				<ToggleControl
					label={__("Gradient Color")}
					checked={colorType === "gradient"}
					onChange={() =>
						colorType === "fill"
							? setAttributes({ colorType: "gradient" })
							: setAttributes({ colorType: "fill" })
					}
				/>

				{displayTitle && (
					<BaseControl
						label={__("Title Typography")}
						className="eb-typography-base"
					>
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={titleFontFamily}
										onChange={(titleFontFamily) =>
											setAttributes({ titleFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={titleFontSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(titleFontSizeUnit) =>
											setAttributes({ titleFontSizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={titleFontSize}
										onChange={(titleFontSize) =>
											setAttributes({ titleFontSize })
										}
										step={TITLE_SIZE_STEP}
										min={0}
										max={TITLE_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={titleFontWeight}
										options={FONT_WEIGHTS}
										onChange={(titleFontWeight) =>
											setAttributes({ titleFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={titleTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(titleTextTransform) =>
											setAttributes({ titleTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={titleTextDecoration}
										options={TEXT_DECORATION}
										onChange={(titleTextDecoration) =>
											setAttributes({ titleTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={titleLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(titleLetterSpacingUnit) =>
											setAttributes({ titleLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={titleLetterSpacing}
										onChange={(titleLetterSpacing) =>
											setAttributes({ titleLetterSpacing })
										}
										min={0}
										max={TITLE_SPACING_MAX}
										step={TITLE_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={titleLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(titleLineHeightUnit) =>
											setAttributes({ titleLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={titleLineHeight}
										onChange={(titleLineHeight) =>
											setAttributes({ titleLineHeight })
										}
										min={0}
										max={TITLE_LINE_HEIGHT_MAX}
										step={TITLE_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>
				)}
			</PanelBody>

			<PanelBody title={__("Colors")} initialOpen={false}>
				{displayTitle && (
					<ColorControl
						label={__("Title Color")}
						color={titleColor}
						onChange={(titleColor) => setAttributes({ titleColor })}
					/>
				)}

				{displayPercentage && percentageType === "tooltip" && (
					<ColorControl
						label={__("Tooltip Background")}
						color={tooltipBackground}
						onChange={(tooltipBackground) =>
							setAttributes({ tooltipBackground })
						}
					/>
				)}

				{displayPercentage && percentageType === "tooltip" && (
					<ColorControl
						label={__("Percentage Color")}
						color={percentageColor}
						onChange={(percentageColor) => setAttributes({ percentageColor })}
					/>
				)}

				<ColorControl
					label={__("Background Color")}
					color={progressBackground}
					onChange={(progressBackground) =>
						setAttributes({ progressBackground })
					}
				/>

				{colorType == "fill" && (
					<ColorControl
						label={__("Progressbar Color")}
						color={progressColor}
						onChange={(progressColor) => setAttributes({ progressColor })}
					/>
				)}

				{colorType === "gradient" && (
					<PanelBody title={__("Gradient Color")} initialOpen={false}>
						<GradientColorController
							gradientColor={progressGradient}
							onChange={(progressGradient) =>
								setAttributes({ progressGradient })
							}
						/>
					</PanelBody>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
