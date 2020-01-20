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

This guide will take you through the steps needed to install the 68060 core
on the FPGA Replay and configure a bootable hard-drive running workbench
with 68060 and daughter board support libs.

If you wish to use the daughter boards features without a 68060 chip in the
CPU socket, you can still follow this guide but use the aga or fx68k core
rather than the 68060 core. In addition you can skip the 68060 support
library step.

## 68060 Core Files

It is assumed you are already familiar with how to arrange core files on your
SD card to work with the Replay. If that is not the case, please review the
[SD Card setup guide](/guide/replay1/sd-setup.html#loader-core) before continuing.

The "Amiga 68060" core provides support for both the daughter board and a physical
68060 CPU in the daughter board's CPU socket.

Download the [amiga_68060 core files](https://github.com/FPGAArcade/replay_release/tree/master/amiga/amiga_68060/)
and transfer to a suitable location on your SD card along with the kick_31.rom

::: vue
/cores/amiga_68060/
├── kick_31.rom
├── replay.ini
├── replay.rom
├── replay_amiga_68060.bit
:::

<!-- TODO: Add note on what the replay.rom file is -->

::: tip Note
The use of a github.com repository for downloading core files is a temporary one.
Most cores have been ported to the new build system and zip files are available
to download at https://build.fpgaarcade.com The Amiga cores have yet to be ported.
:::

To use a different kickstart rom, transfer the file to the core directory
and then edit the replay.ini file. Locate the ROM line and change the "kick_31.rom"
part of the line to your new kickstart rom file name

```
ROM = kick_31.rom,0x80000,0x00F80000
```

<!-- TODO: Check if this creates a valid zero'd file rather than sparse.

Windows users alternatively can use

```
fsutil file createnew amiga_disk.hdf 536870912
```
 -->

<!-- [AMedia's guide](http://amiga.amedia-computer.com/document/Minimig/HDF_Creation_Minimig_English.pdf) -->

You will also need a hard-disk file (hdf). This can be created using the dd
terminal command on Linux, Mac OS and Windows 10 running the Windows Subsystem
for Linux.

```
dd if=/dev/zero of=amiga_disk.hdf count=512 bs=1M
```

::: warning Draft
Replay driver disk is not yet available for download.
:::

Alternatively we have prepared a
[blank 512MB hdf](https://github.com/FPGAArcade/replay_release/tree/master/amiga/support/amiga_disk_512MB.hdf.zip) you
can unzip and use.

Later in the guide you will also need the
[replay driver disk](https://github.com/FPGAArcade/replay_release/tree/master/amiga/support/replay_drivers.adf.zip)
and the
[Mu680x0Libs disk](https://github.com/FPGAArcade/replay_release/blob/master/amiga/support/Mu680x0Libs.adf)
containing replay support drivers and libraries for the 68060.

Transfer the hdf, workbench installation disks and replay_drivers.adf
to your SD card. Where you choose to locate your hdf/adf files is entirely up to you.
See below for one possible setup.

::: vue
/
└── cores/amiga_68060/
|   ├── kick_31.rom
|   ├── replay.ini
|   ├── replay.rom
|   └── replay_amiga_68060.bit
|
└── /data/amiga/
&nbsp;   ├── /floppies/
&nbsp;   |   ├── replay_drivers.adf
&nbsp;   |   ├── workbench_disk1.adf
&nbsp;   |   ...
&nbsp;   |   └── workbench_disk6.adf
&nbsp;   ├── /hdd/
&nbsp;       └── amiga_disk.hdf
:::

There's one final and optional configuration step to make. Edit the replay.ini
and locate the files section.

```
[FILES]
# HDs / Carts / Floppys etc
# _cfg has either fixed/removable then list (upto four) file types supported
cha_cfg = "removable", "adf", "scp"
chb_cfg = "fixed", "hdf"
#cha_mount = "utils.adf",0
#chb_mount = "small060.hdf",0
```

This defines two channels, "a" which is used for mounting floppy disks and "b"
where fixed hard-disks are defined. Floppies will be mounted at run time via
the OSD, whilst the hard-disk can be automounted. To do this specify the hdf
file as the master (0) hdd, your changed FILES section should look like:

```
[FILES]
# HDs / Carts / Floppys etc
# _cfg has either fixed/removable then list (upto four) file types supported
cha_cfg = "removable", "adf", "scp"
chb_cfg = "fixed", "hdf"
chb_mount = "../../data/amiga/amiga_disk.hdf",0
```

This will ensure your (currently blank) hard-disk is automatically mounted as
the master hard disk.

## "Software Failure"

If you load the 68060 core and insert the Workbench Install disk in FDD1
you'll be met with an unwelcomed sight. "Software Failure".

<!-- TODO: Image -->

The installer disk does not support the 68060 and requires
a support library adding such as the phase5 68040/68060 libraries. Whilst making
yourself a bigger install disk with the requisite libraries is one option, there
are two alternatives.

### Bypass Startup-Sequence

Reset the core via the OSD "F12" and "Reset Target". The LEDs on your keyboard should
flash on and off. As soon as they turn off, press and hold both left and right mouse buttons together.

You should now be at the early start-up screen with "Boot Options", "Display Options"
and "Expansion Board Diagnostics". Select "Boot With No Startup-Sequence" from the
bottom right.

::: tip Tip
If you press both mouse buttons too early or too late you will not reach the
startup screen and instead the Amiga will try to load the installer disk and
cause a "Software Failure".
:::

At the AmigaDOS prompt enter the following commands to load workbench

```
assign env: ram:
loadwb
```

Proceed to [Installation](#Installation).

### AGA/FX Core

<!-- TODO: Image -->

Another option is to install workbench via a supported CPU. As luck would have it, the
Replay also comes with the ["aga"](https://github.com/FPGAArcade/replay_release/tree/master/amiga/amiga_aga)
core. You can setup this core on your Replay along with the kick_31.rom and make
the same "[FILES]" change as you did for the 68060 replay.ini, boot the aga core
and perform the installation steps described below before rebooting into the 68060
core.


Once you are at the kickstart insert floppy screen insert the workbench install
disk into FDD1.

<!-- TODO: images... --->

::: tip Note
If you did not make the [FILES] change earlier, you will need to mount your
hard disk "hdf" file as the master hdd and restart your core.
:::

### Installation

Once workbench has booted, double click the "Install3.1" icon, then "HDSetup",
"English" and "Partition Hard Drive". The hard drive unit to partition should
be changed to "0", click proceed and then partition.

After a short time the HDD will be partitioned and a "Work" and "Workbench" icon
will appear on the desktop. Close the "HDSetup" program.

We'll now install Workbench to the freshly partitioned hard-disk. Open "Install" and
"English". Proceed with the "Install Release 3.1". For installation mode, select,
"Intermediate User - Limited Manual Control" then proceed with the install. "Install
for real" should be checked, no logging required.

The next screen should ask if you want "Release 3.1 installed in the 'Workbench'
partition?". If that's not the case, cancel the install and go over these steps again,
you do not want to install to the "Install3.1" disk by mistake.

Click through the rest of the screens making any selections you feel appropriate
and finally you'll be prompted to insert the "Amiga Workbench" disk. Switch the
disk in FDD1 for "Amiga Workbench". The installation should automatically proceed.
Follow the remaining on screen prompts, switching disk when prompted.


## 68060 Drivers

If you try booting your freshly installed workbench from hard-disk with the 68060
core you will once more encounter the "Software Failure". Just as the install
disk needs support for the 68060, so does your Workbench Install.

This is where the Mu680x0Libs.adf you downloaded earlier and transfered
to the SD Card comes in. This disk contains a copy of the "MuLib aware 680x0" libraries by Thomas Richter.

Insert the Mu680x0Libs.adf in FDD2. Open the "Mu680x0Libs" icon and hold the
right mouse button, then from the main menu select "Window"/"Show"/"All Files".

You should now see

::: vue
/
├── 68060.library
├── mmu.library
├── Mu680x0Libs.lha
├── Mu680x0Libs.readme
├── readme.1st
:::

Open the "Workbench" folder and again show all files. Enter the "Libs" directory
and drag the "68060.library" and "mmu.library" over Mu680x0Libs disk to the
workbench "Libs" folder.

You should now be able to exit workbench and load the 68060 core with your freshly configured
hard-disk without a "Software Failure".

::: tip Tip
There are alternative 68060 libraries available such as those by [phase5](http://phase5.a1k.org/.
You will need to create your own adf file to make use of these.
:::

# Replay Drivers

::: warning Draft
Instructions are incomplete. Support files are required to use the daughter board
hardware. Further details coming soon(tm)
:::


<!-- Also note: At this time, the local/fast ram on the Daughter board is Daughter board specific and as such, **at this time is not accessible by the Replay1 Baseboard without using the 060 core which will enable all the Daughter board Hardware also, including Ethernet,Usb, Ram etc. Note: These Upper Hardware features on the Daughterboard….The Sdcard , Audio in , RTclock and Floppydrive connector are still accessible with the 020 (aga) core regardless.
** Features and Design can or may change. -->

<!--

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

Follow the installation instructions here to install the RTG. Installation instructions. -->

<!-- TODO: Link to RTG setup page in KB until manual for Amiga core available -->