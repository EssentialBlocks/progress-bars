/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

import {
	DEFAULT_HEIGHT,
	DEFAULT_BACKGROUND,
	CONTAINER_CLASS,
	WRAPPER_CLASS,
	PROGRESSBAR_HEIGHT,
	PROGRESSBAR_WIDTH,
	STRIPE_CLASS,
} from "./constants";

const save = ({ attributes }) => {
	const {
		blockId,
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

	const stripeClass = showStripe ? " " + STRIPE_CLASS[stripeAnimation] : "";

	return (
		<div {...useBlockProps.save()}>
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
		</div>
	);
};

export default save;
