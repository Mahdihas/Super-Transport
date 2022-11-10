import React from 'react'
import useTitle from '../../hook/useTitle'
import { TypeAnimation } from 'react-type-animation';


const Blog = () => {

  useTitle('Blog')
  return (<div className="">
    
    <h1 className='  text-center py-4 font-bold  my-3 bg-[#262c31]  text-[#97ba1f] '> <TypeAnimation
    sequence={['Some', 1000, 'Some Important', 1000, 'Some Important Question!',
               1000, 'Some Important', 1000, 'Some', 1000, '', 500 ]}
                   //  Continuing previous Text
    style={{ fontSize: '2em' }}
    wrapper="div"
    repeat={Infinity} 
  /></h1>
   
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6'>
  <div className="card h-[auto] min:h-[580px] bg-base-100 shadow-xl">
<div className="card-body">
<h2 className="card-title text-green-600 font-bold">1.Difference between SQL and NoSQL?</h2>
          <p className='text-start'> <span className='text-starts text-purple-500 font-bold'>Answer : </span>
            Both have some key difference.  <br /> <span className='font-semibold text-[#100808]'>The Main Differences: </span>
            <br /><span>1 . 
SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. 
            </span>
            <br /><span>2 . Language – 
SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.  </span>
        
        <br /><span>3 . Property followed – 
SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). etc ...</span>  </p>
<div className="card-actions justify-end">
  <button className="btn bg-[#2b2e20]">Read More</button>
</div>
</div>
  </div>
  





  <div className="card h-[auto] min:h-[580px] bg-base-100 shadow-xl">
<div className="card-body">
<h2 className="card-title text-green-600 font-bold">2 . What is JWT? How does it work? Why JWT??</h2>
          <p className='text-start'> <span className='text-starts text-purple-500 font-bold'>Answer : </span>
          <span>  JWT :
JWT stands for “ JSON web token ” it is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
              JWT is simply a token that is written in JSON format. It is really safe to use because it can be signed in using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</span>
            <br /> <br /> How  JWT works : JWT contains 3 parts 1) The header 2) The payload 3) The signature  <br />
            The header of the JWT token is just some metadata for the token such as the algorithm name and type.

 <br />The payload is some data that you can encode into the jwt which will be saved in the token payload and later you can use those unique data to identify the specific user. The more data you add the bigger the jwt token will be. <br />And keep in mind that the header and the payload will get added as an encoded plain text but it is not going to get encrypted so anyone can decode them so we cannot save any sensitive data in the payload.
The secret is created with the header, the payload, and the secret that is stored on the server and this will process the signing JWT.

<br />So, the signing algorithm is just an algorithm of JWT to verify if the token is correct. The signing algorithm creates a unique signature using the header, payload, and the secret, and only these data + the secret saved in your server can create this signature. Then this signature and header+payload forms the JWT Token which then is sent to the client</p>
<div className="card-actions justify-end">
<button className="btn bg-[#2b2e20]">Read More</button>
</div>
</div>
  </div>
  





  <div className="card h-[auto] min:h-[580px] bg-base-100 shadow-xl">
<div className="card-body">
<h2 className="card-title text-green-600 font-bold">3. What is the difference between javascript and NodeJS??</h2>
<p className='text-start'> <span className='text-starts text-purple-500 font-bold'>Answer : </span> 1 . 	
            Javascript is a programming language that is used for writing scripts on the website.  <br /> And  NodeJS is a Javascript runtime environment. <br /> <br />
          
            Javascript can only be run in the browsers. <br /> <br /> but We can run Javascript outside the browser with the help of NodeJS.
            <br /> It is basically used on the client-side. <br /> but NodeJS	 is mostly used on the server-side.
          <br /> <br />  Javascript is capable enough to add HTML and play with the DOM.  <br />
 	Nodejs does not have capability to add HTML tags.
          
          </p>
<div className="card-actions justify-end">
<button className="btn bg-[#2b2e20]">Read More</button>
</div>
</div>
  </div>
  


  <div className="card h-[auto] min:h-[580px] bg-base-100 shadow-xl">
<div className="card-body">
<h2 className="card-title text-green-600 font-bold">4. How does NodeJS handle multiple requests at the same time?</h2>
      <p className='text-start'> <span className='text-starts text-purple-500 font-bold'>Answer : </span>
      How NodeJS handle multiple client requests?

NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
      </p>
<div className="card-actions justify-end">
<button className="btn text-white bg-[#2b2e20]">Read More</button>
</div>
</div>
</div>
  </div>

  </div>
  )
}

export default Blog