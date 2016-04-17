Title: Pulseaudio loves USB headsets
Date: 2010-07-16 03:03:15
Author: glezos-blog
Category: text
Tags: pulseaudio, logitech, headset, usb
Slug: 2010-07-16-logitech-usb-pulseaudio
Status: published

Following my habit of posting solutions to Linux problems I face (Google rocks for troubleshooting), here's how I fixed a small issue with Pulseaudio and a USB headset I had today.

Since our [team](http://www.indifex.com/) is scattered across the planet, we're having regular VoIP/Skype calls, so we bought a couple of good headsets to use. We're trying out [Logitech Headset Clearchat Pro Usb](http://www.logitech.com/en-us/webcam-communications/internet-headsets-phones/devices/3622) which has a 2-year guarantee [from the local computer store PLAISIO](http://www.plaisio.gr/Peripherals/PC-Peripherals/Speakers-Headsets-Microphones/Headsets/Logitech-Headset-Clearchat-Pro-Usb-981-000011.htm) (this shop has the best support ever).

Once connected to Fedora 13 on the USB port, the headset was detected automatically by Pulseaudio. The name matched, the microphone worked, and the digital volume control buttons on the headphones worked perfectly with Pulseaudio. Sweet!

The problem was that no sound came out of the speakers. Since the microphone worked, I imagined it was a problem in the Output channel somehow. Based on [this bug report](https://bugs.launchpad.net/ubuntu/+source/pulseaudio/+bug/566449) I fired `alsamixer`, selected the USB Headset device, and found the volume level to be 0. Once the volume there was increased, oh bliss, sound came out of the headsets.

All in all, this took 10 minutes.

![Logitech headset](http://www.plaisio.gr/ProductImages/250x250/1240404.JPG)
