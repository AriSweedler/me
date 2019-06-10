## I

There's a lotta stuff that I want to write about today, but I don't want to get
ahead of myself or else I start rambling on in incoherent sentences. And then
reading them back to myself later bothers me because I can't stand the poor
writing rather than soothes me by letting me converse with myself.

I wrote down a list of potential topics to pick from. I couldn't decide if I
wanted to write a post about each individual one, or if I wanted to just write
what's on my mind, using those 'topics' as talking points. Maybe a combination
of the two of them is the best approach. Neither extreme is the best. What a
lovely theme.

I need to figure out a way to style these. Honestly, a single stylesheet would
be enough. It takes a lotta mental capacity to be creative, so I should dedicate
myself to picking a stylesheet - I know that whatever I pick I'll end up
sticking with for a while. I really only want a few things.

  * I'll use css-grid to make the text centered and no wider than ~70 characters

  * I'll change colors. Background, and text color, as well as primary and
    secondary colors for accents (horizontal rules, header/footer, hovering,
    h1, h2, h3, etc.)

  * I'll pick a font that I like, and try to make sure inline code looks nice

That's honestly it. That's like 1, 2-3-4-5-6, 7 maybe 8 things. It won't be hard
at all. The real cost of getting it done is starting it, and accepting it.
Starting it is hard, of course, that one doesn't need to be explained. But
accepting it? I'm not a professional designer. I'm not perfect. Whatever styles
I choose, I won't be 100% satisfied with them. I'll know the imperfect process
that went into choosing it, and I'll want more. But. I know that objectively
it'll look fine and no one will notice the mistakes (or good choices !) that I
make ahaha.

I'm good enough to not make the most obvious bad choices, but my vision isn't
fleshed out enough to be able to make really good choices. A really good choice
in another context will get lost in the sea of other
potentially-really-good-but-actually-pretty-average choices that I'll be
struggling with when I create the stylesheet. I think my sister made me really
love that turquoise color. Maybe I'll try to use that. I think dark red or
orange can be used tastefully, but it'll be tough!! I'll experiment, and I'll
stop as soon as I'm not having a good time :)


## It's always sunny
I watched a few episodes of *It's Always Sunny in Philadelphia*, and oh man I
was dying. The first episode that I watched (a while ago) turned me off of it
for SO long, that I couldn't even begin to think about watching it again. But
there I was, putting a facemask on with Katelyn Nakamura and Connor Tinsley,
just absolutely chillin and watching Charlie Day pop the fuck off.

I wrote some stuff about it while I was watching, and I'm excited for you, dear
reader to see what I have to say lmao.

> It's always Sunny acts smarter than smart people by having the 'smart people'
> outsmarted by dumb shit.

So you can take this one of two ways. 1) The 'smart people' aren't actually all
that smart. In fact, they're even stupider than the 'stupid people' on the show
who're doing hella stupid shit!! Or 2)

> And that dumb shit is smart enough to outsmart the smart people because the
> people saying it aren't actually dumber.

That is, the 'dumb people' aren't actually dumb. I watched the episode with the
health inspector, and oh my god Charlie was popping off, it was hilarious and SO
so so so incredibly well done. My thoughts continue:

> Dumb shit is made to look smarter because it makes the intended audience feel
> smarter than the 'smart people' in the TV show. (And the dumb shit only looks
> dumb because the audience is too dumb to realize it's not smart)

So it takes the STUPIDest shit possible, allows it to work out, and then laughs
at the people that said it wouldn't work. You truly have to get caught up in all
the shenanigans to not realize how what they're doing would CLEARLY spell
disaster for all - but that's exactly why the show is so fantastic. It makes it
clear that it's a show. Suspending disbelief is easier for plot points than it
is for the RIDICULOUS stuff that the main characters do. Danny DeVito shouting
that he has aids to cut the line at a water park? Going down the slide with just
a water bottle's worth of water? Stealing a barge, walking through the sewer
(naked), the blood bucket, oh god there's an endless amount of unbelievable
things on the show that's just so ridiculously outlandish yet successful in
advancing the plot that I can't help but be overwhelmed and appreciate this show
for all that I can understand about it.

The magnitude escapes me. But the message is clear. No matter how weird and
fucked up you are, you're valid. That's what this show says to me. Be it
Charlie's struggle with what happened to him as a kid and the Nightman and the
Dayman and all that stuff, or Dee & Mac's unending stupidity:

> [They're] always ridiculously wrong, and they're stereotypes of their
> respective *thing*s (jock, ditz). They are SO true to who they are, that when
> they do stupid stuff, the honesty of it means I can't help but smile.

And when they do things well, it's even funnier because you know that their
confidence is completely unfounded and that they're about to fuck up even harder
than before. Which means that in turn, the next time they get something right
it'll be even more rad of them. It oscillates and it's hilarious.

Dennis is also stupid lmao. He fails less, but he's more of an evil person, and
it's less fun to see him fail because it's just more uncomfortable. I've yet to
see him succeed in anything though. Frank is just crazy. His purpose in the show
is to say 'living like yourself isn't just for young people. You can be old and
live this type of life and be okay, too.' See? The writers didn't forget anyone.
Except for kids, maybe. But then again, they probably weren't forgotten, just
left out as an intended audience.

### Charlie

But yeah! I went from thinking that Charlie's character was crazy and weird to
thinking that Charlie is crazy and weird and that's alright, because he does
exactly what he wants to do. It's crusty and non-standard, but it might just be
the highest form of existence by certain metrics. Are those metrics my metrics?
No. But are those metrics something I respect? Absolutely. I will take the best
of them and try to combine them with the best of **my** society's metrics, and
see where that takes me. I trust myself to do the right thing.

The message is clear. No matter how weird and fucked up things are, it's
alright. If I fight the good fight then I'll live a life where I wouldn't wanna
change a thing. And that doesn't mean that I won't fail! Or feel like shit! Or
any of the other terrible things! But if that's the best that people can do,
than I can be happy with all the beautiful and amazing things that I **do**
have.

## III

I just wrote a super nice super clean tiny little mapping in vim. I feel good
about it. I want to document it, I want to share it. I already had

```vim
nnoremap <Leader>ev :tabe $MYVIMRC<CR>
```

In order to quickly edit my vim config file (it used to be `~/.vimrc`, but now
it's `~/.vim/vimrc`). So I thought, 'Hey! Not only do I wanna configure
user level stuff, but syntax-level stuff. And Typing `:tabe
~/.vim/ftplugin/cpp.vim` is just an ABSOLUTE drag. And thanks to
[Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/),
I knew exactly how to accomplish this!

```vim
" Edit the ftplugin of the current file
function! Edit_ftplugin(language)
  execute "tabe $HOME/.vim/ftplugin/" . a:language . ".vim"
endfunction
nnoremap <Leader>ef :<C-u>call Edit_ftplugin(&filetype)<CR>
```

Basically, I needed to get information from vim about what file I was editing.
And I did that by dereferencing the *option* variable `filetype`. Thanks to
[chapter 19](http://learnvimscriptthehardway.stevelosh.com/chapters/19.html) I
knew how to get the value of option variables. Thanks to prior knowledge I knew
the paradigm to write a function and have it execute thanks to a mapping, which
made writing a mapping to take advantage of ch. 19 easy. Finally, thanks to
prior knowledge I knew how to get a piece of Vimscript to execute in a function.
I guess that's pretty basic in hindsight, but in the foresight of 2 years ago it
would have been a 100% cryptic mystery that only the transmission of knowledge
would have unraveled.

And Seeking out a transmission of knowledge when you don't know WHAT the
knowledge is is pretty hard. Maybe it only would have taken a google search or
two, or maybe it would have been impossible. That is, I wouldn't have fathomed
that this combination of tools was possible before I knew what Vimscript was.
Heck, before I knew what Vimscript *functions* were even after I knew a little
Vimscript. Or when I knew mapping commands but not Vimscript at all. There are
SO many tiers of small pieces of information that went into me writing that tiny
little mapping. That tiny little mapping lets me hit `\ef` and edit the ftplugin
for the file I'm editing.

That took me years to get to. Feels good.

## IV

I had some thoughts about being embarrassed about writing these things and
putting them on the eternally public internet. Another face of this topic is
encouragement and I guess feedback, in a way. But I don't feel like thinking
about these too much right now, so I won't! I'll return to it for a later post.
I'm excited to figure out what I think about that stuff though. Because all of
the struggles that I write about it have been with me for a while. None of my
thoughts are on particularly new things. Even when watching the Aviator. But
here, my thoughts on a recent and deliberate and personal change, that's going
to be fresh. I wonder if it'll feel different, or the exact same. I can't
imagine the differences, because I can't articulate the differences well, yet.
That's why I'm going to write about it! But later, later.

# V

Dude!!! 3D printing. It's RAD. UCLA has a "Makerspace" in Boelter, on the 1st
floor. I went there with an object file and my computer today, but it was closed
lol. So I wrote this instead. But basically, 3D printing is wicked rad.

1. You model a 3D object in a computer. All the data you want must be present.
This is like writing python code. It's high level, and more of a perfect
description than a real representation.

1. You figure out how to convert the 3D virtual object into a series of lines
that the 3D printer can print.

  * There's a LOT going on here.

  * No seriously, like, a LOT.

  * Just like you convert a Microsoft Word .docx paper (data) to a PDF
    (printable construct) before you print, you must convert a 3D object to a
    printable construct

    * You do this with a program called a 'slicer'. It's called a slicer because
      3D printers print in terms of ~~slices~~.

    * Read up on [types of 3D
      printing](https://all3dp.com/1/types-of-3d-printers-3d-printing-technology/)
      to learn more about how 3D printers work.

  * Using this printable construct, you must give it to the 3D printer.

    * This is easy with regular printers! You click a button or whatever and
      something happens... or something... and your PDF is sent over the wire or
      the interwebs to your printer. And Boom. Print success. Well, 3D printers
      can do that. You could connect them to the internet and they could get all
      their information through an OS that implements reliable data transfer and
      hook up another wire into it and make this technology for NERDS more
      consumer friendly. But you don't have to. You can just politely ask
      hobbysists to plot their ~printable-construct~ file onto an SD card and
      plug that into the printer.

    * Hey, what *is* the printable construct file?

      * Great question! It's instructions. Instructions? Yes! Instructions.
        Like, 'draw a line from here to here. Then draw a curve from here to
        here with these parameters. Then move the print head here. Then move the
        platform down in the Z direction by this much.

      * Well gee, reading instructions like that sounds pretty easy to have a
        piece of hardware implement.  Isn't all the complexity on the computer's
        side, then? That sure does give the slicer a lot of power to do all
        sorts of stuff.

          * Yes.

          * Exactly. 3D printers need to be incredibly precise. There's no room
            for complexity in this fledgling technology.

      * So it's not really a printable construct file, is it. It's just machine
        instructions for the printer. Does that mean that printers with
        different parameters need different instruction?

        * Yea lol. You need a slicer specific to the machine you own, just like
          you need a compiler specific to the OS/machine you own!

1. You let the printer do it's thing. Come back in 3 hours and it'll be all
ready for you.


And that's it!! Literally just 3 easy steps. Model, compile, print. I can't
believe it. I'm going to print something neat, like
[these](https://www.thingiverse.com/adsweed/likes). When I make stuff, I'll
update my Thingverse page [here](https://www.thingiverse.com/adsweed/makes)


## VI

Nice! I wrote pretty much all I wanted to. There're more items on the list of
topics I wanna write about, of course, but I don't need to write about them
right now. As long as I consistently do these journal things, it's all good.
Maybe I should install a better syntax highlighter for markdown in vim.

I look forward to talking about the negative side of writing these, as well
as my "Perfect World" view. That was something I got to inspect a lot this year,
and I think fighting it is kinda what contributed to a ton of my personal
growth. That, and an honest, slow, and ongoing re-evaluation of what's important
to me in life. That, and getting laid.

Yeah... yeah. Lmao
