//.......
*****

Props are only being used for passing data. 

They are read-only which means that components receiving data by props are not able to change it. 

However, in some cases, a component may need to manipulate data and that’s not possible with props.


===>

So React provides another feature for data manipulation which is known as State. 

In this workshop, you will learn what React’s “State” is and how to use it.


****

----What is State?-----

We can explain state under 5 pieces:

**State is a special object that holds dynamic data, 
which means that state can change over time and anytime based on user actions or certain events.

**State is private and belongs only to its component where defined, cannot be accessed from outside, 
but can be passed to child components via props.

**State is initialized inside its component’s constructor method       //well that's changed.

**When a change in the state is made, state shouldn’t be modified directly.

Instead, state updates should be made with a special method called setState( ).

**State should not be overly-used in order to prevent performance problems.

-----> So these are the points basically explaining what State is, now let’s see how to use it…

****

----Creating The State----



.
========*

//.........jsx


and later we can render the properties of the state object with JavaScript’s dot notation, inside the render ( ) method:

this.state.

//.......app.js

Now let’s move a step forward and see how to update the state. ****>

=====>
****Updating The State****

A Component’s state can change under some circumstances like a server response or user interaction 
(clicking on a button, scrolling the page etc).

So when data changes, or change in the state happens, React takes this information and updates the UI.

----------- The important point here is that we should not modify the state directly.

 ----------Do Not Modify State Directly — React Official Docs :
 
 this.state.name = "testing state";  // wrong  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

 So we shouldn’t change a property of the state as we do it for other objects in JavaScript. 

like strings !!   
let str = "abc"
str = "bcd"

 
 Instead, React provides another way for handling state changes: the setState( ) method

**** Using setState( )****
Below you can see the right way of state changes in React:



/////***/////**** */ */


this.setState ({ 
  name:  "testing state"
});




 ====> 
 The reason why we should use setState( ) is that because it’s the only way to notify React for data changes. 
 
 Otherwise React won’t be notified and won’t be able to update the UI.

