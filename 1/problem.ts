import { isMultipleOf } from "../common/common";

let accumulate = 0;
for (let j = 1; j < 1000; j++) {
    if (isMultipleOf(j, 3) || isMultipleOf(j, 5)) {
        accumulate += j;
    }
}

console.log("The sum of the first 1000 multiples of 5 or 3 is:", accumulate);