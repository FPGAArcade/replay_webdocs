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

Download the latest version of the [Vidor4000 Replay firmware](https://github.com/FPGAArcade/replay_release/tree/master/firmware/mkrvidor4000)

## Flashing

TODO:-
Format an sdcard also eg: 16gig card and fat32 or exfat and or put the image or and its files on the sdcard.
Card orientation will be..ie 5v to 5v etc and with sd card end toward mini pci connector.


4)    (Flashing the core)
a) Install the Arduino IDE on your computer as in step 1, connect the micro USB and micro HDMI.

b) Download the Vidor4000 firmware from step 1. Download the complete folder as a .zip. ie: Click on the “Clone or Download” option on the right the green button, and select “Download .zip” option. Next copy this entirely into a folder on your harddisk.

c) Next use the “install .zip library” menu option in the Arduino IDE ie: Under the menu item “Sketch” next select “Include Library” and select under that, “Add.zip library“. next navigate to your folder your saved previously in step b and select this folder and select open.

d) Next from the “Tools” menu under the Arduino IDE, select the “Boards:xxxxx” and then select this time select “Arduino MKR Video 4000”

e) Select from the “Tools” menu and then select Port: “Com4 Arduino MKR Vidor 4000”.
Under that (Com4 Arduino MKR Vidor 4000) should be selected or ticked.
Note: Your comport maybe Com 1 thu to 4 depending on your setup. Select whichever is relevant to you and then again the Vidor board under that.

6) Next load the example “Replay_Boot” from the Arduino IDE menu ie: Under the menu item “File” and then select “Examples” under that, select “Replay MKR Video 4000” under custom libraries then select finally “Replay_Boot“.
Note: See further notes at the bottom on Updating firmware to a newer firmware version etc.

7)    (Upload your program to the Vidor board)
Press the second round icon from left on the top bar of the Arduino Software (IDE) or press Ctrl+U or select the menu Sketch and then Upload.
Please note that the time required to load the sketch and the FPGA bitstream might be more than 30 seconds.

8)    (Booting the Vidor)
If you Pwr on initially without (sdcard inserted) and it should give you some image that looks similar to the regular replay OSD menu.
Note: You may need the sdcard inserted to get this anyways. -->
