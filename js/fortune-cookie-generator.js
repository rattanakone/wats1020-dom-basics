//////////////////////////////////////////////////////////////////
//
// Fortune Cookie Generator
//
//////////////////////////////////////////


new WOW().init();

function generateFortuneCookie() {
	
	var randomFortune = Math.floor(Math.random()*fortunesList.length);
	document.getElementById("fortune-cookie-text").innerHTML = (fortunesList[randomFortune]);
	
	var createNew = document.createElement("li");
	createNew.innerHTML = (fortunesList[randomFortune]);
	document.getElementById("previous-fortunes-container").appendChild(createNew);
	

}


	// This is where your code for the Fortune Cookie generator goes.
    // You will use the fortunesList variable defined lower in this file
    // to supply your fortune cookies with text.

    // TODO: Grab the paragraph with the ID
    // `fortune-cookie-text` to be able to insert text into that element.

    // TODO: Update the Previous Fortunes list with the current `innerHTML`
    // value of `#fortune-cookie-text`. Follow these steps:
        // 1. Create a new `li` element with the `document.createElement()` method.
        // 2. Set the `innerHTML` of that element equal to the `innerHTML` of
        //    the `#fortune-cookie-text` element.
        // 3. Select the `#previous-fortunes-container` container and use
        //    `appendChild()` to append the new `li` element you created above.
        // 4. You should see the previous fortune cookie saying show up in the list.

    // TODO: Select a new (random) fortune cookie saying from the data stored in the
    // `fortunesList` variable. (HINT: You will use `Math.floor()` and
    // `Math.random()` to accomplish this.) Use this data to update the
    // `innerText` of the `#fortune-cookie-text` element.


// The following data list is provided for you to use in your code.
var fortunesList = Array(
	"People are naturally attracted to you.",
	"Your shoes will make you happy today.",	
    "Stop wishing. Start doing.",
    "A dream you have will come true.",
    "Happiness is an activity.",
    "You will marry your lover.",
    "The greatest love is self-love.",
    "Finish your work on hand don't be greedy.",
    "You can make your own happiness.",
    "The greatest risk is not taking one.",
    "For success today,look first to yourself.",
    "Adversity is the parent of virtue.",
    "Serious trouble will bypass you.",
    "Now is the time to try something new.",
    "Wealth awaits you very soon.",
    "If you're happy, you're successful.",
    "Keep your eye out for someone special.",
    "You are very talented in many ways.",
    "Everyone agrees. You are the best.",
    "Happiness comes from a good life.",
    "It's better to be alone sometimes.",
    "Don't pursue happiness - create it.",
    "Let the deeds speak.",
    "Everything happens for a reason.",
    "Welcome the change coming into your life.",
    "Express yourself: Don't hold back!",
    "You will soon witness a miracle.",
    "Whenever possible, keep it simple.",
    "You will live long and enjoy life.",
    "The earth is a school learn in it.",
    "Fortune favors the brave.");


