Title: Faster and Resume-able Secure copy (scp)
Date: 2010-07-19 11:25:00
Author: glezos-blog
Category: text
Tags: scp, bash, linux
Slug: 2010-07-19-scpresume
Status: published

Ever wondered how you could combine the power of rsync and simplicity of scp? Here's how:

    $ alias scpresume='rsync --compress --partial --progress --recursive --rsh=ssh'
    $ scpresume -r * ssh://example.com/foodir

Simple as that!
