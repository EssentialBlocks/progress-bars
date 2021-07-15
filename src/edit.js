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
	DEFAULT_HEIGHT,
	DEFAULT_BACKGROUND,
	CONTAINER_CLASS,
	WRAPPER_CLASS,
	PROGRESSBAR_HEIGHT,
	PROGRESSBAR_WIDTH,
	STRIPE_CLASS,
} from "./constants";

import {
	typoPrefix_title,
	typoPrefix_counter,
} from "./constants/typographyConstants";

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
		titleTag,
		progress,
		displayProgress,
		height,
		animationDuration,
		backgroundColor,
		displayTitle,
		title,
		displayPercentage,
		colorType,
		progressBackground,
		progressColor,
		isProgressGradient,
		progressGradient,
		showStripe,
		stripeAnimation,
		titleColor,
		counterColor,
		showInline,
		percentageType,
		percentageColor,
		tooltipBackground,
		heightUnit,
	} = attributes;

	// progress bar width
	const {
		rangeStylesDesktop: progressBarWidthDesktop,
		rangeStylesTab: progressBarWidthTab,
		rangeStylesMobile: progressBarWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: PROGRESSBAR_WIDTH,
		property: "width",
		attributes,
	});

	// progress bar height
	const {
		rangeStylesDesktop: progressBarHeightDesktop,
		rangeStylesTab: progressBarHeightTab,
		rangeStylesMobile: progressBarHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: PROGRESSBAR_HEIGHT,
		property: "height",
		attributes,
		customUnit: "px",
	});

	// title typography
	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_title,
	});

	// counter typography
	const {
		typoStylesDesktop: counterTypoStylesDesktop,
		typoStylesTab: counterTypoStylesTab,
		typoStylesMobile: counterTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_counter,
	});

	const desktopStyles = `
		.${blockId} .eb-progressbar-line {
			${progressBarHeightDesktop}
			background-color: ${backgroundColor || "transparent"};
		}

		.${blockId} .eb-progressbar-circle-half {
			border-color: ${backgroundColor || "transparent"};
		}

		.${blockId} .eb-progressbar-line-fill {
			${progressBarHeightDesktop}
			${
				isProgressGradient
					? "background: " + progressGradient
					: "background-color: " + progressColor
			};
			transition-duration: ${animationDuration}ms;
			width: ${progress}%;
		}

		.${blockId} .eb-progressbar-line-container {
			${progressBarWidthDesktop}
		}

		.${blockId} .eb-progressbar-title {
			${titleTypoStylesDesktop}
			color: ${titleColor};
		}

		.${blockId} .eb-progressbar-count-wrap {
			${counterTypoStylesDesktop}
			color: ${counterColor};
		}
	`;

	const tabStyles = `
		.${blockId} .eb-progressbar-line, .${blockId} .eb-progressbar-line-fill {
			${progressBarHeightTab}
		}

		.${blockId} .eb-progressbar-line-container {
			${progressBarWidthTab}
		}

		.${blockId} .eb-progressbar-title {
			${titleTypoStylesTab}
		}

		.${blockId} .eb-progressbar-title {
			${titleTypoStylesTab}
		}

		.${blockId} .eb-progressbar-count-wrap {
			${counterTypoStylesTab}
		}
	`;

	const mobileStyles = `
		.${blockId} .eb-progressbar-line, .${blockId} .eb-progressbar-line-fill {
			${progressBarHeightMobile}
		}

		.${blockId} .eb-progressbar-line-container {
			${progressBarWidthMobile}
		}

		.${blockId} .eb-progressbar-title {
			${titleTypoStylesMobile}
		}

		.${blockId} .eb-progressbar-title {
			${titleTypoStylesMobile}
		}

		.${blockId} .eb-progressbar-count-wrap {
			${counterTypoStylesMobile}
		}
	`;

	var inlineStyle = "";
	if (showInline) {
		inlineStyle = `
			.${blockId} .eb-progressbar-line-container {
				position: relative;
			}

			.${blockId} .eb-progressbar-line-container .eb-progressbar-title {
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				z-index: 9;
			}

			.${blockId} .eb-progressbar-line-container .eb-progressbar-line .eb-progressbar-count-wrap {
				bottom: 50% !important;
				transform: translateY(50%) !important;
			}
		`;
	}

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${isCssExists(desktopStyles) ? desktopStyles : " "}
		${isCssExists(inlineStyle) ? inlineStyle : " "}
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(tabStyles) ? tabStyles : " "}
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(mobileStyles) ? mobileStyles : " "}
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
		const BLOCK_PREFIX = "eb-price-table";
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

	const stripeClass = showStripe ? " " + STRIPE_CLASS[stripeAnimation] : "";

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
						<attributes.titleTag class="eb-progressbar-title">
							{title}
						</attributes.titleTag>
					)}

					<div
						className={`eb-progressbar ${WRAPPER_CLASS[layout]}${stripeClass}`}
						data-layout={layout}
						data-count={progress}
						data-duration={animationDuration}
					>
						{(layout === "circle" || layout === "circle_fill") && (
							<>
								<div class="eb-progressbar-circle-pie">
									<div class="eb-progressbar-circle-half-left eb-progressbar-circle-half"></div>
									<div class="eb-progressbar-circle-half-right eb-progressbar-circle-half"></div>
								</div>
								<div class="eb-progressbar-circle-inner"></div>
								<div class="eb-progressbar-circle-inner-content">
									{title && (
										<attributes.titleTag class="eb-progressbar-title">
											{title}
										</attributes.titleTag>
									)}
									{displayProgress && (
										<span class="eb-progressbar-count-wrap">
											<span class="eb-progressbar-count">{progress}</span>
											<span class="postfix">%</span>
										</span>
									)}
								</div>
							</>
						)}

						{(layout === "half_circle" || layout === "half_circle_fill") && (
							<>
								<div class="eb-progressbar-circle">
									<div class="eb-progressbar-circle-pie">
										<div class="eb-progressbar-circle-half"></div>
									</div>
									<div class="eb-progressbar-circle-inner"></div>
								</div>
								<div class="eb-progressbar-circle-inner-content">
									<attributes.titleTag class="eb-progressbar-title">
										{title}
									</attributes.titleTag>
									{displayProgress && (
										<span class="eb-progressbar-count-wrap">
											<span class="eb-progressbar-count">{progress}</span>
											<span class="postfix">%</span>
										</span>
									)}
								</div>
							</>
						)}

						{(layout === "line" || layout === "line_rainbow") && (
							<>
								{displayProgress && (
									<span class="eb-progressbar-count-wrap">
										<span class="eb-progressbar-count">{progress}</span>
										<span class="postfix">%</span>
									</span>
								)}
								<span class="eb-progressbar-line-fill"></span>
							</>
						)}

						{layout === "box" && (
							<>
								<div class="eb-progressbar-box-inner-content">
									<attributes.titleTag class="eb-progressbar-title">
										{title}
									</attributes.titleTag>
									{displayProgress && (
										<span class="eb-progressbar-count-wrap">
											<span class="eb-progressbar-count">{progress}</span>
											<span class="postfix">%</span>
										</span>
									)}
								</div>
								<div class="eb-progressbar-box-fill"></div>
							</>
						)}
					</div>
					{(layout === "half_circle" || layout === "half_circle_fill") && (
						<>
							<div class="eb-progressbar-half-circle-after">
								<span class="eb-progressbar-prefix-label">Prefix</span>
								<span class="eb-progressbar-postfix-label">Postfix</span>
							</div>
						</>
					)}
				</div>
			</div>
		</div>,
	];
}
