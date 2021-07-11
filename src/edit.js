/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { useEffect } = wp.element;
const { BlockControls, AlignmentToolbar, useBlockProps } = wp.blockEditor;
const { select } = wp.data;

/**
 * Internal depenencies
 */
import "./editor.scss";
import Inspector from "./inspector";
import {
	DEFAULT_PROGRESS,
	DEFAULT_HEIGHT,
	DEFAULT_BACKGROUND,
	DEFAULT_PROGRESS_COLOR,
	DEFAULT_TOOLTIP_COLOR,
	DEFAULT_TOOLTIP_TEXT_COLOR,
} from "./constants";

import {
	getFlipTransform,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateResponsiveRangeStyles,
	generateBackgroundControlStyles,
	generateBorderShadowStyles,
} from "../util/helpers";

export default function Edit(props) {
	const { isSelected, attributes, setAttributes, clientId } = props;

	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
		resOption,
		layout,
		wrapperAlign,
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

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
	 `);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
	 `);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
	 `);
	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating an unique id for each block's unique className by a random unique number
	useEffect(() => {
		const BLOCK_PREFIX = "eb-flipbox";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	return [
		isSelected && <Inspector {...props} />,
		<BlockControls>
			<AlignmentToolbar
				value={wrapperAlign}
				onChange={(wrapperAlign) => setAttributes({ wrapperAlign })}
			/>
		</BlockControls>,
		<div {...blockProps}>
			<style>
				{`
				 ${desktopAllStyles}
 
				 /* mimmikcssStart */
 
				 ${resOption === "Tablet" ? tabAllStyles : " "}
				 ${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}
 
				 /* mimmikcssEnd */
 
				 @media all and (max-width: 1024px) {	
 
					 /* tabcssStart */			
					 ${softMinifyCssStrings(tabAllStyles)}
					 /* tabcssEnd */			
				 
				 }
				 
				 @media all and (max-width: 767px) {
					 
					 /* mobcssStart */			
					 ${softMinifyCssStrings(mobileAllStyles)}
					 /* mobcssEnd */			
				 
				 }
				 `}
			</style>
			<div className={`eb-progressbar-wrapper ${blockId}`}>
				<div
					className={`eb-progressbar-${layout}-container eb-progressbar-box ${wrapperAlign}`}
				>
					{layout === "line" && title && (
						<div class="eb-progressbar-title">{title}</div>
					)}

					<div className={`eb-progressbar eb-progressbar-${layout}`}>
						{layout === "circle" && (
							<>
								<div class="eb-progressbar-circle-pie">
									<div class="eb-progressbar-circle-half-left eb-progressbar-circle-half"></div>
									<div class="eb-progressbar-circle-half-right eb-progressbar-circle-half"></div>
								</div>
								<div class="eb-progressbar-circle-inner"></div>
							</>
						)}
						{layout === "circle" && (
							<div class="eb-progressbar-circle-inner-content"></div>
						)}

						{layout === "circle" && (
							<>
								<div class="eb-progressbar-circle-inner-content">
									{title && <div class="eb-progressbar-title">{title}</div>}
									<span class="eb-progressbar-count-wrap">
										<span class="eb-progressbar-count">50</span>
										<span class="postfix">%</span>
									</span>
								</div>
							</>
						)}

						{layout === "line" && (
							<span class="eb-progressbar-count-wrap">
								<span class="eb-progressbar-count">50</span>
								<span class="postfix">%</span>
							</span>
						)}

						{layout === "line" && (
							<span class="eb-progressbar-line-fill"></span>
						)}
					</div>
				</div>

				{/* <div class="eb-progressbar-circle-container center">
					<div
						class="eb-progressbar eb-progressbar-circle"
						data-layout="circle"
						data-count="50"
						data-duration="1500"
					>
						<div class="eb-progressbar-circle-pie">
							<div class="eb-progressbar-circle-half-left eb-progressbar-circle-half"></div>
							<div class="eb-progressbar-circle-half-right eb-progressbar-circle-half"></div>
						</div>
						<div class="eb-progressbar-circle-inner"></div>
						<div class="eb-progressbar-circle-inner-content">
							<div class="eb-progressbar-title">Progress Bar</div>
							<span class="eb-progressbar-count-wrap">
								<span class="eb-progressbar-count">50</span>
								<span class="postfix">%</span>
							</span>
						</div>
					</div>
				</div> */}

				{/* <div class="eb-progressbar-circle-container center">
					<div
						class="eb-progressbar eb-progressbar-half-circle"
						data-layout="half_circle"
						data-count="50"
						data-duration="1500"
					>
						<div class="eb-progressbar-circle">
							<div class="eb-progressbar-circle-pie">
								<div class="eb-progressbar-circle-half"></div>
							</div>
							<div class="eb-progressbar-circle-inner"></div>
						</div>
						<div class="eb-progressbar-circle-inner-content">
							<div class="eb-progressbar-title">Progress Bar</div>
							<span class="eb-progressbar-count-wrap">
								<span class="eb-progressbar-count">50</span>
								<span class="postfix">%</span>
							</span>
						</div>
					</div>
					<div class="eb-progressbar-half-circle-after">
						<span class="eb-progressbar-prefix-label">Prefix</span>
						<span class="eb-progressbar-postfix-label">Postfix</span>
					</div>
				</div> */}
			</div>
		</div>,
	];
}
