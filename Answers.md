1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   ==> Actions - contains action type and some data that it associated with that action type. They are the only source of information for the store,sending data from our appilcation to the store.

   Reducers - are the pure functions that takes in a state and an action. Reducers never change the state directly, it creates a new object based on the current state.

   Store - holds the application state that means any component, anywhere in the app can access that state. Store is known as a 'single source of truth' because it our state tree, allowing us to use stored state directly.

2) What is the difference between Application state and Component state? When would be a good time to use one over the other?
   ==> Application state is global and immutable, where as component state is local meaning state lives and can only updated within that specific component. Then it is passed down to its children via props.

3) Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   ==> Redux thunk is a middleware that makes the flow from redux action to reducer asynchronous, so that the action creators can make async API calls.
