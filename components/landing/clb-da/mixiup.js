
function clbdasMixiup() {
    let mixerPortfolio = mixitup(".clbdas__container", {
        selectors: {
            target: ".clbdas__card",
        },
        animation: {
            duration: 300,
            nudge: true,
            reverseOut: true,
            effects: "fade scale(0.01)",
        },
    });
}

export default clbdasMixiup;