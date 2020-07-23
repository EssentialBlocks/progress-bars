/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/editor";
import { Component } from "@wordpress/element";

/**
 * Internal depenencies
 */
import Inspector from "./inspector";
import {
	DEFAULT_PROGRESS,
	DEFAULT_HEIGHT,
	DEFAULT_BACKGROUND,
	DEFAULT_PROGRESS_COLOR,
	DEFAULT_TOOLTIP_COLOR,
	DEFAULT_TOOLTIP_TEXT_COLOR,
} from "./constants";

export default class Edit extends Component {
	render() {
		const { attributes, setAttributes, isSelected } = this.props;
		const {
			progress,
			height,
			displayTitle,
			title,
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

		const wrapperStyles = {
			paddingTop:
				displayPercentage && percentageType === "tooltip" ? DEFAULT_HEIGHT : 0,
		};

		const containerStyle = {
			backgroundColor: progressBackground || DEFAULT_BACKGROUND,
			height: `${height || DEFAULT_HEIGHT}${heightUnit}`,
		};

		const titleStyles = {
			visibility: displayTitle ? "visible" : "hidden",
			fontSize: `${titleFontSize}${titleFontSizeUnit}`,
			fontFamily: titleFontFamily,
			fontWeight: titleFontWeight,
			textDecoration: titleTextDecoration,
			textTransform: titleTextTransform,
			letterSpacing: titleLetterSpacing
				? `${titleLetterSpacing}${titleLetterSpacingUnit}`
				: undefined,
			lineHeight: titleLineHeight
				? `${titleLineHeight}${titleLineHeightUnit}`
				: undefined,
			color: titleColor,
		};

		const progressStyle = {
			backgroundColor:
				colorType === "fill" ? progressColor : DEFAULT_PROGRESS_COLOR,
			width: `${progress || DEFAULT_PROGRESS}%`,
			backgroundImage: colorType === "gradient" ? progressGradient : "none",
		};

		const tooltipStyles = {
			display:
				displayPercentage && percentageType == "tooltip" ? "block" : "none",
			backgroundColor: tooltipBackground || DEFAULT_TOOLTIP_COLOR,
			color: percentageColor || DEFAULT_TOOLTIP_TEXT_COLOR,
		};

		const tooltipArrowStyles = {
			borderTop: `5px solid ${tooltipBackground || DEFAULT_TOOLTIP_COLOR}`,
		};

		const innerProgressStyle = {
			display:
				displayPercentage && percentageType === "inline" ? "block" : "none",
			paddingRight: 8,
			fontSize: `${titleFontSize}px`,
			color: titleColor,
		};

		return [
			isSelected && <Inspector {...this.props} />,
			<div className="eb-progressbar-wrapper" style={wrapperStyles}>
				<div className="eb-progressbar-container" style={containerStyle}>
					<div className="eb-progressbar-progress" style={progressStyle}>
						<div className="eb-progressbar-tooltip" style={tooltipStyles}>
							{`${progress || DEFAULT_PROGRESS}%`}
							<span
								className="eb-progressbar-tooltip-arrow"
								style={tooltipArrowStyles}
							/>
						</div>
						<RichText
							className="eb-progressbar-title"
							style={titleStyles}
							value={title}
							placeholder={__("Enter text")}
							keepPlaceholderOnFocus
							onChange={(title) => setAttributes({ title })}
						/>
						<div style={innerProgressStyle}>{`${
							progress || DEFAULT_PROGRESS
						}%`}</div>
					</div>
				</div>
			</div>,
		];
	}
}
