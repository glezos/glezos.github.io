Title: Changing your Mac address on Linux
Date: 2010-12-12 01:48:00
Author: glezos-blog
Category: text
Tags: mac, address, ifconfig, airports, change
Slug: 2010-12-12-mac-address
Status: published

Useful for privacy and time-capped WiFi connection at airports.

    $ ifconfig -a wlan0 | grep HWaddr
    wlan0  Link encap:Ethernet HWaddr 00:16:2B:8D:A2:6C
    $ sudo ifconfig wlan0 down
    $ sudo ifconfig wlan0 hw ether 00:16:2B:8D:A2:7C
    $ sudo ifconfig wlan0 up
    $ ifconfig -a wlan0 | grep HWaddr
    wlan0  Link encap:Ethernet HWaddr 00:16:2B:8D:A2:7C

I think newer versions of NetworkManager get this right. Haven't tried MacChanger.
