import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blogs'>
                <h3>
                    What is the purpose of Contenxt API
                </h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the sta</p>


                    <h3> What is Symantic tag?</h3>
                    <p>Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them. 
                    Although semantic tags existed in earlier HTML versions, the HTML5 specifications added several new semantic elements to the syntax—both on the block and inline levels. In this article, we’ll look into how HTML semantics work and also give you some tips about how to get the most out of the feature.
                    </p>
                    <h3>Difference between Inline block and inline block element</h3>
                    <p>Block Elements occupy the full width irrespective of their sufficiency.Block elements always start in a line.Block elements doesn’t allow other elements to sit behind.Block elements have top and bottom margin. <br />

                    Inline elements occupy only sufficient width required.Inline elements don’t start in a new line.Inline elements allow other inline elements to sit behind.Inline elements don’t have top and bottom margin.
                    </p>
                    <p></p>

            </div>
        </div>
    );
};

export default Blogs; <h3>Blogs</h3>