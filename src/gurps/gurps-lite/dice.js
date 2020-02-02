
export const successRollResults = {
    success: "success",
    criticalSuccess: "critical success",
    failure: "failure",
    criticalFailure: "critical failure",
};

export function roll(n = 1, adds = 0) {
    let a = n;
    let b = 6 * n;
    return Math.floor(a + Math.random() * (b - a + 1)) + adds;
}

/**
 * @param {number} effectiveSkill 
 */
export function successRoll(effectiveSkill) {
    const d3 = roll(3);
    if (d3 == 3 || d3 == 4) {
        return successRollResults.criticalSuccess;
    } else if (d3 == 5 && effectiveSkill >= 15) {
        return successRollResults.criticalSuccess;
    } else if (d3 == 6 && effectiveSkill >= 16) {
        return successRollResults.criticalSuccess;
    } else if (d3 == 18) {
        return successRollResults.criticalFailure;
    } else if (d3 == 17 && effectiveSkill <= 15) {
        return successRollResults.criticalFailure;
    } else if (d3 >= effectiveSkill + 10) {
        return successRollResults.criticalFailure;
    } else if (d3 <= effectiveSkill) {
        return successRollResults.success;
    } else {
        return successRollResults.failure;
    }
}
