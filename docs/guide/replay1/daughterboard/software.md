# Software

::: warning Draft
This documentation is a work in progress. Proceed at your own risk and please report
any issues you encounter.
:::

Not all cores support the hardware features the daughter board provides.
Please refer to the readme file that is packaged with individual cores to
determine if any daughter board features are supported and how to configure support.

One core that does take full advantage of what the daughter board has to offer
is the Amiga. The remainder of this guide will focus on configuring this core.

Before starting, you will need a working set of workbench disks, preferably
3.1 or 3.1.4. You should also ensure your Replay is running a recent
[firmware release](/guide/replay1/firmware-upgrade)

<!-- and you’ll need an updated ROM and other files from the one in replay release for the 060.  -->

## 060 CPU install

1) Download the 68060 core files from https://github.com/FPGAArcade/replay_release/tree/master/amiga and add them to your SDcard. This will include the following files, “replay.ini“,”replay.rom” and “replay_amiga_68060.bit“. You must use these for the daughterboard and they cannot be mixed with the amiga_aga core files.
2) Note on SDcard setup: Assuming you have not already, you need to prior to this, setup an sdcard for the replay. In this archive, it will show you the basic files required to boot the replay and a core. https://fpgaarcade-docs.netlify.com/guide/replay1/sd-setup.html#loader-core . Also, see this link on how to create a replay Amiga sdcard and partitions from scratch https://www.fpgaarcade.com/punbb/viewtopic.php?id=1249. After this is done, apart from again setting up the card as shown in the docs link above, you then need to install the 060 libraries on your sdcard so as it will boot automatically with the replay.
3) You will find the Motorola 040/060 library files here, http://phase5.a1k.org/files/040_060Libs.lha or http://phase5.a1k.org/files/040_060Libs.zip
4) You should then be able to access the 060 from wb and or other software including the FPU etc. Also lastly make sure that you have the latest Replay1 Firmware https://github.com/FPGAArcade/replay_release/tree/master/firmware/replay1

Also note: At this time, the local/fast ram on the Daughter board is Daughter board specific and as such, **at this time is not accessible by the Replay1 Baseboard without using the 060 core which will enable all the Daughter board Hardware also, including Ethernet,Usb, Ram etc. Note: These Upper Hardware features on the Daughterboard….The Sdcard , Audio in , RTclock and Floppydrive connector are still accessible with the 020 (aga) core regardless.
** Features and Design can or may change.

Additional installation for the Daughterboard Hw below for Amiga WorkBench.

## Ethernet install

1) Install Roadshow (The Amiga TCP/IP stack) from the link below.
http://roadshow.apc-tcp.de/index-en.php
2) Next download the replay ethernet device replayeth.device from the link below.
https://github.com/FPGAArcade/amiga_code/tree/master/eth and copy replayeth.device to the devs:network/ and create a new roadshow netinterface. One this is done and you have rebooted your Amiga, you should then be able to download say a webbrowser and open webpages automatically. Eg: IBrowse or Netsurf etc.

## AHI Audio install

1) Download the The Main AHI installation package from the link below.
http://aminet.net/package/driver/audio/ahiusr_4.18 and follow the instructions within to install the basic files required etc.
Once this is complete, you will need to download the replay ahi audio specific files from the link below and copy the replay.audio and replay into also the devs relevant folders etc. See the folder names in the downloaded archive. https://github.com/FPGAArcade/amiga_code/tree/master/xaudio

## USB install

1) Install the Poseidon (The Amiga USB Stack) from the link below.
http://dump.platon42.de/files/ then Install Poseidon and when asked for the device name, enter replayusb.device . Reboot your Amiga and you should be able to use the USB port(s) including Wireless Keyboards & Mice dongles including for example the (Logitech k400r) and (Rapoo 8000) dongles. Currently only one of the external USB ports is functional, One port currently non-functional awaiting further work to be completed plus one USB internal header port).

::: tip Note
The upper port of the two stacked USB sockets is not currently functional. This
is believed to be a software driver issue
:::


## Real Time Clock

No software configuration is required, the core will automatically make use of the RTC.
Although you should ensure you have a CR2032 battery in the battery holder if you
do wish the clock to retain the date/time.

## Rtg install

The Daughterboard is not a requirement for the RTG installation.
However, certain games like doom or quake or possibly other upcoming Amiga or other platform / Core games etc could make use of the RTG screen modes along with the 060 accelerator.

Follow the installation instructions here to install the RTG. Installation instructions.

<!-- TODO: Link to RTG setup page in KB until manual for Amiga core available -->