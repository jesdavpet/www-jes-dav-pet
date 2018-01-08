---
path: "/blog/code-reviews-automation"
date: "2018-01-01"
dateTime: "2018-01-03T12:00:00Z"
title: "Painless Code Reviews, Through Automation"
tags: ["automation", "devops", "git"]
summary: "Using this simple formula for a Node.js development pipeline guarantees that code meets standards before it ever hits the review stage. Trusting that a pull-request meets minimum requirements, means having time to focus on the bigger picture -- yielding quick, easy, stress-free code reviews!"
---

The value that organizations can get from code reviews varies wildly.

At it's best, a code review is a fantastic opportunity to glean new insights from a thoughtful critique, bring new team members up to speed on best-practices, or even have a lively debate. But, at it's worst, a code review can seem  like a chore, be the source of interpersonal conflict leading to anxiety and resentment, or miss the point entirely by getting stuck on stylistic differences.

*__Luckily, unlike most interpersonal issues, we can engineer our way out of this one!__*

The following steps make up a simple formula to automate your way to a code-review-ready development pipeline. Using this formula has reduced friction, increased trust, and improved the experience for all involved -- yielding a much higher ROI on code reviews for our team!

**TL;DR**
- Practice TDD, and set up your test suite to run as changes are made
- Set a minimum threshold for test coverage
- Automate manual testing with end-to-end smoke-test(s)
- Adopt a style guide, and auto-format your code
- Leverage Git hooks to block failing code from being pushed to the repository


Practice TDD, and set up your test suite to run as changes are made
-------------------------------------------------------------------

The benefits of test driven development (TDD) are well understood, and accepted. A small tweak is using a watcher to re-run your unit-testing suite every time you save a file, the red on the console will let you know the instant you've broken any existing tests.

Since the best-practice is to write your new (failing) tests before coding, you'll also get satisfaction as soon as your code passes everything, and you see all green.

`> mocha ./**/**.test.js --watch`


Set a minimum threshold for test coverage
-----------------------------------------

Code coverage tools analyze your source code to calculate what percentage of your code is currently covered by unit-tests. Whenever new code is added, the percentage of test coverage is diluted. Developers that add logic to the application will be required to keep code coverage within range.

Even if you don't care for 100% test coverage, shoot for an upward trend. As a reviewer, knowing that the code you're reviewing meets a minimum standard for code coverage increases your confidence in the quality of the code.

`> nyc check-coverage --lines 80 --functions 100 --branches 90`


Create end-to-end smoke-test(s), to automate manual testing
-----------------------------------------------------------

Not everything is well suited to unit testing alone. Automating a smoke-test to check integration is a great way to catch big-picture mistakes that unit-tests may be too focused to catch.

Front-end applications can benefit from a headless client that emulates how a user would interact with the UI.

`> karma ... `

Similarly back-end code can benefit from smoke testing endpoints by make API calls against a locally run application server.

`> postman-<unknown> ... `


Adopt a style guide, and automatically format your code
-------------------------------------------------------

Are you aware that there's a holy-war over semi-colons and ASI in the JavaScript community? **Do your end-users ultimately care?** *Absolutely not!*

Adopt a style guide, and have your code automatically formatted as part of your development pipeline. Eliminating distracting code formatting fetishes can make it easier to focus on the big picture when reviewing someone else's code.

Being able to see the forest from the trees during a code review means that you're likely to have bandwidth for more important insights, like logic that doesn't meet business requirements, or design patterns -- instead of getting stuck on trivial things like indentation or variable naming schemes.

`> npm run standard --format ./**/**.js`


Use Git hooks to block failing code from being added to the repo
---------------------------------------------------------------

If you are using a Pull-Request based Git workflow, using the `prepush` Git hook means that each developer can do anything they like in the privacy of their local feature branch -- but they can't push it to the remote in preparation for a Pull-Request until it passes all checks for code quality.
