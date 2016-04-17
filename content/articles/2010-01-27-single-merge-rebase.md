Title: Single-merge hg rebase --collapseDate: 2010-01-27 09:23:01
Author: glezos-blog

category

:   text

tags

:   hg, hack, rebase
Slug: 2010-01-27-single-merge-rebase
Status: published

\`hg rebase\` works well with merged branches. You can rebase a merged
node perfectly. Additionally, with \`--collapse\`, you can hide the
draft commits you might have done while developing. These help you do
locally branched development.\
However, there's a caveat. \`hg rebase --collapse\` actually does
multiple merges. So if you have frequently changed common code chunks in
the two branches, you'll end up spending a lot of time doing similar
merges. Instead, here's an alternative to achieve the same by only
merging once. So far I haven't found a shortcut for it.

</p>
Given two heads Ha, Hb:

</p>
    hg up Ha
    hg merge Hb
    hg commit # let's name this node M
    hg diff --reverse Ha > Hb-branch.patch
    hg up Ha
    hg import Hb-branch.patch
    hg strip

</p>
Here's how the tree looks before the strip:

</p>
    o    M'
    | o  M
    |/|
    o o  Ha,Hb
    | |
    o o

</p>

