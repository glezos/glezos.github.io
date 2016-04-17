Title: Setting up Network Photo Scanning
Date: 2010-06-16 12:30:31
Author: glezos-blog
Category: text
Slug: 2010-06-16-network-scanner
Status: published

I spent around 30 minutes setting up our office printer/scanner/fax machine on Linux. While there's been a lot of work in the CUPS world for setting up things automatically, scanning didn't particularly work out-of-the-box.

Here's what I remember needing to do to get scanning work on this networked all-in-one machine setup to scan.

Setup necessary packages:

    sudo yum -y install xsane sane-backends sane-frontends
    # Actual drivers:
    sudo yum -y install libsane-hpaio
    # Front-ends:
    sudo yum -y install hplip-gui simple-scan xsane-gimp

Setup machine to have a static IP for future easy reference (192.168.1.50 in my case). This can be done using the machine menus. Once you know this IP, you can play around with the settings from your computer by pointing your browser to that IP address.

At this point, theoretically one can fire up `hp-toolbox` and add the printer & scanner from there, by adding a network printer and filling in the IP. But this tool died on me with a message "Restart CUPS". So, here's the workaround I did:

    # Create HP URIs:
    hp-makeuri -g 192.168.1.50

    # Test temporarily:
    xsane hpaio:/net/Officejet_6500_E709a?ip=192.168.1.50

To setup the device permanently and the SANE backend to always discover it, the following did the trick (notice the prefix `hp:/`):

    sudo vi /etc/cups/printers.conf
    [Change DeviceURI to `hp:/net/Officejet_6500_E709a?ip=192.168.1.50`]

To scan, fire up `simple-scan`, or `xsane`, or from GIMP, choose File→Create→XSane.

Finally, it's worth noting that flegita, the GNOME scanning tool, simply crashes.
