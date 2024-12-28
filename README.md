# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug stemming from the use of loose equality (`==`) instead of strict equality (`===`). Loose equality can lead to unexpected type coercion, resulting in incorrect behavior.

## Bug Description
The `bug.js` file contains a function that unintentionally uses loose equality, leading to a bug in specific scenarios. The `bugSolution.js` provides a corrected version using strict equality.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run the test cases provided.

## Solution
The bug is fixed in `bugSolution.js` by replacing loose equality (`==`) with strict equality (`===`). This prevents unexpected type coercion and ensures correct function behavior.

## Lessons Learned
Always use strict equality (`===`) in JavaScript to avoid type coercion issues and make your code more robust and predictable.