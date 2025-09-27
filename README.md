# 1.What is JSX, and why is it used?
* JSX it's for JavaScript look like HTML but it's React.
 * Why it’s used?

* It makes easier and readable.
*  write HTML code directly inside JavaScript.
* React converts JSX into regular JavaScript code browser understands.

# 2.What is the difference between State and Props?
* Props: Passed from parent to child. Read-only, can’t changed component.

* State: Managed inside a component. Can changed component.

# 3.What is the useState hook, and how does it work?

* useState is React Hook,add state to a functional component.

* How it works:

* useState it gives two things:

* current value

* function update value

# 4.How can you share state between components in React?

* share state between components in React,  lift the state up to their common parent and then pass it down as props.


* Put the state in the parent component.

* Pass data to child components.

* If needed, also pass functions as props so children can update the parent’s state.

# 5.How is event handling done in React?
* React, event handling similar HTML, but have differences:

* Key points:

* Use camelCase

* onClick instead of onclick.

* Pass a function as the event handler, not a string.

* Events are written inside JSX.