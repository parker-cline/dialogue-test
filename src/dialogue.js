const dialogue = `
title: Start
position: 102,-89.5
---
Lisa: Now that we've gotten our bearings, let's ask around! Maybe someone can help us find what we're looking for.
OBJECTIVE: Ask the locals about the Transpodulator.
-> Move to the grocery store
    Lisa: Let's go then!
    <<jump Grocery>>
===
title: Grocery
position: 79,19
---
Ace: Oho!
-> Oho...??
-> Say that again?
Ace: You seem confused.
Ace: ...
Ace: Wait, are you new around here? In that case: 
Ace: In that case... *clears throat* 
Ace: WELCOME! *grabs a noise maker and makes a funny sound.*
Ace: I always have a noise maker on hand at any given point in time to welcome newcomers to Europia.
Ace: Because I get. Like.
Ace: Really, really excited.
Ace: They don't come here often.
-> We're excited, too!
    Ace: ...
    Ace: *grabs a noise maker and makes another funny sound*
    Ace: *puts noise maker on head, like a party hat*
Ace: Oh, by the way: "Oho" is just a greeting for "Hello" here! We aliens here on Europia act a little differently than those on Earth. 
Ace: So, ask lots of questions!
Lisa: Then I do have one question to ask!
Lisa: We are mechanics, so we fix things. But we are also treasure hunters.
Lisa: We are looking for the mythical Transpodulator: the machine that turns everything to gold!
Lisa: I was wondering if you had any information that could help us.
Ace: As a matter of fact, I do have a treasure map!
-> Super DUPER exciting!
    Ace: I know!! 
    Ace: I wasn't actually thinking of giving a newcomer my special treasure map...
    Ace: But you seem the type excited enough to use it!
-> May we please borrow your treasure map?
    Ace: I wasn't actually thinking of giving a newcomer my special treasure map...
    Ace: But you asked very nicely there! :D 
-> WHAT!?
    Ace: Wait, you didn't think the Transpodulator was real? 
    -> Nope! There can't be anything that turns everything to gold! 
        Ace: You would be surprised!
    -> Oh, of course I think it's real! But why would you, of all people, have it?
        Ace: Let's just say I looked up to Indiana Jones when I was a child.
    Ace: Hey, I wasn't actually thinking of giving a newcomer my special treasure map...
    Ace: But you seem the type excited enough to use it!
Ace: I have an idea. Lisa, you two are mechanics, right?
Lisa: Yep!
Ace: I've been looking for mechanics for so long!
Lisa: My cash register just broke down. If my cash register doesn't work, the grocery store will go out of business! 
Ace: If you help me fix my cash register, I'll give you the special map. Deal?
-> Deal!
    <<jump CashRegister>>
===
title: CashRegister
position: 20,156
---
Ace: Great! Now, let me explain what the problem is. 
Ace: Grab... er, 143 flobber fruits from the shelf.
-> That's an awful lot of flobbers!
    Ace: That's nothing to us. 
    Ace: We love flobbers so much that we buy thousands of these at a time! 
-> All right!
*you and Lisa grab 143 flobbers*
Ace: Now, each flobber costs five rubos.
Lisa: I'm guessing that's the money on your planet?
Ace: Yep! Like dollars.
Ace: As an example: how much do 143 flobber fruits cost in total?
Lisa: This seems like a simple question, but let's slow down just a little bit. 
Lisa: Whenever we have a math problem, we need to think carefully, even if the problem seems easy. 
Lisa: First, what is this problem asking us to find? I'll give you some choices. 
Lisa: Choose the best answer. How much do 143 flobber fruits cost in total?
===
`

export { dialogue }