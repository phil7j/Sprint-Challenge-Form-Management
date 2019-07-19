# Answers

- [ ]  Why are forms used so often in web applications and software?

    Websites need some way for clients to interact and to input information. The web has become very data driven and forms are the only real way for web apps and software to collect explicitly collect users data. 

- [ ]  What advantages are there by using a forms library like Formik?

    The Formik library has the advantages of keeping the form building process relatively simple, even if you have complicated forms or a large amount of client-side validation taking place. 

    You don't need to store your form values in state and make extra logic in your React Component, Formik does most of that for you. 

- [ ]  What is stateful logic?

    Stateful logic is essentially any kind of logic in your Component that uses or deals with the state. 

- [ ]  What is a custom hook, and what does it mean to compose hooks together?

    A custom hook is a way for you to reuse stateful logic in your react app. At it's core it is just a function with custom logic that you can plug into your react app where needed. 

- [ ]  Describe the process of retrieving a token from a server and using that token in subsequent API calls.

    When in send a correct POST request when logging in, the server should reply with some sort of token. The Front-End then takes that token and saves it to local storage. Upon each additional GET, POST, PUT or DELETE request, the front end should attach that token to the header of each request. This way the server can identify that the correct user is accessing data.