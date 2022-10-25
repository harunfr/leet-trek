const questionsData = [
  {
    urlSlug: "number-of-nodes-with-value-one",
    displayId: 2445,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-split-into-subarrays-with-gcd-greater-than-one",
    displayId: 2436,
    difficulty: 2,
  },
  {
    urlSlug: "maximize-total-tastiness-of-purchased-fruits",
    displayId: 2431,
    difficulty: 2,
  },
  {
    urlSlug: "merge-operations-to-turn-array-into-a-palindrome",
    displayId: 2422,
    difficulty: 2,
  },
  {
    urlSlug: "closest-fair-integer",
    displayId: 2417,
    difficulty: 2,
  },
  {
    urlSlug: "design-sql",
    displayId: 2408,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-subarrays-with-gcd-equal-to-k",
    displayId: 2447,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-number-and-its-reverse",
    displayId: 2443,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-operations-to-make-arrays-similar",
    displayId: 2449,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-cost-to-make-array-equal",
    displayId: 2448,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-time-to-kill-all-monsters",
    displayId: 2403,
    difficulty: 3,
  },
  {
    urlSlug: "determine-if-two-events-have-conflict",
    displayId: 2446,
    difficulty: 1,
  },
  {
    urlSlug: "count-strictly-increasing-subarrays",
    displayId: 2393,
    difficulty: 2,
  },
  {
    urlSlug: "bitwise-xor-of-all-pairings",
    displayId: 2425,
    difficulty: 2,
  },
  {
    urlSlug: "remove-letter-to-equalize-frequency",
    displayId: 2423,
    difficulty: 1,
  },
  {
    urlSlug: "create-components-with-same-value",
    displayId: 2440,
    difficulty: 3,
  },
  {
    urlSlug: "minimize-maximum-of-array",
    displayId: 2439,
    difficulty: 2,
  },
  {
    urlSlug: "range-product-queries-of-powers",
    displayId: 2438,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-valid-clock-times",
    displayId: 2437,
    difficulty: 1,
  },
  {
    urlSlug: "count-subarrays-with-fixed-bounds",
    displayId: 2444,
    difficulty: 3,
  },
  {
    urlSlug: "longest-increasing-subsequence-ii",
    displayId: 2407,
    difficulty: 3,
  },
  {
    urlSlug: "count-number-of-distinct-integers-after-reverse-operations",
    displayId: 2442,
    difficulty: 2,
  },
  {
    urlSlug: "largest-positive-integer-that-exists-with-its-negative",
    displayId: 2441,
    difficulty: 1,
  },
  {
    urlSlug: "median-of-a-row-wise-sorted-matrix",
    displayId: 2387,
    difficulty: 2,
  },
  {
    urlSlug: "paths-in-matrix-whose-sum-is-divisible-by-k",
    displayId: 2435,
    difficulty: 3,
  },
  {
    urlSlug: "using-a-robot-to-print-the-lexicographically-smallest-string",
    displayId: 2434,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-original-array-of-prefix-xor",
    displayId: 2433,
    difficulty: 2,
  },
  {
    urlSlug: "the-employee-that-worked-on-the-longest-task",
    displayId: 2432,
    difficulty: 1,
  },
  {
    urlSlug: "choose-edges-to-maximize-score-in-a-tree",
    displayId: 2378,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-pairs-satisfying-inequality",
    displayId: 2426,
    difficulty: 3,
  },
  {
    urlSlug: "longest-uploaded-prefix",
    displayId: 2424,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-deletions-on-a-string",
    displayId: 2430,
    difficulty: 3,
  },
  {
    urlSlug: "minimize-xor",
    displayId: 2429,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-sum-of-an-hourglass",
    displayId: 2428,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-common-factors",
    displayId: 2427,
    difficulty: 1,
  },
  {
    urlSlug: "minimize-maximum-value-in-a-grid",
    displayId: 2371,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-good-paths",
    displayId: 2421,
    difficulty: 3,
  },
  {
    urlSlug: "find-all-good-indices",
    displayId: 2420,
    difficulty: 2,
  },
  {
    urlSlug: "longest-subarray-with-maximum-bitwise-and",
    displayId: 2419,
    difficulty: 2,
  },
  {
    urlSlug: "sort-the-people",
    displayId: 2418,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-costs-using-the-train-line",
    displayId: 2361,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-money-required-before-transactions",
    displayId: 2412,
    difficulty: 3,
  },
  {
    urlSlug: "smallest-subarrays-with-maximum-bitwise-or",
    displayId: 2411,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-matching-of-players-with-trainers",
    displayId: 2410,
    difficulty: 2,
  },
  {
    urlSlug: "count-days-spent-together",
    displayId: 2409,
    difficulty: 1,
  },
  {
    urlSlug: "sum-of-prefix-scores-of-strings",
    displayId: 2416,
    difficulty: 3,
  },
  {
    urlSlug: "reverse-odd-levels-of-binary-tree",
    displayId: 2415,
    difficulty: 2,
  },
  {
    urlSlug: "length-of-the-longest-alphabetical-continuous-substring",
    displayId: 2414,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-even-multiple",
    displayId: 2413,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-number-of-books-you-can-take",
    displayId: 2355,
    difficulty: 3,
  },
  {
    urlSlug: "divide-intervals-into-minimum-number-of-groups",
    displayId: 2406,
    difficulty: 2,
  },
  {
    urlSlug: "optimal-partition-of-string",
    displayId: 2405,
    difficulty: 2,
  },
  {
    urlSlug: "most-frequent-even-element",
    displayId: 2404,
    difficulty: 1,
  },
  {
    urlSlug: "finding-the-number-of-visible-mountains",
    displayId: 2345,
    difficulty: 2,
  },
  {
    urlSlug: "task-scheduler-ii",
    displayId: 2365,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-rows-covered-by-columns",
    displayId: 2397,
    difficulty: 2,
  },
  {
    urlSlug: "strictly-palindromic-number",
    displayId: 2396,
    difficulty: 2,
  },
  {
    urlSlug: "find-subarrays-with-equal-sum",
    displayId: 2395,
    difficulty: 1,
  },
  {
    urlSlug: "meeting-rooms-iii",
    displayId: 2402,
    difficulty: 3,
  },
  {
    urlSlug: "longest-nice-subarray",
    displayId: 2401,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-ways-to-reach-a-position-after-exactly-k-steps",
    displayId: 2400,
    difficulty: 2,
  },
  {
    urlSlug: "check-distances-between-same-letters",
    displayId: 2399,
    difficulty: 1,
  },
  {
    urlSlug: "largest-palindromic-number",
    displayId: 2384,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-adjacent-swaps-to-make-a-valid-array",
    displayId: 2340,
    difficulty: 2,
  },
  {
    urlSlug: "max-sum-of-a-pair-with-equal-sum-of-digits",
    displayId: 2342,
    difficulty: 2,
  },
  {
    urlSlug: "build-a-matrix-with-conditions",
    displayId: 2392,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-amount-of-time-to-collect-garbage",
    displayId: 2391,
    difficulty: 2,
  },
  {
    urlSlug: "removing-stars-from-a-string",
    displayId: 2390,
    difficulty: 2,
  },
  {
    urlSlug: "longest-subsequence-with-limited-sum",
    displayId: 2389,
    difficulty: 1,
  },
  {
    urlSlug: "valid-palindrome-iv",
    displayId: 2330,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-segment-sum-after-removals",
    displayId: 2382,
    difficulty: 3,
  },
  {
    urlSlug: "shifting-letters-ii",
    displayId: 2381,
    difficulty: 2,
  },
  {
    urlSlug: "time-needed-to-rearrange-a-binary-string",
    displayId: 2380,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-recolors-to-get-k-consecutive-black-blocks",
    displayId: 2379,
    difficulty: 1,
  },
  {
    urlSlug: "find-the-k-sum-of-an-array",
    displayId: 2386,
    difficulty: 3,
  },
  {
    urlSlug: "amount-of-time-for-binary-tree-to-be-infected",
    displayId: 2385,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-hours-of-training-to-win-a-competition",
    displayId: 2383,
    difficulty: 1,
  },
  {
    urlSlug: "find-minimum-time-to-finish-all-jobs-ii",
    displayId: 2323,
    difficulty: 2,
  },
  {
    urlSlug: "count-special-integers",
    displayId: 2376,
    difficulty: 3,
  },
  {
    urlSlug: "construct-smallest-number-from-di-string",
    displayId: 2375,
    difficulty: 2,
  },
  {
    urlSlug: "node-with-highest-edge-score",
    displayId: 2374,
    difficulty: 2,
  },
  {
    urlSlug: "largest-local-values-in-a-matrix",
    displayId: 2373,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-replacements-to-sort-the-array",
    displayId: 2366,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-number-of-robots-within-budget",
    displayId: 2398,
    difficulty: 3,
  },
  {
    urlSlug: "count-number-of-bad-pairs",
    displayId: 2364,
    difficulty: 2,
  },
  {
    urlSlug: "merge-similar-items",
    displayId: 2363,
    difficulty: 1,
  },
  {
    urlSlug: "reachable-nodes-with-restrictions",
    displayId: 2368,
    difficulty: 2,
  },
  {
    urlSlug: "longest-ideal-subsequence",
    displayId: 2370,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-there-is-a-valid-partition-for-the-array",
    displayId: 2369,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-arithmetic-triplets",
    displayId: 2367,
    difficulty: 1,
  },
  {
    urlSlug: "longest-cycle-in-a-graph",
    displayId: 2360,
    difficulty: 3,
  },
  {
    urlSlug: "find-closest-node-to-given-two-nodes",
    displayId: 2359,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-groups-entering-a-competition",
    displayId: 2358,
    difficulty: 2,
  },
  {
    urlSlug: "make-array-zero-by-subtracting-equal-amounts",
    displayId: 2357,
    difficulty: 1,
  },
  {
    urlSlug: "shortest-impossible-sequence-of-rolls",
    displayId: 2350,
    difficulty: 3,
  },
  {
    urlSlug: "design-a-number-container-system",
    displayId: 2349,
    difficulty: 2,
  },
  {
    urlSlug: "best-poker-hand",
    displayId: 2347,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-zero-filled-subarrays",
    displayId: 2348,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-excellent-pairs",
    displayId: 2354,
    difficulty: 3,
  },
  {
    urlSlug: "design-a-food-rating-system",
    displayId: 2353,
    difficulty: 2,
  },
  {
    urlSlug: "equal-row-and-column-pairs",
    displayId: 2352,
    difficulty: 2,
  },
  {
    urlSlug: "first-letter-to-appear-twice",
    displayId: 2351,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-profit-from-trading-stocks",
    displayId: 2291,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-people-that-can-be-seen-in-a-grid",
    displayId: 2282,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-deletions-to-make-array-divisible",
    displayId: 2344,
    difficulty: 3,
  },
  {
    urlSlug: "query-kth-smallest-trimmed-number",
    displayId: 2343,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-pairs-in-array",
    displayId: 2341,
    difficulty: 1,
  },
  {
    urlSlug: "closest-node-to-path-in-tree",
    displayId: 2277,
    difficulty: 3,
  },
  {
    urlSlug: "subarray-with-elements-greater-than-varying-threshold",
    displayId: 2334,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-sum-of-squared-difference",
    displayId: 2333,
    difficulty: 2,
  },
  {
    urlSlug: "the-latest-time-to-catch-a-bus",
    displayId: 2332,
    difficulty: 2,
  },
  {
    urlSlug: "evaluate-boolean-binary-tree",
    displayId: 2331,
    difficulty: 1,
  },
  {
    urlSlug: "count-the-number-of-ideal-arrays",
    displayId: 2338,
    difficulty: 3,
  },
  {
    urlSlug: "move-pieces-to-obtain-a-string",
    displayId: 2337,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-number-in-infinite-set",
    displayId: 2336,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-amount-of-time-to-fill-cups",
    displayId: 2335,
    difficulty: 1,
  },
  {
    urlSlug: "spiral-matrix-iv",
    displayId: 2326,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-increasing-paths-in-a-grid",
    displayId: 2328,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-people-aware-of-a-secret",
    displayId: 2327,
    difficulty: 2,
  },
  {
    urlSlug: "decode-the-message",
    displayId: 2325,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-number-of-keypresses",
    displayId: 2268,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-distinct-roll-sequences",
    displayId: 2318,
    difficulty: 3,
  },
  {
    urlSlug: "count-unreachable-pairs-of-nodes-in-an-undirected-graph",
    displayId: 2316,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-xor-after-operations",
    displayId: 2317,
    difficulty: 2,
  },
  {
    urlSlug: "count-asterisks",
    displayId: 2315,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-score-after-removals-on-a-tree",
    displayId: 2322,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-flips-in-binary-tree-to-get-result",
    displayId: 2313,
    difficulty: 3,
  },
  {
    urlSlug: "check-if-matrix-is-x-matrix",
    displayId: 2319,
    difficulty: 1,
  },
  {
    urlSlug: "count-number-of-ways-to-place-houses",
    displayId: 2320,
    difficulty: 2,
  },
  {
    urlSlug: "design-video-sharing-platform",
    displayId: 2254,
    difficulty: 3,
  },
  {
    urlSlug: "longest-binary-subsequence-less-than-or-equal-to-k",
    displayId: 2311,
    difficulty: 2,
  },
  {
    urlSlug: "count-subarrays-with-score-less-than-k",
    displayId: 2302,
    difficulty: 3,
  },
  {
    urlSlug: "match-substring-after-replacement",
    displayId: 2301,
    difficulty: 3,
  },
  {
    urlSlug: "successful-pairs-of-spells-and-potions",
    displayId: 2300,
    difficulty: 2,
  },
  {
    urlSlug: "strong-password-checker-ii",
    displayId: 2299,
    difficulty: 1,
  },
  {
    urlSlug: "naming-a-company",
    displayId: 2306,
    difficulty: 3,
  },
  {
    urlSlug: "design-a-text-editor",
    displayId: 2296,
    difficulty: 3,
  },
  {
    urlSlug: "replace-elements-in-an-array",
    displayId: 2295,
    difficulty: 2,
  },
  {
    urlSlug: "partition-array-such-that-maximum-difference-is-k",
    displayId: 2294,
    difficulty: 2,
  },
  {
    urlSlug: "min-max-game",
    displayId: 2293,
    difficulty: 1,
  },
  {
    urlSlug: "count-positions-on-street-with-required-brightness",
    displayId: 2237,
    difficulty: 2,
  },
  {
    urlSlug: "root-equals-sum-of-children",
    displayId: 2236,
    difficulty: 1,
  },
  {
    urlSlug: "add-two-integers",
    displayId: 2235,
    difficulty: 1,
  },
  {
    urlSlug: "booking-concert-tickets-in-groups",
    displayId: 2286,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-total-importance-of-roads",
    displayId: 2285,
    difficulty: 2,
  },
  {
    urlSlug: "sender-with-largest-word-count",
    displayId: 2284,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-number-has-equal-digit-count-and-digit-value",
    displayId: 2283,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-obstacle-removal-to-reach-corner",
    displayId: 2290,
    difficulty: 3,
  },
  {
    urlSlug: "steps-to-make-array-non-decreasing",
    displayId: 2289,
    difficulty: 2,
  },
  {
    urlSlug: "apply-discount-to-prices",
    displayId: 2288,
    difficulty: 2,
  },
  {
    urlSlug: "rearrange-characters-to-make-target-string",
    displayId: 2287,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-sum-score-of-array",
    displayId: 2219,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-total-strength-of-wizards",
    displayId: 2281,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-lines-to-represent-a-line-chart",
    displayId: 2280,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-bags-with-full-capacity-of-rocks",
    displayId: 2279,
    difficulty: 2,
  },
  {
    urlSlug: "percentage-of-letter-in-string",
    displayId: 2278,
    difficulty: 1,
  },
  {
    urlSlug: "longest-path-with-different-adjacent-characters",
    displayId: 2246,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-trailing-zeros-in-a-cornered-path",
    displayId: 2245,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-rounds-to-complete-all-tasks",
    displayId: 2244,
    difficulty: 2,
  },
  {
    urlSlug: "calculate-digit-sum-of-a-string",
    displayId: 2243,
    difficulty: 1,
  },
  {
    urlSlug: "substring-with-largest-variance",
    displayId: 2272,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-white-tiles-covered-by-a-carpet",
    displayId: 2271,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-ways-to-split-array",
    displayId: 2270,
    difficulty: 2,
  },
  {
    urlSlug: "count-integers-in-intervals",
    displayId: 2276,
    difficulty: 3,
  },
  {
    urlSlug: "largest-combination-with-bitwise-and-greater-than-zero",
    displayId: 2275,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-consecutive-floors-without-special-floors",
    displayId: 2274,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-health-to-beat-game",
    displayId: 2214,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-score-of-a-node-sequence",
    displayId: 2242,
    difficulty: 3,
  },
  {
    urlSlug: "design-an-atm-machine",
    displayId: 2241,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-ways-to-buy-pens-and-pencils",
    displayId: 2240,
    difficulty: 2,
  },
  {
    urlSlug: "find-closest-number-to-zero",
    displayId: 2239,
    difficulty: 1,
  },
  {
    urlSlug: "check-if-there-is-a-valid-parentheses-string-path",
    displayId: 2267,
    difficulty: 3,
  },
  {
    urlSlug: "count-number-of-texts",
    displayId: 2266,
    difficulty: 2,
  },
  {
    urlSlug: "count-nodes-equal-to-average-of-subtree",
    displayId: 2265,
    difficulty: 2,
  },
  {
    urlSlug: "largest-3-same-digit-number-in-string",
    displayId: 2264,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-number-of-operations-to-convert-time",
    displayId: 2224,
    difficulty: 1,
  },
  {
    urlSlug: "escape-the-spreading-fire",
    displayId: 2258,
    difficulty: 3,
  },
  {
    urlSlug: "count-unguarded-cells-in-the-grid",
    displayId: 2257,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-average-difference",
    displayId: 2256,
    difficulty: 2,
  },
  {
    urlSlug: "count-prefixes-of-a-given-string",
    displayId: 2255,
    difficulty: 1,
  },
  {
    urlSlug: "total-appeal-of-a-string",
    displayId: 2262,
    difficulty: 3,
  },
  {
    urlSlug: "k-divisible-elements-subarrays",
    displayId: 2261,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-consecutive-cards-to-pick-up",
    displayId: 2260,
    difficulty: 2,
  },
  {
    urlSlug: "remove-digit-from-number-to-maximize-result",
    displayId: 2259,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-flowers-in-full-bloom",
    displayId: 2251,
    difficulty: 3,
  },
  {
    urlSlug: "count-number-of-rectangles-containing-each-point",
    displayId: 2250,
    difficulty: 2,
  },
  {
    urlSlug: "count-lattice-points-inside-a-circle",
    displayId: 2249,
    difficulty: 2,
  },
  {
    urlSlug: "intersection-of-multiple-arrays",
    displayId: 2248,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-total-beauty-of-the-gardens",
    displayId: 2234,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-product-after-k-increments",
    displayId: 2233,
    difficulty: 2,
  },
  {
    urlSlug: "minimize-result-by-adding-parentheses-to-expression",
    displayId: 2232,
    difficulty: 2,
  },
  {
    urlSlug: "largest-number-after-digit-swaps-by-parity",
    displayId: 2231,
    difficulty: 1,
  },
  {
    urlSlug: "sum-of-scores-of-built-strings",
    displayId: 2223,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-ways-to-select-buildings",
    displayId: 2222,
    difficulty: 2,
  },
  {
    urlSlug: "find-triangular-sum-of-an-array",
    displayId: 2221,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-bit-flips-to-convert-number",
    displayId: 2220,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-ways-to-build-sturdy-brick-wall",
    displayId: 2184,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-weighted-subgraph-with-the-required-paths",
    displayId: 2203,
    difficulty: 3,
  },
  {
    urlSlug: "find-all-k-distant-indices-in-an-array",
    displayId: 2200,
    difficulty: 1,
  },
  {
    urlSlug: "longest-substring-of-one-repeating-character",
    displayId: 2213,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-points-in-an-archery-competition",
    displayId: 2212,
    difficulty: 2,
  },
  {
    urlSlug: "count-collisions-on-a-road",
    displayId: 2211,
    difficulty: 2,
  },
  {
    urlSlug: "count-hills-and-valleys-in-an-array",
    displayId: 2210,
    difficulty: 1,
  },
  {
    urlSlug: "remove-all-ones-with-row-and-column-flips-ii",
    displayId: 2174,
    difficulty: 2,
  },
  {
    urlSlug: "most-frequent-number-following-key-in-an-array",
    displayId: 2190,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-white-tiles-after-covering-with-carpets",
    displayId: 2209,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-operations-to-halve-array-sum",
    displayId: 2208,
    difficulty: 2,
  },
  {
    urlSlug: "maximize-number-of-subsequences-in-a-string",
    displayId: 2207,
    difficulty: 2,
  },
  {
    urlSlug: "divide-array-into-equal-pairs",
    displayId: 2206,
    difficulty: 1,
  },
  {
    urlSlug: "replace-non-coprime-numbers-in-array",
    displayId: 2197,
    difficulty: 3,
  },
  {
    urlSlug: "create-binary-tree-from-descriptions",
    displayId: 2196,
    difficulty: 2,
  },
  {
    urlSlug: "append-k-integers-with-minimal-sum",
    displayId: 2195,
    difficulty: 2,
  },
  {
    urlSlug: "cells-in-a-range-on-an-excel-sheet",
    displayId: 2194,
    difficulty: 1,
  },
  {
    urlSlug: "unique-substrings-with-equal-digit-frequency",
    displayId: 2168,
    difficulty: 2,
  },
  {
    urlSlug: "count-array-pairs-divisible-by-k",
    displayId: 2183,
    difficulty: 3,
  },
  {
    urlSlug: "construct-string-with-repeat-limit",
    displayId: 2182,
    difficulty: 2,
  },
  {
    urlSlug: "merge-nodes-in-between-zeros",
    displayId: 2181,
    difficulty: 2,
  },
  {
    urlSlug: "count-integers-with-even-digit-sum",
    displayId: 2180,
    difficulty: 1,
  },
  {
    urlSlug: "amount-of-new-area-painted-each-day",
    displayId: 2158,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-time-to-finish-the-race",
    displayId: 2188,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-time-to-complete-trips",
    displayId: 2187,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-steps-to-make-two-strings-anagram-ii",
    displayId: 2186,
    difficulty: 2,
  },
  {
    urlSlug: "counting-words-with-a-given-prefix",
    displayId: 2185,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-and-sum-of-array",
    displayId: 2172,
    difficulty: 3,
  },
  {
    urlSlug: "removing-minimum-number-of-magic-beans",
    displayId: 2171,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-operations-to-make-the-array-alternating",
    displayId: 2170,
    difficulty: 2,
  },
  {
    urlSlug: "count-operations-to-obtain-zero",
    displayId: 2169,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-number-of-lines-to-cover-points",
    displayId: 2152,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-time-to-remove-all-cars-containing-illegal-goods",
    displayId: 2167,
    difficulty: 3,
  },
  {
    urlSlug: "design-bitset",
    displayId: 2166,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-value-of-the-rearranged-number",
    displayId: 2165,
    difficulty: 2,
  },
  {
    urlSlug: "sort-even-and-odd-indices-independently",
    displayId: 2164,
    difficulty: 1,
  },
  {
    urlSlug: "choose-numbers-from-two-arrays-in-range",
    displayId: 2143,
    difficulty: 3,
  },
  {
    urlSlug: "count-good-triplets-in-an-array",
    displayId: 2179,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-split-of-positive-even-integers",
    displayId: 2178,
    difficulty: 2,
  },
  {
    urlSlug: "find-three-consecutive-integers-that-sum-to-a-given-number",
    displayId: 2177,
    difficulty: 2,
  },
  {
    urlSlug: "count-equal-and-divisible-pairs-in-an-array",
    displayId: 2176,
    difficulty: 1,
  },
  {
    urlSlug: "groups-of-strings",
    displayId: 2157,
    difficulty: 3,
  },
  {
    urlSlug: "find-substring-with-given-hash-value",
    displayId: 2156,
    difficulty: 3,
  },
  {
    urlSlug: "keep-multiplying-found-values-by-two",
    displayId: 2154,
    difficulty: 1,
  },
  {
    urlSlug: "pour-water-between-buckets-to-make-water-levels-equal",
    displayId: 2137,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-good-people-based-on-statements",
    displayId: 2151,
    difficulty: 3,
  },
  {
    urlSlug: "rearrange-array-elements-by-sign",
    displayId: 2149,
    difficulty: 2,
  },
  {
    urlSlug: "find-all-lonely-numbers-in-the-array",
    displayId: 2150,
    difficulty: 2,
  },
  {
    urlSlug: "count-elements-with-strictly-smaller-and-greater-elements",
    displayId: 2148,
    difficulty: 1,
  },
  {
    urlSlug: "remove-all-ones-with-row-and-column-flips",
    displayId: 2128,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-difference-in-sums-after-removal-of-elements",
    displayId: 2163,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-cost-to-set-cooking-time",
    displayId: 2162,
    difficulty: 2,
  },
  {
    urlSlug: "partition-array-according-to-given-pivot",
    displayId: 2161,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-sum-of-four-digit-number-after-splitting-digits",
    displayId: 2160,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-running-time-of-n-computers",
    displayId: 2141,
    difficulty: 3,
  },
  {
    urlSlug: "solving-questions-with-brainpower",
    displayId: 2140,
    difficulty: 2,
  },
  {
    urlSlug: "all-divisions-with-the-highest-score-of-a-binary-array",
    displayId: 2155,
    difficulty: 2,
  },
  {
    urlSlug: "divide-a-string-into-groups-of-size-k",
    displayId: 2138,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-operations-to-remove-adjacent-ones-in-matrix",
    displayId: 2123,
    difficulty: 3,
  },
  {
    urlSlug: "elements-in-array-after-removing-and-replacing-elements",
    displayId: 2113,
    difficulty: 2,
  },
  {
    urlSlug: "earliest-possible-day-of-full-bloom",
    displayId: 2136,
    difficulty: 3,
  },
  {
    urlSlug: "count-words-obtained-after-adding-a-letter",
    displayId: 2135,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-swaps-to-group-all-1s-together-ii",
    displayId: 2134,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-every-row-and-column-contains-all-numbers",
    displayId: 2133,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-ways-to-divide-a-long-corridor",
    displayId: 2147,
    difficulty: 3,
  },
  {
    urlSlug: "k-highest-ranked-items-within-a-price-range",
    displayId: 2146,
    difficulty: 2,
  },
  {
    urlSlug: "count-the-hidden-sequences",
    displayId: 2145,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-cost-of-buying-candies-with-discount",
    displayId: 2144,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-unique-flavors-after-sharing-k-candies",
    displayId: 2107,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-employees-to-be-invited-to-a-meeting",
    displayId: 2127,
    difficulty: 3,
  },
  {
    urlSlug: "destroying-asteroids",
    displayId: 2126,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-laser-beams-in-a-bank",
    displayId: 2125,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-all-as-appears-before-all-bs",
    displayId: 2124,
    difficulty: 1,
  },
  {
    urlSlug: "subsequence-of-size-k-with-the-largest-even-sum",
    displayId: 2098,
    difficulty: 2,
  },
  {
    urlSlug: "recover-the-original-array",
    displayId: 2122,
    difficulty: 3,
  },
  {
    urlSlug: "intervals-between-identical-elements",
    displayId: 2121,
    difficulty: 2,
  },
  {
    urlSlug: "execution-of-all-suffix-instructions-staying-in-a-grid",
    displayId: 2120,
    difficulty: 2,
  },
  {
    urlSlug: "a-number-after-a-double-reversal",
    displayId: 2119,
    difficulty: 1,
  },
  {
    urlSlug: "longest-palindrome-by-concatenating-two-letter-words",
    displayId: 2131,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-twin-sum-of-a-linked-list",
    displayId: 2130,
    difficulty: 2,
  },
  {
    urlSlug: "capitalize-the-title",
    displayId: 2129,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-operations-to-make-the-array-k-increasing",
    displayId: 2111,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-smooth-descent-periods-of-a-stock",
    displayId: 2110,
    difficulty: 2,
  },
  {
    urlSlug: "adding-spaces-to-a-string",
    displayId: 2109,
    difficulty: 2,
  },
  {
    urlSlug: "find-first-palindromic-string-in-the-array",
    displayId: 2108,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-cost-to-reach-city-with-discounts",
    displayId: 2093,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-fruits-harvested-after-at-most-k-steps",
    displayId: 2106,
    difficulty: 3,
  },
  {
    urlSlug: "watering-plants-ii",
    displayId: 2105,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-subarray-ranges",
    displayId: 2104,
    difficulty: 2,
  },
  {
    urlSlug: "rings-and-rods",
    displayId: 2103,
    difficulty: 1,
  },
  {
    urlSlug: "substrings-that-begin-and-end-with-the-same-letter",
    displayId: 2083,
    difficulty: 2,
  },
  {
    urlSlug: "abbreviating-the-product-of-a-range",
    displayId: 2117,
    difficulty: 3,
  },
  {
    urlSlug: "check-if-a-parentheses-string-can-be-valid",
    displayId: 2116,
    difficulty: 2,
  },
  {
    urlSlug: "find-all-possible-recipes-from-given-supplies",
    displayId: 2115,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-words-found-in-sentences",
    displayId: 2114,
    difficulty: 1,
  },
  {
    urlSlug: "paths-in-maze-that-lead-to-same-room",
    displayId: 2077,
    difficulty: 2,
  },
  {
    urlSlug: "step-by-step-directions-from-a-binary-tree-node-to-another",
    displayId: 2096,
    difficulty: 2,
  },
  {
    urlSlug: "delete-the-middle-node-of-a-linked-list",
    displayId: 2095,
    difficulty: 2,
  },
  {
    urlSlug: "finding-3-digit-even-numbers",
    displayId: 2094,
    difficulty: 1,
  },
  {
    urlSlug: "find-all-people-with-secret",
    displayId: 2092,
    difficulty: 3,
  },
  {
    urlSlug: "removing-minimum-and-maximum-from-array",
    displayId: 2091,
    difficulty: 2,
  },
  {
    urlSlug: "k-radius-subarray-averages",
    displayId: 2090,
    difficulty: 2,
  },
  {
    urlSlug: "find-target-indices-after-sorting-array",
    displayId: 2089,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-equal-count-substrings",
    displayId: 2067,
    difficulty: 2,
  },
  {
    urlSlug: "sequentially-ordinal-rank-tracker",
    displayId: 2102,
    difficulty: 3,
  },
  {
    urlSlug: "detonate-the-maximum-bombs",
    displayId: 2101,
    difficulty: 2,
  },
  {
    urlSlug: "find-good-days-to-rob-the-bank",
    displayId: 2100,
    difficulty: 2,
  },
  {
    urlSlug: "find-subsequence-of-length-k-with-the-largest-sum",
    displayId: 2099,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-spaces-cleaning-robot-cleaned",
    displayId: 2061,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-k-mirror-numbers",
    displayId: 2081,
    difficulty: 3,
  },
  {
    urlSlug: "valid-arrangement-of-pairs",
    displayId: 2097,
    difficulty: 3,
  },
  {
    urlSlug: "stamping-the-grid",
    displayId: 2132,
    difficulty: 3,
  },
  {
    urlSlug: "two-furthest-houses-with-different-colors",
    displayId: 2078,
    difficulty: 1,
  },
  {
    urlSlug: "process-restricted-friend-requests",
    displayId: 2076,
    difficulty: 3,
  },
  {
    urlSlug: "decode-the-slanted-ciphertext",
    displayId: 2075,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-nodes-in-even-length-groups",
    displayId: 2074,
    difficulty: 2,
  },
  {
    urlSlug: "time-needed-to-buy-tickets",
    displayId: 2073,
    difficulty: 1,
  },
  {
    urlSlug: "count-fertile-pyramids-in-a-land",
    displayId: 2088,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-cost-homecoming-of-a-robot-in-a-grid",
    displayId: 2087,
    difficulty: 2,
  },
  {
    urlSlug:
      "minimum-number-of-buckets-required-to-collect-rainwater-from-houses",
    displayId: 2086,
    difficulty: 2,
  },
  {
    urlSlug: "count-common-words-with-one-occurrence",
    displayId: 2085,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-path-quality-of-a-graph",
    displayId: 2065,
    difficulty: 3,
  },
  {
    urlSlug: "minimized-maximum-of-products-distributed-to-any-store",
    displayId: 2064,
    difficulty: 2,
  },
  {
    urlSlug: "vowels-of-all-substrings",
    displayId: 2063,
    difficulty: 2,
  },
  {
    urlSlug: "count-vowel-substrings-of-a-string",
    displayId: 2062,
    difficulty: 1,
  },
  {
    urlSlug: "check-if-an-original-string-exists-given-two-encoded-strings",
    displayId: 2060,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-operations-to-convert-number",
    displayId: 2059,
    difficulty: 2,
  },
  {
    urlSlug:
      "find-the-minimum-and-maximum-number-of-nodes-between-critical-points",
    displayId: 2058,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-index-with-equal-value",
    displayId: 2057,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-number-of-tasks-you-can-assign",
    displayId: 2071,
    difficulty: 3,
  },
  {
    urlSlug: "most-beautiful-item-for-each-query",
    displayId: 2070,
    difficulty: 2,
  },
  {
    urlSlug: "walking-robot-simulation-ii",
    displayId: 2069,
    difficulty: 2,
  },
  {
    urlSlug: "check-whether-two-strings-are-almost-equivalent",
    displayId: 2068,
    difficulty: 1,
  },
  {
    urlSlug: "parallel-courses-iii",
    displayId: 2050,
    difficulty: 3,
  },
  {
    urlSlug: "count-nodes-with-the-highest-score",
    displayId: 2049,
    difficulty: 2,
  },
  {
    urlSlug: "next-greater-numerically-balanced-number",
    displayId: 2048,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-valid-words-in-a-sentence",
    displayId: 2047,
    difficulty: 1,
  },
  {
    urlSlug: "second-minimum-time-to-reach-destination",
    displayId: 2045,
    difficulty: 3,
  },
  {
    urlSlug: "count-number-of-maximum-bitwise-or-subsets",
    displayId: 2044,
    difficulty: 2,
  },
  {
    urlSlug: "simple-bank-system",
    displayId: 2043,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-numbers-are-ascending-in-a-sentence",
    displayId: 2042,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-valid-move-combinations-on-chessboard",
    displayId: 2056,
    difficulty: 3,
  },
  {
    urlSlug: "plates-between-candles",
    displayId: 2055,
    difficulty: 2,
  },
  {
    urlSlug: "two-best-non-overlapping-events",
    displayId: 2054,
    difficulty: 2,
  },
  {
    urlSlug: "kth-distinct-string-in-an-array",
    displayId: 2053,
    difficulty: 1,
  },
  {
    urlSlug: "partition-array-into-two-arrays-to-minimize-sum-difference",
    displayId: 2035,
    difficulty: 3,
  },
  {
    urlSlug: "stock-price-fluctuation",
    displayId: 2034,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-operations-to-make-a-uni-value-grid",
    displayId: 2033,
    difficulty: 2,
  },
  {
    urlSlug: "two-out-of-three",
    displayId: 2032,
    difficulty: 1,
  },
  {
    urlSlug: "smallest-k-length-subsequence-with-occurrences-of-a-letter",
    displayId: 2030,
    difficulty: 3,
  },
  {
    urlSlug: "stone-game-ix",
    displayId: 2029,
    difficulty: 2,
  },
  {
    urlSlug: "find-missing-observations",
    displayId: 2028,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-moves-to-convert-string",
    displayId: 2027,
    difficulty: 1,
  },
  {
    urlSlug: "subtree-removal-game-with-fibonacci-tree",
    displayId: 2005,
    difficulty: 3,
  },
  {
    urlSlug: "the-time-when-the-network-becomes-idle",
    displayId: 2039,
    difficulty: 2,
  },
  {
    urlSlug: "kth-smallest-product-of-two-sorted-arrays",
    displayId: 2040,
    difficulty: 3,
  },
  {
    urlSlug: "remove-colored-pieces-if-both-neighbors-are-the-same-color",
    displayId: 2038,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-moves-to-seat-everyone",
    displayId: 2037,
    difficulty: 1,
  },
  {
    urlSlug: "the-score-of-students-solving-math-expression",
    displayId: 2019,
    difficulty: 3,
  },
  {
    urlSlug: "check-if-word-can-be-placed-in-crossword",
    displayId: 2018,
    difficulty: 2,
  },
  {
    urlSlug: "grid-game",
    displayId: 2017,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-difference-between-increasing-elements",
    displayId: 2016,
    difficulty: 1,
  },
  {
    urlSlug: "average-height-of-buildings-in-each-segment",
    displayId: 2015,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-greater-multiple-made-of-two-digits",
    displayId: 1999,
    difficulty: 2,
  },
  {
    urlSlug: "longest-subsequence-repeated-k-times",
    displayId: 2014,
    difficulty: 3,
  },
  {
    urlSlug: "detect-squares",
    displayId: 2013,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-beauty-in-the-array",
    displayId: 2012,
    difficulty: 2,
  },
  {
    urlSlug: "final-value-of-variable-after-performing-operations",
    displayId: 2011,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-number-of-ways-to-partition-an-array",
    displayId: 2025,
    difficulty: 3,
  },
  {
    urlSlug: "maximize-the-confusion-of-an-exam",
    displayId: 2024,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-pairs-of-strings-with-concatenation-equal-to-target",
    displayId: 2023,
    difficulty: 2,
  },
  {
    urlSlug: "convert-1d-array-into-2d-array",
    displayId: 2022,
    difficulty: 1,
  },
  {
    urlSlug: "smallest-missing-genetic-value-in-each-subtree",
    displayId: 2003,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-product-of-the-length-of-two-palindromic-subsequences",
    displayId: 2002,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-pairs-of-interchangeable-rectangles",
    displayId: 2001,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-prefix-of-word",
    displayId: 2000,
    difficulty: 1,
  },
  {
    urlSlug: "count-nodes-equal-to-sum-of-descendants",
    displayId: 1973,
    difficulty: 2,
  },
  {
    urlSlug: "gcd-sort-of-an-array",
    displayId: 1998,
    difficulty: 3,
  },
  {
    urlSlug: "first-day-where-you-have-been-in-all-the-rooms",
    displayId: 1997,
    difficulty: 2,
  },
  {
    urlSlug: "the-number-of-weak-characters-in-the-game",
    displayId: 1996,
    difficulty: 2,
  },
  {
    urlSlug: "count-special-quadruplets",
    displayId: 1995,
    difficulty: 1,
  },
  {
    urlSlug: "find-if-path-exists-in-graph",
    displayId: 1971,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-number-of-operations-to-make-array-continuous",
    displayId: 2009,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-earnings-from-taxi",
    displayId: 2008,
    difficulty: 2,
  },
  {
    urlSlug: "find-original-array-from-doubled-array",
    displayId: 2007,
    difficulty: 2,
  },
  {
    urlSlug: "count-number-of-pairs-with-absolute-difference-k",
    displayId: 2006,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-unique-good-subsequences",
    displayId: 1987,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-number-of-work-sessions-to-finish-the-tasks",
    displayId: 1986,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-kth-largest-integer-in-the-array",
    displayId: 1985,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-difference-between-highest-and-lowest-of-k-scores",
    displayId: 1984,
    difficulty: 1,
  },
  {
    urlSlug: "binary-searchable-numbers-in-an-unsorted-array",
    displayId: 1966,
    difficulty: 2,
  },
  {
    urlSlug: "find-array-given-subset-sums",
    displayId: 1982,
    difficulty: 3,
  },
  {
    urlSlug: "minimize-the-difference-between-target-and-chosen-elements",
    displayId: 1981,
    difficulty: 2,
  },
  {
    urlSlug: "find-unique-binary-string",
    displayId: 1980,
    difficulty: 2,
  },
  {
    urlSlug: "find-greatest-common-divisor-of-array",
    displayId: 1979,
    difficulty: 1,
  },
  {
    urlSlug: "the-number-of-good-subsets",
    displayId: 1994,
    difficulty: 3,
  },
  {
    urlSlug: "operations-on-tree",
    displayId: 1993,
    difficulty: 2,
  },
  {
    urlSlug: "find-all-groups-of-farmland",
    displayId: 1992,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-middle-index-in-array",
    displayId: 1991,
    difficulty: 1,
  },
  {
    urlSlug: "last-day-where-you-can-still-cross",
    displayId: 1970,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-non-zero-product-of-the-array-elements",
    displayId: 1969,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-strings-that-appear-as-substrings-in-word",
    displayId: 1967,
    difficulty: 1,
  },
  {
    urlSlug: "find-the-longest-valid-obstacle-course-at-each-position",
    displayId: 1964,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-number-of-swaps-to-make-the-string-balanced",
    displayId: 1963,
    difficulty: 2,
  },
  {
    urlSlug: "remove-stones-to-minimize-the-total",
    displayId: 1962,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-string-is-a-prefix-of-array",
    displayId: 1961,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-ways-to-separate-numbers",
    displayId: 1977,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-ways-to-arrive-at-destination",
    displayId: 1976,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-matrix-sum",
    displayId: 1975,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-time-to-type-word-using-special-typewriter",
    displayId: 1974,
    difficulty: 1,
  },
  {
    urlSlug: "count-number-of-special-subsequences",
    displayId: 1955,
    difficulty: 3,
  },
  {
    urlSlug: "array-with-elements-not-equal-to-average-of-neighbors",
    displayId: 1968,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-weeks-for-which-you-can-work",
    displayId: 1953,
    difficulty: 2,
  },
  {
    urlSlug: "three-divisors",
    displayId: 1952,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-cost-to-separate-sentence-into-rows",
    displayId: 2052,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-total-space-wasted-with-k-resizing-operations",
    displayId: 1959,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-move-is-legal",
    displayId: 1958,
    difficulty: 2,
  },
  {
    urlSlug: "delete-duplicate-folders-in-system",
    displayId: 1948,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-compatibility-score-sum",
    displayId: 1947,
    difficulty: 2,
  },
  {
    urlSlug: "largest-number-after-mutating-substring",
    displayId: 1946,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-digits-of-string-after-convert",
    displayId: 1945,
    difficulty: 1,
  },
  {
    urlSlug: "brightest-position-on-street",
    displayId: 2021,
    difficulty: 2,
  },
  {
    urlSlug: "erect-the-fence-ii",
    displayId: 1924,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-time-for-k-virus-variants-to-spread",
    displayId: 1956,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-of-minimum-values-in-all-subarrays",
    displayId: 1950,
    difficulty: 2,
  },
  {
    urlSlug: "longest-common-subsequence-between-sorted-arrays",
    displayId: 1940,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-string-is-decomposable-into-value-equal-substrings",
    displayId: 1933,
    difficulty: 1,
  },
  {
    urlSlug: "kth-smallest-subarray-sum",
    displayId: 1918,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-genetic-difference-query",
    displayId: 1938,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-number-of-points-with-cost",
    displayId: 1937,
    difficulty: 2,
  },
  {
    urlSlug: "add-minimum-number-of-rungs",
    displayId: 1936,
    difficulty: 2,
  },
  {
    urlSlug: "check-for-contradictions-in-equations",
    displayId: 2307,
    difficulty: 3,
  },
  {
    urlSlug: "game-of-nim",
    displayId: 1908,
    difficulty: 2,
  },
  {
    urlSlug: "painting-a-grid-with-three-different-colors",
    displayId: 1931,
    difficulty: 3,
  },
  {
    urlSlug: "merge-bsts-to-create-single-bst",
    displayId: 1932,
    difficulty: 3,
  },
  {
    urlSlug: "unique-length-3-palindromic-subsequences",
    displayId: 1930,
    difficulty: 2,
  },
  {
    urlSlug: "concatenation-of-array",
    displayId: 1929,
    difficulty: 1,
  },
  {
    urlSlug: "jump-game-viii",
    displayId: 2297,
    difficulty: 2,
  },
  {
    urlSlug: "describe-the-painting",
    displayId: 1943,
    difficulty: 2,
  },
  {
    urlSlug: "the-number-of-the-smallest-unoccupied-chair",
    displayId: 1942,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-all-characters-have-equal-number-of-occurrences",
    displayId: 1941,
    difficulty: 1,
  },
  {
    urlSlug: "depth-of-bst-given-insertion-order",
    displayId: 1902,
    difficulty: 2,
  },
  {
    urlSlug: "longest-common-subpath",
    displayId: 1923,
    difficulty: 3,
  },
  {
    urlSlug: "count-good-numbers",
    displayId: 1922,
    difficulty: 2,
  },
  {
    urlSlug: "eliminate-maximum-number-of-monsters",
    displayId: 1921,
    difficulty: 2,
  },
  {
    urlSlug: "build-array-from-permutation",
    displayId: 1920,
    difficulty: 1,
  },
  {
    urlSlug: "find-a-peak-element-ii",
    displayId: 1901,
    difficulty: 2,
  },
  {
    urlSlug: "cutting-ribbons",
    displayId: 1891,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-wonderful-substrings",
    displayId: 1915,
    difficulty: 2,
  },
  {
    urlSlug: "cyclically-rotating-a-grid",
    displayId: 1914,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-product-difference-between-two-pairs",
    displayId: 1913,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-cost-to-reach-destination-in-time",
    displayId: 1928,
    difficulty: 3,
  },
  {
    urlSlug: "sum-game",
    displayId: 1927,
    difficulty: 2,
  },
  {
    urlSlug: "nearest-exit-from-entrance-in-maze",
    displayId: 1926,
    difficulty: 2,
  },
  {
    urlSlug: "count-square-sum-triples",
    displayId: 1925,
    difficulty: 1,
  },
  {
    urlSlug: "count-pairs-in-two-arrays",
    displayId: 1885,
    difficulty: 2,
  },
  {
    urlSlug: "count-sub-islands",
    displayId: 1905,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-absolute-difference-queries",
    displayId: 1906,
    difficulty: 2,
  },
  {
    urlSlug: "the-number-of-full-rounds-you-have-played",
    displayId: 1904,
    difficulty: 2,
  },
  {
    urlSlug: "largest-odd-number-in-string",
    displayId: 1903,
    difficulty: 1,
  },
  {
    urlSlug: "egg-drop-with-2-eggs-and-n-floors",
    displayId: 1884,
    difficulty: 2,
  },
  {
    urlSlug: "minimize-product-sum-of-two-arrays",
    displayId: 1874,
    difficulty: 2,
  },
  {
    urlSlug: "the-earliest-and-latest-rounds-where-players-compete",
    displayId: 1900,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-number-of-removable-characters",
    displayId: 1898,
    difficulty: 2,
  },
  {
    urlSlug: "merge-triplets-to-form-target-triplet",
    displayId: 1899,
    difficulty: 2,
  },
  {
    urlSlug: "redistribute-characters-to-make-all-strings-equal",
    displayId: 1897,
    difficulty: 1,
  },
  {
    urlSlug: "design-movie-rental-system",
    displayId: 1912,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-alternating-subsequence-sum",
    displayId: 1911,
    difficulty: 2,
  },
  {
    urlSlug: "remove-all-occurrences-of-a-substring",
    displayId: 1910,
    difficulty: 2,
  },
  {
    urlSlug: "remove-one-element-to-make-the-array-strictly-increasing",
    displayId: 1909,
    difficulty: 1,
  },
  {
    urlSlug: "product-of-two-run-length-encoded-arrays",
    displayId: 1868,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-space-wasted-from-packaging",
    displayId: 1889,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-number-of-flips-to-make-the-binary-string-alternating",
    displayId: 1888,
    difficulty: 2,
  },
  {
    urlSlug: "reduction-operations-to-make-the-array-elements-equal",
    displayId: 1887,
    difficulty: 2,
  },
  {
    urlSlug: "determine-whether-matrix-can-be-obtained-by-rotation",
    displayId: 1886,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-skips-to-arrive-at-meeting-on-time",
    displayId: 1883,
    difficulty: 3,
  },
  {
    urlSlug: "process-tasks-using-servers",
    displayId: 1882,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-value-after-insertion",
    displayId: 1881,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-word-equals-summation-of-two-words",
    displayId: 1880,
    difficulty: 1,
  },
  {
    urlSlug: "longest-word-with-all-prefixes",
    displayId: 1858,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-cost-to-change-the-final-value-of-expression",
    displayId: 1896,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-cost-of-trip-with-k-highways",
    displayId: 2247,
    difficulty: 3,
  },
  {
    urlSlug: "find-the-student-that-will-replace-the-chalk",
    displayId: 1894,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-all-the-integers-in-a-range-are-covered",
    displayId: 1893,
    difficulty: 1,
  },
  {
    urlSlug: "distinct-numbers-in-each-subarray",
    displayId: 1852,
    difficulty: 2,
  },
  {
    urlSlug: "stone-game-viii",
    displayId: 1872,
    difficulty: 3,
  },
  {
    urlSlug: "jump-game-vii",
    displayId: 1871,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-speed-to-arrive-on-time",
    displayId: 1870,
    difficulty: 2,
  },
  {
    urlSlug: "longer-contiguous-segments-of-ones-than-zeros",
    displayId: 1869,
    difficulty: 1,
  },
  {
    urlSlug: "next-palindrome-using-same-digits",
    displayId: 1842,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-ways-to-rearrange-sticks-with-k-sticks-visible",
    displayId: 1866,
    difficulty: 3,
  },
  {
    urlSlug: "finding-pairs-with-a-certain-sum",
    displayId: 1865,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-swaps-to-make-the-binary-string-alternating",
    displayId: 1864,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-all-subset-xor-totals",
    displayId: 1863,
    difficulty: 1,
  },
  {
    urlSlug: "sort-linked-list-already-sorted-using-absolute-values",
    displayId: 2046,
    difficulty: 2,
  },
  {
    urlSlug: "get-biggest-three-rhombus-sums-in-a-grid",
    displayId: 1878,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-xor-sum-of-two-arrays",
    displayId: 1879,
    difficulty: 3,
  },
  {
    urlSlug: "minimize-maximum-pair-sum-in-array",
    displayId: 1877,
    difficulty: 2,
  },
  {
    urlSlug: "substrings-of-size-three-with-distinct-characters",
    displayId: 1876,
    difficulty: 1,
  },
  {
    urlSlug: "largest-color-value-in-a-directed-graph",
    displayId: 1857,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-subarray-min-product",
    displayId: 1856,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-distance-between-a-pair-of-values",
    displayId: 1855,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-population-year",
    displayId: 1854,
    difficulty: 1,
  },
  {
    urlSlug: "remove-duplicates-from-an-unsorted-linked-list",
    displayId: 1836,
    difficulty: 2,
  },
  {
    urlSlug: "faulty-sensor",
    displayId: 1826,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-number-of-people-that-can-be-caught-in-tag",
    displayId: 1989,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-adjacent-swaps-to-reach-the-kth-smallest-number",
    displayId: 1850,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-interval-to-include-each-query",
    displayId: 1851,
    difficulty: 3,
  },
  {
    urlSlug: "splitting-a-string-into-descending-consecutive-values",
    displayId: 1849,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-distance-to-the-target-element",
    displayId: 1848,
    difficulty: 1,
  },
  {
    urlSlug: "rotating-the-box",
    displayId: 1861,
    difficulty: 2,
  },
  {
    urlSlug: "incremental-memory-leak",
    displayId: 1860,
    difficulty: 2,
  },
  {
    urlSlug: "sorting-the-sentence",
    displayId: 1859,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-number-of-accepted-invitations",
    displayId: 1820,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-building-height",
    displayId: 1840,
    difficulty: 3,
  },
  {
    urlSlug: "longest-substring-of-all-vowels-in-order",
    displayId: 1839,
    difficulty: 2,
  },
  {
    urlSlug: "frequency-of-the-most-frequent-element",
    displayId: 1838,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-digits-in-base-k",
    displayId: 1837,
    difficulty: 1,
  },
  {
    urlSlug: "find-xor-sum-of-all-pairs-bitwise-and",
    displayId: 1835,
    difficulty: 3,
  },
  {
    urlSlug: "single-threaded-cpu",
    displayId: 1834,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-ice-cream-bars",
    displayId: 1833,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-the-sentence-is-pangram",
    displayId: 1832,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-path-cost-in-a-hidden-grid",
    displayId: 1810,
    difficulty: 2,
  },
  {
    urlSlug: "closest-room",
    displayId: 1847,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-element-after-decreasing-and-rearranging",
    displayId: 1846,
    difficulty: 2,
  },
  {
    urlSlug: "seat-reservation-manager",
    displayId: 1845,
    difficulty: 2,
  },
  {
    urlSlug: "replace-all-digits-with-characters",
    displayId: 1844,
    difficulty: 1,
  },
  {
    urlSlug: "finding-mk-average",
    displayId: 1825,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-sideway-jumps",
    displayId: 1824,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-winner-of-the-circular-game",
    displayId: 1823,
    difficulty: 2,
  },
  {
    urlSlug: "sign-of-the-product-of-an-array",
    displayId: 1822,
    difficulty: 1,
  },
  {
    urlSlug: "implement-trie-ii-prefix-tree",
    displayId: 1804,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-different-subsequences-gcds",
    displayId: 1819,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-absolute-sum-difference",
    displayId: 1818,
    difficulty: 2,
  },
  {
    urlSlug: "finding-the-users-active-minutes",
    displayId: 1817,
    difficulty: 2,
  },
  {
    urlSlug: "truncate-sentence",
    displayId: 1816,
    difficulty: 1,
  },
  {
    urlSlug: "count-pairs-of-equal-substrings-with-minimum-difference",
    displayId: 1794,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-operations-to-make-string-sorted",
    displayId: 1830,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-xor-for-each-query",
    displayId: 1829,
    difficulty: 2,
  },
  {
    urlSlug: "queries-on-number-of-points-inside-a-circle",
    displayId: 1828,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-operations-to-make-the-array-increasing",
    displayId: 1827,
    difficulty: 1,
  },
  {
    urlSlug: "maximize-the-beauty-of-the-garden",
    displayId: 1788,
    difficulty: 3,
  },
  {
    urlSlug: "maximize-number-of-nice-divisors",
    displayId: 1808,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-number-of-operations-to-reinitialize-a-permutation",
    displayId: 1806,
    difficulty: 2,
  },
  {
    urlSlug: "evaluate-the-bracket-pairs-of-a-string",
    displayId: 1807,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-different-integers-in-a-string",
    displayId: 1805,
    difficulty: 1,
  },
  {
    urlSlug: "shortest-path-in-a-hidden-grid",
    displayId: 1778,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-consecutive-values-you-can-make",
    displayId: 1798,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-value-at-a-given-index-in-a-bounded-array",
    displayId: 1802,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-orders-in-the-backlog",
    displayId: 1801,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-ascending-subarray-sum",
    displayId: 1800,
    difficulty: 1,
  },
  {
    urlSlug: "count-nice-pairs-in-an-array",
    displayId: 1814,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-groups-getting-fresh-donuts",
    displayId: 1815,
    difficulty: 3,
  },
  {
    urlSlug: "sentence-similarity-iii",
    displayId: 1813,
    difficulty: 2,
  },
  {
    urlSlug: "determine-color-of-a-chessboard-square",
    displayId: 1812,
    difficulty: 1,
  },
  {
    urlSlug: "sort-features-by-popularity",
    displayId: 1772,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-score-of-a-good-subarray",
    displayId: 1793,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-average-pass-ratio",
    displayId: 1792,
    difficulty: 2,
  },
  {
    urlSlug: "find-center-of-star-graph",
    displayId: 1791,
    difficulty: 1,
  },
  {
    urlSlug: "check-if-one-string-swap-can-make-strings-equal",
    displayId: 1790,
    difficulty: 1,
  },
  {
    urlSlug: "make-the-xor-of-all-segments-equal-to-zero",
    displayId: 1787,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-restricted-paths-from-first-to-last-node",
    displayId: 1786,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-elements-to-add-to-form-a-given-sum",
    displayId: 1785,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-binary-string-has-at-most-one-segment-of-ones",
    displayId: 1784,
    difficulty: 1,
  },
  {
    urlSlug: "buildings-with-an-ocean-view",
    displayId: 1762,
    difficulty: 2,
  },
  {
    urlSlug: "count-pairs-with-xor-in-a-range",
    displayId: 1803,
    difficulty: 3,
  },
  {
    urlSlug: "maximize-score-after-n-operations",
    displayId: 1799,
    difficulty: 3,
  },
  {
    urlSlug: "design-authentication-manager",
    displayId: 1797,
    difficulty: 2,
  },
  {
    urlSlug: "second-largest-digit-in-a-string",
    displayId: 1796,
    difficulty: 1,
  },
  {
    urlSlug: "design-most-recently-used-queue",
    displayId: 1756,
    difficulty: 2,
  },
  {
    urlSlug: "car-fleet-ii",
    displayId: 1776,
    difficulty: 3,
  },
  {
    urlSlug: "equal-sum-arrays-with-minimum-number-of-operations",
    displayId: 1775,
    difficulty: 2,
  },
  {
    urlSlug: "closest-dessert-cost",
    displayId: 1774,
    difficulty: 2,
  },
  {
    urlSlug: "count-items-matching-a-rule",
    displayId: 1773,
    difficulty: 1,
  },
  {
    urlSlug: "maximize-palindrome-length-from-subsequences",
    displayId: 1771,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-score-from-performing-multiplication-operations",
    displayId: 1770,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-number-of-operations-to-move-all-balls-to-each-box",
    displayId: 1769,
    difficulty: 2,
  },
  {
    urlSlug: "merge-strings-alternately",
    displayId: 1768,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-subarray-sum-after-one-operation",
    displayId: 1746,
    difficulty: 2,
  },
  {
    urlSlug: "count-pairs-of-nodes",
    displayId: 1782,
    difficulty: 3,
  },
  {
    urlSlug: "sum-of-beauty-of-all-substrings",
    displayId: 1781,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-number-is-a-sum-of-powers-of-three",
    displayId: 1780,
    difficulty: 2,
  },
  {
    urlSlug: "find-nearest-point-that-has-the-same-x-or-y-coordinate",
    displayId: 1779,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-degree-of-a-connected-trio-in-a-graph",
    displayId: 1761,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-limit-of-balls-in-a-bag",
    displayId: 1760,
    difficulty: 2,
  },
  {
    urlSlug: "count-number-of-homogenous-substrings",
    displayId: 1759,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-changes-to-make-alternating-binary-string",
    displayId: 1758,
    difficulty: 1,
  },
  {
    urlSlug: "find-distance-in-a-binary-tree",
    displayId: 1740,
    difficulty: 2,
  },
  {
    urlSlug: "closest-subsequence-sum",
    displayId: 1755,
    difficulty: 3,
  },
  {
    urlSlug: "largest-merge-of-two-strings",
    displayId: 1754,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-score-from-removing-stones",
    displayId: 1753,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-array-is-sorted-and-rotated",
    displayId: 1752,
    difficulty: 1,
  },
  {
    urlSlug: "map-of-highest-peak",
    displayId: 1765,
    difficulty: 2,
  },
  {
    urlSlug: "tree-of-coprimes",
    displayId: 1766,
    difficulty: 3,
  },
  {
    urlSlug: "form-array-by-concatenating-subarrays-of-another-array",
    displayId: 1764,
    difficulty: 2,
  },
  {
    urlSlug: "longest-nice-substring",
    displayId: 1763,
    difficulty: 1,
  },
  {
    urlSlug: "can-you-eat-your-favorite-candy-on-your-favorite-day",
    displayId: 1744,
    difficulty: 2,
  },
  {
    urlSlug: "palindrome-partitioning-iv",
    displayId: 1745,
    difficulty: 3,
  },
  {
    urlSlug: "restore-the-array-from-adjacent-pairs",
    displayId: 1743,
    difficulty: 2,
  },
  {
    urlSlug: "checking-existence-of-edge-length-limited-paths-ii",
    displayId: 1724,
    difficulty: 3,
  },
  {
    urlSlug: "building-boxes",
    displayId: 1739,
    difficulty: 3,
  },
  {
    urlSlug: "find-kth-largest-xor-coordinate-value",
    displayId: 1738,
    difficulty: 2,
  },
  {
    urlSlug: "change-minimum-characters-to-satisfy-one-of-three-conditions",
    displayId: 1737,
    difficulty: 2,
  },
  {
    urlSlug: "latest-time-by-replacing-hidden-digits",
    displayId: 1736,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-number-of-events-that-can-be-attended-ii",
    displayId: 1751,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-length-of-string-after-deleting-similar-ends",
    displayId: 1750,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-absolute-sum-of-any-subarray",
    displayId: 1749,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-unique-elements",
    displayId: 1748,
    difficulty: 1,
  },
  {
    urlSlug: "largest-subarray-length-k",
    displayId: 1708,
    difficulty: 1,
  },
  {
    urlSlug: "largest-submatrix-with-rearrangements",
    displayId: 1727,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-balls-in-a-box",
    displayId: 1742,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-rectangles-that-can-form-the-largest-square",
    displayId: 1725,
    difficulty: 1,
  },
  {
    urlSlug: "minimize-hamming-distance-after-swap-operations",
    displayId: 1722,
    difficulty: 2,
  },
  {
    urlSlug: "decode-xored-array",
    displayId: 1720,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-distinct-substrings-in-a-string",
    displayId: 1698,
    difficulty: 2,
  },
  {
    urlSlug: "count-ways-to-make-array-with-product",
    displayId: 1735,
    difficulty: 3,
  },
  {
    urlSlug: "decode-xored-permutation",
    displayId: 1734,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-people-to-teach",
    displayId: 1733,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-highest-altitude",
    displayId: 1732,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-operations-to-make-a-subsequence",
    displayId: 1713,
    difficulty: 3,
  },
  {
    urlSlug: "ways-to-split-array-into-three-subarrays",
    displayId: 1712,
    difficulty: 2,
  },
  {
    urlSlug: "count-good-meals",
    displayId: 1711,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-units-on-a-truck",
    displayId: 1710,
    difficulty: 1,
  },
  {
    urlSlug: "count-ways-to-distribute-candies",
    displayId: 1692,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-xor-with-an-element-from-array",
    displayId: 1707,
    difficulty: 3,
  },
  {
    urlSlug: "find-minimum-time-to-finish-all-jobs",
    displayId: 1723,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-number-of-eaten-apples",
    displayId: 1705,
    difficulty: 2,
  },
  {
    urlSlug: "determine-if-string-halves-are-alike",
    displayId: 1704,
    difficulty: 1,
  },
  {
    urlSlug: "longest-palindromic-subsequence-ii",
    displayId: 1682,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-ways-to-reconstruct-a-tree",
    displayId: 1719,
    difficulty: 3,
  },
  {
    urlSlug: "construct-the-lexicographically-largest-valid-sequence",
    displayId: 1718,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-score-from-removing-substrings",
    displayId: 1717,
    difficulty: 2,
  },
  {
    urlSlug: "calculate-money-in-leetcode-bank",
    displayId: 1716,
    difficulty: 1,
  },
  {
    urlSlug: "lowest-common-ancestor-of-a-binary-tree-iv",
    displayId: 1676,
    difficulty: 2,
  },
  {
    urlSlug: "checking-existence-of-edge-length-limited-paths",
    displayId: 1697,
    difficulty: 3,
  },
  {
    urlSlug: "jump-game-vi",
    displayId: 1696,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-erasure-value",
    displayId: 1695,
    difficulty: 2,
  },
  {
    urlSlug: "reformat-phone-number",
    displayId: 1694,
    difficulty: 1,
  },
  {
    urlSlug: "change-the-root-of-a-binary-tree",
    displayId: 1666,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-special-evenly-spaced-elements-in-array",
    displayId: 1714,
    difficulty: 3,
  },
  {
    urlSlug: "stone-game-vii",
    displayId: 1690,
    difficulty: 2,
  },
  {
    urlSlug: "partitioning-into-minimum-number-of-deci-binary-numbers",
    displayId: 1689,
    difficulty: 2,
  },
  {
    urlSlug: "count-of-matches-in-tournament",
    displayId: 1688,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-adjacent-swaps-for-k-consecutive-ones",
    displayId: 1703,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-binary-string-after-change",
    displayId: 1702,
    difficulty: 2,
  },
  {
    urlSlug: "average-waiting-time",
    displayId: 1701,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-students-unable-to-eat-lunch",
    displayId: 1700,
    difficulty: 1,
  },
  {
    urlSlug: "concatenation-of-consecutive-binary-numbers",
    displayId: 1680,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-incompatibility",
    displayId: 1681,
    difficulty: 3,
  },
  {
    urlSlug: "max-number-of-k-sum-pairs",
    displayId: 1679,
    difficulty: 2,
  },
  {
    urlSlug: "goal-parser-interpretation",
    displayId: 1678,
    difficulty: 1,
  },
  {
    urlSlug: "correct-a-binary-tree",
    displayId: 1660,
    difficulty: 2,
  },
  {
    urlSlug: "minimize-deviation-in-array",
    displayId: 1675,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-moves-to-make-array-complementary",
    displayId: 1674,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-most-competitive-subsequence",
    displayId: 1673,
    difficulty: 2,
  },
  {
    urlSlug: "richest-customer-wealth",
    displayId: 1672,
    difficulty: 1,
  },
  {
    urlSlug: "lowest-common-ancestor-of-a-binary-tree-iii",
    displayId: 1650,
    difficulty: 2,
  },
  {
    urlSlug: "delivering-boxes-from-storage-to-ports",
    displayId: 1687,
    difficulty: 3,
  },
  {
    urlSlug: "stone-game-vi",
    displayId: 1686,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-absolute-differences-in-a-sorted-array",
    displayId: 1685,
    difficulty: 2,
  },
  {
    urlSlug: "count-the-number-of-consistent-strings",
    displayId: 1684,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-initial-energy-to-finish-tasks",
    displayId: 1665,
    difficulty: 3,
  },
  {
    urlSlug: "ways-to-make-a-fair-array",
    displayId: 1664,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-string-with-a-given-numeric-value",
    displayId: 1663,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-two-string-arrays-are-equivalent",
    displayId: 1662,
    difficulty: 1,
  },
  {
    urlSlug: "lowest-common-ancestor-of-a-binary-tree-ii",
    displayId: 1644,
    difficulty: 2,
  },
  {
    urlSlug: "maximize-grid-happiness",
    displayId: 1659,
    difficulty: 3,
  },
  {
    urlSlug: "determine-if-two-strings-are-close",
    displayId: 1657,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-operations-to-reduce-x-to-zero",
    displayId: 1658,
    difficulty: 2,
  },
  {
    urlSlug: "design-an-ordered-stream",
    displayId: 1656,
    difficulty: 1,
  },
  {
    urlSlug: "add-two-polynomials-represented-as-linked-lists",
    displayId: 1634,
    difficulty: 2,
  },
  {
    urlSlug: "create-sorted-array-through-instructions",
    displayId: 1649,
    difficulty: 3,
  },
  {
    urlSlug: "sell-diminishing-valued-colored-balls",
    displayId: 1648,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-deletions-to-make-character-frequencies-unique",
    displayId: 1647,
    difficulty: 2,
  },
  {
    urlSlug: "get-maximum-in-generated-array",
    displayId: 1646,
    difficulty: 1,
  },
  {
    urlSlug: "design-an-expression-tree-with-evaluate-function",
    displayId: 1628,
    difficulty: 2,
  },
  {
    urlSlug: "design-front-middle-back-queue",
    displayId: 1670,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-removals-to-make-mountain-array",
    displayId: 1671,
    difficulty: 3,
  },
  {
    urlSlug: "merge-in-between-linked-lists",
    displayId: 1669,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-repeating-substring",
    displayId: 1668,
    difficulty: 1,
  },
  {
    urlSlug: "furthest-building-you-can-reach",
    displayId: 1642,
    difficulty: 2,
  },
  {
    urlSlug: "count-sorted-vowel-strings",
    displayId: 1641,
    difficulty: 2,
  },
  {
    urlSlug: "check-array-formation-through-concatenation",
    displayId: 1640,
    difficulty: 1,
  },
  {
    urlSlug: "distribute-repeating-integers",
    displayId: 1655,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-jumps-to-reach-home",
    displayId: 1654,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-deletions-to-make-string-balanced",
    displayId: 1653,
    difficulty: 2,
  },
  {
    urlSlug: "defuse-the-bomb",
    displayId: 1652,
    difficulty: 1,
  },
  {
    urlSlug: "path-with-minimum-effort",
    displayId: 1631,
    difficulty: 2,
  },
  {
    urlSlug: "arithmetic-subarrays",
    displayId: 1630,
    difficulty: 2,
  },
  {
    urlSlug: "slowest-key",
    displayId: 1629,
    difficulty: 1,
  },
  {
    urlSlug: "check-if-two-expression-trees-are-equivalent",
    displayId: 1612,
    difficulty: 2,
  },
  {
    urlSlug: "best-team-with-no-conflicts",
    displayId: 1626,
    difficulty: 2,
  },
  {
    urlSlug: "lexicographically-smallest-string-after-applying-operations",
    displayId: 1625,
    difficulty: 2,
  },
  {
    urlSlug: "largest-substring-between-two-equal-characters",
    displayId: 1624,
    difficulty: 1,
  },
  {
    urlSlug: "find-nearest-right-node-in-binary-tree",
    displayId: 1602,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-ways-to-form-a-target-string-given-a-dictionary",
    displayId: 1639,
    difficulty: 3,
  },
  {
    urlSlug: "count-substrings-that-differ-by-one-character",
    displayId: 1638,
    difficulty: 2,
  },
  {
    urlSlug: "widest-vertical-area-between-two-points-containing-no-points",
    displayId: 1637,
    difficulty: 2,
  },
  {
    urlSlug: "sort-array-by-increasing-frequency",
    displayId: 1636,
    difficulty: 1,
  },
  {
    urlSlug: "count-subtrees-with-max-distance-between-cities",
    displayId: 1617,
    difficulty: 3,
  },
  {
    urlSlug: "split-two-strings-to-make-palindrome",
    displayId: 1616,
    difficulty: 2,
  },
  {
    urlSlug: "maximal-network-rank",
    displayId: 1615,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-nesting-depth-of-the-parentheses",
    displayId: 1614,
    difficulty: 1,
  },
  {
    urlSlug: "build-binary-expression-tree-from-infix-expression",
    displayId: 1597,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-number-of-visible-points",
    displayId: 1610,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-one-bit-operations-to-make-integers-zero",
    displayId: 1611,
    difficulty: 3,
  },
  {
    urlSlug: "even-odd-tree",
    displayId: 1609,
    difficulty: 2,
  },
  {
    urlSlug: "special-array-with-x-elements-greater-than-or-equal-x",
    displayId: 1608,
    difficulty: 1,
  },
  {
    urlSlug: "binary-search-tree-iterator-ii",
    displayId: 1586,
    difficulty: 2,
  },
  {
    urlSlug: "fancy-sequence",
    displayId: 1622,
    difficulty: 3,
  },
  {
    urlSlug: "cat-and-mouse-ii",
    displayId: 1728,
    difficulty: 3,
  },
  {
    urlSlug: "coordinate-with-maximum-network-quality",
    displayId: 1620,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-sets-of-k-non-overlapping-line-segments",
    displayId: 1621,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-achievable-transfer-requests",
    displayId: 1601,
    difficulty: 3,
  },
  {
    urlSlug: "throne-inheritance",
    displayId: 1600,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-profit-of-operating-a-centennial-wheel",
    displayId: 1599,
    difficulty: 2,
  },
  {
    urlSlug: "crawler-log-folder",
    displayId: 1598,
    difficulty: 1,
  },
  {
    urlSlug: "put-boxes-into-the-warehouse-ii",
    displayId: 1580,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-cost-to-connect-two-groups-of-points",
    displayId: 1595,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-non-negative-product-in-a-matrix",
    displayId: 1594,
    difficulty: 2,
  },
  {
    urlSlug: "split-a-string-into-the-max-number-of-unique-substrings",
    displayId: 1593,
    difficulty: 2,
  },
  {
    urlSlug: "rearrange-spaces-between-words",
    displayId: 1592,
    difficulty: 1,
  },
  {
    urlSlug: "dot-product-of-two-sparse-vectors",
    displayId: 1570,
    difficulty: 2,
  },
  {
    urlSlug: "find-valid-matrix-given-row-and-column-sums",
    displayId: 1605,
    difficulty: 2,
  },
  {
    urlSlug: "find-servers-that-handled-most-number-of-requests",
    displayId: 1606,
    difficulty: 3,
  },
  {
    urlSlug:
      "alert-using-same-key-card-three-or-more-times-in-a-one-hour-period",
    displayId: 1604,
    difficulty: 2,
  },
  {
    urlSlug: "design-parking-system",
    displayId: 1603,
    difficulty: 1,
  },
  {
    urlSlug: "check-if-string-is-transformable-with-substring-sort-operations",
    displayId: 1585,
    difficulty: 3,
  },
  {
    urlSlug: "min-cost-to-connect-all-points",
    displayId: 1584,
    difficulty: 2,
  },
  {
    urlSlug: "count-unhappy-friends",
    displayId: 1583,
    difficulty: 2,
  },
  {
    urlSlug: "special-positions-in-a-binary-matrix",
    displayId: 1582,
    difficulty: 1,
  },
  {
    urlSlug: "put-boxes-into-the-warehouse-i",
    displayId: 1564,
    difficulty: 2,
  },
  {
    urlSlug: "remove-max-number-of-edges-to-keep-graph-fully-traversable",
    displayId: 1579,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-time-to-make-rope-colorful",
    displayId: 1578,
    difficulty: 2,
  },
  {
    urlSlug:
      "number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers",
    displayId: 1577,
    difficulty: 2,
  },
  {
    urlSlug: "replace-all-s-to-avoid-consecutive-repeating-characters",
    displayId: 1576,
    difficulty: 1,
  },
  {
    urlSlug: "strings-differ-by-one-character",
    displayId: 1554,
    difficulty: 2,
  },
  {
    urlSlug: "strange-printer-ii",
    displayId: 1591,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-sum-obtained-of-any-permutation",
    displayId: 1589,
    difficulty: 2,
  },
  {
    urlSlug: "make-sum-divisible-by-p",
    displayId: 1590,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-all-odd-length-subarrays",
    displayId: 1588,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-ways-to-reorder-array-to-get-same-bst",
    displayId: 1569,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-number-of-days-to-disconnect-island",
    displayId: 1568,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-length-of-subarray-with-positive-product",
    displayId: 1567,
    difficulty: 2,
  },
  {
    urlSlug: "detect-pattern-of-length-m-repeated-k-or-more-times",
    displayId: 1566,
    difficulty: 1,
  },
  {
    urlSlug: "the-most-similar-path-in-a-graph",
    displayId: 1548,
    difficulty: 3,
  },
  {
    urlSlug: "stone-game-v",
    displayId: 1563,
    difficulty: 3,
  },
  {
    urlSlug: "find-latest-group-of-size-m",
    displayId: 1562,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-coins-you-can-get",
    displayId: 1561,
    difficulty: 2,
  },
  {
    urlSlug: "most-visited-sector-in-a-circular-track",
    displayId: 1560,
    difficulty: 1,
  },
  {
    urlSlug: "guess-the-majority-in-a-hidden-array",
    displayId: 1538,
    difficulty: 2,
  },
  {
    urlSlug: "count-all-possible-routes",
    displayId: 1575,
    difficulty: 3,
  },
  {
    urlSlug: "shortest-subarray-to-be-removed-to-make-array-sorted",
    displayId: 1574,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-ways-to-split-a-string",
    displayId: 1573,
    difficulty: 2,
  },
  {
    urlSlug: "matrix-diagonal-sum",
    displayId: 1572,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-number-of-days-to-eat-n-oranges",
    displayId: 1553,
    difficulty: 3,
  },
  {
    urlSlug: "magnetic-force-between-two-balls",
    displayId: 1552,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-operations-to-make-array-equal",
    displayId: 1551,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-index-of-the-large-integer",
    displayId: 1533,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-cost-to-cut-a-stick",
    displayId: 1547,
    difficulty: 3,
  },
  {
    urlSlug: "find-longest-awesome-substring",
    displayId: 1542,
    difficulty: 3,
  },
  {
    urlSlug: "find-kth-bit-in-nth-binary-string",
    displayId: 1545,
    difficulty: 2,
  },
  {
    urlSlug: "make-the-string-great",
    displayId: 1544,
    difficulty: 1,
  },
  {
    urlSlug: "diameter-of-n-ary-tree",
    displayId: 1522,
    difficulty: 2,
  },
  {
    urlSlug: "detect-cycles-in-2d-grid",
    displayId: 1559,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-numbers-of-function-calls-to-make-target-array",
    displayId: 1558,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-vertices-to-reach-all-nodes",
    displayId: 1557,
    difficulty: 2,
  },
  {
    urlSlug: "thousand-separator",
    displayId: 1556,
    difficulty: 1,
  },
  {
    urlSlug: "get-the-maximum-score",
    displayId: 1537,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-swaps-to-arrange-a-binary-grid",
    displayId: 1536,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-winner-of-an-array-game",
    displayId: 1535,
    difficulty: 2,
  },
  {
    urlSlug: "count-good-triplets",
    displayId: 1534,
    difficulty: 1,
  },
  {
    urlSlug: "move-sub-tree-of-n-ary-tree",
    displayId: 1516,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-good-leaf-nodes-pairs",
    displayId: 1530,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-suffix-flips",
    displayId: 1529,
    difficulty: 2,
  },
  {
    urlSlug: "shuffle-string",
    displayId: 1528,
    difficulty: 1,
  },
  {
    urlSlug: "find-root-of-n-ary-tree",
    displayId: 1506,
    difficulty: 2,
  },
  {
    urlSlug:
      "maximum-number-of-non-overlapping-subarrays-with-sum-equals-target",
    displayId: 1546,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-insertions-to-balance-a-parentheses-string",
    displayId: 1541,
    difficulty: 2,
  },
  {
    urlSlug: "can-convert-string-in-k-moves",
    displayId: 1540,
    difficulty: 2,
  },
  {
    urlSlug: "kth-missing-positive-number",
    displayId: 1539,
    difficulty: 1,
  },
  {
    urlSlug: "find-a-value-of-a-mysterious-function-closest-to-target",
    displayId: 1521,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-number-of-non-overlapping-substrings",
    displayId: 1520,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-nodes-in-the-sub-tree-with-the-same-label",
    displayId: 1519,
    difficulty: 2,
  },
  {
    urlSlug: "water-bottles",
    displayId: 1518,
    difficulty: 1,
  },
  {
    urlSlug: "design-a-file-sharing-system",
    displayId: 1500,
    difficulty: 2,
  },
  {
    urlSlug: "best-position-for-a-service-centre",
    displayId: 1515,
    difficulty: 3,
  },
  {
    urlSlug: "string-compression-ii",
    displayId: 1531,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-substrings-with-only-1s",
    displayId: 1513,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-good-pairs",
    displayId: 1512,
    difficulty: 1,
  },
  {
    urlSlug: "clone-n-ary-tree",
    displayId: 1490,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-increments-on-subarrays-to-form-a-target-array",
    displayId: 1526,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-good-ways-to-split-a-string",
    displayId: 1525,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-sub-arrays-with-odd-sum",
    displayId: 1524,
    difficulty: 2,
  },
  {
    urlSlug: "count-odd-numbers-in-an-interval-range",
    displayId: 1523,
    difficulty: 1,
  },
  {
    urlSlug:
      "minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits",
    displayId: 1505,
    difficulty: 3,
  },
  {
    urlSlug: "count-submatrices-with-all-ones",
    displayId: 1504,
    difficulty: 2,
  },
  {
    urlSlug: "last-moment-before-all-ants-fall-out-of-a-plank",
    displayId: 1503,
    difficulty: 2,
  },
  {
    urlSlug: "can-make-arithmetic-progression-from-sequence",
    displayId: 1502,
    difficulty: 1,
  },
  {
    urlSlug: "clone-binary-tree-with-random-pointer",
    displayId: 1485,
    difficulty: 2,
  },
  {
    urlSlug: "max-value-of-equation",
    displayId: 1499,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-subsequences-that-satisfy-the-given-sum-condition",
    displayId: 1498,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-array-pairs-are-divisible-by-k",
    displayId: 1497,
    difficulty: 2,
  },
  {
    urlSlug: "path-crossing",
    displayId: 1496,
    difficulty: 1,
  },
  {
    urlSlug: "delete-n-nodes-after-m-nodes-of-a-linked-list",
    displayId: 1474,
    difficulty: 1,
  },
  {
    urlSlug: "stone-game-iv",
    displayId: 1510,
    difficulty: 3,
  },
  {
    urlSlug:
      "minimum-difference-between-largest-and-smallest-value-in-three-moves",
    displayId: 1509,
    difficulty: 2,
  },
  {
    urlSlug: "range-sum-of-sorted-subarray-sums",
    displayId: 1508,
    difficulty: 2,
  },
  {
    urlSlug: "find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree",
    displayId: 1489,
    difficulty: 3,
  },
  {
    urlSlug: "avoid-flood-in-the-city",
    displayId: 1488,
    difficulty: 2,
  },
  {
    urlSlug: "making-file-names-unique",
    displayId: 1487,
    difficulty: 2,
  },
  {
    urlSlug: "xor-operation-in-an-array",
    displayId: 1486,
    difficulty: 1,
  },
  {
    urlSlug: "find-all-the-lonely-nodes",
    displayId: 1469,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-number-of-days-to-make-m-bouquets",
    displayId: 1482,
    difficulty: 2,
  },
  {
    urlSlug: "least-number-of-unique-integers-after-k-removals",
    displayId: 1481,
    difficulty: 2,
  },
  {
    urlSlug: "running-sum-of-1d-array",
    displayId: 1480,
    difficulty: 1,
  },
  {
    urlSlug: "parallel-courses-ii",
    displayId: 1494,
    difficulty: 3,
  },
  {
    urlSlug: "longest-subarray-of-1s-after-deleting-one-element",
    displayId: 1493,
    difficulty: 2,
  },
  {
    urlSlug: "the-kth-factor-of-n",
    displayId: 1492,
    difficulty: 2,
  },
  {
    urlSlug: "average-salary-excluding-the-minimum-and-maximum-salary",
    displayId: 1491,
    difficulty: 1,
  },
  {
    urlSlug: "paint-house-iii",
    displayId: 1473,
    difficulty: 3,
  },
  {
    urlSlug: "design-browser-history",
    displayId: 1472,
    difficulty: 2,
  },
  {
    urlSlug: "the-k-strongest-values-in-an-array",
    displayId: 1471,
    difficulty: 2,
  },
  {
    urlSlug: "shuffle-the-array",
    displayId: 1470,
    difficulty: 1,
  },
  {
    urlSlug:
      "probability-of-a-two-boxes-having-the-same-number-of-distinct-balls",
    displayId: 1467,
    difficulty: 3,
  },
  {
    urlSlug: "reorder-routes-to-make-all-paths-lead-to-the-city-zero",
    displayId: 1466,
    difficulty: 2,
  },
  {
    urlSlug:
      "maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts",
    displayId: 1465,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-product-of-two-elements-in-an-array",
    displayId: 1464,
    difficulty: 1,
  },
  {
    urlSlug: "find-two-non-overlapping-sub-arrays-each-with-target-sum",
    displayId: 1477,
    difficulty: 2,
  },
  {
    urlSlug: "subrectangle-queries",
    displayId: 1476,
    difficulty: 2,
  },
  {
    urlSlug: "allocate-mailboxes",
    displayId: 1478,
    difficulty: 3,
  },
  {
    urlSlug: "final-prices-with-a-special-discount-in-a-shop",
    displayId: 1475,
    difficulty: 1,
  },
  {
    urlSlug: "max-dot-product-of-two-subsequences",
    displayId: 1458,
    difficulty: 3,
  },
  {
    urlSlug: "pseudo-palindromic-paths-in-a-binary-tree",
    displayId: 1457,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-vowels-in-a-substring-of-given-length",
    displayId: 1456,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",
    displayId: 1455,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-number-of-darts-inside-of-a-circular-dartboard",
    displayId: 1453,
    difficulty: 3,
  },
  {
    urlSlug:
      "people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list",
    displayId: 1452,
    difficulty: 2,
  },
  {
    urlSlug: "rearrange-words-in-a-sentence",
    displayId: 1451,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-students-doing-homework-at-a-given-time",
    displayId: 1450,
    difficulty: 1,
  },
  {
    urlSlug: "cherry-pickup-ii",
    displayId: 1463,
    difficulty: 3,
  },
  {
    urlSlug: "course-schedule-iv",
    displayId: 1462,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-a-string-contains-all-binary-codes-of-size-k",
    displayId: 1461,
    difficulty: 2,
  },
  {
    urlSlug: "make-two-arrays-equal-by-reversing-subarrays",
    displayId: 1460,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-ways-of-cutting-a-pizza",
    displayId: 1444,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-time-to-collect-all-apples-in-a-tree",
    displayId: 1443,
    difficulty: 2,
  },
  {
    urlSlug: "count-triplets-that-can-form-two-arrays-of-equal-xor",
    displayId: 1442,
    difficulty: 2,
  },
  {
    urlSlug: "build-an-array-with-stack-operations",
    displayId: 1441,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows",
    displayId: 1439,
    difficulty: 3,
  },
  {
    urlSlug:
      "longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit",
    displayId: 1438,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-all-1s-are-at-least-length-k-places-away",
    displayId: 1437,
    difficulty: 1,
  },
  {
    urlSlug: "destination-city",
    displayId: 1436,
    difficulty: 1,
  },
  {
    urlSlug: "form-largest-integer-with-digits-that-add-up-to-target",
    displayId: 1449,
    difficulty: 3,
  },
  {
    urlSlug: "count-good-nodes-in-binary-tree",
    displayId: 1448,
    difficulty: 2,
  },
  {
    urlSlug: "simplified-fractions",
    displayId: 1447,
    difficulty: 2,
  },
  {
    urlSlug: "consecutive-characters",
    displayId: 1446,
    difficulty: 1,
  },
  {
    urlSlug: "diagonal-traverse-ii",
    displayId: 1424,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-points-you-can-obtain-from-cards",
    displayId: 1423,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-score-after-splitting-a-string",
    displayId: 1422,
    difficulty: 1,
  },
  {
    urlSlug: "build-array-where-you-can-find-the-maximum-exactly-k-comparisons",
    displayId: 1420,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-number-of-frogs-croaking",
    displayId: 1419,
    difficulty: 2,
  },
  {
    urlSlug: "display-table-of-food-orders-in-a-restaurant",
    displayId: 1418,
    difficulty: 2,
  },
  {
    urlSlug: "reformat-the-string",
    displayId: 1417,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-ways-to-wear-different-hats-to-each-other",
    displayId: 1434,
    difficulty: 3,
  },
  {
    urlSlug: "check-if-a-string-can-break-another-string",
    displayId: 1433,
    difficulty: 2,
  },
  {
    urlSlug: "max-difference-you-can-get-from-changing-an-integer",
    displayId: 1432,
    difficulty: 2,
  },
  {
    urlSlug: "kids-with-the-greatest-number-of-candies",
    displayId: 1431,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-ways-to-paint-n-3-grid",
    displayId: 1411,
    difficulty: 3,
  },
  {
    urlSlug: "html-entity-parser",
    displayId: 1410,
    difficulty: 2,
  },
  {
    urlSlug: "queries-on-a-permutation-with-key",
    displayId: 1409,
    difficulty: 2,
  },
  {
    urlSlug: "string-matching-in-an-array",
    displayId: 1408,
    difficulty: 1,
  },
  {
    urlSlug: "stone-game-iii",
    displayId: 1406,
    difficulty: 3,
  },
  {
    urlSlug:
      "number-of-steps-to-reduce-a-number-in-binary-representation-to-one",
    displayId: 1404,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-subsequence-in-non-increasing-order",
    displayId: 1403,
    difficulty: 1,
  },
  {
    urlSlug: "restore-the-array",
    displayId: 1416,
    difficulty: 3,
  },
  {
    urlSlug: "the-k-th-lexicographical-string-of-all-happy-strings-of-length-n",
    displayId: 1415,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k",
    displayId: 1414,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-value-to-get-positive-step-by-step-sum",
    displayId: 1413,
    difficulty: 1,
  },
  {
    urlSlug: "find-all-good-strings",
    displayId: 1397,
    difficulty: 3,
  },
  {
    urlSlug: "design-underground-system",
    displayId: 1396,
    difficulty: 2,
  },
  {
    urlSlug: "count-number-of-teams",
    displayId: 1395,
    difficulty: 2,
  },
  {
    urlSlug: "find-lucky-integer-in-an-array",
    displayId: 1394,
    difficulty: 1,
  },
  {
    urlSlug: "longest-happy-prefix",
    displayId: 1392,
    difficulty: 3,
  },
  {
    urlSlug: "check-if-there-is-a-valid-path-in-a-grid",
    displayId: 1391,
    difficulty: 2,
  },
  {
    urlSlug: "create-target-array-in-the-given-order",
    displayId: 1389,
    difficulty: 1,
  },
  {
    urlSlug: "reducing-dishes",
    displayId: 1402,
    difficulty: 3,
  },
  {
    urlSlug: "construct-k-palindrome-strings",
    displayId: 1400,
    difficulty: 2,
  },
  {
    urlSlug: "circle-and-rectangle-overlapping",
    displayId: 1401,
    difficulty: 2,
  },
  {
    urlSlug: "count-largest-group",
    displayId: 1399,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-performance-of-a-team",
    displayId: 1383,
    difficulty: 3,
  },
  {
    urlSlug:
      "find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree",
    displayId: 1379,
    difficulty: 1,
  },
  {
    urlSlug: "design-a-stack-with-increment-operation",
    displayId: 1381,
    difficulty: 2,
  },
  {
    urlSlug: "lucky-numbers-in-a-matrix",
    displayId: 1380,
    difficulty: 1,
  },
  {
    urlSlug: "frog-position-after-t-seconds",
    displayId: 1377,
    difficulty: 3,
  },
  {
    urlSlug: "time-needed-to-inform-all-employees",
    displayId: 1376,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-times-binary-string-is-prefix-aligned",
    displayId: 1375,
    difficulty: 2,
  },
  {
    urlSlug: "generate-a-string-with-characters-that-have-odd-counts",
    displayId: 1374,
    difficulty: 1,
  },
  {
    urlSlug: "pizza-with-3n-slices",
    displayId: 1388,
    difficulty: 3,
  },
  {
    urlSlug: "sort-integers-by-the-power-value",
    displayId: 1387,
    difficulty: 2,
  },
  {
    urlSlug: "cinema-seat-allocation",
    displayId: 1386,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-distance-value-between-two-arrays",
    displayId: 1385,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-cost-to-make-at-least-one-valid-path-in-a-grid",
    displayId: 1368,
    difficulty: 3,
  },
  {
    urlSlug: "linked-list-in-binary-tree",
    displayId: 1367,
    difficulty: 2,
  },
  {
    urlSlug: "rank-teams-by-votes",
    displayId: 1366,
    difficulty: 2,
  },
  {
    urlSlug: "how-many-numbers-are-smaller-than-the-current-number",
    displayId: 1365,
    difficulty: 1,
  },
  {
    urlSlug: "construct-target-array-with-multiple-sums",
    displayId: 1354,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-number-of-events-that-can-be-attended",
    displayId: 1353,
    difficulty: 2,
  },
  {
    urlSlug: "product-of-the-last-k-numbers",
    displayId: 1352,
    difficulty: 2,
  },
  {
    urlSlug: "count-negative-numbers-in-a-sorted-matrix",
    displayId: 1351,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-sum-bst-in-binary-tree",
    displayId: 1373,
    difficulty: 3,
  },
  {
    urlSlug: "longest-zigzag-path-in-a-binary-tree",
    displayId: 1372,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-longest-substring-containing-vowels-in-even-counts",
    displayId: 1371,
    difficulty: 2,
  },
  {
    urlSlug: "increasing-decreasing-string",
    displayId: 1370,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-students-taking-exam",
    displayId: 1349,
    difficulty: 3,
  },
  {
    urlSlug: "tweet-counts-per-frequency",
    displayId: 1348,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-steps-to-make-two-strings-anagram",
    displayId: 1347,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-n-and-its-double-exist",
    displayId: 1346,
    difficulty: 1,
  },
  {
    urlSlug: "jump-game-v",
    displayId: 1340,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-product-of-splitted-binary-tree",
    displayId: 1339,
    difficulty: 2,
  },
  {
    urlSlug: "reduce-array-size-to-the-half",
    displayId: 1338,
    difficulty: 2,
  },
  {
    urlSlug: "the-k-weakest-rows-in-a-matrix",
    displayId: 1337,
    difficulty: 1,
  },
  {
    urlSlug: "count-all-valid-pickup-and-delivery-options",
    displayId: 1359,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-substrings-containing-all-three-characters",
    displayId: 1358,
    difficulty: 2,
  },
  {
    urlSlug: "apply-discount-every-n-orders",
    displayId: 1357,
    difficulty: 2,
  },
  {
    urlSlug: "sort-integers-by-the-number-of-1-bits",
    displayId: 1356,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-difficulty-of-a-job-schedule",
    displayId: 1335,
    difficulty: 3,
  },
  {
    urlSlug:
      "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
    displayId: 1334,
    difficulty: 2,
  },
  {
    urlSlug: "filter-restaurants-by-vegan-friendly-price-and-distance",
    displayId: 1333,
    difficulty: 2,
  },
  {
    urlSlug: "remove-palindromic-subsequences",
    displayId: 1332,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-number-of-taps-to-open-to-water-a-garden",
    displayId: 1326,
    difficulty: 3,
  },
  {
    urlSlug: "delete-leaves-with-a-given-value",
    displayId: 1325,
    difficulty: 2,
  },
  {
    urlSlug: "print-words-vertically",
    displayId: 1324,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-69-number",
    displayId: 1323,
    difficulty: 1,
  },
  {
    urlSlug: "jump-game-iv",
    displayId: 1345,
    difficulty: 3,
  },
  {
    urlSlug: "angle-between-hands-of-a-clock",
    displayId: 1344,
    difficulty: 2,
  },
  {
    urlSlug:
      "number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold",
    displayId: 1343,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-steps-to-reduce-a-number-to-zero",
    displayId: 1342,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-distance-to-type-a-word-using-two-fingers",
    displayId: 1320,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-operations-to-make-network-connected",
    displayId: 1319,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-flips-to-make-a-or-b-equal-to-c",
    displayId: 1318,
    difficulty: 2,
  },
  {
    urlSlug: "convert-integer-to-the-sum-of-two-no-zero-integers",
    displayId: 1317,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-insertion-steps-to-make-a-string-palindrome",
    displayId: 1312,
    difficulty: 3,
  },
  {
    urlSlug: "get-watched-videos-by-your-friends",
    displayId: 1311,
    difficulty: 2,
  },
  {
    urlSlug: "xor-queries-of-a-subarray",
    displayId: 1310,
    difficulty: 2,
  },
  {
    urlSlug: "decrypt-string-from-alphabet-to-integer-mapping",
    displayId: 1309,
    difficulty: 1,
  },
  {
    urlSlug: "encrypt-and-decrypt-strings",
    displayId: 2227,
    difficulty: 3,
  },
  {
    urlSlug:
      "check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree",
    displayId: 1430,
    difficulty: 2,
  },
  {
    urlSlug: "all-ancestors-of-a-node-in-a-directed-acyclic-graph",
    displayId: 2192,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-k-beauty-of-a-number",
    displayId: 2269,
    difficulty: 1,
  },
  {
    urlSlug: "verbal-arithmetic-puzzle",
    displayId: 1307,
    difficulty: 3,
  },
  {
    urlSlug: "jump-game-iii",
    displayId: 1306,
    difficulty: 2,
  },
  {
    urlSlug: "all-elements-in-two-binary-search-trees",
    displayId: 1305,
    difficulty: 2,
  },
  {
    urlSlug: "find-n-unique-integers-sum-up-to-zero",
    displayId: 1304,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-candies-you-can-get-from-boxes",
    displayId: 1298,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-number-of-occurrences-of-a-substring",
    displayId: 1297,
    difficulty: 2,
  },
  {
    urlSlug: "divide-array-in-sets-of-k-consecutive-numbers",
    displayId: 1296,
    difficulty: 2,
  },
  {
    urlSlug: "find-numbers-with-even-number-of-digits",
    displayId: 1295,
    difficulty: 1,
  },
  {
    urlSlug: "make-array-non-decreasing-or-non-increasing",
    displayId: 2263,
    difficulty: 3,
  },
  {
    urlSlug: "fair-distribution-of-cookies",
    displayId: 2305,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-an-array-is-consecutive",
    displayId: 2229,
    difficulty: 1,
  },
  {
    urlSlug: "shortest-path-in-a-grid-with-obstacles-elimination",
    displayId: 1293,
    difficulty: 3,
  },
  {
    urlSlug:
      "maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold",
    displayId: 1292,
    difficulty: 2,
  },
  {
    urlSlug: "convert-binary-number-in-a-linked-list-to-integer",
    displayId: 1290,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix",
    displayId: 1284,
    difficulty: 3,
  },
  {
    urlSlug: "find-the-smallest-divisor-given-a-threshold",
    displayId: 1283,
    difficulty: 2,
  },
  {
    urlSlug: "group-the-people-given-the-group-size-they-belong-to",
    displayId: 1282,
    difficulty: 2,
  },
  {
    urlSlug: "subtract-the-product-and-sum-of-digits-of-an-integer",
    displayId: 1281,
    difficulty: 1,
  },
  {
    urlSlug: "print-immutable-linked-list-in-reverse",
    displayId: 1265,
    difficulty: 2,
  },
  {
    urlSlug: "palindrome-partitioning-iii",
    displayId: 1278,
    difficulty: 3,
  },
  {
    urlSlug: "count-square-submatrices-with-all-ones",
    displayId: 1277,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-burgers-with-no-waste-of-ingredients",
    displayId: 1276,
    difficulty: 2,
  },
  {
    urlSlug: "find-winner-on-a-tic-tac-toe-game",
    displayId: 1275,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-ways-to-stay-in-the-same-place-after-some-steps",
    displayId: 1269,
    difficulty: 3,
  },
  {
    urlSlug: "search-suggestions-system",
    displayId: 1268,
    difficulty: 2,
  },
  {
    urlSlug: "count-servers-that-communicate",
    displayId: 1267,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-time-visiting-all-points",
    displayId: 1266,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-path-cost-in-a-grid",
    displayId: 2304,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-value-of-k-coins-from-piles",
    displayId: 2218,
    difficulty: 3,
  },
  {
    urlSlug: "find-the-difference-of-two-arrays",
    displayId: 2215,
    difficulty: 1,
  },
  {
    urlSlug: "counting-elements",
    displayId: 1426,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-moves-to-move-a-box-to-their-target-location",
    displayId: 1263,
    difficulty: 3,
  },
  {
    urlSlug: "greatest-sum-divisible-by-three",
    displayId: 1262,
    difficulty: 2,
  },
  {
    urlSlug: "find-elements-in-a-contaminated-binary-tree",
    displayId: 1261,
    difficulty: 2,
  },
  {
    urlSlug: "shift-2d-grid",
    displayId: 1260,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-ways-to-build-house-of-cards",
    displayId: 2189,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-font-to-fit-a-sentence-in-a-screen",
    displayId: 1618,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-single-divisor-triplets",
    displayId: 2198,
    difficulty: 2,
  },
  {
    urlSlug: "calculate-amount-paid-in-taxes",
    displayId: 2303,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-score-words-formed-by-letters",
    displayId: 1255,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-closed-islands",
    displayId: 1254,
    difficulty: 2,
  },
  {
    urlSlug: "reconstruct-a-2-row-binary-matrix",
    displayId: 1253,
    difficulty: 2,
  },
  {
    urlSlug: "cells-with-odd-values-in-a-matrix",
    displayId: 1252,
    difficulty: 1,
  },
  {
    urlSlug: "selling-pieces-of-wood",
    displayId: 2312,
    difficulty: 3,
  },
  {
    urlSlug: "find-palindrome-with-fixed-length",
    displayId: 2217,
    difficulty: 2,
  },
  {
    urlSlug: "leftmost-column-with-at-least-a-one",
    displayId: 1428,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-it-is-a-good-array",
    displayId: 1250,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-remove-to-make-valid-parentheses",
    displayId: 1249,
    difficulty: 2,
  },
  {
    urlSlug: "count-number-of-nice-subarrays",
    displayId: 1248,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-swaps-to-make-strings-equal",
    displayId: 1247,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-height-by-stacking-cuboids",
    displayId: 1691,
    difficulty: 3,
  },
  {
    urlSlug: "first-unique-number",
    displayId: 1429,
    difficulty: 2,
  },
  {
    urlSlug: "tuple-with-same-product",
    displayId: 1726,
    difficulty: 2,
  },
  {
    urlSlug: "greatest-english-letter-in-upper-and-lower-case",
    displayId: 2309,
    difficulty: 1,
  },
  {
    urlSlug: "airplane-seat-assignment-probability",
    displayId: 1227,
    difficulty: 2,
  },
  {
    urlSlug: "tiling-a-rectangle-with-the-fewest-squares",
    displayId: 1240,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-length-of-a-concatenated-string-with-unique-characters",
    displayId: 1239,
    difficulty: 2,
  },
  {
    urlSlug: "circular-permutation-in-binary-representation",
    displayId: 1238,
    difficulty: 2,
  },
  {
    urlSlug: "find-positive-integer-solution-for-a-given-equation",
    displayId: 1237,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-moves-to-make-palindrome",
    displayId: 2193,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-deletions-to-make-array-beautiful",
    displayId: 2216,
    difficulty: 2,
  },
  {
    urlSlug: "find-players-with-zero-or-one-losses",
    displayId: 2225,
    difficulty: 2,
  },
  {
    urlSlug: "find-resultant-array-after-removing-anagrams",
    displayId: 2273,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-profit-in-job-scheduling",
    displayId: 1235,
    difficulty: 3,
  },
  {
    urlSlug: "replace-the-substring-for-balanced-string",
    displayId: 1234,
    difficulty: 2,
  },
  {
    urlSlug: "remove-sub-folders-from-the-filesystem",
    displayId: 1233,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-it-is-a-straight-line",
    displayId: 1232,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-score-of-spliced-array",
    displayId: 2321,
    difficulty: 3,
  },
  {
    urlSlug: "distance-to-a-cycle-in-undirected-graph",
    displayId: 2204,
    difficulty: 3,
  },
  {
    urlSlug: "maximize-the-topmost-element-after-k-moves",
    displayId: 2202,
    difficulty: 2,
  },
  {
    urlSlug: "perform-string-shifts",
    displayId: 1427,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-equal-frequency",
    displayId: 1224,
    difficulty: 3,
  },
  {
    urlSlug: "dice-roll-simulation",
    displayId: 1223,
    difficulty: 3,
  },
  {
    urlSlug: "queens-that-can-attack-the-king",
    displayId: 1222,
    difficulty: 2,
  },
  {
    urlSlug: "split-a-string-in-balanced-strings",
    displayId: 1221,
    difficulty: 1,
  },
  {
    urlSlug: "design-skiplist",
    displayId: 1206,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-product-of-the-length-of-two-palindromic-substrings",
    displayId: 1960,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-candies-allocated-to-k-children",
    displayId: 2226,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-numbers-with-units-digit-k",
    displayId: 2310,
    difficulty: 2,
  },
  {
    urlSlug: "sort-the-jumbled-numbers",
    displayId: 2191,
    difficulty: 2,
  },
  {
    urlSlug: "count-vowels-permutation",
    displayId: 1220,
    difficulty: 3,
  },
  {
    urlSlug: "path-with-maximum-gold",
    displayId: 1219,
    difficulty: 2,
  },
  {
    urlSlug: "longest-arithmetic-subsequence-of-given-difference",
    displayId: 1218,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-cost-to-move-chips-to-the-same-position",
    displayId: 1217,
    difficulty: 1,
  },
  {
    urlSlug: "sum-of-floored-pairs",
    displayId: 1862,
    difficulty: 3,
  },
  {
    urlSlug: "path-with-maximum-probability",
    displayId: 1514,
    difficulty: 2,
  },
  {
    urlSlug: "where-will-the-ball-fall",
    displayId: 1706,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-moves-to-reach-target-with-rotations",
    displayId: 1210,
    difficulty: 3,
  },
  {
    urlSlug: "get-equal-substrings-within-budget",
    displayId: 1208,
    difficulty: 2,
  },
  {
    urlSlug: "remove-all-adjacent-duplicates-in-string-ii",
    displayId: 1209,
    difficulty: 2,
  },
  {
    urlSlug: "unique-number-of-occurrences",
    displayId: 1207,
    difficulty: 1,
  },
  {
    urlSlug: "count-ways-to-build-rooms-in-an-ant-colony",
    displayId: 1916,
    difficulty: 3,
  },
  {
    urlSlug: "count-artifacts-that-can-be-extracted",
    displayId: 2201,
    difficulty: 2,
  },
  {
    urlSlug: "largest-magic-square",
    displayId: 1895,
    difficulty: 2,
  },
  {
    urlSlug: "watering-plants",
    displayId: 2079,
    difficulty: 2,
  },
  {
    urlSlug: "sort-items-by-groups-respecting-dependencies",
    displayId: 1203,
    difficulty: 3,
  },
  {
    urlSlug: "smallest-string-with-swaps",
    displayId: 1202,
    difficulty: 2,
  },
  {
    urlSlug: "ugly-number-iii",
    displayId: 1201,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-absolute-difference",
    displayId: 1200,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-visible-people-in-a-queue",
    displayId: 1944,
    difficulty: 3,
  },
  {
    urlSlug: "longest-happy-string",
    displayId: 1405,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-moves-to-reach-target-score",
    displayId: 2139,
    difficulty: 2,
  },
  {
    urlSlug: "delete-characters-to-make-fancy-string",
    displayId: 1957,
    difficulty: 1,
  },
  {
    urlSlug: "critical-connections-in-a-network",
    displayId: 1192,
    difficulty: 3,
  },
  {
    urlSlug: "k-concatenation-maximum-sum",
    displayId: 1191,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-substrings-between-each-pair-of-parentheses",
    displayId: 1190,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-balloons",
    displayId: 1189,
    difficulty: 1,
  },
  {
    urlSlug: "kth-ancestor-of-a-tree-node",
    displayId: 1483,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-garden-perimeter-to-collect-enough-apples",
    displayId: 1954,
    difficulty: 2,
  },
  {
    urlSlug: "range-frequency-queries",
    displayId: 2080,
    difficulty: 2,
  },
  {
    urlSlug: "three-consecutive-odds",
    displayId: 1550,
    difficulty: 1,
  },
  {
    urlSlug: "make-array-strictly-increasing",
    displayId: 1187,
    difficulty: 3,
  },
  {
    urlSlug: "day-of-the-week",
    displayId: 1185,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-subarray-sum-with-one-deletion",
    displayId: 1186,
    difficulty: 2,
  },
  {
    urlSlug: "distance-between-bus-stops",
    displayId: 1184,
    difficulty: 1,
  },
  {
    urlSlug: "constrained-subsequence-sum",
    displayId: 1425,
    difficulty: 3,
  },
  {
    urlSlug: "balance-a-binary-search-tree",
    displayId: 1382,
    difficulty: 2,
  },
  {
    urlSlug: "four-divisors",
    displayId: 1390,
    difficulty: 2,
  },
  {
    urlSlug: "reformat-date",
    displayId: 1507,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-valid-words-for-each-puzzle",
    displayId: 1178,
    difficulty: 3,
  },
  {
    urlSlug: "can-make-palindrome-from-substring",
    displayId: 1177,
    difficulty: 2,
  },
  {
    urlSlug: "diet-plan-performance",
    displayId: 1176,
    difficulty: 1,
  },
  {
    urlSlug: "prime-arrangements",
    displayId: 1175,
    difficulty: 1,
  },
  {
    urlSlug: "largest-multiple-of-three",
    displayId: 1363,
    difficulty: 3,
  },
  {
    urlSlug: "closest-divisors",
    displayId: 1362,
    difficulty: 2,
  },
  {
    urlSlug: "validate-binary-tree-nodes",
    displayId: 1361,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-days-between-two-dates",
    displayId: 1360,
    difficulty: 1,
  },
  {
    urlSlug: "compare-strings-by-frequency-of-the-smallest-character",
    displayId: 1170,
    difficulty: 2,
  },
  {
    urlSlug: "invalid-transactions",
    displayId: 1169,
    difficulty: 2,
  },
  {
    urlSlug: "web-crawler",
    displayId: 1236,
    difficulty: 2,
  },
  {
    urlSlug: "dinner-plate-stacks",
    displayId: 1172,
    difficulty: 3,
  },
  {
    urlSlug: "remove-zero-sum-consecutive-nodes-from-linked-list",
    displayId: 1171,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-number-of-words-you-can-type",
    displayId: 1935,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-dice-rolls-with-target-sum",
    displayId: 1155,
    difficulty: 2,
  },
  {
    urlSlug: "online-majority-element-in-subarray",
    displayId: 1157,
    difficulty: 3,
  },
  {
    urlSlug: "swap-for-longest-repeated-character-substring",
    displayId: 1156,
    difficulty: 2,
  },
  {
    urlSlug: "day-of-the-year",
    displayId: 1154,
    difficulty: 1,
  },
  {
    urlSlug: "rank-transform-of-a-matrix",
    displayId: 1632,
    difficulty: 3,
  },
  {
    urlSlug: "rank-transform-of-an-array",
    displayId: 1331,
    difficulty: 1,
  },
  {
    urlSlug: "reverse-subarray-to-maximize-array-value",
    displayId: 1330,
    difficulty: 3,
  },
  {
    urlSlug: "deepest-leaves-sum",
    displayId: 1302,
    difficulty: 2,
  },
  {
    urlSlug: "sort-the-matrix-diagonally",
    displayId: 1329,
    difficulty: 2,
  },
  {
    urlSlug: "break-a-palindrome",
    displayId: 1328,
    difficulty: 2,
  },
  {
    urlSlug: "longest-chunked-palindrome-decomposition",
    displayId: 1147,
    difficulty: 3,
  },
  {
    urlSlug: "longest-common-subsequence",
    displayId: 1143,
    difficulty: 2,
  },
  {
    urlSlug: "snapshot-array",
    displayId: 1146,
    difficulty: 2,
  },
  {
    urlSlug: "binary-tree-coloring-game",
    displayId: 1145,
    difficulty: 2,
  },
  {
    urlSlug: "decrease-elements-to-make-array-zigzag",
    displayId: 1144,
    difficulty: 2,
  },
  {
    urlSlug: "distinct-echo-substrings",
    displayId: 1316,
    difficulty: 3,
  },
  {
    urlSlug: "sum-of-nodes-with-even-valued-grandparent",
    displayId: 1315,
    difficulty: 2,
  },
  {
    urlSlug: "matrix-block-sum",
    displayId: 1314,
    difficulty: 2,
  },
  {
    urlSlug: "decompress-run-length-encoded-list",
    displayId: 1313,
    difficulty: 1,
  },
  {
    urlSlug: "stone-game-ii",
    displayId: 1140,
    difficulty: 2,
  },
  {
    urlSlug: "largest-1-bordered-square",
    displayId: 1139,
    difficulty: 2,
  },
  {
    urlSlug: "alphabet-board-path",
    displayId: 1138,
    difficulty: 2,
  },
  {
    urlSlug: "n-th-tribonacci-number",
    displayId: 1137,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-paths-with-max-score",
    displayId: 1301,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-ships-in-a-rectangle",
    displayId: 1274,
    difficulty: 3,
  },
  {
    urlSlug: "sum-of-mutated-array-closest-to-target",
    displayId: 1300,
    difficulty: 2,
  },
  {
    urlSlug: "replace-elements-with-greatest-element-on-right-side",
    displayId: 1299,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-of-absolute-value-expression",
    displayId: 1131,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-path-with-alternating-colors",
    displayId: 1129,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-cost-tree-from-leaf-values",
    displayId: 1130,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-equivalent-domino-pairs",
    displayId: 1128,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-falling-path-sum-ii",
    displayId: 1289,
    difficulty: 3,
  },
  {
    urlSlug: "graph-connectivity-with-threshold",
    displayId: 1627,
    difficulty: 3,
  },
  {
    urlSlug: "remove-covered-intervals",
    displayId: 1288,
    difficulty: 2,
  },
  {
    urlSlug: "element-appearing-more-than-25-in-sorted-array",
    displayId: 1287,
    difficulty: 1,
  },
  {
    urlSlug: "smallest-sufficient-team",
    displayId: 1125,
    difficulty: 3,
  },
  {
    urlSlug: "longest-well-performing-interval",
    displayId: 1124,
    difficulty: 2,
  },
  {
    urlSlug: "lowest-common-ancestor-of-deepest-leaves",
    displayId: 1123,
    difficulty: 2,
  },
  {
    urlSlug: "relative-sort-array",
    displayId: 1122,
    difficulty: 1,
  },
  {
    urlSlug: "handshakes-that-dont-cross",
    displayId: 1259,
    difficulty: 3,
  },
  {
    urlSlug: "sequential-digits",
    displayId: 1291,
    difficulty: 2,
  },
  {
    urlSlug: "iterator-for-combination",
    displayId: 1286,
    difficulty: 2,
  },
  {
    urlSlug: "mean-of-array-after-removing-some-elements",
    displayId: 1619,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-nesting-depth-of-two-valid-parentheses-strings",
    displayId: 1111,
    difficulty: 2,
  },
  {
    urlSlug: "delete-nodes-and-return-forest",
    displayId: 1110,
    difficulty: 2,
  },
  {
    urlSlug: "corporate-flight-bookings",
    displayId: 1109,
    difficulty: 2,
  },
  {
    urlSlug: "defanging-an-ip-address",
    displayId: 1108,
    difficulty: 1,
  },
  {
    urlSlug: "palindrome-removal",
    displayId: 1246,
    difficulty: 3,
  },
  {
    urlSlug: "delete-tree-nodes",
    displayId: 1273,
    difficulty: 2,
  },
  {
    urlSlug: "remove-interval",
    displayId: 1272,
    difficulty: 2,
  },
  {
    urlSlug: "hexspeak",
    displayId: 1271,
    difficulty: 1,
  },
  {
    urlSlug: "parsing-a-boolean-expression",
    displayId: 1106,
    difficulty: 3,
  },
  {
    urlSlug: "filling-bookcase-shelves",
    displayId: 1105,
    difficulty: 2,
  },
  {
    urlSlug: "distribute-candies-to-people",
    displayId: 1103,
    difficulty: 1,
  },
  {
    urlSlug: "path-in-zigzag-labelled-binary-tree",
    displayId: 1104,
    difficulty: 2,
  },
  {
    urlSlug: "divide-chocolate",
    displayId: 1231,
    difficulty: 3,
  },
  {
    urlSlug: "synonymous-sentences",
    displayId: 1258,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-common-region",
    displayId: 1257,
    difficulty: 2,
  },
  {
    urlSlug: "encode-number",
    displayId: 1256,
    difficulty: 2,
  },
  {
    urlSlug: "brace-expansion-ii",
    displayId: 1096,
    difficulty: 3,
  },
  {
    urlSlug: "find-in-mountain-array",
    displayId: 1095,
    difficulty: 3,
  },
  {
    urlSlug: "car-pooling",
    displayId: 1094,
    difficulty: 2,
  },
  {
    urlSlug: "statistics-from-a-large-sample",
    displayId: 1093,
    difficulty: 2,
  },
  {
    urlSlug: "valid-palindrome-iii",
    displayId: 1216,
    difficulty: 3,
  },
  {
    urlSlug: "tree-diameter",
    displayId: 1245,
    difficulty: 2,
  },
  {
    urlSlug: "design-a-leaderboard",
    displayId: 1244,
    difficulty: 2,
  },
  {
    urlSlug: "array-transformation",
    displayId: 1243,
    difficulty: 1,
  },
  {
    urlSlug: "shortest-path-in-binary-matrix",
    displayId: 1091,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-common-supersequence",
    displayId: 1092,
    difficulty: 3,
  },
  {
    urlSlug: "largest-values-from-labels",
    displayId: 1090,
    difficulty: 2,
  },
  {
    urlSlug: "duplicate-zeros",
    displayId: 1089,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-time-to-build-blocks",
    displayId: 1199,
    difficulty: 3,
  },
  {
    urlSlug: "toss-strange-coins",
    displayId: 1230,
    difficulty: 2,
  },
  {
    urlSlug: "meeting-scheduler",
    displayId: 1229,
    difficulty: 2,
  },
  {
    urlSlug: "missing-number-in-arithmetic-progression",
    displayId: 1228,
    difficulty: 1,
  },
  {
    urlSlug: "letter-tile-possibilities",
    displayId: 1079,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-subsequence-of-distinct-characters",
    displayId: 1081,
    difficulty: 2,
  },
  {
    urlSlug: "insufficient-nodes-in-root-to-leaf-paths",
    displayId: 1080,
    difficulty: 2,
  },
  {
    urlSlug: "occurrences-after-bigram",
    displayId: 1078,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-number-of-ones",
    displayId: 1183,
    difficulty: 3,
  },
  {
    urlSlug: "stepping-numbers",
    displayId: 1215,
    difficulty: 2,
  },
  {
    urlSlug: "two-sum-bsts",
    displayId: 1214,
    difficulty: 2,
  },
  {
    urlSlug: "intersection-of-three-sorted-arrays",
    displayId: 1213,
    difficulty: 1,
  },
  {
    urlSlug: "adding-two-negabinary-numbers",
    displayId: 1073,
    difficulty: 2,
  },
  {
    urlSlug: "flip-columns-for-maximum-number-of-equal-rows",
    displayId: 1072,
    difficulty: 2,
  },
  {
    urlSlug: "greatest-common-divisor-of-strings",
    displayId: 1071,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-submatrices-that-sum-to-target",
    displayId: 1074,
    difficulty: 3,
  },
  {
    urlSlug: "optimize-water-distribution-in-a-village",
    displayId: 1168,
    difficulty: 3,
  },
  {
    urlSlug: "find-smallest-common-element-in-all-rows",
    displayId: 1198,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-knight-moves",
    displayId: 1197,
    difficulty: 2,
  },
  {
    urlSlug: "how-many-apples-can-you-put-into-the-basket",
    displayId: 1196,
    difficulty: 1,
  },
  {
    urlSlug: "distant-barcodes",
    displayId: 1054,
    difficulty: 2,
  },
  {
    urlSlug: "previous-permutation-with-one-swap",
    displayId: 1053,
    difficulty: 2,
  },
  {
    urlSlug: "grumpy-bookstore-owner",
    displayId: 1052,
    difficulty: 2,
  },
  {
    urlSlug: "height-checker",
    displayId: 1051,
    difficulty: 1,
  },
  {
    urlSlug: "shortest-distance-to-target-color",
    displayId: 1182,
    difficulty: 2,
  },
  {
    urlSlug: "last-substring-in-lexicographical-order",
    displayId: 1163,
    difficulty: 3,
  },
  {
    urlSlug: "before-and-after-puzzle",
    displayId: 1181,
    difficulty: 2,
  },
  {
    urlSlug: "count-substrings-with-only-one-distinct-letter",
    displayId: 1180,
    difficulty: 1,
  },
  {
    urlSlug: "last-stone-weight-ii",
    displayId: 1049,
    difficulty: 2,
  },
  {
    urlSlug: "longest-string-chain",
    displayId: 1048,
    difficulty: 2,
  },
  {
    urlSlug: "remove-all-adjacent-duplicates-in-string",
    displayId: 1047,
    difficulty: 1,
  },
  {
    urlSlug: "last-stone-weight",
    displayId: 1046,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-cost-to-connect-sticks",
    displayId: 1167,
    difficulty: 2,
  },
  {
    urlSlug: "design-file-system",
    displayId: 1166,
    difficulty: 2,
  },
  {
    urlSlug: "string-transforms-into-another-string",
    displayId: 1153,
    difficulty: 3,
  },
  {
    urlSlug: "single-row-keyboard",
    displayId: 1165,
    difficulty: 1,
  },
  {
    urlSlug: "longest-duplicate-substring",
    displayId: 1044,
    difficulty: 3,
  },
  {
    urlSlug: "partition-array-for-maximum-sum",
    displayId: 1043,
    difficulty: 2,
  },
  {
    urlSlug: "flower-planting-with-no-adjacent",
    displayId: 1042,
    difficulty: 2,
  },
  {
    urlSlug: "robot-bounded-in-circle",
    displayId: 1041,
    difficulty: 2,
  },
  {
    urlSlug: "divide-array-into-increasing-sequences",
    displayId: 1121,
    difficulty: 3,
  },
  {
    urlSlug: "as-far-from-land-as-possible",
    displayId: 1162,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-level-sum-of-a-binary-tree",
    displayId: 1161,
    difficulty: 2,
  },
  {
    urlSlug: "valid-boomerang",
    displayId: 1037,
    difficulty: 1,
  },
  {
    urlSlug: "binary-search-tree-to-greater-sum-tree",
    displayId: 1038,
    difficulty: 2,
  },
  {
    urlSlug: "moving-stones-until-consecutive-ii",
    displayId: 1040,
    difficulty: 2,
  },
  {
    urlSlug: "find-words-that-can-be-formed-by-characters",
    displayId: 1160,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-score-triangulation-of-polygon",
    displayId: 1039,
    difficulty: 2,
  },
  {
    urlSlug: "analyze-user-website-visit-pattern",
    displayId: 1152,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-swaps-to-group-all-1s-together",
    displayId: 1151,
    difficulty: 2,
  },
  {
    urlSlug: "escape-a-large-maze",
    displayId: 1036,
    difficulty: 3,
  },
  {
    urlSlug: "uncrossed-lines",
    displayId: 1035,
    difficulty: 2,
  },
  {
    urlSlug: "coloring-a-border",
    displayId: 1034,
    difficulty: 2,
  },
  {
    urlSlug: "moving-stones-until-consecutive",
    displayId: 1033,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-a-number-is-majority-element-in-a-sorted-array",
    displayId: 1150,
    difficulty: 1,
  },
  {
    urlSlug: "parallel-courses",
    displayId: 1136,
    difficulty: 2,
  },
  {
    urlSlug: "connecting-cities-with-minimum-cost",
    displayId: 1135,
    difficulty: 2,
  },
  {
    urlSlug: "path-with-maximum-minimum-value",
    displayId: 1102,
    difficulty: 2,
  },
  {
    urlSlug: "largest-unique-number",
    displayId: 1133,
    difficulty: 1,
  },
  {
    urlSlug: "stream-of-characters",
    displayId: 1032,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-sum-of-two-non-overlapping-subarrays",
    displayId: 1031,
    difficulty: 2,
  },
  {
    urlSlug: "two-city-scheduling",
    displayId: 1029,
    difficulty: 2,
  },
  {
    urlSlug: "matrix-cells-in-distance-order",
    displayId: 1030,
    difficulty: 1,
  },
  {
    urlSlug: "recover-a-tree-from-preorder-traversal",
    displayId: 1028,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-difference-between-node-and-ancestor",
    displayId: 1026,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-average-subtree",
    displayId: 1120,
    difficulty: 2,
  },
  {
    urlSlug: "armstrong-number",
    displayId: 1134,
    difficulty: 1,
  },
  {
    urlSlug: "remove-vowels-from-a-string",
    displayId: 1119,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-days-in-a-month",
    displayId: 1118,
    difficulty: 1,
  },
  {
    urlSlug: "longest-arithmetic-subsequence",
    displayId: 1027,
    difficulty: 2,
  },
  {
    urlSlug: "divisor-game",
    displayId: 1025,
    difficulty: 1,
  },
  {
    urlSlug: "the-earliest-moment-when-everyone-become-friends",
    displayId: 1101,
    difficulty: 2,
  },
  {
    urlSlug: "find-k-length-substrings-with-no-repeated-characters",
    displayId: 1100,
    difficulty: 2,
  },
  {
    urlSlug: "two-sum-less-than-k",
    displayId: 1099,
    difficulty: 1,
  },
  {
    urlSlug: "sum-of-digits-in-the-minimum-number",
    displayId: 1085,
    difficulty: 1,
  },
  {
    urlSlug: "video-stitching",
    displayId: 1024,
    difficulty: 2,
  },
  {
    urlSlug: "camelcase-matching",
    displayId: 1023,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-root-to-leaf-binary-numbers",
    displayId: 1022,
    difficulty: 1,
  },
  {
    urlSlug: "remove-outermost-parentheses",
    displayId: 1021,
    difficulty: 1,
  },
  {
    urlSlug: "confusing-number-ii",
    displayId: 1088,
    difficulty: 3,
  },
  {
    urlSlug: "brace-expansion",
    displayId: 1087,
    difficulty: 2,
  },
  {
    urlSlug: "index-pairs-of-a-string",
    displayId: 1065,
    difficulty: 1,
  },
  {
    urlSlug: "high-five",
    displayId: 1086,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-enclaves",
    displayId: 1020,
    difficulty: 2,
  },
  {
    urlSlug: "next-greater-node-in-linked-list",
    displayId: 1019,
    difficulty: 2,
  },
  {
    urlSlug: "binary-prefix-divisible-by-5",
    displayId: 1018,
    difficulty: 1,
  },
  {
    urlSlug: "convert-to-base-2",
    displayId: 1017,
    difficulty: 2,
  },
  {
    urlSlug: "confusing-number",
    displayId: 1056,
    difficulty: 1,
  },
  {
    urlSlug: "digit-count-in-range",
    displayId: 1067,
    difficulty: 3,
  },
  {
    urlSlug: "campus-bikes-ii",
    displayId: 1066,
    difficulty: 2,
  },
  {
    urlSlug: "fixed-point",
    displayId: 1064,
    difficulty: 1,
  },
  {
    urlSlug: "binary-string-with-substrings-representing-1-to-n",
    displayId: 1016,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-integer-divisible-by-k",
    displayId: 1015,
    difficulty: 2,
  },
  {
    urlSlug: "best-sightseeing-pair",
    displayId: 1014,
    difficulty: 2,
  },
  {
    urlSlug: "partition-array-into-three-parts-with-equal-sum",
    displayId: 1013,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-valid-subarrays",
    displayId: 1063,
    difficulty: 3,
  },
  {
    urlSlug: "longest-repeating-substring",
    displayId: 1062,
    difficulty: 2,
  },
  {
    urlSlug: "missing-element-in-sorted-array",
    displayId: 1060,
    difficulty: 2,
  },
  {
    urlSlug: "lexicographically-smallest-equivalent-string",
    displayId: 1061,
    difficulty: 2,
  },
  {
    urlSlug: "numbers-with-repeated-digits",
    displayId: 1012,
    difficulty: 3,
  },
  {
    urlSlug: "capacity-to-ship-packages-within-d-days",
    displayId: 1011,
    difficulty: 2,
  },
  {
    urlSlug: "pairs-of-songs-with-total-durations-divisible-by-60",
    displayId: 1010,
    difficulty: 2,
  },
  {
    urlSlug: "complement-of-base-10-integer",
    displayId: 1009,
    difficulty: 1,
  },
  {
    urlSlug: "minimize-rounding-error-to-meet-target",
    displayId: 1058,
    difficulty: 2,
  },
  {
    urlSlug: "campus-bikes",
    displayId: 1057,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-way-to-form-string",
    displayId: 1055,
    difficulty: 2,
  },
  {
    urlSlug: "construct-binary-search-tree-from-preorder-traversal",
    displayId: 1008,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-domino-rotations-for-equal-row",
    displayId: 1007,
    difficulty: 2,
  },
  {
    urlSlug: "clumsy-factorial",
    displayId: 1006,
    difficulty: 2,
  },
  {
    urlSlug: "maximize-sum-of-array-after-k-negations",
    displayId: 1005,
    difficulty: 1,
  },
  {
    urlSlug: "max-consecutive-ones-iii",
    displayId: 1004,
    difficulty: 2,
  },
  {
    urlSlug: "check-if-word-is-valid-after-substitutions",
    displayId: 1003,
    difficulty: 2,
  },
  {
    urlSlug: "find-common-characters",
    displayId: 1002,
    difficulty: 1,
  },
  {
    urlSlug: "grid-illumination",
    displayId: 1001,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-cost-to-merge-stones",
    displayId: 1000,
    difficulty: 3,
  },
  {
    urlSlug: "available-captures-for-rook",
    displayId: 999,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-binary-tree-ii",
    displayId: 998,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-town-judge",
    displayId: 997,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-squareful-arrays",
    displayId: 996,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-number-of-k-consecutive-bit-flips",
    displayId: 995,
    difficulty: 3,
  },
  {
    urlSlug: "rotting-oranges",
    displayId: 994,
    difficulty: 2,
  },
  {
    urlSlug: "cousins-in-binary-tree",
    displayId: 993,
    difficulty: 1,
  },
  {
    urlSlug: "subarrays-with-k-different-integers",
    displayId: 992,
    difficulty: 3,
  },
  {
    urlSlug: "broken-calculator",
    displayId: 991,
    difficulty: 2,
  },
  {
    urlSlug: "satisfiability-of-equality-equations",
    displayId: 990,
    difficulty: 2,
  },
  {
    urlSlug: "add-to-array-form-of-integer",
    displayId: 989,
    difficulty: 1,
  },
  {
    urlSlug: "smallest-string-starting-from-leaf",
    displayId: 988,
    difficulty: 2,
  },
  {
    urlSlug: "vertical-order-traversal-of-a-binary-tree",
    displayId: 987,
    difficulty: 3,
  },
  {
    urlSlug: "interval-list-intersections",
    displayId: 986,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-even-numbers-after-queries",
    displayId: 985,
    difficulty: 2,
  },
  {
    urlSlug: "string-without-aaa-or-bbb",
    displayId: 984,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-cost-for-tickets",
    displayId: 983,
    difficulty: 2,
  },
  {
    urlSlug: "triples-with-bitwise-and-equal-to-zero",
    displayId: 982,
    difficulty: 3,
  },
  {
    urlSlug: "time-based-key-value-store",
    displayId: 981,
    difficulty: 2,
  },
  {
    urlSlug: "unique-paths-iii",
    displayId: 980,
    difficulty: 3,
  },
  {
    urlSlug: "distribute-coins-in-binary-tree",
    displayId: 979,
    difficulty: 2,
  },
  {
    urlSlug: "longest-turbulent-subarray",
    displayId: 978,
    difficulty: 2,
  },
  {
    urlSlug: "squares-of-a-sorted-array",
    displayId: 977,
    difficulty: 1,
  },
  {
    urlSlug: "largest-perimeter-triangle",
    displayId: 976,
    difficulty: 1,
  },
  {
    urlSlug: "odd-even-jump",
    displayId: 975,
    difficulty: 3,
  },
  {
    urlSlug: "subarray-sums-divisible-by-k",
    displayId: 974,
    difficulty: 2,
  },
  {
    urlSlug: "k-closest-points-to-origin",
    displayId: 973,
    difficulty: 2,
  },
  {
    urlSlug: "fibonacci-number",
    displayId: 509,
    difficulty: 1,
  },
  {
    urlSlug: "equal-rational-numbers",
    displayId: 972,
    difficulty: 3,
  },
  {
    urlSlug: "flip-binary-tree-to-match-preorder-traversal",
    displayId: 971,
    difficulty: 2,
  },
  {
    urlSlug: "powerful-integers",
    displayId: 970,
    difficulty: 2,
  },
  {
    urlSlug: "pancake-sorting",
    displayId: 969,
    difficulty: 2,
  },
  {
    urlSlug: "binary-tree-cameras",
    displayId: 968,
    difficulty: 3,
  },
  {
    urlSlug: "numbers-with-same-consecutive-differences",
    displayId: 967,
    difficulty: 2,
  },
  {
    urlSlug: "vowel-spellchecker",
    displayId: 966,
    difficulty: 2,
  },
  {
    urlSlug: "univalued-binary-tree",
    displayId: 965,
    difficulty: 1,
  },
  {
    urlSlug: "least-operators-to-express-number",
    displayId: 964,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-area-rectangle-ii",
    displayId: 963,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-width-ramp",
    displayId: 962,
    difficulty: 2,
  },
  {
    urlSlug: "n-repeated-element-in-size-2n-array",
    displayId: 961,
    difficulty: 1,
  },
  {
    urlSlug: "delete-columns-to-make-sorted-iii",
    displayId: 960,
    difficulty: 3,
  },
  {
    urlSlug: "regions-cut-by-slashes",
    displayId: 959,
    difficulty: 2,
  },
  {
    urlSlug: "check-completeness-of-a-binary-tree",
    displayId: 958,
    difficulty: 2,
  },
  {
    urlSlug: "prison-cells-after-n-days",
    displayId: 957,
    difficulty: 2,
  },
  {
    urlSlug: "tallest-billboard",
    displayId: 956,
    difficulty: 3,
  },
  {
    urlSlug: "delete-columns-to-make-sorted-ii",
    displayId: 955,
    difficulty: 2,
  },
  {
    urlSlug: "array-of-doubled-pairs",
    displayId: 954,
    difficulty: 2,
  },
  {
    urlSlug: "verifying-an-alien-dictionary",
    displayId: 953,
    difficulty: 1,
  },
  {
    urlSlug: "largest-component-size-by-common-factor",
    displayId: 952,
    difficulty: 3,
  },
  {
    urlSlug: "flip-equivalent-binary-trees",
    displayId: 951,
    difficulty: 2,
  },
  {
    urlSlug: "reveal-cards-in-increasing-order",
    displayId: 950,
    difficulty: 2,
  },
  {
    urlSlug: "largest-time-for-given-digits",
    displayId: 949,
    difficulty: 2,
  },
  {
    urlSlug: "bag-of-tokens",
    displayId: 948,
    difficulty: 2,
  },
  {
    urlSlug: "most-stones-removed-with-same-row-or-column",
    displayId: 947,
    difficulty: 2,
  },
  {
    urlSlug: "validate-stack-sequences",
    displayId: 946,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-increment-to-make-array-unique",
    displayId: 945,
    difficulty: 2,
  },
  {
    urlSlug: "delete-columns-to-make-sorted",
    displayId: 944,
    difficulty: 1,
  },
  {
    urlSlug: "find-the-shortest-superstring",
    displayId: 943,
    difficulty: 3,
  },
  {
    urlSlug: "di-string-match",
    displayId: 942,
    difficulty: 1,
  },
  {
    urlSlug: "valid-mountain-array",
    displayId: 941,
    difficulty: 1,
  },
  {
    urlSlug: "distinct-subsequences-ii",
    displayId: 940,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-area-rectangle",
    displayId: 939,
    difficulty: 2,
  },
  {
    urlSlug: "range-sum-of-bst",
    displayId: 938,
    difficulty: 1,
  },
  {
    urlSlug: "reorder-data-in-log-files",
    displayId: 937,
    difficulty: 2,
  },
  {
    urlSlug: "stamping-the-sequence",
    displayId: 936,
    difficulty: 3,
  },
  {
    urlSlug: "knight-dialer",
    displayId: 935,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-bridge",
    displayId: 934,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-recent-calls",
    displayId: 933,
    difficulty: 1,
  },
  {
    urlSlug: "beautiful-array",
    displayId: 932,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-falling-path-sum",
    displayId: 931,
    difficulty: 2,
  },
  {
    urlSlug: "binary-subarrays-with-sum",
    displayId: 930,
    difficulty: 2,
  },
  {
    urlSlug: "unique-email-addresses",
    displayId: 929,
    difficulty: 1,
  },
  {
    urlSlug: "minimize-malware-spread-ii",
    displayId: 928,
    difficulty: 3,
  },
  {
    urlSlug: "three-equal-parts",
    displayId: 927,
    difficulty: 3,
  },
  {
    urlSlug: "flip-string-to-monotone-increasing",
    displayId: 926,
    difficulty: 2,
  },
  {
    urlSlug: "long-pressed-name",
    displayId: 925,
    difficulty: 1,
  },
  {
    urlSlug: "minimize-malware-spread",
    displayId: 924,
    difficulty: 3,
  },
  {
    urlSlug: "3sum-with-multiplicity",
    displayId: 923,
    difficulty: 2,
  },
  {
    urlSlug: "sort-array-by-parity-ii",
    displayId: 922,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-add-to-make-parentheses-valid",
    displayId: 921,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-music-playlists",
    displayId: 920,
    difficulty: 3,
  },
  {
    urlSlug: "complete-binary-tree-inserter",
    displayId: 919,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-sum-circular-subarray",
    displayId: 918,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-only-letters",
    displayId: 917,
    difficulty: 1,
  },
  {
    urlSlug: "word-subsets",
    displayId: 916,
    difficulty: 2,
  },
  {
    urlSlug: "partition-array-into-disjoint-intervals",
    displayId: 915,
    difficulty: 2,
  },
  {
    urlSlug: "x-of-a-kind-in-a-deck-of-cards",
    displayId: 914,
    difficulty: 1,
  },
  {
    urlSlug: "cat-and-mouse",
    displayId: 913,
    difficulty: 3,
  },
  {
    urlSlug: "sort-an-array",
    displayId: 912,
    difficulty: 2,
  },
  {
    urlSlug: "online-election",
    displayId: 911,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-range-ii",
    displayId: 910,
    difficulty: 2,
  },
  {
    urlSlug: "snakes-and-ladders",
    displayId: 909,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-range-i",
    displayId: 908,
    difficulty: 1,
  },
  {
    urlSlug: "sum-of-subarray-minimums",
    displayId: 907,
    difficulty: 2,
  },
  {
    urlSlug: "super-palindromes",
    displayId: 906,
    difficulty: 3,
  },
  {
    urlSlug: "sort-array-by-parity",
    displayId: 905,
    difficulty: 1,
  },
  {
    urlSlug: "fruit-into-baskets",
    displayId: 904,
    difficulty: 2,
  },
  {
    urlSlug: "valid-permutations-for-di-sequence",
    displayId: 903,
    difficulty: 3,
  },
  {
    urlSlug: "numbers-at-most-n-given-digit-set",
    displayId: 902,
    difficulty: 3,
  },
  {
    urlSlug: "online-stock-span",
    displayId: 901,
    difficulty: 2,
  },
  {
    urlSlug: "rle-iterator",
    displayId: 900,
    difficulty: 2,
  },
  {
    urlSlug: "orderly-queue",
    displayId: 899,
    difficulty: 3,
  },
  {
    urlSlug: "bitwise-ors-of-subarrays",
    displayId: 898,
    difficulty: 2,
  },
  {
    urlSlug: "increasing-order-search-tree",
    displayId: 897,
    difficulty: 1,
  },
  {
    urlSlug: "monotonic-array",
    displayId: 896,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-frequency-stack",
    displayId: 895,
    difficulty: 3,
  },
  {
    urlSlug: "all-possible-full-binary-trees",
    displayId: 894,
    difficulty: 2,
  },
  {
    urlSlug: "groups-of-special-equivalent-strings",
    displayId: 893,
    difficulty: 2,
  },
  {
    urlSlug: "surface-area-of-3d-shapes",
    displayId: 892,
    difficulty: 1,
  },
  {
    urlSlug: "sum-of-subsequence-widths",
    displayId: 891,
    difficulty: 3,
  },
  {
    urlSlug: "find-and-replace-pattern",
    displayId: 890,
    difficulty: 2,
  },
  {
    urlSlug: "construct-binary-tree-from-preorder-and-postorder-traversal",
    displayId: 889,
    difficulty: 2,
  },
  {
    urlSlug: "fair-candy-swap",
    displayId: 888,
    difficulty: 1,
  },
  {
    urlSlug: "super-egg-drop",
    displayId: 887,
    difficulty: 3,
  },
  {
    urlSlug: "possible-bipartition",
    displayId: 886,
    difficulty: 2,
  },
  {
    urlSlug: "spiral-matrix-iii",
    displayId: 885,
    difficulty: 2,
  },
  {
    urlSlug: "uncommon-words-from-two-sentences",
    displayId: 884,
    difficulty: 1,
  },
  {
    urlSlug: "projection-area-of-3d-shapes",
    displayId: 883,
    difficulty: 1,
  },
  {
    urlSlug: "reachable-nodes-in-subdivided-graph",
    displayId: 882,
    difficulty: 3,
  },
  {
    urlSlug: "boats-to-save-people",
    displayId: 881,
    difficulty: 2,
  },
  {
    urlSlug: "decoded-string-at-index",
    displayId: 880,
    difficulty: 2,
  },
  {
    urlSlug: "generate-random-point-in-a-circle",
    displayId: 478,
    difficulty: 2,
  },
  {
    urlSlug: "random-point-in-non-overlapping-rectangles",
    displayId: 497,
    difficulty: 2,
  },
  {
    urlSlug: "random-flip-matrix",
    displayId: 519,
    difficulty: 2,
  },
  {
    urlSlug: "random-pick-with-weight",
    displayId: 528,
    difficulty: 2,
  },
  {
    urlSlug: "profitable-schemes",
    displayId: 879,
    difficulty: 3,
  },
  {
    urlSlug: "nth-magical-number",
    displayId: 878,
    difficulty: 3,
  },
  {
    urlSlug: "stone-game",
    displayId: 877,
    difficulty: 2,
  },
  {
    urlSlug: "middle-of-the-linked-list",
    displayId: 876,
    difficulty: 1,
  },
  {
    urlSlug: "koko-eating-bananas",
    displayId: 875,
    difficulty: 2,
  },
  {
    urlSlug: "walking-robot-simulation",
    displayId: 874,
    difficulty: 2,
  },
  {
    urlSlug: "length-of-longest-fibonacci-subsequence",
    displayId: 873,
    difficulty: 2,
  },
  {
    urlSlug: "leaf-similar-trees",
    displayId: 872,
    difficulty: 1,
  },
  {
    urlSlug: "implement-rand10-using-rand7",
    displayId: 470,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-refueling-stops",
    displayId: 871,
    difficulty: 3,
  },
  {
    urlSlug: "advantage-shuffle",
    displayId: 870,
    difficulty: 2,
  },
  {
    urlSlug: "reordered-power-of-2",
    displayId: 869,
    difficulty: 2,
  },
  {
    urlSlug: "binary-gap",
    displayId: 868,
    difficulty: 1,
  },
  {
    urlSlug: "transpose-matrix",
    displayId: 867,
    difficulty: 1,
  },
  {
    urlSlug: "prime-palindrome",
    displayId: 866,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-subtree-with-all-the-deepest-nodes",
    displayId: 865,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-path-to-get-all-keys",
    displayId: 864,
    difficulty: 3,
  },
  {
    urlSlug: "random-pick-with-blacklist",
    displayId: 710,
    difficulty: 3,
  },
  {
    urlSlug: "all-nodes-distance-k-in-binary-tree",
    displayId: 863,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-subarray-with-sum-at-least-k",
    displayId: 862,
    difficulty: 3,
  },
  {
    urlSlug: "score-after-flipping-matrix",
    displayId: 861,
    difficulty: 2,
  },
  {
    urlSlug: "lemonade-change",
    displayId: 860,
    difficulty: 1,
  },
  {
    urlSlug: "buddy-strings",
    displayId: 859,
    difficulty: 1,
  },
  {
    urlSlug: "mirror-reflection",
    displayId: 858,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-cost-to-hire-k-workers",
    displayId: 857,
    difficulty: 3,
  },
  {
    urlSlug: "score-of-parentheses",
    displayId: 856,
    difficulty: 2,
  },
  {
    urlSlug: "exam-room",
    displayId: 855,
    difficulty: 2,
  },
  {
    urlSlug: "k-similar-strings",
    displayId: 854,
    difficulty: 3,
  },
  {
    urlSlug: "car-fleet",
    displayId: 853,
    difficulty: 2,
  },
  {
    urlSlug: "peak-index-in-a-mountain-array",
    displayId: 852,
    difficulty: 2,
  },
  {
    urlSlug: "loud-and-rich",
    displayId: 851,
    difficulty: 2,
  },
  {
    urlSlug: "rectangle-area-ii",
    displayId: 850,
    difficulty: 3,
  },
  {
    urlSlug: "maximize-distance-to-closest-person",
    displayId: 849,
    difficulty: 2,
  },
  {
    urlSlug: "shifting-letters",
    displayId: 848,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-path-visiting-all-nodes",
    displayId: 847,
    difficulty: 3,
  },
  {
    urlSlug: "hand-of-straights",
    displayId: 846,
    difficulty: 2,
  },
  {
    urlSlug: "longest-mountain-in-array",
    displayId: 845,
    difficulty: 2,
  },
  {
    urlSlug: "backspace-string-compare",
    displayId: 844,
    difficulty: 1,
  },
  {
    urlSlug: "guess-the-word",
    displayId: 843,
    difficulty: 3,
  },
  {
    urlSlug: "split-array-into-fibonacci-sequence",
    displayId: 842,
    difficulty: 2,
  },
  {
    urlSlug: "keys-and-rooms",
    displayId: 841,
    difficulty: 2,
  },
  {
    urlSlug: "magic-squares-in-grid",
    displayId: 840,
    difficulty: 2,
  },
  {
    urlSlug: "similar-string-groups",
    displayId: 839,
    difficulty: 3,
  },
  {
    urlSlug: "push-dominoes",
    displayId: 838,
    difficulty: 2,
  },
  {
    urlSlug: "new-21-game",
    displayId: 837,
    difficulty: 2,
  },
  {
    urlSlug: "rectangle-overlap",
    displayId: 836,
    difficulty: 1,
  },
  {
    urlSlug: "robot-room-cleaner",
    displayId: 489,
    difficulty: 3,
  },
  {
    urlSlug: "image-overlap",
    displayId: 835,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-distances-in-tree",
    displayId: 834,
    difficulty: 3,
  },
  {
    urlSlug: "find-and-replace-in-string",
    displayId: 833,
    difficulty: 2,
  },
  {
    urlSlug: "flipping-an-image",
    displayId: 832,
    difficulty: 1,
  },
  {
    urlSlug: "design-circular-queue",
    displayId: 622,
    difficulty: 2,
  },
  {
    urlSlug: "design-circular-deque",
    displayId: 641,
    difficulty: 2,
  },
  {
    urlSlug: "masking-personal-information",
    displayId: 831,
    difficulty: 2,
  },
  {
    urlSlug: "positions-of-large-groups",
    displayId: 830,
    difficulty: 1,
  },
  {
    urlSlug: "consecutive-numbers-sum",
    displayId: 829,
    difficulty: 3,
  },
  {
    urlSlug: "count-unique-characters-of-all-substrings-of-a-given-string",
    displayId: 828,
    difficulty: 3,
  },
  {
    urlSlug: "making-a-large-island",
    displayId: 827,
    difficulty: 3,
  },
  {
    urlSlug: "most-profit-assigning-work",
    displayId: 826,
    difficulty: 2,
  },
  {
    urlSlug: "friends-of-appropriate-ages",
    displayId: 825,
    difficulty: 2,
  },
  {
    urlSlug: "goat-latin",
    displayId: 824,
    difficulty: 1,
  },
  {
    urlSlug: "insert-into-a-sorted-circular-linked-list",
    displayId: 708,
    difficulty: 2,
  },
  {
    urlSlug: "binary-trees-with-factors",
    displayId: 823,
    difficulty: 2,
  },
  {
    urlSlug: "card-flipping-game",
    displayId: 822,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-distance-to-a-character",
    displayId: 821,
    difficulty: 1,
  },
  {
    urlSlug: "short-encoding-of-words",
    displayId: 820,
    difficulty: 2,
  },
  {
    urlSlug: "design-linked-list",
    displayId: 707,
    difficulty: 2,
  },
  {
    urlSlug: "most-common-word",
    displayId: 819,
    difficulty: 1,
  },
  {
    urlSlug: "race-car",
    displayId: 818,
    difficulty: 3,
  },
  {
    urlSlug: "linked-list-components",
    displayId: 817,
    difficulty: 2,
  },
  {
    urlSlug: "ambiguous-coordinates",
    displayId: 816,
    difficulty: 2,
  },
  {
    urlSlug: "bus-routes",
    displayId: 815,
    difficulty: 3,
  },
  {
    urlSlug: "binary-tree-pruning",
    displayId: 814,
    difficulty: 2,
  },
  {
    urlSlug: "largest-sum-of-averages",
    displayId: 813,
    difficulty: 2,
  },
  {
    urlSlug: "largest-triangle-area",
    displayId: 812,
    difficulty: 1,
  },
  {
    urlSlug: "subdomain-visit-count",
    displayId: 811,
    difficulty: 2,
  },
  {
    urlSlug: "chalkboard-xor-game",
    displayId: 810,
    difficulty: 3,
  },
  {
    urlSlug: "expressive-words",
    displayId: 809,
    difficulty: 2,
  },
  {
    urlSlug: "soup-servings",
    displayId: 808,
    difficulty: 2,
  },
  {
    urlSlug: "max-increase-to-keep-city-skyline",
    displayId: 807,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-lines-to-write-string",
    displayId: 806,
    difficulty: 1,
  },
  {
    urlSlug: "split-array-with-same-average",
    displayId: 805,
    difficulty: 3,
  },
  {
    urlSlug: "unique-morse-code-words",
    displayId: 804,
    difficulty: 1,
  },
  {
    urlSlug: "bricks-falling-when-hit",
    displayId: 803,
    difficulty: 3,
  },
  {
    urlSlug: "find-eventual-safe-states",
    displayId: 802,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-swaps-to-make-sequences-increasing",
    displayId: 801,
    difficulty: 3,
  },
  {
    urlSlug: "similar-rgb-color",
    displayId: 800,
    difficulty: 1,
  },
  {
    urlSlug: "design-hashmap",
    displayId: 706,
    difficulty: 1,
  },
  {
    urlSlug: "design-hashset",
    displayId: 705,
    difficulty: 1,
  },
  {
    urlSlug: "champagne-tower",
    displayId: 799,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-rotation-with-highest-score",
    displayId: 798,
    difficulty: 3,
  },
  {
    urlSlug: "all-paths-from-source-to-target",
    displayId: 797,
    difficulty: 2,
  },
  {
    urlSlug: "rotate-string",
    displayId: 796,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-subarrays-with-bounded-maximum",
    displayId: 795,
    difficulty: 2,
  },
  {
    urlSlug: "valid-tic-tac-toe-state",
    displayId: 794,
    difficulty: 2,
  },
  {
    urlSlug: "preimage-size-of-factorial-zeroes-function",
    displayId: 793,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-matching-subsequences",
    displayId: 792,
    difficulty: 2,
  },
  {
    urlSlug: "custom-sort-string",
    displayId: 791,
    difficulty: 2,
  },
  {
    urlSlug: "domino-and-tromino-tiling",
    displayId: 790,
    difficulty: 2,
  },
  {
    urlSlug: "escape-the-ghosts",
    displayId: 789,
    difficulty: 2,
  },
  {
    urlSlug: "rotated-digits",
    displayId: 788,
    difficulty: 2,
  },
  {
    urlSlug: "cheapest-flights-within-k-stops",
    displayId: 787,
    difficulty: 2,
  },
  {
    urlSlug: "k-th-smallest-prime-fraction",
    displayId: 786,
    difficulty: 2,
  },
  {
    urlSlug: "is-graph-bipartite",
    displayId: 785,
    difficulty: 2,
  },
  {
    urlSlug: "letter-case-permutation",
    displayId: 784,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-distance-between-bst-nodes",
    displayId: 783,
    difficulty: 1,
  },
  {
    urlSlug: "transform-to-chessboard",
    displayId: 782,
    difficulty: 3,
  },
  {
    urlSlug: "rabbits-in-forest",
    displayId: 781,
    difficulty: 2,
  },
  {
    urlSlug: "reaching-points",
    displayId: 780,
    difficulty: 3,
  },
  {
    urlSlug: "k-th-symbol-in-grammar",
    displayId: 779,
    difficulty: 2,
  },
  {
    urlSlug: "swim-in-rising-water",
    displayId: 778,
    difficulty: 3,
  },
  {
    urlSlug: "swap-adjacent-in-lr-string",
    displayId: 777,
    difficulty: 2,
  },
  {
    urlSlug: "binary-search",
    displayId: 704,
    difficulty: 1,
  },
  {
    urlSlug: "split-bst",
    displayId: 776,
    difficulty: 2,
  },
  {
    urlSlug: "global-and-local-inversions",
    displayId: 775,
    difficulty: 2,
  },
  {
    urlSlug: "kth-largest-element-in-a-stream",
    displayId: 703,
    difficulty: 1,
  },
  {
    urlSlug: "minimize-max-distance-to-gas-station",
    displayId: 774,
    difficulty: 3,
  },
  {
    urlSlug: "sliding-puzzle",
    displayId: 773,
    difficulty: 3,
  },
  {
    urlSlug: "search-in-a-sorted-array-of-unknown-size",
    displayId: 702,
    difficulty: 2,
  },
  {
    urlSlug: "basic-calculator-iii",
    displayId: 772,
    difficulty: 3,
  },
  {
    urlSlug: "insert-into-a-binary-search-tree",
    displayId: 701,
    difficulty: 2,
  },
  {
    urlSlug: "search-in-a-binary-search-tree",
    displayId: 700,
    difficulty: 1,
  },
  {
    urlSlug: "jewels-and-stones",
    displayId: 771,
    difficulty: 1,
  },
  {
    urlSlug: "basic-calculator-iv",
    displayId: 770,
    difficulty: 3,
  },
  {
    urlSlug: "max-chunks-to-make-sorted",
    displayId: 769,
    difficulty: 2,
  },
  {
    urlSlug: "max-chunks-to-make-sorted-ii",
    displayId: 768,
    difficulty: 3,
  },
  {
    urlSlug: "reorganize-string",
    displayId: 767,
    difficulty: 2,
  },
  {
    urlSlug: "toeplitz-matrix",
    displayId: 766,
    difficulty: 1,
  },
  {
    urlSlug: "n-ary-tree-postorder-traversal",
    displayId: 590,
    difficulty: 1,
  },
  {
    urlSlug: "n-ary-tree-preorder-traversal",
    displayId: 589,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-depth-of-n-ary-tree",
    displayId: 559,
    difficulty: 1,
  },
  {
    urlSlug: "logical-or-of-two-binary-grids-represented-as-quad-trees",
    displayId: 558,
    difficulty: 2,
  },
  {
    urlSlug: "construct-quad-tree",
    displayId: 427,
    difficulty: 2,
  },
  {
    urlSlug: "encode-n-ary-tree-to-binary-tree",
    displayId: 431,
    difficulty: 3,
  },
  {
    urlSlug: "couples-holding-hands",
    displayId: 765,
    difficulty: 3,
  },
  {
    urlSlug: "largest-plus-sign",
    displayId: 764,
    difficulty: 2,
  },
  {
    urlSlug: "partition-labels",
    displayId: 763,
    difficulty: 2,
  },
  {
    urlSlug: "prime-number-of-set-bits-in-binary-representation",
    displayId: 762,
    difficulty: 1,
  },
  {
    urlSlug: "flatten-a-multilevel-doubly-linked-list",
    displayId: 430,
    difficulty: 2,
  },
  {
    urlSlug: "serialize-and-deserialize-n-ary-tree",
    displayId: 428,
    difficulty: 3,
  },
  {
    urlSlug: "n-ary-tree-level-order-traversal",
    displayId: 429,
    difficulty: 2,
  },
  {
    urlSlug: "special-binary-string",
    displayId: 761,
    difficulty: 3,
  },
  {
    urlSlug: "find-anagram-mappings",
    displayId: 760,
    difficulty: 1,
  },
  {
    urlSlug: "employee-free-time",
    displayId: 759,
    difficulty: 3,
  },
  {
    urlSlug: "bold-words-in-string",
    displayId: 758,
    difficulty: 2,
  },
  {
    urlSlug: "set-intersection-size-at-least-two",
    displayId: 757,
    difficulty: 3,
  },
  {
    urlSlug: "convert-binary-search-tree-to-sorted-doubly-linked-list",
    displayId: 426,
    difficulty: 2,
  },
  {
    urlSlug: "pyramid-transition-matrix",
    displayId: 756,
    difficulty: 2,
  },
  {
    urlSlug: "pour-water",
    displayId: 755,
    difficulty: 2,
  },
  {
    urlSlug: "reach-a-number",
    displayId: 754,
    difficulty: 2,
  },
  {
    urlSlug: "cracking-the-safe",
    displayId: 753,
    difficulty: 3,
  },
  {
    urlSlug: "open-the-lock",
    displayId: 752,
    difficulty: 2,
  },
  {
    urlSlug: "ip-to-cidr",
    displayId: 751,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-corner-rectangles",
    displayId: 750,
    difficulty: 2,
  },
  {
    urlSlug: "contain-virus",
    displayId: 749,
    difficulty: 3,
  },
  {
    urlSlug: "shortest-completing-word",
    displayId: 748,
    difficulty: 1,
  },
  {
    urlSlug: "largest-number-at-least-twice-of-others",
    displayId: 747,
    difficulty: 1,
  },
  {
    urlSlug: "min-cost-climbing-stairs",
    displayId: 746,
    difficulty: 1,
  },
  {
    urlSlug: "prefix-and-suffix-search",
    displayId: 745,
    difficulty: 3,
  },
  {
    urlSlug: "find-smallest-letter-greater-than-target",
    displayId: 744,
    difficulty: 1,
  },
  {
    urlSlug: "network-delay-time",
    displayId: 743,
    difficulty: 2,
  },
  {
    urlSlug: "closest-leaf-in-a-binary-tree",
    displayId: 742,
    difficulty: 2,
  },
  {
    urlSlug: "to-lower-case",
    displayId: 709,
    difficulty: 1,
  },
  {
    urlSlug: "cherry-pickup",
    displayId: 741,
    difficulty: 3,
  },
  {
    urlSlug: "delete-and-earn",
    displayId: 740,
    difficulty: 2,
  },
  {
    urlSlug: "daily-temperatures",
    displayId: 739,
    difficulty: 2,
  },
  {
    urlSlug: "monotone-increasing-digits",
    displayId: 738,
    difficulty: 2,
  },
  {
    urlSlug: "sentence-similarity-ii",
    displayId: 737,
    difficulty: 2,
  },
  {
    urlSlug: "parse-lisp-expression",
    displayId: 736,
    difficulty: 3,
  },
  {
    urlSlug: "asteroid-collision",
    displayId: 735,
    difficulty: 2,
  },
  {
    urlSlug: "sentence-similarity",
    displayId: 734,
    difficulty: 1,
  },
  {
    urlSlug: "flood-fill",
    displayId: 733,
    difficulty: 1,
  },
  {
    urlSlug: "my-calendar-iii",
    displayId: 732,
    difficulty: 3,
  },
  {
    urlSlug: "my-calendar-ii",
    displayId: 731,
    difficulty: 2,
  },
  {
    urlSlug: "count-different-palindromic-subsequences",
    displayId: 730,
    difficulty: 3,
  },
  {
    urlSlug: "my-calendar-i",
    displayId: 729,
    difficulty: 2,
  },
  {
    urlSlug: "self-dividing-numbers",
    displayId: 728,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-window-subsequence",
    displayId: 727,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-atoms",
    displayId: 726,
    difficulty: 3,
  },
  {
    urlSlug: "split-linked-list-in-parts",
    displayId: 725,
    difficulty: 2,
  },
  {
    urlSlug: "find-pivot-index",
    displayId: 724,
    difficulty: 1,
  },
  {
    urlSlug: "candy-crush",
    displayId: 723,
    difficulty: 2,
  },
  {
    urlSlug: "remove-comments",
    displayId: 722,
    difficulty: 2,
  },
  {
    urlSlug: "accounts-merge",
    displayId: 721,
    difficulty: 2,
  },
  {
    urlSlug: "longest-word-in-dictionary",
    displayId: 720,
    difficulty: 2,
  },
  {
    urlSlug: "find-k-th-smallest-pair-distance",
    displayId: 719,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-length-of-repeated-subarray",
    displayId: 718,
    difficulty: 2,
  },
  {
    urlSlug: "1-bit-and-2-bit-characters",
    displayId: 717,
    difficulty: 1,
  },
  {
    urlSlug: "max-stack",
    displayId: 716,
    difficulty: 3,
  },
  {
    urlSlug: "range-module",
    displayId: 715,
    difficulty: 3,
  },
  {
    urlSlug: "best-time-to-buy-and-sell-stock-with-transaction-fee",
    displayId: 714,
    difficulty: 2,
  },
  {
    urlSlug: "subarray-product-less-than-k",
    displayId: 713,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-ascii-delete-sum-for-two-strings",
    displayId: 712,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-distinct-islands-ii",
    displayId: 711,
    difficulty: 3,
  },
  {
    urlSlug: "falling-squares",
    displayId: 699,
    difficulty: 3,
  },
  {
    urlSlug: "partition-to-k-equal-sum-subsets",
    displayId: 698,
    difficulty: 2,
  },
  {
    urlSlug: "degree-of-an-array",
    displayId: 697,
    difficulty: 1,
  },
  {
    urlSlug: "count-binary-substrings",
    displayId: 696,
    difficulty: 1,
  },
  {
    urlSlug: "max-area-of-island",
    displayId: 695,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-distinct-islands",
    displayId: 694,
    difficulty: 2,
  },
  {
    urlSlug: "binary-number-with-alternating-bits",
    displayId: 693,
    difficulty: 1,
  },
  {
    urlSlug: "top-k-frequent-words",
    displayId: 692,
    difficulty: 2,
  },
  {
    urlSlug: "stickers-to-spell-word",
    displayId: 691,
    difficulty: 3,
  },
  {
    urlSlug: "employee-importance",
    displayId: 690,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-sum-of-3-non-overlapping-subarrays",
    displayId: 689,
    difficulty: 3,
  },
  {
    urlSlug: "knight-probability-in-chessboard",
    displayId: 688,
    difficulty: 2,
  },
  {
    urlSlug: "longest-univalue-path",
    displayId: 687,
    difficulty: 2,
  },
  {
    urlSlug: "repeated-string-match",
    displayId: 686,
    difficulty: 2,
  },
  {
    urlSlug: "redundant-connection-ii",
    displayId: 685,
    difficulty: 3,
  },
  {
    urlSlug: "redundant-connection",
    displayId: 684,
    difficulty: 2,
  },
  {
    urlSlug: "k-empty-slots",
    displayId: 683,
    difficulty: 3,
  },
  {
    urlSlug: "baseball-game",
    displayId: 682,
    difficulty: 1,
  },
  {
    urlSlug: "next-closest-time",
    displayId: 681,
    difficulty: 2,
  },
  {
    urlSlug: "valid-palindrome-ii",
    displayId: 680,
    difficulty: 1,
  },
  {
    urlSlug: "24-game",
    displayId: 679,
    difficulty: 3,
  },
  {
    urlSlug: "valid-parenthesis-string",
    displayId: 678,
    difficulty: 2,
  },
  {
    urlSlug: "map-sum-pairs",
    displayId: 677,
    difficulty: 2,
  },
  {
    urlSlug: "implement-magic-dictionary",
    displayId: 676,
    difficulty: 2,
  },
  {
    urlSlug: "cut-off-trees-for-golf-event",
    displayId: 675,
    difficulty: 3,
  },
  {
    urlSlug: "longest-continuous-increasing-subsequence",
    displayId: 674,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-longest-increasing-subsequence",
    displayId: 673,
    difficulty: 2,
  },
  {
    urlSlug: "bulb-switcher-ii",
    displayId: 672,
    difficulty: 2,
  },
  {
    urlSlug: "second-minimum-node-in-a-binary-tree",
    displayId: 671,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-swap",
    displayId: 670,
    difficulty: 2,
  },
  {
    urlSlug: "trim-a-binary-search-tree",
    displayId: 669,
    difficulty: 2,
  },
  {
    urlSlug: "kth-smallest-number-in-multiplication-table",
    displayId: 668,
    difficulty: 3,
  },
  {
    urlSlug: "beautiful-arrangement-ii",
    displayId: 667,
    difficulty: 2,
  },
  {
    urlSlug: "path-sum-iv",
    displayId: 666,
    difficulty: 2,
  },
  {
    urlSlug: "non-decreasing-array",
    displayId: 665,
    difficulty: 2,
  },
  {
    urlSlug: "strange-printer",
    displayId: 664,
    difficulty: 3,
  },
  {
    urlSlug: "equal-tree-partition",
    displayId: 663,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-width-of-binary-tree",
    displayId: 662,
    difficulty: 2,
  },
  {
    urlSlug: "image-smoother",
    displayId: 661,
    difficulty: 1,
  },
  {
    urlSlug: "remove-9",
    displayId: 660,
    difficulty: 3,
  },
  {
    urlSlug: "split-array-into-consecutive-subsequences",
    displayId: 659,
    difficulty: 2,
  },
  {
    urlSlug: "find-k-closest-elements",
    displayId: 658,
    difficulty: 2,
  },
  {
    urlSlug: "robot-return-to-origin",
    displayId: 657,
    difficulty: 1,
  },
  {
    urlSlug: "coin-path",
    displayId: 656,
    difficulty: 3,
  },
  {
    urlSlug: "print-binary-tree",
    displayId: 655,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-binary-tree",
    displayId: 654,
    difficulty: 2,
  },
  {
    urlSlug: "two-sum-iv-input-is-a-bst",
    displayId: 653,
    difficulty: 1,
  },
  {
    urlSlug: "find-duplicate-subtrees",
    displayId: 652,
    difficulty: 2,
  },
  {
    urlSlug: "4-keys-keyboard",
    displayId: 651,
    difficulty: 2,
  },
  {
    urlSlug: "2-keys-keyboard",
    displayId: 650,
    difficulty: 2,
  },
  {
    urlSlug: "dota2-senate",
    displayId: 649,
    difficulty: 2,
  },
  {
    urlSlug: "replace-words",
    displayId: 648,
    difficulty: 2,
  },
  {
    urlSlug: "palindromic-substrings",
    displayId: 647,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-length-of-pair-chain",
    displayId: 646,
    difficulty: 2,
  },
  {
    urlSlug: "set-mismatch",
    displayId: 645,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-average-subarray-ii",
    displayId: 644,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-average-subarray-i",
    displayId: 643,
    difficulty: 1,
  },
  {
    urlSlug: "design-search-autocomplete-system",
    displayId: 642,
    difficulty: 3,
  },
  {
    urlSlug: "solve-the-equation",
    displayId: 640,
    difficulty: 2,
  },
  {
    urlSlug: "decode-ways-ii",
    displayId: 639,
    difficulty: 3,
  },
  {
    urlSlug: "shopping-offers",
    displayId: 638,
    difficulty: 2,
  },
  {
    urlSlug: "average-of-levels-in-binary-tree",
    displayId: 637,
    difficulty: 1,
  },
  {
    urlSlug: "exclusive-time-of-functions",
    displayId: 636,
    difficulty: 2,
  },
  {
    urlSlug: "design-log-storage-system",
    displayId: 635,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-derangement-of-an-array",
    displayId: 634,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-square-numbers",
    displayId: 633,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-range-covering-elements-from-k-lists",
    displayId: 632,
    difficulty: 3,
  },
  {
    urlSlug: "design-excel-sum-formula",
    displayId: 631,
    difficulty: 3,
  },
  {
    urlSlug: "course-schedule-iii",
    displayId: 630,
    difficulty: 3,
  },
  {
    urlSlug: "k-inverse-pairs-array",
    displayId: 629,
    difficulty: 3,
  },
  {
    urlSlug: "maximum-product-of-three-numbers",
    displayId: 628,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-factorization",
    displayId: 625,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-distance-in-arrays",
    displayId: 624,
    difficulty: 2,
  },
  {
    urlSlug: "add-one-row-to-tree",
    displayId: 623,
    difficulty: 2,
  },
  {
    urlSlug: "task-scheduler",
    displayId: 621,
    difficulty: 2,
  },
  {
    urlSlug: "merge-two-binary-trees",
    displayId: 617,
    difficulty: 1,
  },
  {
    urlSlug: "add-bold-tag-in-string",
    displayId: 616,
    difficulty: 2,
  },
  {
    urlSlug: "valid-triangle-number",
    displayId: 611,
    difficulty: 2,
  },
  {
    urlSlug: "find-duplicate-file-in-system",
    displayId: 609,
    difficulty: 2,
  },
  {
    urlSlug: "construct-string-from-binary-tree",
    displayId: 606,
    difficulty: 1,
  },
  {
    urlSlug: "can-place-flowers",
    displayId: 605,
    difficulty: 1,
  },
  {
    urlSlug: "design-compressed-string-iterator",
    displayId: 604,
    difficulty: 1,
  },
  {
    urlSlug: "non-negative-integers-without-consecutive-ones",
    displayId: 600,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-index-sum-of-two-lists",
    displayId: 599,
    difficulty: 1,
  },
  {
    urlSlug: "range-addition-ii",
    displayId: 598,
    difficulty: 1,
  },
  {
    urlSlug: "longest-harmonious-subsequence",
    displayId: 594,
    difficulty: 1,
  },
  {
    urlSlug: "valid-square",
    displayId: 593,
    difficulty: 2,
  },
  {
    urlSlug: "fraction-addition-and-subtraction",
    displayId: 592,
    difficulty: 2,
  },
  {
    urlSlug: "tag-validator",
    displayId: 591,
    difficulty: 3,
  },
  {
    urlSlug: "design-in-memory-file-system",
    displayId: 588,
    difficulty: 3,
  },
  {
    urlSlug: "erect-the-fence",
    displayId: 587,
    difficulty: 3,
  },
  {
    urlSlug: "delete-operation-for-two-strings",
    displayId: 583,
    difficulty: 2,
  },
  {
    urlSlug: "kill-process",
    displayId: 582,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-unsorted-continuous-subarray",
    displayId: 581,
    difficulty: 2,
  },
  {
    urlSlug: "out-of-boundary-paths",
    displayId: 576,
    difficulty: 2,
  },
  {
    urlSlug: "distribute-candies",
    displayId: 575,
    difficulty: 1,
  },
  {
    urlSlug: "squirrel-simulation",
    displayId: 573,
    difficulty: 2,
  },
  {
    urlSlug: "subtree-of-another-tree",
    displayId: 572,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-vacation-days",
    displayId: 568,
    difficulty: 3,
  },
  {
    urlSlug: "permutation-in-string",
    displayId: 567,
    difficulty: 2,
  },
  {
    urlSlug: "reshape-the-matrix",
    displayId: 566,
    difficulty: 1,
  },
  {
    urlSlug: "array-nesting",
    displayId: 565,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-closest-palindrome",
    displayId: 564,
    difficulty: 3,
  },
  {
    urlSlug: "binary-tree-tilt",
    displayId: 563,
    difficulty: 1,
  },
  {
    urlSlug: "longest-line-of-consecutive-one-in-matrix",
    displayId: 562,
    difficulty: 2,
  },
  {
    urlSlug: "array-partition",
    displayId: 561,
    difficulty: 1,
  },
  {
    urlSlug: "subarray-sum-equals-k",
    displayId: 560,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-words-in-a-string-iii",
    displayId: 557,
    difficulty: 1,
  },
  {
    urlSlug: "next-greater-element-iii",
    displayId: 556,
    difficulty: 2,
  },
  {
    urlSlug: "split-concatenated-strings",
    displayId: 555,
    difficulty: 2,
  },
  {
    urlSlug: "brick-wall",
    displayId: 554,
    difficulty: 2,
  },
  {
    urlSlug: "optimal-division",
    displayId: 553,
    difficulty: 2,
  },
  {
    urlSlug: "student-attendance-record-ii",
    displayId: 552,
    difficulty: 3,
  },
  {
    urlSlug: "student-attendance-record-i",
    displayId: 551,
    difficulty: 1,
  },
  {
    urlSlug: "shortest-path-to-get-food",
    displayId: 1730,
    difficulty: 2,
  },
  {
    urlSlug: "binary-tree-longest-consecutive-sequence-ii",
    displayId: 549,
    difficulty: 2,
  },
  {
    urlSlug: "split-array-with-equal-sum",
    displayId: 548,
    difficulty: 3,
  },
  {
    urlSlug: "number-of-provinces",
    displayId: 547,
    difficulty: 2,
  },
  {
    urlSlug: "remove-boxes",
    displayId: 546,
    difficulty: 3,
  },
  {
    urlSlug: "boundary-of-binary-tree",
    displayId: 545,
    difficulty: 2,
  },
  {
    urlSlug: "output-contest-matches",
    displayId: 544,
    difficulty: 2,
  },
  {
    urlSlug: "diameter-of-binary-tree",
    displayId: 543,
    difficulty: 1,
  },
  {
    urlSlug: "01-matrix",
    displayId: 542,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-string-ii",
    displayId: 541,
    difficulty: 1,
  },
  {
    urlSlug: "single-element-in-a-sorted-array",
    displayId: 540,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-time-difference",
    displayId: 539,
    difficulty: 2,
  },
  {
    urlSlug: "convert-bst-to-greater-tree",
    displayId: 538,
    difficulty: 2,
  },
  {
    urlSlug: "complex-number-multiplication",
    displayId: 537,
    difficulty: 2,
  },
  {
    urlSlug: "construct-binary-tree-from-string",
    displayId: 536,
    difficulty: 2,
  },
  {
    urlSlug: "encode-and-decode-tinyurl",
    displayId: 535,
    difficulty: 2,
  },
  {
    urlSlug: "lonely-pixel-ii",
    displayId: 533,
    difficulty: 2,
  },
  {
    urlSlug: "k-diff-pairs-in-an-array",
    displayId: 532,
    difficulty: 2,
  },
  {
    urlSlug: "lonely-pixel-i",
    displayId: 531,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-absolute-difference-in-bst",
    displayId: 530,
    difficulty: 1,
  },
  {
    urlSlug: "minesweeper",
    displayId: 529,
    difficulty: 2,
  },
  {
    urlSlug: "swapping-nodes-in-a-linked-list",
    displayId: 1721,
    difficulty: 2,
  },
  {
    urlSlug: "word-abbreviation",
    displayId: 527,
    difficulty: 3,
  },
  {
    urlSlug: "beautiful-arrangement",
    displayId: 526,
    difficulty: 2,
  },
  {
    urlSlug: "contiguous-array",
    displayId: 525,
    difficulty: 2,
  },
  {
    urlSlug: "longest-word-in-dictionary-through-deleting",
    displayId: 524,
    difficulty: 2,
  },
  {
    urlSlug: "continuous-subarray-sum",
    displayId: 523,
    difficulty: 2,
  },
  {
    urlSlug: "longest-uncommon-subsequence-ii",
    displayId: 522,
    difficulty: 2,
  },
  {
    urlSlug: "longest-uncommon-subsequence-i",
    displayId: 521,
    difficulty: 1,
  },
  {
    urlSlug: "detect-capital",
    displayId: 520,
    difficulty: 1,
  },
  {
    urlSlug: "widest-pair-of-indices-with-equal-range-sum",
    displayId: 1983,
    difficulty: 2,
  },
  {
    urlSlug: "coin-change-ii",
    displayId: 518,
    difficulty: 2,
  },
  {
    urlSlug: "super-washing-machines",
    displayId: 517,
    difficulty: 3,
  },
  {
    urlSlug: "longest-palindromic-subsequence",
    displayId: 516,
    difficulty: 2,
  },
  {
    urlSlug: "find-largest-value-in-each-tree-row",
    displayId: 515,
    difficulty: 2,
  },
  {
    urlSlug: "freedom-trail",
    displayId: 514,
    difficulty: 3,
  },
  {
    urlSlug: "find-bottom-left-tree-value",
    displayId: 513,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-alternating-subarray-sum",
    displayId: 2036,
    difficulty: 2,
  },
  {
    urlSlug: "all-paths-from-source-lead-to-destination",
    displayId: 1059,
    difficulty: 2,
  },
  {
    urlSlug: "count-subarrays-with-more-ones-than-zeros",
    displayId: 2031,
    difficulty: 2,
  },
  {
    urlSlug: "inorder-successor-in-bst-ii",
    displayId: 510,
    difficulty: 2,
  },
  {
    urlSlug: "most-frequent-subtree-sum",
    displayId: 508,
    difficulty: 2,
  },
  {
    urlSlug: "perfect-number",
    displayId: 507,
    difficulty: 1,
  },
  {
    urlSlug: "relative-ranks",
    displayId: 506,
    difficulty: 1,
  },
  {
    urlSlug: "the-maze-ii",
    displayId: 505,
    difficulty: 2,
  },
  {
    urlSlug: "base-7",
    displayId: 504,
    difficulty: 1,
  },
  {
    urlSlug: "next-greater-element-ii",
    displayId: 503,
    difficulty: 2,
  },
  {
    urlSlug: "ipo",
    displayId: 502,
    difficulty: 3,
  },
  {
    urlSlug: "find-mode-in-binary-search-tree",
    displayId: 501,
    difficulty: 1,
  },
  {
    urlSlug: "keyboard-row",
    displayId: 500,
    difficulty: 1,
  },
  {
    urlSlug: "the-maze-iii",
    displayId: 499,
    difficulty: 3,
  },
  {
    urlSlug: "diagonal-traverse",
    displayId: 498,
    difficulty: 2,
  },
  {
    urlSlug: "next-greater-element-i",
    displayId: 496,
    difficulty: 1,
  },
  {
    urlSlug: "teemo-attacking",
    displayId: 495,
    difficulty: 1,
  },
  {
    urlSlug: "target-sum",
    displayId: 494,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-pairs",
    displayId: 493,
    difficulty: 3,
  },
  {
    urlSlug: "construct-the-rectangle",
    displayId: 492,
    difficulty: 1,
  },
  {
    urlSlug: "increasing-subsequences",
    displayId: 491,
    difficulty: 2,
  },
  {
    urlSlug: "the-maze",
    displayId: 490,
    difficulty: 2,
  },
  {
    urlSlug: "kth-smallest-instructions",
    displayId: 1643,
    difficulty: 3,
  },
  {
    urlSlug: "zuma-game",
    displayId: 488,
    difficulty: 3,
  },
  {
    urlSlug: "max-consecutive-ones-ii",
    displayId: 487,
    difficulty: 2,
  },
  {
    urlSlug: "predict-the-winner",
    displayId: 486,
    difficulty: 2,
  },
  {
    urlSlug: "max-consecutive-ones",
    displayId: 485,
    difficulty: 1,
  },
  {
    urlSlug: "find-permutation",
    displayId: 484,
    difficulty: 2,
  },
  {
    urlSlug: "smallest-good-base",
    displayId: 483,
    difficulty: 3,
  },
  {
    urlSlug: "license-key-formatting",
    displayId: 482,
    difficulty: 1,
  },
  {
    urlSlug: "magical-string",
    displayId: 481,
    difficulty: 2,
  },
  {
    urlSlug: "sliding-window-median",
    displayId: 480,
    difficulty: 3,
  },
  {
    urlSlug: "largest-palindrome-product",
    displayId: 479,
    difficulty: 3,
  },
  {
    urlSlug: "total-hamming-distance",
    displayId: 477,
    difficulty: 2,
  },
  {
    urlSlug: "number-complement",
    displayId: 476,
    difficulty: 1,
  },
  {
    urlSlug: "heaters",
    displayId: 475,
    difficulty: 2,
  },
  {
    urlSlug: "ones-and-zeroes",
    displayId: 474,
    difficulty: 2,
  },
  {
    urlSlug: "matchsticks-to-square",
    displayId: 473,
    difficulty: 2,
  },
  {
    urlSlug: "concatenated-words",
    displayId: 472,
    difficulty: 3,
  },
  {
    urlSlug: "encode-string-with-shortest-length",
    displayId: 471,
    difficulty: 3,
  },
  {
    urlSlug: "convex-polygon",
    displayId: 469,
    difficulty: 2,
  },
  {
    urlSlug: "validate-ip-address",
    displayId: 468,
    difficulty: 2,
  },
  {
    urlSlug: "unique-substrings-in-wraparound-string",
    displayId: 467,
    difficulty: 2,
  },
  {
    urlSlug: "count-the-repetitions",
    displayId: 466,
    difficulty: 3,
  },
  {
    urlSlug: "optimal-account-balancing",
    displayId: 465,
    difficulty: 3,
  },
  {
    urlSlug: "can-i-win",
    displayId: 464,
    difficulty: 2,
  },
  {
    urlSlug: "island-perimeter",
    displayId: 463,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-moves-to-equal-array-elements-ii",
    displayId: 462,
    difficulty: 2,
  },
  {
    urlSlug: "hamming-distance",
    displayId: 461,
    difficulty: 1,
  },
  {
    urlSlug: "lfu-cache",
    displayId: 460,
    difficulty: 3,
  },
  {
    urlSlug: "repeated-substring-pattern",
    displayId: 459,
    difficulty: 1,
  },
  {
    urlSlug: "poor-pigs",
    displayId: 458,
    difficulty: 3,
  },
  {
    urlSlug: "circular-array-loop",
    displayId: 457,
    difficulty: 2,
  },
  {
    urlSlug: "132-pattern",
    displayId: 456,
    difficulty: 2,
  },
  {
    urlSlug: "assign-cookies",
    displayId: 455,
    difficulty: 1,
  },
  {
    urlSlug: "4sum-ii",
    displayId: 454,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-moves-to-equal-array-elements",
    displayId: 453,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-number-of-arrows-to-burst-balloons",
    displayId: 452,
    difficulty: 2,
  },
  {
    urlSlug: "sort-characters-by-frequency",
    displayId: 451,
    difficulty: 2,
  },
  {
    urlSlug: "delete-node-in-a-bst",
    displayId: 450,
    difficulty: 2,
  },
  {
    urlSlug: "serialize-and-deserialize-bst",
    displayId: 449,
    difficulty: 2,
  },
  {
    urlSlug: "find-all-numbers-disappeared-in-an-array",
    displayId: 448,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-boomerangs",
    displayId: 447,
    difficulty: 2,
  },
  {
    urlSlug: "arithmetic-slices-ii-subsequence",
    displayId: 446,
    difficulty: 3,
  },
  {
    urlSlug: "add-two-numbers-ii",
    displayId: 445,
    difficulty: 2,
  },
  {
    urlSlug: "sequence-reconstruction",
    displayId: 444,
    difficulty: 2,
  },
  {
    urlSlug: "string-compression",
    displayId: 443,
    difficulty: 2,
  },
  {
    urlSlug: "find-all-duplicates-in-an-array",
    displayId: 442,
    difficulty: 2,
  },
  {
    urlSlug: "arranging-coins",
    displayId: 441,
    difficulty: 1,
  },
  {
    urlSlug: "k-th-smallest-in-lexicographical-order",
    displayId: 440,
    difficulty: 3,
  },
  {
    urlSlug: "ternary-expression-parser",
    displayId: 439,
    difficulty: 2,
  },
  {
    urlSlug: "find-all-anagrams-in-a-string",
    displayId: 438,
    difficulty: 2,
  },
  {
    urlSlug: "path-sum-iii",
    displayId: 437,
    difficulty: 2,
  },
  {
    urlSlug: "find-right-interval",
    displayId: 436,
    difficulty: 2,
  },
  {
    urlSlug: "non-overlapping-intervals",
    displayId: 435,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-segments-in-a-string",
    displayId: 434,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-genetic-mutation",
    displayId: 433,
    difficulty: 2,
  },
  {
    urlSlug: "all-oone-data-structure",
    displayId: 432,
    difficulty: 3,
  },
  {
    urlSlug: "word-squares",
    displayId: 425,
    difficulty: 3,
  },
  {
    urlSlug: "longest-repeating-character-replacement",
    displayId: 424,
    difficulty: 2,
  },
  {
    urlSlug: "reconstruct-original-digits-from-english",
    displayId: 423,
    difficulty: 2,
  },
  {
    urlSlug: "valid-word-square",
    displayId: 422,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-xor-of-two-numbers-in-an-array",
    displayId: 421,
    difficulty: 2,
  },
  {
    urlSlug: "strong-password-checker",
    displayId: 420,
    difficulty: 3,
  },
  {
    urlSlug: "battleships-in-a-board",
    displayId: 419,
    difficulty: 2,
  },
  {
    urlSlug: "sentence-screen-fitting",
    displayId: 418,
    difficulty: 2,
  },
  {
    urlSlug: "pacific-atlantic-water-flow",
    displayId: 417,
    difficulty: 2,
  },
  {
    urlSlug: "partition-equal-subset-sum",
    displayId: 416,
    difficulty: 2,
  },
  {
    urlSlug: "add-strings",
    displayId: 415,
    difficulty: 1,
  },
  {
    urlSlug: "third-maximum-number",
    displayId: 414,
    difficulty: 1,
  },
  {
    urlSlug: "arithmetic-slices",
    displayId: 413,
    difficulty: 2,
  },
  {
    urlSlug: "fizz-buzz",
    displayId: 412,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-unique-word-abbreviation",
    displayId: 411,
    difficulty: 3,
  },
  {
    urlSlug: "split-array-largest-sum",
    displayId: 410,
    difficulty: 3,
  },
  {
    urlSlug: "longest-palindrome",
    displayId: 409,
    difficulty: 1,
  },
  {
    urlSlug: "valid-word-abbreviation",
    displayId: 408,
    difficulty: 1,
  },
  {
    urlSlug: "trapping-rain-water-ii",
    displayId: 407,
    difficulty: 3,
  },
  {
    urlSlug: "queue-reconstruction-by-height",
    displayId: 406,
    difficulty: 2,
  },
  {
    urlSlug: "convert-a-number-to-hexadecimal",
    displayId: 405,
    difficulty: 1,
  },
  {
    urlSlug: "sum-of-left-leaves",
    displayId: 404,
    difficulty: 1,
  },
  {
    urlSlug: "frog-jump",
    displayId: 403,
    difficulty: 3,
  },
  {
    urlSlug: "remove-k-digits",
    displayId: 402,
    difficulty: 2,
  },
  {
    urlSlug: "binary-watch",
    displayId: 401,
    difficulty: 1,
  },
  {
    urlSlug: "nth-digit",
    displayId: 400,
    difficulty: 2,
  },
  {
    urlSlug: "evaluate-division",
    displayId: 399,
    difficulty: 2,
  },
  {
    urlSlug: "random-pick-index",
    displayId: 398,
    difficulty: 2,
  },
  {
    urlSlug: "integer-replacement",
    displayId: 397,
    difficulty: 2,
  },
  {
    urlSlug: "rotate-function",
    displayId: 396,
    difficulty: 2,
  },
  {
    urlSlug: "longest-substring-with-at-least-k-repeating-characters",
    displayId: 395,
    difficulty: 2,
  },
  {
    urlSlug: "decode-string",
    displayId: 394,
    difficulty: 2,
  },
  {
    urlSlug: "utf-8-validation",
    displayId: 393,
    difficulty: 2,
  },
  {
    urlSlug: "is-subsequence",
    displayId: 392,
    difficulty: 1,
  },
  {
    urlSlug: "perfect-rectangle",
    displayId: 391,
    difficulty: 3,
  },
  {
    urlSlug: "elimination-game",
    displayId: 390,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-difference",
    displayId: 389,
    difficulty: 1,
  },
  {
    urlSlug: "longest-absolute-file-path",
    displayId: 388,
    difficulty: 2,
  },
  {
    urlSlug: "first-unique-character-in-a-string",
    displayId: 387,
    difficulty: 1,
  },
  {
    urlSlug: "lexicographical-numbers",
    displayId: 386,
    difficulty: 2,
  },
  {
    urlSlug: "mini-parser",
    displayId: 385,
    difficulty: 2,
  },
  {
    urlSlug: "shuffle-an-array",
    displayId: 384,
    difficulty: 2,
  },
  {
    urlSlug: "ransom-note",
    displayId: 383,
    difficulty: 1,
  },
  {
    urlSlug: "linked-list-random-node",
    displayId: 382,
    difficulty: 2,
  },
  {
    urlSlug: "insert-delete-getrandom-o1-duplicates-allowed",
    displayId: 381,
    difficulty: 3,
  },
  {
    urlSlug: "insert-delete-getrandom-o1",
    displayId: 380,
    difficulty: 2,
  },
  {
    urlSlug: "design-phone-directory",
    displayId: 379,
    difficulty: 2,
  },
  {
    urlSlug: "kth-smallest-element-in-a-sorted-matrix",
    displayId: 378,
    difficulty: 2,
  },
  {
    urlSlug: "combination-sum-iv",
    displayId: 377,
    difficulty: 2,
  },
  {
    urlSlug: "wiggle-subsequence",
    displayId: 376,
    difficulty: 2,
  },
  {
    urlSlug: "guess-number-higher-or-lower-ii",
    displayId: 375,
    difficulty: 2,
  },
  {
    urlSlug: "guess-number-higher-or-lower",
    displayId: 374,
    difficulty: 1,
  },
  {
    urlSlug: "find-k-pairs-with-smallest-sums",
    displayId: 373,
    difficulty: 2,
  },
  {
    urlSlug: "super-pow",
    displayId: 372,
    difficulty: 2,
  },
  {
    urlSlug: "sum-of-two-integers",
    displayId: 371,
    difficulty: 2,
  },
  {
    urlSlug: "range-addition",
    displayId: 370,
    difficulty: 2,
  },
  {
    urlSlug: "plus-one-linked-list",
    displayId: 369,
    difficulty: 2,
  },
  {
    urlSlug: "largest-divisible-subset",
    displayId: 368,
    difficulty: 2,
  },
  {
    urlSlug: "valid-perfect-square",
    displayId: 367,
    difficulty: 1,
  },
  {
    urlSlug: "find-leaves-of-binary-tree",
    displayId: 366,
    difficulty: 2,
  },
  {
    urlSlug: "water-and-jug-problem",
    displayId: 365,
    difficulty: 2,
  },
  {
    urlSlug: "nested-list-weight-sum-ii",
    displayId: 364,
    difficulty: 2,
  },
  {
    urlSlug: "max-sum-of-rectangle-no-larger-than-k",
    displayId: 363,
    difficulty: 3,
  },
  {
    urlSlug: "design-hit-counter",
    displayId: 362,
    difficulty: 2,
  },
  {
    urlSlug: "bomb-enemy",
    displayId: 361,
    difficulty: 2,
  },
  {
    urlSlug: "sort-transformed-array",
    displayId: 360,
    difficulty: 2,
  },
  {
    urlSlug: "logger-rate-limiter",
    displayId: 359,
    difficulty: 1,
  },
  {
    urlSlug: "rearrange-string-k-distance-apart",
    displayId: 358,
    difficulty: 3,
  },
  {
    urlSlug: "count-numbers-with-unique-digits",
    displayId: 357,
    difficulty: 2,
  },
  {
    urlSlug: "line-reflection",
    displayId: 356,
    difficulty: 2,
  },
  {
    urlSlug: "design-twitter",
    displayId: 355,
    difficulty: 2,
  },
  {
    urlSlug: "russian-doll-envelopes",
    displayId: 354,
    difficulty: 3,
  },
  {
    urlSlug: "design-snake-game",
    displayId: 353,
    difficulty: 2,
  },
  {
    urlSlug: "data-stream-as-disjoint-intervals",
    displayId: 352,
    difficulty: 3,
  },
  {
    urlSlug: "android-unlock-patterns",
    displayId: 351,
    difficulty: 2,
  },
  {
    urlSlug: "intersection-of-two-arrays-ii",
    displayId: 350,
    difficulty: 1,
  },
  {
    urlSlug: "intersection-of-two-arrays",
    displayId: 349,
    difficulty: 1,
  },
  {
    urlSlug: "design-tic-tac-toe",
    displayId: 348,
    difficulty: 2,
  },
  {
    urlSlug: "top-k-frequent-elements",
    displayId: 347,
    difficulty: 2,
  },
  {
    urlSlug: "moving-average-from-data-stream",
    displayId: 346,
    difficulty: 1,
  },
  {
    urlSlug: "reverse-vowels-of-a-string",
    displayId: 345,
    difficulty: 1,
  },
  {
    urlSlug: "reverse-string",
    displayId: 344,
    difficulty: 1,
  },
  {
    urlSlug: "integer-break",
    displayId: 343,
    difficulty: 2,
  },
  {
    urlSlug: "power-of-four",
    displayId: 342,
    difficulty: 1,
  },
  {
    urlSlug: "flatten-nested-list-iterator",
    displayId: 341,
    difficulty: 2,
  },
  {
    urlSlug: "longest-substring-with-at-most-k-distinct-characters",
    displayId: 340,
    difficulty: 2,
  },
  {
    urlSlug: "nested-list-weight-sum",
    displayId: 339,
    difficulty: 2,
  },
  {
    urlSlug: "counting-bits",
    displayId: 338,
    difficulty: 1,
  },
  {
    urlSlug: "house-robber-iii",
    displayId: 337,
    difficulty: 2,
  },
  {
    urlSlug: "palindrome-pairs",
    displayId: 336,
    difficulty: 3,
  },
  {
    urlSlug: "self-crossing",
    displayId: 335,
    difficulty: 3,
  },
  {
    urlSlug: "increasing-triplet-subsequence",
    displayId: 334,
    difficulty: 2,
  },
  {
    urlSlug: "largest-bst-subtree",
    displayId: 333,
    difficulty: 2,
  },
  {
    urlSlug: "reconstruct-itinerary",
    displayId: 332,
    difficulty: 3,
  },
  {
    urlSlug: "verify-preorder-serialization-of-a-binary-tree",
    displayId: 331,
    difficulty: 2,
  },
  {
    urlSlug: "patching-array",
    displayId: 330,
    difficulty: 3,
  },
  {
    urlSlug: "longest-increasing-path-in-a-matrix",
    displayId: 329,
    difficulty: 3,
  },
  {
    urlSlug: "odd-even-linked-list",
    displayId: 328,
    difficulty: 2,
  },
  {
    urlSlug: "count-of-range-sum",
    displayId: 327,
    difficulty: 3,
  },
  {
    urlSlug: "power-of-three",
    displayId: 326,
    difficulty: 1,
  },
  {
    urlSlug: "maximum-size-subarray-sum-equals-k",
    displayId: 325,
    difficulty: 2,
  },
  {
    urlSlug: "wiggle-sort-ii",
    displayId: 324,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-connected-components-in-an-undirected-graph",
    displayId: 323,
    difficulty: 2,
  },
  {
    urlSlug: "coin-change",
    displayId: 322,
    difficulty: 2,
  },
  {
    urlSlug: "create-maximum-number",
    displayId: 321,
    difficulty: 3,
  },
  {
    urlSlug: "generalized-abbreviation",
    displayId: 320,
    difficulty: 2,
  },
  {
    urlSlug: "bulb-switcher",
    displayId: 319,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-product-of-word-lengths",
    displayId: 318,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-distance-from-all-buildings",
    displayId: 317,
    difficulty: 3,
  },
  {
    urlSlug: "remove-duplicate-letters",
    displayId: 316,
    difficulty: 2,
  },
  {
    urlSlug: "count-of-smaller-numbers-after-self",
    displayId: 315,
    difficulty: 3,
  },
  {
    urlSlug: "binary-tree-vertical-order-traversal",
    displayId: 314,
    difficulty: 2,
  },
  {
    urlSlug: "super-ugly-number",
    displayId: 313,
    difficulty: 2,
  },
  {
    urlSlug: "burst-balloons",
    displayId: 312,
    difficulty: 3,
  },
  {
    urlSlug: "sparse-matrix-multiplication",
    displayId: 311,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-height-trees",
    displayId: 310,
    difficulty: 2,
  },
  {
    urlSlug: "best-time-to-buy-and-sell-stock-with-cooldown",
    displayId: 309,
    difficulty: 2,
  },
  {
    urlSlug: "range-sum-query-2d-mutable",
    displayId: 308,
    difficulty: 3,
  },
  {
    urlSlug: "range-sum-query-mutable",
    displayId: 307,
    difficulty: 2,
  },
  {
    urlSlug: "additive-number",
    displayId: 306,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-islands-ii",
    displayId: 305,
    difficulty: 3,
  },
  {
    urlSlug: "range-sum-query-2d-immutable",
    displayId: 304,
    difficulty: 2,
  },
  {
    urlSlug: "range-sum-query-immutable",
    displayId: 303,
    difficulty: 1,
  },
  {
    urlSlug: "smallest-rectangle-enclosing-black-pixels",
    displayId: 302,
    difficulty: 3,
  },
  {
    urlSlug: "remove-invalid-parentheses",
    displayId: 301,
    difficulty: 3,
  },
  {
    urlSlug: "longest-increasing-subsequence",
    displayId: 300,
    difficulty: 2,
  },
  {
    urlSlug: "bulls-and-cows",
    displayId: 299,
    difficulty: 2,
  },
  {
    urlSlug: "binary-tree-longest-consecutive-sequence",
    displayId: 298,
    difficulty: 2,
  },
  {
    urlSlug: "serialize-and-deserialize-binary-tree",
    displayId: 297,
    difficulty: 3,
  },
  {
    urlSlug: "best-meeting-point",
    displayId: 296,
    difficulty: 3,
  },
  {
    urlSlug: "find-median-from-data-stream",
    displayId: 295,
    difficulty: 3,
  },
  {
    urlSlug: "flip-game-ii",
    displayId: 294,
    difficulty: 2,
  },
  {
    urlSlug: "flip-game",
    displayId: 293,
    difficulty: 1,
  },
  {
    urlSlug: "nim-game",
    displayId: 292,
    difficulty: 1,
  },
  {
    urlSlug: "word-pattern-ii",
    displayId: 291,
    difficulty: 2,
  },
  {
    urlSlug: "word-pattern",
    displayId: 290,
    difficulty: 1,
  },
  {
    urlSlug: "game-of-life",
    displayId: 289,
    difficulty: 2,
  },
  {
    urlSlug: "unique-word-abbreviation",
    displayId: 288,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-duplicate-number",
    displayId: 287,
    difficulty: 2,
  },
  {
    urlSlug: "walls-and-gates",
    displayId: 286,
    difficulty: 2,
  },
  {
    urlSlug: "inorder-successor-in-bst",
    displayId: 285,
    difficulty: 2,
  },
  {
    urlSlug: "peeking-iterator",
    displayId: 284,
    difficulty: 2,
  },
  {
    urlSlug: "move-zeroes",
    displayId: 283,
    difficulty: 1,
  },
  {
    urlSlug: "expression-add-operators",
    displayId: 282,
    difficulty: 3,
  },
  {
    urlSlug: "zigzag-iterator",
    displayId: 281,
    difficulty: 2,
  },
  {
    urlSlug: "wiggle-sort",
    displayId: 280,
    difficulty: 2,
  },
  {
    urlSlug: "perfect-squares",
    displayId: 279,
    difficulty: 2,
  },
  {
    urlSlug: "first-bad-version",
    displayId: 278,
    difficulty: 1,
  },
  {
    urlSlug: "find-the-celebrity",
    displayId: 277,
    difficulty: 2,
  },
  {
    urlSlug: "paint-fence",
    displayId: 276,
    difficulty: 2,
  },
  {
    urlSlug: "h-index-ii",
    displayId: 275,
    difficulty: 2,
  },
  {
    urlSlug: "h-index",
    displayId: 274,
    difficulty: 2,
  },
  {
    urlSlug: "integer-to-english-words",
    displayId: 273,
    difficulty: 3,
  },
  {
    urlSlug: "closest-binary-search-tree-value-ii",
    displayId: 272,
    difficulty: 3,
  },
  {
    urlSlug: "encode-and-decode-strings",
    displayId: 271,
    difficulty: 2,
  },
  {
    urlSlug: "closest-binary-search-tree-value",
    displayId: 270,
    difficulty: 1,
  },
  {
    urlSlug: "alien-dictionary",
    displayId: 269,
    difficulty: 3,
  },
  {
    urlSlug: "missing-number",
    displayId: 268,
    difficulty: 1,
  },
  {
    urlSlug: "palindrome-permutation-ii",
    displayId: 267,
    difficulty: 2,
  },
  {
    urlSlug: "palindrome-permutation",
    displayId: 266,
    difficulty: 1,
  },
  {
    urlSlug: "paint-house-ii",
    displayId: 265,
    difficulty: 3,
  },
  {
    urlSlug: "ugly-number-ii",
    displayId: 264,
    difficulty: 2,
  },
  {
    urlSlug: "ugly-number",
    displayId: 263,
    difficulty: 1,
  },
  {
    urlSlug: "graph-valid-tree",
    displayId: 261,
    difficulty: 2,
  },
  {
    urlSlug: "single-number-iii",
    displayId: 260,
    difficulty: 2,
  },
  {
    urlSlug: "3sum-smaller",
    displayId: 259,
    difficulty: 2,
  },
  {
    urlSlug: "add-digits",
    displayId: 258,
    difficulty: 1,
  },
  {
    urlSlug: "binary-tree-paths",
    displayId: 257,
    difficulty: 1,
  },
  {
    urlSlug: "paint-house",
    displayId: 256,
    difficulty: 2,
  },
  {
    urlSlug: "verify-preorder-sequence-in-binary-search-tree",
    displayId: 255,
    difficulty: 2,
  },
  {
    urlSlug: "factor-combinations",
    displayId: 254,
    difficulty: 2,
  },
  {
    urlSlug: "meeting-rooms-ii",
    displayId: 253,
    difficulty: 2,
  },
  {
    urlSlug: "meeting-rooms",
    displayId: 252,
    difficulty: 1,
  },
  {
    urlSlug: "flatten-2d-vector",
    displayId: 251,
    difficulty: 2,
  },
  {
    urlSlug: "count-univalue-subtrees",
    displayId: 250,
    difficulty: 2,
  },
  {
    urlSlug: "group-shifted-strings",
    displayId: 249,
    difficulty: 2,
  },
  {
    urlSlug: "strobogrammatic-number-iii",
    displayId: 248,
    difficulty: 3,
  },
  {
    urlSlug: "strobogrammatic-number-ii",
    displayId: 247,
    difficulty: 2,
  },
  {
    urlSlug: "strobogrammatic-number",
    displayId: 246,
    difficulty: 1,
  },
  {
    urlSlug: "shortest-word-distance-iii",
    displayId: 245,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-word-distance-ii",
    displayId: 244,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-word-distance",
    displayId: 243,
    difficulty: 1,
  },
  {
    urlSlug: "valid-anagram",
    displayId: 242,
    difficulty: 1,
  },
  {
    urlSlug: "different-ways-to-add-parentheses",
    displayId: 241,
    difficulty: 2,
  },
  {
    urlSlug: "search-a-2d-matrix-ii",
    displayId: 240,
    difficulty: 2,
  },
  {
    urlSlug: "sliding-window-maximum",
    displayId: 239,
    difficulty: 3,
  },
  {
    urlSlug: "product-of-array-except-self",
    displayId: 238,
    difficulty: 2,
  },
  {
    urlSlug: "delete-node-in-a-linked-list",
    displayId: 237,
    difficulty: 2,
  },
  {
    urlSlug: "lowest-common-ancestor-of-a-binary-tree",
    displayId: 236,
    difficulty: 2,
  },
  {
    urlSlug: "lowest-common-ancestor-of-a-binary-search-tree",
    displayId: 235,
    difficulty: 2,
  },
  {
    urlSlug: "palindrome-linked-list",
    displayId: 234,
    difficulty: 1,
  },
  {
    urlSlug: "number-of-digit-one",
    displayId: 233,
    difficulty: 3,
  },
  {
    urlSlug: "implement-queue-using-stacks",
    displayId: 232,
    difficulty: 1,
  },
  {
    urlSlug: "power-of-two",
    displayId: 231,
    difficulty: 1,
  },
  {
    urlSlug: "kth-smallest-element-in-a-bst",
    displayId: 230,
    difficulty: 2,
  },
  {
    urlSlug: "majority-element-ii",
    displayId: 229,
    difficulty: 2,
  },
  {
    urlSlug: "summary-ranges",
    displayId: 228,
    difficulty: 1,
  },
  {
    urlSlug: "basic-calculator-ii",
    displayId: 227,
    difficulty: 2,
  },
  {
    urlSlug: "invert-binary-tree",
    displayId: 226,
    difficulty: 1,
  },
  {
    urlSlug: "implement-stack-using-queues",
    displayId: 225,
    difficulty: 1,
  },
  {
    urlSlug: "basic-calculator",
    displayId: 224,
    difficulty: 3,
  },
  {
    urlSlug: "rectangle-area",
    displayId: 223,
    difficulty: 2,
  },
  {
    urlSlug: "count-complete-tree-nodes",
    displayId: 222,
    difficulty: 2,
  },
  {
    urlSlug: "maximal-square",
    displayId: 221,
    difficulty: 2,
  },
  {
    urlSlug: "contains-duplicate-iii",
    displayId: 220,
    difficulty: 3,
  },
  {
    urlSlug: "contains-duplicate-ii",
    displayId: 219,
    difficulty: 1,
  },
  {
    urlSlug: "the-skyline-problem",
    displayId: 218,
    difficulty: 3,
  },
  {
    urlSlug: "contains-duplicate",
    displayId: 217,
    difficulty: 1,
  },
  {
    urlSlug: "combination-sum-iii",
    displayId: 216,
    difficulty: 2,
  },
  {
    urlSlug: "kth-largest-element-in-an-array",
    displayId: 215,
    difficulty: 2,
  },
  {
    urlSlug: "shortest-palindrome",
    displayId: 214,
    difficulty: 3,
  },
  {
    urlSlug: "house-robber-ii",
    displayId: 213,
    difficulty: 2,
  },
  {
    urlSlug: "word-search-ii",
    displayId: 212,
    difficulty: 3,
  },
  {
    urlSlug: "design-add-and-search-words-data-structure",
    displayId: 211,
    difficulty: 2,
  },
  {
    urlSlug: "course-schedule-ii",
    displayId: 210,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-size-subarray-sum",
    displayId: 209,
    difficulty: 2,
  },
  {
    urlSlug: "implement-trie-prefix-tree",
    displayId: 208,
    difficulty: 2,
  },
  {
    urlSlug: "course-schedule",
    displayId: 207,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-linked-list",
    displayId: 206,
    difficulty: 1,
  },
  {
    urlSlug: "isomorphic-strings",
    displayId: 205,
    difficulty: 1,
  },
  {
    urlSlug: "count-primes",
    displayId: 204,
    difficulty: 2,
  },
  {
    urlSlug: "remove-linked-list-elements",
    displayId: 203,
    difficulty: 1,
  },
  {
    urlSlug: "happy-number",
    displayId: 202,
    difficulty: 1,
  },
  {
    urlSlug: "bitwise-and-of-numbers-range",
    displayId: 201,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-islands",
    displayId: 200,
    difficulty: 2,
  },
  {
    urlSlug: "binary-tree-right-side-view",
    displayId: 199,
    difficulty: 2,
  },
  {
    urlSlug: "house-robber",
    displayId: 198,
    difficulty: 2,
  },
  {
    urlSlug: "number-of-1-bits",
    displayId: 191,
    difficulty: 1,
  },
  {
    urlSlug: "reverse-bits",
    displayId: 190,
    difficulty: 1,
  },
  {
    urlSlug: "rotate-array",
    displayId: 189,
    difficulty: 2,
  },
  {
    urlSlug: "best-time-to-buy-and-sell-stock-iv",
    displayId: 188,
    difficulty: 3,
  },
  {
    urlSlug: "repeated-dna-sequences",
    displayId: 187,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-words-in-a-string-ii",
    displayId: 186,
    difficulty: 2,
  },
  {
    urlSlug: "largest-number",
    displayId: 179,
    difficulty: 2,
  },
  {
    urlSlug: "dungeon-game",
    displayId: 174,
    difficulty: 3,
  },
  {
    urlSlug: "binary-search-tree-iterator",
    displayId: 173,
    difficulty: 2,
  },
  {
    urlSlug: "factorial-trailing-zeroes",
    displayId: 172,
    difficulty: 2,
  },
  {
    urlSlug: "excel-sheet-column-number",
    displayId: 171,
    difficulty: 1,
  },
  {
    urlSlug: "two-sum-iii-data-structure-design",
    displayId: 170,
    difficulty: 1,
  },
  {
    urlSlug: "majority-element",
    displayId: 169,
    difficulty: 1,
  },
  {
    urlSlug: "excel-sheet-column-title",
    displayId: 168,
    difficulty: 1,
  },
  {
    urlSlug: "two-sum-ii-input-array-is-sorted",
    displayId: 167,
    difficulty: 2,
  },
  {
    urlSlug: "fraction-to-recurring-decimal",
    displayId: 166,
    difficulty: 2,
  },
  {
    urlSlug: "compare-version-numbers",
    displayId: 165,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-gap",
    displayId: 164,
    difficulty: 3,
  },
  {
    urlSlug: "missing-ranges",
    displayId: 163,
    difficulty: 1,
  },
  {
    urlSlug: "find-peak-element",
    displayId: 162,
    difficulty: 2,
  },
  {
    urlSlug: "one-edit-distance",
    displayId: 161,
    difficulty: 2,
  },
  {
    urlSlug: "intersection-of-two-linked-lists",
    displayId: 160,
    difficulty: 1,
  },
  {
    urlSlug: "longest-substring-with-at-most-two-distinct-characters",
    displayId: 159,
    difficulty: 2,
  },
  {
    urlSlug: "read-n-characters-given-read4-ii-call-multiple-times",
    displayId: 158,
    difficulty: 3,
  },
  {
    urlSlug: "read-n-characters-given-read4",
    displayId: 157,
    difficulty: 1,
  },
  {
    urlSlug: "binary-tree-upside-down",
    displayId: 156,
    difficulty: 2,
  },
  {
    urlSlug: "min-stack",
    displayId: 155,
    difficulty: 2,
  },
  {
    urlSlug: "find-minimum-in-rotated-sorted-array-ii",
    displayId: 154,
    difficulty: 3,
  },
  {
    urlSlug: "find-minimum-in-rotated-sorted-array",
    displayId: 153,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-product-subarray",
    displayId: 152,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-words-in-a-string",
    displayId: 151,
    difficulty: 2,
  },
  {
    urlSlug: "evaluate-reverse-polish-notation",
    displayId: 150,
    difficulty: 2,
  },
  {
    urlSlug: "max-points-on-a-line",
    displayId: 149,
    difficulty: 3,
  },
  {
    urlSlug: "sort-list",
    displayId: 148,
    difficulty: 2,
  },
  {
    urlSlug: "insertion-sort-list",
    displayId: 147,
    difficulty: 2,
  },
  {
    urlSlug: "lru-cache",
    displayId: 146,
    difficulty: 2,
  },
  {
    urlSlug: "binary-tree-postorder-traversal",
    displayId: 145,
    difficulty: 1,
  },
  {
    urlSlug: "binary-tree-preorder-traversal",
    displayId: 144,
    difficulty: 1,
  },
  {
    urlSlug: "reorder-list",
    displayId: 143,
    difficulty: 2,
  },
  {
    urlSlug: "linked-list-cycle-ii",
    displayId: 142,
    difficulty: 2,
  },
  {
    urlSlug: "linked-list-cycle",
    displayId: 141,
    difficulty: 1,
  },
  {
    urlSlug: "word-break-ii",
    displayId: 140,
    difficulty: 3,
  },
  {
    urlSlug: "word-break",
    displayId: 139,
    difficulty: 2,
  },
  {
    urlSlug: "copy-list-with-random-pointer",
    displayId: 138,
    difficulty: 2,
  },
  {
    urlSlug: "single-number-ii",
    displayId: 137,
    difficulty: 2,
  },
  {
    urlSlug: "single-number",
    displayId: 136,
    difficulty: 1,
  },
  {
    urlSlug: "candy",
    displayId: 135,
    difficulty: 3,
  },
  {
    urlSlug: "gas-station",
    displayId: 134,
    difficulty: 2,
  },
  {
    urlSlug: "clone-graph",
    displayId: 133,
    difficulty: 2,
  },
  {
    urlSlug: "palindrome-partitioning-ii",
    displayId: 132,
    difficulty: 3,
  },
  {
    urlSlug: "palindrome-partitioning",
    displayId: 131,
    difficulty: 2,
  },
  {
    urlSlug: "surrounded-regions",
    displayId: 130,
    difficulty: 2,
  },
  {
    urlSlug: "sum-root-to-leaf-numbers",
    displayId: 129,
    difficulty: 2,
  },
  {
    urlSlug: "longest-consecutive-sequence",
    displayId: 128,
    difficulty: 2,
  },
  {
    urlSlug: "word-ladder",
    displayId: 127,
    difficulty: 3,
  },
  {
    urlSlug: "word-ladder-ii",
    displayId: 126,
    difficulty: 3,
  },
  {
    urlSlug: "valid-palindrome",
    displayId: 125,
    difficulty: 1,
  },
  {
    urlSlug: "binary-tree-maximum-path-sum",
    displayId: 124,
    difficulty: 3,
  },
  {
    urlSlug: "best-time-to-buy-and-sell-stock-iii",
    displayId: 123,
    difficulty: 3,
  },
  {
    urlSlug: "best-time-to-buy-and-sell-stock-ii",
    displayId: 122,
    difficulty: 2,
  },
  {
    urlSlug: "best-time-to-buy-and-sell-stock",
    displayId: 121,
    difficulty: 1,
  },
  {
    urlSlug: "triangle",
    displayId: 120,
    difficulty: 2,
  },
  {
    urlSlug: "pascals-triangle-ii",
    displayId: 119,
    difficulty: 1,
  },
  {
    urlSlug: "pascals-triangle",
    displayId: 118,
    difficulty: 1,
  },
  {
    urlSlug: "populating-next-right-pointers-in-each-node-ii",
    displayId: 117,
    difficulty: 2,
  },
  {
    urlSlug: "populating-next-right-pointers-in-each-node",
    displayId: 116,
    difficulty: 2,
  },
  {
    urlSlug: "distinct-subsequences",
    displayId: 115,
    difficulty: 3,
  },
  {
    urlSlug: "flatten-binary-tree-to-linked-list",
    displayId: 114,
    difficulty: 2,
  },
  {
    urlSlug: "path-sum-ii",
    displayId: 113,
    difficulty: 2,
  },
  {
    urlSlug: "path-sum",
    displayId: 112,
    difficulty: 1,
  },
  {
    urlSlug: "minimum-depth-of-binary-tree",
    displayId: 111,
    difficulty: 1,
  },
  {
    urlSlug: "balanced-binary-tree",
    displayId: 110,
    difficulty: 1,
  },
  {
    urlSlug: "convert-sorted-list-to-binary-search-tree",
    displayId: 109,
    difficulty: 2,
  },
  {
    urlSlug: "convert-sorted-array-to-binary-search-tree",
    displayId: 108,
    difficulty: 1,
  },
  {
    urlSlug: "binary-tree-level-order-traversal-ii",
    displayId: 107,
    difficulty: 2,
  },
  {
    urlSlug: "construct-binary-tree-from-inorder-and-postorder-traversal",
    displayId: 106,
    difficulty: 2,
  },
  {
    urlSlug: "construct-binary-tree-from-preorder-and-inorder-traversal",
    displayId: 105,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-depth-of-binary-tree",
    displayId: 104,
    difficulty: 1,
  },
  {
    urlSlug: "binary-tree-zigzag-level-order-traversal",
    displayId: 103,
    difficulty: 2,
  },
  {
    urlSlug: "binary-tree-level-order-traversal",
    displayId: 102,
    difficulty: 2,
  },
  {
    urlSlug: "symmetric-tree",
    displayId: 101,
    difficulty: 1,
  },
  {
    urlSlug: "same-tree",
    displayId: 100,
    difficulty: 1,
  },
  {
    urlSlug: "recover-binary-search-tree",
    displayId: 99,
    difficulty: 2,
  },
  {
    urlSlug: "validate-binary-search-tree",
    displayId: 98,
    difficulty: 2,
  },
  {
    urlSlug: "interleaving-string",
    displayId: 97,
    difficulty: 2,
  },
  {
    urlSlug: "unique-binary-search-trees",
    displayId: 96,
    difficulty: 2,
  },
  {
    urlSlug: "unique-binary-search-trees-ii",
    displayId: 95,
    difficulty: 2,
  },
  {
    urlSlug: "binary-tree-inorder-traversal",
    displayId: 94,
    difficulty: 1,
  },
  {
    urlSlug: "restore-ip-addresses",
    displayId: 93,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-linked-list-ii",
    displayId: 92,
    difficulty: 2,
  },
  {
    urlSlug: "decode-ways",
    displayId: 91,
    difficulty: 2,
  },
  {
    urlSlug: "subsets-ii",
    displayId: 90,
    difficulty: 2,
  },
  {
    urlSlug: "gray-code",
    displayId: 89,
    difficulty: 2,
  },
  {
    urlSlug: "merge-sorted-array",
    displayId: 88,
    difficulty: 1,
  },
  {
    urlSlug: "scramble-string",
    displayId: 87,
    difficulty: 3,
  },
  {
    urlSlug: "partition-list",
    displayId: 86,
    difficulty: 2,
  },
  {
    urlSlug: "maximal-rectangle",
    displayId: 85,
    difficulty: 3,
  },
  {
    urlSlug: "largest-rectangle-in-histogram",
    displayId: 84,
    difficulty: 3,
  },
  {
    urlSlug: "remove-duplicates-from-sorted-list",
    displayId: 83,
    difficulty: 1,
  },
  {
    urlSlug: "remove-duplicates-from-sorted-list-ii",
    displayId: 82,
    difficulty: 2,
  },
  {
    urlSlug: "search-in-rotated-sorted-array-ii",
    displayId: 81,
    difficulty: 2,
  },
  {
    urlSlug: "remove-duplicates-from-sorted-array-ii",
    displayId: 80,
    difficulty: 2,
  },
  {
    urlSlug: "word-search",
    displayId: 79,
    difficulty: 2,
  },
  {
    urlSlug: "subsets",
    displayId: 78,
    difficulty: 2,
  },
  {
    urlSlug: "combinations",
    displayId: 77,
    difficulty: 2,
  },
  {
    urlSlug: "minimum-window-substring",
    displayId: 76,
    difficulty: 3,
  },
  {
    urlSlug: "sort-colors",
    displayId: 75,
    difficulty: 2,
  },
  {
    urlSlug: "search-a-2d-matrix",
    displayId: 74,
    difficulty: 2,
  },
  {
    urlSlug: "set-matrix-zeroes",
    displayId: 73,
    difficulty: 2,
  },
  {
    urlSlug: "edit-distance",
    displayId: 72,
    difficulty: 3,
  },
  {
    urlSlug: "simplify-path",
    displayId: 71,
    difficulty: 2,
  },
  {
    urlSlug: "climbing-stairs",
    displayId: 70,
    difficulty: 1,
  },
  {
    urlSlug: "sqrtx",
    displayId: 69,
    difficulty: 1,
  },
  {
    urlSlug: "text-justification",
    displayId: 68,
    difficulty: 3,
  },
  {
    urlSlug: "add-binary",
    displayId: 67,
    difficulty: 1,
  },
  {
    urlSlug: "plus-one",
    displayId: 66,
    difficulty: 1,
  },
  {
    urlSlug: "valid-number",
    displayId: 65,
    difficulty: 3,
  },
  {
    urlSlug: "minimum-path-sum",
    displayId: 64,
    difficulty: 2,
  },
  {
    urlSlug: "unique-paths-ii",
    displayId: 63,
    difficulty: 2,
  },
  {
    urlSlug: "unique-paths",
    displayId: 62,
    difficulty: 2,
  },
  {
    urlSlug: "rotate-list",
    displayId: 61,
    difficulty: 2,
  },
  {
    urlSlug: "permutation-sequence",
    displayId: 60,
    difficulty: 3,
  },
  {
    urlSlug: "spiral-matrix-ii",
    displayId: 59,
    difficulty: 2,
  },
  {
    urlSlug: "length-of-last-word",
    displayId: 58,
    difficulty: 1,
  },
  {
    urlSlug: "insert-interval",
    displayId: 57,
    difficulty: 2,
  },
  {
    urlSlug: "merge-intervals",
    displayId: 56,
    difficulty: 2,
  },
  {
    urlSlug: "jump-game",
    displayId: 55,
    difficulty: 2,
  },
  {
    urlSlug: "spiral-matrix",
    displayId: 54,
    difficulty: 2,
  },
  {
    urlSlug: "maximum-subarray",
    displayId: 53,
    difficulty: 2,
  },
  {
    urlSlug: "n-queens-ii",
    displayId: 52,
    difficulty: 3,
  },
  {
    urlSlug: "n-queens",
    displayId: 51,
    difficulty: 3,
  },
  {
    urlSlug: "powx-n",
    displayId: 50,
    difficulty: 2,
  },
  {
    urlSlug: "group-anagrams",
    displayId: 49,
    difficulty: 2,
  },
  {
    urlSlug: "rotate-image",
    displayId: 48,
    difficulty: 2,
  },
  {
    urlSlug: "permutations-ii",
    displayId: 47,
    difficulty: 2,
  },
  {
    urlSlug: "permutations",
    displayId: 46,
    difficulty: 2,
  },
  {
    urlSlug: "jump-game-ii",
    displayId: 45,
    difficulty: 2,
  },
  {
    urlSlug: "wildcard-matching",
    displayId: 44,
    difficulty: 3,
  },
  {
    urlSlug: "multiply-strings",
    displayId: 43,
    difficulty: 2,
  },
  {
    urlSlug: "trapping-rain-water",
    displayId: 42,
    difficulty: 3,
  },
  {
    urlSlug: "first-missing-positive",
    displayId: 41,
    difficulty: 3,
  },
  {
    urlSlug: "combination-sum-ii",
    displayId: 40,
    difficulty: 2,
  },
  {
    urlSlug: "combination-sum",
    displayId: 39,
    difficulty: 2,
  },
  {
    urlSlug: "count-and-say",
    displayId: 38,
    difficulty: 2,
  },
  {
    urlSlug: "sudoku-solver",
    displayId: 37,
    difficulty: 3,
  },
  {
    urlSlug: "valid-sudoku",
    displayId: 36,
    difficulty: 2,
  },
  {
    urlSlug: "search-insert-position",
    displayId: 35,
    difficulty: 1,
  },
  {
    urlSlug: "find-first-and-last-position-of-element-in-sorted-array",
    displayId: 34,
    difficulty: 2,
  },
  {
    urlSlug: "search-in-rotated-sorted-array",
    displayId: 33,
    difficulty: 2,
  },
  {
    urlSlug: "longest-valid-parentheses",
    displayId: 32,
    difficulty: 3,
  },
  {
    urlSlug: "next-permutation",
    displayId: 31,
    difficulty: 2,
  },
  {
    urlSlug: "substring-with-concatenation-of-all-words",
    displayId: 30,
    difficulty: 3,
  },
  {
    urlSlug: "divide-two-integers",
    displayId: 29,
    difficulty: 2,
  },
  {
    urlSlug: "find-the-index-of-the-first-occurrence-in-a-string",
    displayId: 28,
    difficulty: 2,
  },
  {
    urlSlug: "remove-element",
    displayId: 27,
    difficulty: 1,
  },
  {
    urlSlug: "remove-duplicates-from-sorted-array",
    displayId: 26,
    difficulty: 1,
  },
  {
    urlSlug: "reverse-nodes-in-k-group",
    displayId: 25,
    difficulty: 3,
  },
  {
    urlSlug: "swap-nodes-in-pairs",
    displayId: 24,
    difficulty: 2,
  },
  {
    urlSlug: "merge-k-sorted-lists",
    displayId: 23,
    difficulty: 3,
  },
  {
    urlSlug: "generate-parentheses",
    displayId: 22,
    difficulty: 2,
  },
  {
    urlSlug: "merge-two-sorted-lists",
    displayId: 21,
    difficulty: 1,
  },
  {
    urlSlug: "valid-parentheses",
    displayId: 20,
    difficulty: 1,
  },
  {
    urlSlug: "remove-nth-node-from-end-of-list",
    displayId: 19,
    difficulty: 2,
  },
  {
    urlSlug: "4sum",
    displayId: 18,
    difficulty: 2,
  },
  {
    urlSlug: "letter-combinations-of-a-phone-number",
    displayId: 17,
    difficulty: 2,
  },
  {
    urlSlug: "3sum-closest",
    displayId: 16,
    difficulty: 2,
  },
  {
    urlSlug: "3sum",
    displayId: 15,
    difficulty: 2,
  },
  {
    urlSlug: "longest-common-prefix",
    displayId: 14,
    difficulty: 1,
  },
  {
    urlSlug: "roman-to-integer",
    displayId: 13,
    difficulty: 1,
  },
  {
    urlSlug: "integer-to-roman",
    displayId: 12,
    difficulty: 2,
  },
  {
    urlSlug: "container-with-most-water",
    displayId: 11,
    difficulty: 2,
  },
  {
    urlSlug: "regular-expression-matching",
    displayId: 10,
    difficulty: 3,
  },
  {
    urlSlug: "palindrome-number",
    displayId: 9,
    difficulty: 1,
  },
  {
    urlSlug: "string-to-integer-atoi",
    displayId: 8,
    difficulty: 2,
  },
  {
    urlSlug: "reverse-integer",
    displayId: 7,
    difficulty: 2,
  },
  {
    urlSlug: "zigzag-conversion",
    displayId: 6,
    difficulty: 2,
  },
  {
    urlSlug: "longest-palindromic-substring",
    displayId: 5,
    difficulty: 2,
  },
  {
    urlSlug: "median-of-two-sorted-arrays",
    displayId: 4,
    difficulty: 3,
  },
  {
    urlSlug: "longest-substring-without-repeating-characters",
    displayId: 3,
    difficulty: 2,
  },
  {
    urlSlug: "add-two-numbers",
    displayId: 2,
    difficulty: 2,
  },
  {
    urlSlug: "two-sum",
    displayId: 1,
    difficulty: 1,
  },
];

export default questionsData;
