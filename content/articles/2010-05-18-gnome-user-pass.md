Title: Typing my pass instead of root in GNOME
Date: 2010-05-18 02:23:00
Author: glezos-blog
Category: text
Tags: gnome, english, linux, tech, foss
Slug: 2010-05-18-gnome-user-pass
Status: published

I'm an avid fan of using sudo when needed and avoiding typing my root password. In the command-line this works fairly easy:

    su -
    usermod -a -G wheel MYUSERNAME
    visudo
    # Uncomment the following line:
    %wheel  ALL=(ALL)       ALL

In GNOME, the above won't 'just work' due to the (fortunate) existence of PolicyKit. You're always asked for your root password instead of your user password. Configuration used to involve [editing PolicyKit.conf](http://dimitris.glezos.com/weblog/2009/03/28/sudo-policykit). In newer versions of Fedora, a new PolicyKit is shipped, with improved setup for policies and configurations.

After some searching around, I figured out I need to install `polkit-gnome`. We now have a special group called 'desktop_admin_r', and polkit is already setup to read from that group the desktop admins. So the new way to make GNOME ask your password instead of the root one, the following commands should just work:

    sudo yum install polkit-gnome
    usermod -a -G desktop_admin_r mits

For the record, gksudo is something completely different. And more evil. =/
