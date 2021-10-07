## Requested tasks:
Automate 2 different tests using testCafe 

## How I worked on it:
1. Read the documentation of testCafe and create a small project / test to play with it ( about 2h)
2. Watch a few tutorials, videos...
3. Went on the required website to automate and play manually with the window before writing the automated script
4. Start writing the actual script 

The test are running with this command line:
testcafe chrome expansion_tests.js

## Main challenges / learning:
1. It was my first time with javascript and with TestCafe...so a lot of selflearning and researches, reading the doc a lot :-). 
2. Finding some elements :
3. For certain elements in the DOM the ids are with a number (for instance mat-input-7), I was hesitant to use them, thinking this might change or be random numbers... but I ended up using them.
4. For the Next Button, in the second time it could not be found, I tried adding hover() before, adding some wait...as it did not work I created the button in a different way for the second time using Selector with parent/ child...it ended up working.
5. Looking for ways to get down the page, ---> ending up using hover() 


Thanks ! it was FUN!
Dvorah


