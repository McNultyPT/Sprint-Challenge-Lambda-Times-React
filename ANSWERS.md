1) PropTypes are used to type check data being passed down as props. It's important to check that data because it's easy to lose track of what type of data is being passed. It's an easy way to prevent bugs.

2) There is the Mounting Phase, in which you set your data and render and the CDM are invoked. The Updating Phase can be used to setState , which will force another render. Then finally, the Un-mounting phase where a component is unmounted or removed.

3) An HOC allows us to reuse a component by receiving a component as an argument and returning a new component. It allows for shared functionality when components are very similar, so you don't have to make a new component from scratch.

4) You could use CSS in a separate CSS file, which is beneficial for keeping the styling separate from the rest of the code. You could also use a library like Reactstrap, which has prebuilt components, which can help expedite the building process but limits you to the what the library has to offer. Lastly, you could write you CSS in JS by using Styled-Components, which allows for all of the code to be in one file, and you can reuse styled-components in areas that have the same stylings. It really is just convenience and preference to a certain degree.

