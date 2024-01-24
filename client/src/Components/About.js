const About = () => {
    return (

        <div className="About">
          <h2> Manifesto About the Technology : JavaScript </h2>
            <br/>
            
<h4> Software components </h4> 
<h6>MongoDB
MongoDB is a NoSQL database program that uses JSON-like BSON (binary JSON) documents with schema.

The role of the database in the MERN stack is very commonly filled by MongoDB because its use of JSON-like documents for interacting with data as opposed to the row/column model allows it to integrate well with the other (JavaScript-based) components of the stack.

Express.js
Express.js (also referred to as Express) is a modular web application framework for Node.js.

Whilst Express is capable of acting as an internet-facing web server, even supporting SSL/TLS out of the box, it is often used in conjunction with a reverse proxy such as NGINX or Apache for performance reasons.

React
React (also known as React.js or ReactJS) is a JavaScript librar for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.Redux and React Router are respective examples of such libraries.    
</h6>            
<br/>            
<h4>Create, Read, Update, and Delete (CRUD) are the four basic functions that the App should be able to do, at most.</h4>
<h6>Create, Read, Update, Delete
When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.
The CRUD paradigm is common in constructing web applications, because it provides a memorable framework for reminding developers of how to construct full, usable models. </h6>          
<br/>         
<h4>REST API : </h4>
<h6>REST (representational state transfer) is a software architectural style that was created to guide the design and development of the architecture for the World Wide Web. REST defines a set of constraints for how the architecture of a distributed, Internet-scale hypermedia system, such as the Web, should behave. The REST architectural style emphasises uniform interfaces, independent deployment of components, the scalability of interactions between them, and creating a layered architecture to promote caching to reduce user-perceived latency, enforce security, and encapsulate legacy systems.
REST has been employed throughout the software industry to create stateless, reliable web-based applications. An application that adheres to the REST architectural constraints may be informally described as RESTful, although this term is more commonly associated with the design of HTTP-based APIs and what are widely considered best practices regarding the "verbs" (HTTP methods) a resource responds to while having little to do with REST as originally formulated—and is often even at odds with the concept.</h6>          
            
            
            
            
            </div>

      );
}
 
export default About;