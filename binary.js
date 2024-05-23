

function solution(N) {
    let binStr = N.toString(2)

    let maxGap = 0
    
    let curMaxGap = 0

    for (let i = 0; i < binStr.length; i++) {

        // at This sector If the current bit is a 1, reset the current max gap to 0.
        if (binStr[i] === '0') {
            curMaxGap++
            
            
                    } else {
            if (curMaxGap > maxGap) {

                // Update the max gap if the current max gap is greater than the previous max gap.
                maxGap = curMaxGap

            }
            curMaxGap = 0
        }
    }
    return maxGap
}

// Example usage
let example = 1345
console.log(solution(example));
