# Hardware

::: warning
This documentation has yet to be reviewed for accuracy
:::

<!-- TODO: What size SD cards are known to be supported?
     TODO: PSU and mains adapter specs -->
In order to use your Replay board you will need a few additional items:

 - [Power Supply](#power-supply) _(required)_
 - [Video cable/adapters](#video-cable) _(required)_
 - SD Card _(required)_
 - PS2 Compatible Keyboard _(required)_
 - PS2 Mouse
 - DB9 Joysticks
 - 3.5mm Audio cable/speakers
 - Mini-itx case

## Power Supply

The Replay 1 can be powered via either the 5V DC socket or the 12V Molex socket, located
just to the right of the Power On/Off switch.

![Replay Power Connections](/images/overview_replay1_power.jpg)

The 5V DC socket takes a 2.1mm (5.5mm outer) center pin positive male plug supplying
at least 1A.

The Molex socket accepts a standard 4 pin PC power supply cable. Whilst you can
use a regular ATX PSU, for small form factor builds it's recommended you use
a [Pico PSU](https://www.logicsupply.com/eu-en/picopsu-80/) connected to either the
[FPGA Arcade (EUR)](https://www.amedia-computer.com/en/accessories/35-atx-power-adapter-fpga-arcade.html) or
[CBMStuff (US)](https://web.archive.org/web/20190629010521/https://www.cbmstuff.com/proddetail.php?prod=RPSI)
ATX power adapter.

::: tip
We recommend powering your board via the Molex socket, especially when the
optional 68060 Daughter Board is attached.
:::

## Video Cable

<!-- TODO: Link to jamma info/cable -->
The replay provides several ways to connect to a display with the main
connection via the rear DVI-I socket. Alternatives include a jamma expansion port
and depending on your Replay board revision, composite out.

::: tip
Audio over DVI/HDMI is not supported on the Replay 1. For audio output you will
need to use the 3.5mm stereo socket or the jamma expansion port.
:::

The DVI-I socket can be connected direct to a DVI compatible monitor or
via a DVI/HDMI or DVI/VGA adapter.

::: tip
Some of the replicated hardware output non-standard video signals. If you encounter
any issues when using DVI or HDMI, try connecting via VGA. It is more forgiving
and offers the widest range of monitor compatibility.
:::

If you own a TV with Scart sockets, you may wish to run some cores at their native
15KHz video signal. Scart TVs will support a 15KHz signal and remove the need
for for enabling the scanline doubler. Suitable VGA to Scart cables can be purchased
from a variety of stores including [amedia](https://www.amedia-computer.com/en/accessories/2-vga-to-scart-cable-for-minimig.html).

A pin-out for building your own cable is available on the [mist
wiki](https://github.com/mist-devel/mist-board/wiki/ScartCable#diagram).

<!--
### Useful Extras

RS232/USB cable, usb header cable for firmware recovery
-->
