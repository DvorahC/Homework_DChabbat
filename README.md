## Requested tasks:
Automate 2 different tests using testCafe 

## How I worked on it:
1. Read the documentation of testCafe and create a small project / test to play with it ( about 2h)
2. Watch a few tutorials, videos...
3. Went on the required website to automate and play manually with the window before writing the automated script
4. Start writing the actual script 

The test are running with this command line:
```bash
testcafe chrome expansion_tests.js
```

## Main challenges / learning:
1. It was my first time with javascript and with TestCafe...so a lot of selflearning and researches, reading the doc a lot :-). 
2. Finding some elements in the DOM and playing with the Selector
3. For certain elements in the DOM the ids are with a number (for instance mat-input-7), I was hesitant to use them, thinking this might change or be random numbers... but I ended up using them.
4. For the Next Button and the Previous Button, in the second time a click was required it could not be found, I tried adding hover() before, adding some wait...as it did not work I created the button in a different way for the second time using Selector with parent/ child...it ended up working.
5. Looking for ways to get down the page, ---> ending up using hover() 
6. Difference between value and innerText in order to retrieve the value in the assertion.

7. I tried to create a page object for the page where the elements are located and to add some functions in order to make the tests nicer. But when I implemented it, it could not find the import...so I am not using it in my tests. 

## Ideas for improvement:
1. Build a page object model 
2. Enhance the test with the function for the page 
3. Create an object for the data ( Name, age, Destination...)


Thanks ! it was FUN!
Dvorah


