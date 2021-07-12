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
	CONTAINER_CLASS,
	WRAPPER_CLASS,
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

	const containerStyle = {
		backgroundColor: progressBackground || DEFAULT_BACKGROUND,
		height: `${height || DEFAULT_HEIGHT}${heightUnit}`,
	};

	const lineFill = {
		transitionDuration: "1500ms",
		width: "75%",
	};

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
					className={`eb-progressbar-${CONTAINER_CLASS[layout]}-container ${wrapperAlign}`}
				>
					{(layout === "line" || layout === "line_rainbow") && title && (
						<div class="eb-progressbar-title">{title}</div>
					)}

					<div className={`eb-progressbar ${WRAPPER_CLASS[layout]}`}>
						{(layout === "circle" || layout === "circle_fill") && (
							<>
								<div class="eb-progressbar-circle-pie">
									<div class="eb-progressbar-circle-half-left eb-progressbar-circle-half"></div>
									<div class="eb-progressbar-circle-half-right eb-progressbar-circle-half"></div>
								</div>
								<div class="eb-progressbar-circle-inner"></div>
								<div class="eb-progressbar-circle-inner-content"></div>
								<div class="eb-progressbar-circle-inner-content">
									{title && <div class="eb-progressbar-title">{title}</div>}
									<span class="eb-progressbar-count-wrap">
										<span class="eb-progressbar-count">50</span>
										<span class="postfix">%</span>
									</span>
								</div>
							</>
						)}

						{(layout === "line" || layout === "line_rainbow") && (
							<>
								<span class="eb-progressbar-count-wrap">
									<span class="eb-progressbar-count">50</span>
									<span class="postfix">%</span>
								</span>
								<span class="eb-progressbar-line-fill" style={lineFill}></span>
							</>
						)}
					</div>
				</div>
			</div>
		</div>,
	];
}
