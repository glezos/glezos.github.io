Title: Mercurial rebase and merges
Date: 2010-03-09 13:51:00
Author: glezos-blog
Category: text
Slug: 2010-03-09-mercurial-rebase-and-merges
Status: published

Epiphany!

The past days I learned great things today about Mercurial.

1. I found out Joel Spolsky's [hginit.com](hginit.com). It teaches you the key concepts behind hg in a way which doesn't mess with complex internals, but focuses on what's important: the user experience.

2. I found out that the latest version of the hgtk history window supports running an 'Outgoing' command, which directly marks the nodes which will be pushed.

3. I noticed that sometimes when I rebase, I get a merged head node instead of a linear history. That is, the rebase doesn't work 100%. Not sure why this was happening, but I found a few hackish workarounds. The funny thing is that I also found a solution: I then rebased the branche's root node on top of the merged node.

I now understand that the problem was much simpler: I just run accidentally hg rebase with `--source` instead of `--branch`. The first flag rebases a single node and the latter a whole branch. So, obviously, only the last node was "rebased" to look on top of tip. Instead, when you rebase with `--branch`, the branche's base node is rebased, and the history is, of course, linearized.

Success.

![Success](http://media.tumblr.com/tumblr_kz1be0Vx0s1qati3p.jpg)
(The Beast playing some hoops at the office.)
