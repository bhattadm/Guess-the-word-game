# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
Ans: Static asset refers to things whose content wont change from request to request. For ex. image, css. They are files that we store on server and send to the users but server does not change them.
Dynamic assest refers to things that do not remain constant and keeps on changing with user request. For example in case of flight booking.

## Q: What is the difference between a relative and absolute file path in an href?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?
Ans: Absolute path contains the domain name and refers to the root directory that server is using.
Relative path refers to files or files path from current loaded page.
Webserver root is not the root directory of file system but the root server is using.

## Q: What is the difference between server-side and client-side JS?
Ans: Client-side JS is JS code that runs on user's computers(browser).It can be refered as front end.
Server-side JS means that the code runs on server. It can be refered as backend.

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?
Ans: In JavaScript, we can use the variable before it is defined. This behaviour is because of hoisting, which moves all the declarations to the top of current scope.
Var: It is hoisted to the top, but is undefined. Vaiables declared using var keyword cannot      have Block Scope
Let: Does not hoist. It is Block Scope. Variables declared as 'let' can be reassigned.
Const: Does not hoist. It s Block Scope. Variables declared as 'const' cannot be reassigned.
## Q: What are the 4 ways to create inheritance in JS? (no examples needed, just a sentence describing each)
Ans:  1.Constructor function- When new keyword is used to make function call, its prototype   
       property is also assigned as the prototype of the new object.
      2.BruteFroce Prototype Assignment- It is not a preferred method. Using this prototype property can set directly.
      3.ES6 classes- It is a simple method to understand.
      4.Object.create- Object.create creates a new object and its prototype is set as the passed 
      object.


## Q: Give a short code demonstration of 1 way to create JS inheritance to __inherit__ a method named "purr".
Ans:
     class Cat{
        constructor(name){
            this.name = name
        }
        purr(){
            console.log("Cat purrs");
        }
     }
     const smelly = new Cat('Smelly');
     smelly.purr();
## Q: Give a short code demonstration of a different way to create JS inheritance to __inherit__ a method named "hiss".
Ans: const snake={
        hiss:function(){
            console.log("Snake hisses");
        }
    };
    const python = Object.create(snake);
    python.hiss();


## Q: Explain what a callback is, and give an example.
Ans: Callback is used so that a function will wait until a task is complete and will run as soon as that task is complete.

It is used for making Javascript coding asynchronous.

function finishTasks(subject, callback) {

  console.log("Finished Task 1");

  callback();

}

function finishTask2(){
  console.log("Finished Task 2");
}

finishTasks(‘task1’, finishTask2);
## Q: What are the words that would correctly fill in the space in this sentence:

"If a function using `this` is `__callback_____`, then `this` will not have the intended implicit value"

Ans: callback

## Q: In CSS, what does it mean "You shouldn't name your classes after what they look like"?   Why?  Give an example of a class that is well named and a class that is poorly named.

Ans:We should not name our class after what they look like because that will be very specific and if in future we need to change the content then the class would not describe what the correct content is.

Good name: .button-display

Bad name: .text-centre