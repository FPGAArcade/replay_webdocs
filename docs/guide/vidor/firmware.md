# Firmware

::: warning Draft
This documentation is a work in progress and has not been reviewed for accuracy.

The Vidor platform target is also in-development and support/features are
subject to change.

Proceed at your own risk.
:::

## Pre-requisites


In order to upload the Replay firmware to your Vidor you will need to install and configure
the [Arduino Software (IDE)](https://www.arduino.cc/en/Main/Software).

Once installed open the Arduino IDE and from the "Tools/Boards" menu select the “Boards Manager”.
Enter "Vidor" in the “type” search box and select the Arduino SAMD Boards (32bits arm cortex-m0+).
Select the latest version and click the "Install" button.

You will be prompted and should accept the installation of the “Arduino USB Driver”, “Adafruit industries LLC Ports” and "Java SE".

## Flashing

### Arduino Library Releases

The simplest way to get started is to use the most recent release version
available via the Arduino Library.

From within the Arduino IDE open the Library Manager and search for "Replay Vidor".
Select the replay library and click Install.

Please consult the [Arduino documentation](https://www.arduino.cc/en/guide/libraries)
for further information.

Once the Install is complete, in the Arduino IDE, open up the example Replay_Boot
(listed under menu File -> Examples -> FPGAArcade Replay MKR Vidor 4000).

Make sure the MKR Vidor 400 is connected via USB and proceed to Upload (under menu Sketch)
to flash the Replay firmware.
### Zip Based Release

Download the latest version of the
[Vidor4000 Replay firmware](https://github.com/FPGAArcade/replay_release/tree/master/firmware/mkrvidor4000)

In the Arduino IDE menu select "Sketch", "Include Library" and then "Add .zip library".

Select the latest firmware zip file you downloaded above.

From the “Tools” menu, select the “Boards:xxxxx” and select “Arduino MKR Video 4000”

From the “Tools” menu set the port e.g “Com4 Arduino MKR Vidor 4000”. Your actual
com port number may differ.

Once the Install is complete, in the Arduino IDE, open up the example Replay_Boot
(listed under menu File -> Examples -> FPGAArcade Replay MKR Vidor 4000).

Make sure the MKR Vidor 400 is connected via USB and proceed to Upload (under menu Sketch)
to flash the Replay firmware.

::: tip Note
Be patient, it may take more than 30 seconds to upload to the Vidor.
:::

Once complete if you boot the Vidor without an SD card inserted, you should
be presented with the following display:

<ZoomableImage src='/images/vidor4000/no_sdcard.jpg' alt='No SD Card Screen'/>

