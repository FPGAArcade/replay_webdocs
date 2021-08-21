
# SD Card Setup

::: warning Draft
This documentation is a work in progress and has not been reviewed for accuracy.

The Vidor platform target is also in-development and support/features are
subject to change.

Proceed at your own risk.
:::

The Vidor loads cores at boot time from an SD card. A class 10 or faster card
is recommended The card should be formatted with either the FAT32 or exfat file
system. As FAT32 has a 4GB file size limitation, the use of exfat is recommended.

<!-- TODO:

::: tip Note
The Vidor theoretically supports cards up to ~2TB however only cards up to
200GB in size have been tested so far.
:::

-->

If you insert the now blank SD card into the Vidor and power on, the Vidor
will, unsurprisingly, fail to find a valid core and will fall back to the "embedded loader",
a small utility core baked into the Firmware.

<ZoomableImage src='/images/vidor4000/no_sdcard.jpg' alt='No SD card background'/>

The OSD will also display the text "NO VALID SETUP ON SDCARD!". Note the OSD
also displays your NINA firmware version and the date/build number for the
Replay Boot firmware you previously uploaded to the Vidor.

By default the firmware looks in the root of the SD card for a "replay.ini" file
which contains core specific configuration information. Each core for the Vidor
ships with a corresponding pre-configured "ini" file. You will generally not need
to edit this file with a few exceptions that will be covered below.

::: tip Note
A core (rbf file) should always be used with the replay.ini file it shipped with and when
updating a core to a new version you should always also update to the new replay.ini.
Failure to do so is the most common reason a core will fail to boot.
:::

## Loader Core

The first core to setup is the "loader" core. This is a small core that enables
you to browse the SD card file system and load other cores.

Download the latest version of the loader core from the
[FPGA Arcade Releases](https://build.fpgaarcade.com/releases/cores/V4/loader/)
page and unzip the contents into the root of your SD card. Your card should
look like this

::: vue
/
├── background.raw
├── background_rgb.raw
├── replay.ini
├── replay_pal.ini
├── loader.rbf
├── loop.pcm
:::

The loader core provides a replay.ini file configured for NTSC and optionally
one for PAL users. Either file will generally work with a progressive display.
If however you are using a PAL interlaced display then rename replay.ini to
replay_ntsc.ini and rename (or copy) replay_pal.ini to replay.ini.

Eject the SD Card from your PC, insert it into the Replay and power on. You should
now see the "FPGA Arcade" logo and an OSD that no longer complains about a missing
SD card setup.

Complete coverage of the functionality provided by the OSD is beyond the scope
of this guide. For now, know that F12 can be used to toggle the OSD and
the left/right cursor keys cycle through available menu pages.

The "Replay Menu" page provides a "Load Target" entry via which you can
navigate the file system and load any core on your SD card by selecting its
ini file.

Let's get a few more cores installed on the SD card and configured.

## More Cores

Adding cores is simply a matter of downloading the latest zip file for any/all of
the cores for the Vidor (V4) from [FPGA Arcade Releases](https://build.fpgaarcade.com/releases/cores/V4/)
and unzipping each into its own directory on the SD card.

::: tip Note
Only download and use cores from the V4/ release directory. Cores for other
platforms such as the R1 will not work with your Vidor device.
:::

Let's add the Donkey Kong core to the SD card. Download
the latest zip and extract each to a directory called "donkey_kong".
Your sd card should now look like:

::: vue
/
├── background.raw
├── background_rgb.raw
├── replay.ini
├── replay_pal.ini
├── loader.bin
├── loop.pcm
└── donkey_kong/
.   ├── dk2_wave2.bin
.   ├── donkey_kong.rbf
.   ├── donkey_kong.ini
.   ├── donkey_kong_nodblscan.ini
.   └── README.md
:::

You might think you're all set, just use the "Load Target" menu item from the
OSD, navigate into the core's directory and select one of the available ini files
and off you go. We're not quite there yet.

### ROMs

Virtually all cores depend on additional files and configuration. This is usually
detailed in a README file that accompanies each core.

::: tip Note
As ROMs are generally copyrighted they cannot legally be distributed with core releases.
You will need to obtain a legal copy of any required ROMs yourself.
:::

Where should the ROMs go? That depends on where the core expects them and that
is determined by the core's ini file. Open the "donkey_kong/replay.ini" and
scroll down to the "[UPLOAD]" section

```ini

[UPLOAD]

# enables verification feature, checks back any ROM/DATA upload
VERIFY = 0

## ROMs to load (files relative to this ini file)

### Analog sound (wav) data
### Available from old MAME ROM set
ROM = roms_dkong/dk_wave2.bin, 0, 0x00030000

## This is the US set 1
## Z80 CPU ROMs
ROM = roms_dkong/c_5et_g.bin,  0, 0x00000000
ROM = roms_dkong/c_5ct_g.bin,  0, 0x00001000
ROM = roms_dkong/c_5bt_g.bin,  0, 0x00002000
ROM = roms_dkong/c_5at_g.bin,  0, 0x00003000
### Video ROMs ROM_3P, ROM_3N
ROM = roms_dkong/v_3pt.bin,    0, 0x80006000
ROM = roms_dkong/v_5h_b.bin,   0, 0x80007000
### Object ROMs ROM_7C, ROM_7D, ROM_7E, ROM_7F
ROM = roms_dkong/l_4m_b.bin,   0, 0x8000A000
ROM = roms_dkong/l_4n_b.bin,   0, 0x8000B000
ROM = roms_dkong/l_4r_b.bin,   0, 0x8000C000
ROM = roms_dkong/l_4s_b.bin,   0, 0x8000D000
### i8039 CPU ROMs
ROM = roms_dkong/s_3i_b.bin,   0, 0x8000E000
ROM = roms_dkong/s_3j_b.bin,   0, 0x8000E800
### bpr ROMs
ROM = roms_dkong/c-2k.bpr,     0, 0x8000F000
ROM = roms_dkong/c-2j.bpr,     0, 0x8000F100
ROM = roms_dkong/v-5e.bpr,     0, 0x8000F200
```

In this case the core expects additional roms to be within a "roms_dkong/"
directory relative to the ini file.

::: vue
├── donkey_kong/
.   ├── dk2_wave2.bin
.   ├── donkey_kong.rbf
.   ├── donkey_kong.ini
.   ├── donkey_kong_nodblscan.ini
.   ├── README.md
.   └── roms_dkong/
.       ├── dk_wave2.bin
.       ├── c_5et_g.bin
.       ...
:::

As the Vidor does not impose any particular directory structure on you. You may
choose to keep your ROM files in a /roms/donkey_kong directory at the root of the
sd card. To do so, edit the ini file and change the rom location to include the appropriate path.

```ini
ROM = /roms/donkey_kong/dk_wave2.bin, 0, 0x00030000
...
```

That's really all there is to setting up your SD card for use with the Vidor.

::: tip Note
Some cores may require additional changes to the ini file to set the default
display mode (progressive/interfaces) and whether a scan doubler is used. Be
sure to check the README file that accompanies each core for details.
:::


<!--
## Loader Cleanup

The only file that really needs to be in the root of the SD card is the "replay.ini"
the loader binary and associated image files can optionally be kept within their
own directory.

Re-organise your files as follows...

edit replay.ini and change the path the binary/background images are expected
to be found at.

 -->


