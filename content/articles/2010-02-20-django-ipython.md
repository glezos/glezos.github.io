Title: Dropping to ipython from Django
Date: 2010-02-20 11:50:00
Author: glezos-blog
Category: text
Tags: django, ipython, tip
Slug: 2010-02-20-django-ipython
Status: published

Today I wanted to debug some of our unit tests, so I wanted to drop to a shell from inside a test case. Here's how that can be done:

    import IPython
    IPython.embed()

In previous versions this used to be:

    from IPython.Shell import IPShellEmbed
    ipython = IPShellEmbed()
    ipython()

The first two lines go somewhere in your module and the latter wherever you want to hook up with the shell (tests, models, views). This can serve as a more rich alternative to `ipdb.set_trace()`.

<p style="text-align: center;"><img src="http://media.tumblr.com/tumblr_ky5odtAqpB1qati3p.jpg" alt="handy" /></p>
