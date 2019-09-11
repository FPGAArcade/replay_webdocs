# Troubleshooting

::: warning
Incomplete documentation
:::

Experiencing issues with your Replay? If the below information does not resolve
your problem you can seek further support via the [Community](/community).

## No Video Output

As each core recreates the original hardware as close as possible, including
the original video signal. It is not uncommon to find older hardware using a
not quite standard video spec which some monitors cannot handle.

The first test should be to remove any inserted SD card and ensure the Replay
is connected via DVI or HDMI to a Monitor/TV and power on. If you see the
"insert SD card" image, your hardware is working correctly and the issue is
likely core or core setup related.

![Embedded loader background](/images/embedded_loader.jpg "Embedded loader background")

If you do not see the "insert SD card" image and instead have either a blank screen
or garbled display, the Replay may be set to a unsupported video mode for your
TV/Monitor. Press the multi-function button on the rear of the Replay to
cycle through alternative modes.

If your display has a VGA socket, it is worth connecting the Replay to it
using a DVI-I/VGA adapter. We have found that monitors using a VGA connection
tend to be more forgiving of the _quirky_ video signals many accurate
core recreations can produce.

<!--
## SD Card Boot Failure

There are several reasons the replay might fail to boot when an SD card is
inserted.
-->

