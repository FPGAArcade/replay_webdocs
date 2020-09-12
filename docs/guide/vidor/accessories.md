# Accessories

::: warning Draft
This documentation is a work in progress and has not been reviewed for accuracy.

The Vidor platform target is also in-development and support/features are
subject to change.

Proceed at your own risk.
:::

In order to use the Vidor 4000 with FPGA Arcade cores you will need a few items:

Required:-
 - [Vidor 4000](https://store.arduino.cc/arduino-mkr-vidor-4000)
 - [Arduino MKR SD Proto Shield](https://store.arduino.cc/usa/mkr-sd-proto-shield)
 - SD Card  <!-- TODO: What type / size supported? -->
 - micro HDMI to HDMI cable
 - USB A to micro USB B cable for programming via PC.
 - USB Keyboard

Recommended:-
 - USB OTG hub with power pass-through

## Powering the Vidor

The Vidor can be powered via its 5V (1A or more recommended) micro USB port
or the 3.3V LiPO connector.

For battery power, a Li-Po Single Cell, 3.7V (1024mAh minimum) battery should be
connected. Note, the LiPo battery will recharge when the Vidor is powered
via the micro USB port.

<!-- VERIFY: In addition, you can power the Vidor by using the LiPo connector as a header for
connecting 3.3V power rather than a LiPo battery. -->

::: tip Tip
A USB OTG hub with "power pass-through" is recommended. Multiple USB devices
can then be connected in addition to powering the Vidor via the single Micro USB socket
:::

## Video Output

To connect the Vidor to your TV or Monitor, you'll need a micro HDMI cable.

::: tip Note
Be aware, audio over HDMI is not supported.
:::

<!-- is hdmi reliable with enough cores? Any way to get analog out like vga?
     what about audio?
-->

## Input Peripherals

As the Vidor has a single micro USB socket, the recommended way to connect
USB peripherals is via a OTG Hub with power pass-through.

A hub with power pass-through will not only allow you to connect multiple USB
devices to the Vidor but also power the Vidor itself all via the single micro
USB socket.

Alternatively, if you're powering the Vidor via the LiPo connector then you can
use a standard micro USB OTG hub.

::: tip Note
Low-speed USB1.0 devices are unlikely to work via a USB hub with the Vidor.
Please check your USB mouse/keyboard is at least high-speed.
:::
