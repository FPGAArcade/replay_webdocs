# Firmware

::: warning Draft
This documentation is a work in progress and has not been reviewed for accuracy.

The Vidor platform target is also in-development and support/features are
subject to change.

Proceed at your own risk.
:::

## Pre-requisites


In order to upload the Replay firmware to your Vidor you will need install and configure
the [Arduino Software (IDE)](https://www.arduino.cc/en/Main/Software).

Once installed open the Arduino IDE and from the "Tools/Boards" menu select the “Boards Manager”.
Enter "Vidor" in the “type” search box and select the Arduino SAMD Boards (32bits arm cortex-m0+).
Select v1.8.6 or above and click the "Install" button.

You will be prompted and should accept the installation of the “Arduino USB Driver”, “Adafruit industries LLC Ports” and "Java SE".

## Flashing

### Arduino Library Releases

TODO.
### Zip Based Release

Download the latest version of the
[Vidor4000 Replay firmware](https://github.com/FPGAArcade/replay_release/tree/master/firmware/mkrvidor4000)

In the Arduino IDE menu select "Sketch", "Include Library" and then "Add .zip library".

Select the latest firmware zip file you downloaded as part of the pre-requisites.

From the “Tools” menu, select the “Boards:xxxxx” and select “Arduino MKR Video 4000”

From the “Tools” menu set the port e.g “Com4 Arduino MKR Vidor 4000”. Your actual
com port number may differ.

Now load the example "Replay_Boot" from the Arduino IDE menu. This can be found
under the “Replay MKR Video 4000” custom library which is accessed from the
“File”, “Examples” menu. Select “Replay_Boot“.

Press the second round icon from left on the top bar of the Arduino Software (IDE)
or press Ctrl+U or select the menu Sketch to upload Replay_Boot to your Vidor.

Please note that the time required to load the sketch and the FPGA bitstream might be more than 30 seconds.
