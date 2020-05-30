1. What problem does the context API help solve?

Context API helps to not pass props down from component to component - “prop drilling”. Context API allowes to store data on a context object, and retrieve that data in the necessary components from the context object, not props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-actions: For modifying a state tree, we need to dispatch an action. Actions are the only source of information for the store. An action is a plain Java Script object describing the change. The action must have type property, and may have a payload property.

-reducers specify how the application's state changes in response to actions sent to the store.

-store: This is the single global Read Only immuatable state, that is why it is a single source of truth.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state is the "global" state that all components in the component tree can access.
-Component state is state that is local to a single component and can be passed only to child components as a prop.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer Redux management system because of its control over application’s entire state tree, that makes it a great choice for building consistent and testable applications with React.
