#### Include an inline screenshot of your codeschool's points from the profile page:

![Alt text](http://i.minus.com/jgGnPO5D9skd6.png?raw=true)
<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
      Elements
  * Javascript Debugging
      Console
  * Performance Optimization 
      PageSpeed

* What's the quick key for your OS to spawn the Dev Tools inspector?
    option+command+i

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
      #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
      [it's here](http://i.minus.com/j8lQi03gb40Ma.png?raw=true)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
    The text is not a string of characters in the p tag: it's part of the .gif picture set as the background for the p. The actual text in the tag is indented far to the left of the screen. To tweak the text color, you'd have to change the image file itself.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
      MT_2.gif
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
      I went to the network tab, then listed elements by size descending. The largest image file, at 26.7 KB, is at http://ak2.imgaft.com/images/MT_2.gif

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
    Optimizing images, which can save 10.9KiB.