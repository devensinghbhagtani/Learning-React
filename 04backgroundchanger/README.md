# Background Changer using React
This is what I Learnt:
- React's Ability to Update Elements Without Reloading the Page: React efficiently updates and renders components when the data changes, without the need for a full page reload.

- createRoot: This method is used in React 18 and later to create a root for rendering a React application. It manages the initial rendering and updates of the components by comparing the actual DOM (Document Object Model) with the Virtual DOM, ensuring that only the changed elements are updated.

- Fiber: This is the new reconciliation algorithm introduced in React 16. It breaks down the rendering work into units called "fibers," allowing React to pause, abort, or reuse work as necessary. This makes updates more efficient by managing the priority of rendering tasks, ensuring smoother user experiences, especially in complex applications.

- Reconciliation: This is the process React uses to determine which parts of the DOM need to be updated. The reconciliation algorithm, often referred to simply as "Recon," recursively compares the Virtual DOM with the real DOM. It identifies differences and updates only the parts of the DOM that have changed, which is the core principle behind the Virtual DOM's efficiency.

![image](https://github.com/devensinghbhagtani/Learning-React/assets/67409912/67bc731a-26f9-4ec0-82d3-a77a30c2da00)
