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
 - [I2S Stereo Decoder](https://www.adafruit.com/product/3678)

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

## Audio Output

3.5mm Stereo audio output requires an I2S stereo decoder such as the
[ada fruit I2S](https://www.adafruit.com/product/3678).

| Vidor Pin  | I2S   |
| -----------|-------|
| A4         | LRCIN/WSEL  |
| A5         | BCLK  |
| A6         | DIN   |

Additional pinouts can be found on the [Firmware Release page](https://github.com/FPGAArcade/replay_mkrvidor4000)
## Video Output

To connect the Vidor to your TV or Monitor, you'll need a micro HDMI cable.

::: tip Note
Be aware, audio over HDMI is not supported.
:::

Be aware that cores for the FPGA Arcade are written to replicate the original
hardware as closely as possible, this includes the output video signal. The cores
are intended to work with analogue connections e.g. Composite, Scart or VGA.

The video signal is adjusted (scan doubler, timing) to bring it roughly in line
with the HDMI specification for use with the Vidor's HDMI output. However, there
are limitations to the adjustments that can be made without a full frame buffer.
For this reason, some HDMI TVs and Monitors can struggle to accept the core's
video signal.

Replay 1 users will be familar with this and the common workaround of using a VGA
connection instead. TVs/monitors appear to be more accepting of non-standard signals
over VGA.

As the vidor only has HDMI output at this time, another option is a HDMI to VGA convertor.
Users have reported success using
[Rankie 1080P Active HDTV HDMI to VGA Adapter](https://www.amazon.co.uk/gp/product/B00ZMV7RL2/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)

## Input Peripherals

Since the Vidor has a single micro USB socket, the recommended way to connect
USB peripherals is via a OTG Hub with power pass-through.

A hub with power pass-through will not only allow you to connect multiple USB
devices to the Vidor but also power the Vidor itself all via the single micro
USB socket.

Alternatively, if you are powering the Vidor via the LiPo connector then you can
use a standard micro USB OTG hub.

::: tip Note
Low-speed USB1.0 devices are unlikely to work via a USB hub with the Vidor.
Please check your USB mouse/keyboard is at least high-speed.
:::
