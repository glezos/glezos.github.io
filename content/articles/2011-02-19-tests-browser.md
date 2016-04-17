Title: Rendering Django tests in your web browser
Date: 2011-02-19 13:05:00
Author: glezos-blog
Category: text
Slug: 2011-02-19-tests-browser
Status: published

There are a number of levels you can test your Django project. You can test any Python method, your models, your views and even your templates. In the latter case, you're actually testing the rendered response of a view with a specific context. Most of the times, this result is HTML.

When I write my assertion, I often need to query for a particular string in the response's content. I end up [opening ipython](http://miniblog.glezos.com/post/401011795/django-ipython), print the result and try to find something in that mess.

This takes a lot of time, because the command-line window isn't the best HTML renderer in the world. Here's a simple method to take the response content and render it in a browser:

    def response_in_browser(resp, halt=True):
        """Open a browser and render the response's content."""

        import tempfile, webbrowser, time
        with tempfile.NamedTemporaryFile() as f:
            f.write(resp.content)
            f.flush()
            webbrowser.open(f.name)
            if halt:
                raw_input("Press a key to continue with your tests...")
            else:
                # Give the browser a chance to open the file
                time.sleep(1)

And just call it from inside any test of yours:

    response = self.client.get(
        reverse('myUrlName', args=['foo'])
    from txcommon.tests.utils import response_in_browser
    response_in_browser(response)

Your browser will open for you:

![](http://media.tumblr.com/tumblr_lgvubuaB0s1qati3p.png)

One of the first issues you might face is seeing a style-less page. This
happens becuase the test server isn't really a web server, and you're probably
serving static files from something relative such as `'/site_media'`. The
solution is simple: Run a separate Django server and tweak your
development-only static URL to something like:

    STATIC_URL = 'http://localhost:8000/site_media/

This will trick the temporary window to show the test's HTML with the static files served from the server. Voilà:

![](http://media.tumblr.com/tumblr_lgvuc5Rq8Z1qati3p.png)

You can then use your browser's browser's super tools such as 'View Source' and 'Inspect Element'.

![](http://media.tumblr.com/tumblr_lgvuk3DBKi1qati3p.png)
