Title: Test-wrapped development: Develop from within your tests
Date: 2011-03-11 06:14:00
Author: glezos-blog
Category: text
Slug: 2011-03-11-test-wrapped-development
Status: published

Here's something neat. Today I decided not to develop using the Django
development server, but instead do that from inside my tests. This way I will
work directly on my test database which runs with my test fixtures and when
I'm ready, I'll just write the necessary assertions.

Previously I talked about rendering the test client's [responses in the
browser](http://miniblog.glezos.com/post/3388080372/tests-browser) to view the
results of your tests live, before choosing the correct assertions. This time
I'm wrapping the code in a while loop to iterate over my development workflow.

This is something different than test-driven development. This way you don't
run your tests for every development iteration, but rather you just "stuck"
your test case until you like what you see in your code. Here's an example
from a unit test:

    from transifex.txcommon.tests.utils import response_in_browser
    def test_homepage(self):
        while True:
            resp = self.client['anonymous'].get('/')
            response_in_browser(resp, halt=False)
            
            # Loop control:
            ch = raw_input("Halted. [r]eload, drop to [s]hell or any other key to continue: ")
            if ch == 'r': continue;
            elif ch == 's': from IPython.Shell import IPShellEmbed; IPShellEmbed()()
            else: break

Now when I run the test, my browser opens up showing how my homepage looks
like. I start tweaking the template, hit ``r`` and view the page in the
browser again. When I'm satisfied with what I see, I copy-paste from the
browser some of the test I want to assert against and hit 's' to drop in a
shell.

I write my assertions there, in-place, with the test data initialized and
ready to be asserted against. When I'm happy with those assertions, I just
copy-paste them in the test case and remove the while statement and loop control code.

This type of testing & development works well for template testing. I'm not sure how this should be called. It's test-wrapped development or something.

Also note that the following config variables will be needed:

    TEMPLATE_DEBUG = True
    CACHE_BACKEND = 'dummy://'
