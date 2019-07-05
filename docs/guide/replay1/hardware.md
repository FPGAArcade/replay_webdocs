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

The Replay 1 can be powered via either the 5V DC socket or the 12V Molex socket.

The 5V DC socket takes a 2.1mm (5.5mm outer) center pin positive male plug supplying
at least 1A.

The Molex socket accepts a standard 4 pin PC power supply cable. Whilst you can
use a regular ATX PSU, for small form factor builds it's recommended you use
a [Pico PSU](https://www.logicsupply.com/eu-en/picopsu-80/) connected to either the
[FPGA Arcade (EUR)](https://www.amedia-computer.com/en/accessories/35-atx-power-adapter-fpga-arcade.html) or
[CBMStuff (US)](https://web.archive.org/web/20190629010521/https://www.cbmstuff.com/proddetail.php?prod=RPSI)
ATX power adapter.

::: tip
The molex socket is the recommended way to power your board especially when the
optional 68060 Daughter Board is connected.
:::

## Video Cable

<!-- TODO: Link to jamma info/cable -->
The replay provides several ways to connect to a display with the main connection
via the rear DVI socket. Alternatives include jamma and depending on your Replay
board revision, composite.

The DVI socket can be used either direct to a DVI compatible monitor or connected
to a HDMI monitor via DVI/HDMI adapter.

::: tip
Audio over DVI/HDMI is not supported on the Replay 1. You will need to
use the 3.5mm stereo socket for audio output or the jamma expansion port.
:::

In addition a DVI/VGA adapter enables connection to a VGA compatible monitor.

Users wishing to connect to a TV that that has available Scart sockets can use a
VGA/Scart cable to do so. This allows Cores that output a 15KHz video signal to
run "native" without the need for enabling the scanline doubler.

For ease of use and the widest monitor compatibility, we recommend users connect
to monitors via VGA using a DVI/VGA adapter when possible.

<!--
### Useful Extras

RS232/USB cable, usb header cable for firmware recovery
-->
