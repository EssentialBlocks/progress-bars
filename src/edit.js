/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { useEffect, useRef } = wp.element;
const { BlockControls, AlignmentToolbar, useBlockProps } = wp.blockEditor;
const { select } = wp.data;

/**
 * Internal depenencies
 */
import "./editor.scss";
import Inspector from "./inspector";
import {
	CONTAINER_CLASS,
	WRAPPER_CLASS,
	PROGRESSBAR_HEIGHT,
	PROGRESSBAR_WIDTH,
	STRIPE_CLASS,
	STROKE_WIDTH,
	PROGRESSBAR_SIZE,
	BOX_HEIGHT,
	BOX_WIDTH,
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
	const circle_half_left = useRef(null);
	const circle_half_right = useRef(null);
	const circle_pie = useRef(null);
	const line = useRef(null);
	const circle_half = useRef(null);
	const box = useRef(null);

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
		animationDuration,
		backgroundColor,
		title,
		progressColor,
		isProgressGradient,
		progressGradient,
		showStripe,
		stripeAnimation,
		titleColor,
		counterColor,
		showInline,
		strokeColor,
		prefix,
		suffix,
	} = attributes;

	useEffect(() => {
		if (layout == "line" || layout === "line_rainbow") {
			line.current.style.width = "unset";
		} else if (layout === "box") {
			box.current.style.height = "unset";
		} else if (layout === "circle" || layout === "circle_fill") {
			circle_half_left.current.style.transform = "rotate(0deg)";
			circle_pie.current.style.clipPath = "";
			circle_half_right.current.style.visibility = "";
		} else if (layout === "half_circle" || layout === "half_circle_fill") {
			circle_half.current.style.transform = "rotate(0deg)";
			circle_half.current.style.transition = "none";
		}
		let id = "";
		const changeWidthEffect = () => {
			var i = 0;
			if (i == 0) {
				i = 1;
				var width = 0;
				var value = progress;
				if (layout === "circle" || layout === "circle_fill") {
					value = progress * 3.6;
				} else if (layout === "half_circle" || layout === "half_circle_fill") {
					value = progress * 1.8;
				}

				id = setInterval(ebChangeframe, 10);
				function ebChangeframe() {
					if (layout === "circle" || layout === "circle_fill") {
						if (width > 180) {
							circle_pie.current.style.clipPath = "inset(0)";
							circle_half_right.current.style.visibility = "visible";
						} else {
							circle_pie.current.style.clipPath = "";
							circle_half_right.current.style.visibility = "";
						}
					}
					if (width >= value) {
						clearInterval(id);
						i = 0;
					} else {
						width++;
						if (layout == "line" || layout === "line_rainbow") {
							line.current.style.width = width + "%";
						} else if (layout === "box") {
							box.current.style.height = width + "%";
						}
						if (layout === "circle" || layout === "circle_fill") {
							circle_half_left.current.style.transform =
								"rotate(" + width + "deg)";
						} else if (
							layout === "half_circle" ||
							layout === "half_circle_fill"
						) {
							circle_half.current.style.transform = "rotate(" + width + "deg)";
						}
					}
				}
			}
		};
		const progressSetTimeout = setTimeout(changeWidthEffect, 500);

		return () => {
			clearInterval(id);
			clearTimeout(progressSetTimeout);
		};
	}, [layout, progress]);

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

	// stroke width
	const {
		rangeStylesDesktop: strokeWidthDesktop,
		rangeStylesTab: strokeWidthTab,
		rangeStylesMobile: strokeWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: STROKE_WIDTH,
		property: "border-width",
		attributes,
		customUnit: "px",
	});

	// circle progressbar width
	const {
		rangeStylesDesktop: circleWidthDesktop,
		rangeStylesTab: circleWidthTab,
		rangeStylesMobile: circleWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: PROGRESSBAR_SIZE,
		property: "width",
		attributes,
		customUnit: "px",
	});

	// circle progressbar height
	const {
		rangeStylesDesktop: circleHeightDesktop,
		rangeStylesTab: circleHeightTab,
		rangeStylesMobile: circleHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: PROGRESSBAR_SIZE,
		property: "height",
		attributes,
		customUnit: "px",
	});

	// box progressbar height
	const {
		rangeStylesDesktop: boxHeightDesktop,
		rangeStylesTab: boxHeightTab,
		rangeStylesMobile: boxHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: BOX_HEIGHT,
		property: "height",
		attributes,
		customUnit: "px",
	});

	// box progressbar width
	const {
		rangeStylesDesktop: boxWidthDesktop,
		rangeStylesTab: boxWidthTab,
		rangeStylesMobile: boxWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: BOX_WIDTH,
		property: "width",
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
			background-color: ${strokeColor || "transparent"};
		}

		.${blockId} .eb-progressbar-circle {
			${circleWidthDesktop}
			${circleHeightDesktop}
		}

		.${blockId} .eb-progressbar-circle-half {
			${strokeWidthDesktop}
			border-color: ${progressColor};
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

		.${blockId} .eb-progressbar-circle-inner {
			background-color: ${backgroundColor};
			border-color: ${strokeColor || "transparent"};
			${strokeWidthDesktop}
		}

		.${blockId} .eb-progressbar-half-circle-after {
			${circleWidthDesktop}
		}

		.${blockId} .eb-progressbar-half-circle {
			${circleWidthDesktop}
			height: calc(${circleWidthDesktop.replace(/\D/g, "") / 2} * 1px);
		}

		.${blockId} .eb-progressbar-box {
			${boxHeightDesktop}
			${boxWidthDesktop}
			${strokeWidthDesktop}
			background-color: ${backgroundColor || "transparent"};
			border-color: ${strokeColor || "transparent"};
		}

		.${blockId} .eb-progressbar-box-fill {
			${
				isProgressGradient
					? "background: " + progressGradient
					: "background-color: " + progressColor
			};
		}
 	`;

	const tabStyles = `
		.${blockId} .eb-progressbar-line, .${blockId} .eb-progressbar-line-fill {
			${progressBarHeightTab}
		}

		.${blockId} .eb-progressbar-circle {
			${circleWidthTab}
			${circleHeightTab}
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

		.${blockId} .eb-progressbar-circle-inner {
			${strokeWidthTab}
		}

		.${blockId} .eb-progressbar-half-circle-after {
			${circleWidthTab}
		}

		.${blockId} .eb-progressbar-box {
			${boxHeightTab}
			${boxWidthTab}
			${strokeWidthTab}
		}
	`;

	const mobileStyles = `
		.${blockId} .eb-progressbar-line, .${blockId} .eb-progressbar-line-fill {
			${progressBarHeightMobile}
		}

		.${blockId} .eb-progressbar-circle {
			${circleWidthMobile}
			${circleHeightMobile}
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

		.${blockId} .eb-progressbar-circle-inner {
			${strokeWidthMobile}
		}

		.${blockId} .eb-progressbar-half-circle-after {
			${circleWidthMobile}
		}

		.${blockId} .eb-progressbar-box {
			${boxHeightMobile}
			${boxWidthMobile}
			${strokeWidthMobile}
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
						// data-layout={layout}
						// data-count={progress}
						// data-duration={animationDuration}
					>
						{(layout === "circle" || layout === "circle_fill") && (
							<>
								<div class="eb-progressbar-circle-pie" ref={circle_pie}>
									<div
										className="eb-progressbar-circle-half-left eb-progressbar-circle-half"
										ref={circle_half_left}
									></div>
									<div
										className="eb-progressbar-circle-half-right eb-progressbar-circle-half"
										ref={circle_half_right}
									></div>
								</div>
								<div className="eb-progressbar-circle-inner"></div>
								<div className="eb-progressbar-circle-inner-content">
									{title && (
										<attributes.titleTag className="eb-progressbar-title">
											{title}
										</attributes.titleTag>
									)}
									{displayProgress && (
										<span className="eb-progressbar-count-wrap">
											<span className="eb-progressbar-count">{progress}</span>
											<span className="postfix">%</span>
										</span>
									)}
								</div>
							</>
						)}

						{(layout === "half_circle" || layout === "half_circle_fill") && (
							<>
								<div className="eb-progressbar-circle">
									<div className="eb-progressbar-circle-pie">
										<div
											className="eb-progressbar-circle-half"
											ref={circle_half}
										></div>
									</div>
									<div className="eb-progressbar-circle-inner"></div>
								</div>
								<div className="eb-progressbar-circle-inner-content">
									<attributes.titleTag className="eb-progressbar-title">
										{title}
									</attributes.titleTag>
									{displayProgress && (
										<span className="eb-progressbar-count-wrap">
											<span className="eb-progressbar-count">{progress}</span>
											<span className="postfix">%</span>
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
								<span class="eb-progressbar-line-fill" ref={line}></span>
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
								<div class="eb-progressbar-box-fill" ref={box}></div>
							</>
						)}
					</div>
					{(layout === "half_circle" || layout === "half_circle_fill") && (
						<>
							<div class="eb-progressbar-half-circle-after">
								<span class="eb-progressbar-prefix-label">{prefix}</span>
								<span class="eb-progressbar-postfix-label">{suffix}</span>
							</div>
						</>
					)}
				</div>
			</div>
		</div>,
	];
}
