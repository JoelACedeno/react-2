### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - The React Router gives the ability to implement client-side routing

- What is a single page application?
  - A single page application is a site that exclusively uses client-side routing

- What are some differences between client side and server side routing?
  - Server-side routing is more traditional, where the server decides what HTML to return based on the requested URL. Client-side routing uses JS to return a page via the browser instead of via the server. 

- What are two ways of handling redirects with React Router? When would you use each?
  - One way to handle a redirect with React Router is to render a Redirect element, another is to use the localStorage history. The first way would be used when an endpoint is inaccessable to the user, and the other would be used after the user should be redirected to another page after fulfilling something on the site, such as submitting a form. 

- What are two different ways to handle page-not-found user experiences using React Router?
  -  For page-not-found situations you can render a 404 not found page or you can redirect the user to a different page 

- How do you grab URL parameters from within a component using React Router?
  - The useParams hook stores information on URL parameters

- What is context in React? When would you use it?
  - Context in React is universal data in the application that is accessible across all components. It is helpful in making code less repetitive, for passing down props, and can be useful for global themes in the app.

- Describe some differences between class-based components and function
  components in React.
  - One main difference between class-based components and funcition components in React is the frequent use of and need to understand *this* and *bind* for things to work properly. Another difference is that there takes much more code to declare state and setting up event handlers.

- What are some of the problems that hooks were designed to solve?
  - Hooks were designed to solve repetitive code and lifecycle logic issues in React components. 