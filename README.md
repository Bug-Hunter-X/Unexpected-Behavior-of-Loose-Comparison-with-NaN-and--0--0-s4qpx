# JavaScript Loose Comparison Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to loose comparison (==) with NaN (Not a Number) and positive/negative zero (+0/-0).

## The Problem

JavaScript's loose comparison operator (==) does not work intuitively with NaN and +0/-0.  Specifically:

* `NaN !== NaN`  (NaN is not equal to itself)
* `0 == -0`       (Positive zero is equal to negative zero)

This can lead to unexpected behavior in your code, especially when dealing with numerical comparisons. 

The example script shows the function `foo` which uses `==` to check if 2 numbers are equal and the unexpected results when using NaN and +0/-0.

## Solution

To avoid this type of error:

1. **Use strict equality (===):** The strict equality operator (===) performs a stricter comparison, which avoids this problem.
2. **Handle NaN explicitly:** If you're expecting potential NaN values, you should add specific checks to handle them correctly.  You can use `isNaN()` to test for NaN.
3. **Be aware of +0 and -0:** If you require distinguishing between +0 and -0, you should implement specific checks.

The solution file shows how using strict equality resolves the unexpected behavior.