## 5. [HTML/CSS Solo Challenge](5_HTML_CSS_solo_challenge/readme.md) Reflection

* What questions did you ask during this challnge? What resources did you find to help you answer them?  
* What concepts are you having trouble with, or did you just figure something out? If so, what?  
* Did you learn any new skills or tricks?
* How confident are you with each of the Learning Competencies for this challenge? 
* Which parts of the challenge did you enjoy?
* Which parts of the challenge did you find tedious?

Jeezum, I asked a lot of questions during this challenge. I really think I should have used my DBC peers some here, at least while trying to figure out how to center my image within its div—that one actually stymied me for a bit until I got the desired effect with text-align. It seemed really counterintuitive, given that it's not, you know, text. I got that from http://www.netmechanic.com/news/vol7/html_no10.htm. I also used www.colorpicker.com, http://webdesign.about.com/od/advancedcss/a/aa061307.htm for absolute vs. relative position, css-tricks.com/pseudo-class-selectors/ and a slew of quick searches for reference on a given tag or selector.

The thing I'm struggling most with at this step in the process is getting straight which vlaues are relevant to which selectors when styling my CSS. It doesn't (yet?) seem intuitive when to use left:; and when margin-left:;, for instance. I suspect that as I spend more time making and styling HTML structures, I'll get it down fairly pat simply by rote. I hope it falls into more sense schematically as well.

I learned a few tricks I suspect I'll enjoy: the :nth-child() pseudoselector is a fun one, especially when used algebraicly. I also enjoy the logic of CSS positioning. I can see implicitly how useful an automatic grasp of the mechanics and varieties of float will be, for instance—although my own grasp isn't quite automatic yet. That's the one part of the learning competencies I don't feel I have as well as I'd like, but that sort of rote learning tends to come easily to me with practice. The HTML itself I feel very comfortable with.

One thing I wasn't happy with was how inflexible my positioning was. My whole structure was totally configured to a particular sizing of a browser screen. If you look at it roughly full size on a 13" MacBook it looks about how I intended: if you don't, odds are quite good it won't. It seems like a more dynamic structure will require more of interdependent moving parts: I can't decide if that will prove to be an interesting logic puzzle or a hassle. Probably both.

Relatedly, I did much of my sizing in pixels, but switched to ems for placing the caption (worst offender of them all w/r/t resizing, given its absolute positioning). I wanted to try them both, and I didn't see it as worth the effort of redoing the trial-and-error for any of the elements in the name of consistency. I'd like to be consistent in my usage in the future, out of both practical and aesthetic reasons, but this compromise, though ugly, seemed the best course for today.

Speaking of trial-and-error positioning, it was no fun at all. Just a bit of a slog, there. The header was fun, because I got to play with fixed positioning and could calculate the pixel shifts needed to get the desired effect from the size of the border, but keeping those divs playing nice with each other was just a hassle every time I changed them up. As mentioned before, something about :nth-child() just speaks to me. Of all the CSS I've seen so far, it's the one I want to code-adopt. Is that weird?