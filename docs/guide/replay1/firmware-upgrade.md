# Firmware Upgrade

The latest Replay Firmware can be downloaded from the
[GitHub Releases](https://github.com/FPGAArcade/replay_release/tree/master/firmware/replay1)
repo.

The zip contains two folders which correspond to the two different methods you
can use to update your Replay's firmware. rAppUpdater for upgrades via SD Card
and usbUpdater for (surprisingly) upgrading over USB.

::: tip Note
If your Replay's existing firmware is _very_ old or your Replay's firmware
has been corrupted, you may be unable to use either of these methods. All is not
lost, instructions to recover will be added soon(tm).
:::

## Upgrade via SD Card

If you have an SD Card setup with the "loader" core in the root. Then
copy the rAppUpdater contents to a dated sub-directory and load the appropriate
rApp_*.ini files. Generally the rApp_NTSC_60FPS.ini or rApp_PAL_50FPS.ini are
a good choice for DVI/HDMI connections.

::: vue
/
├── background.raw
├── background_rgb.raw
├── replay.ini
├── replay_pal.ini
├── loader.bin
├── loop.pcm
├── Firmware/
│   └── `20190616/`
│       ├── rApp_NTSC_30FPS.ini
│       ├── rApp_NTSC_60FPS.ini
│       ├── rApp_PAL_25FPS.ini
│       ├── rApp_PAL_50FPS.ini
|       ├── bootrom.bin
|       ├── main.bin
|       ├── rApp_ARM.bin
|       ├── rApp_FPGA.bin
│       └── rApp_FPGA_FIXED_PAL_25FPS.bin
├── Amiga/
├── Pac-Man/
└── ...
:::

Refer to the [SD Card Setup](sd-setup) section if you are unsure about how to
organise your SD Card files.

The rAppUpdater upon loading, will verify the checksum for all update files and
if all is well, prompt you to press "F" to flash the new firmware. The "Flashing"
screen will then appear.

::: danger Warning
Do NOT power off your device whilst firmware flashing is in progress.
:::

Once complete you will be prompted to press "R" to reboot the board. The board
may fail to reboot after a successful flash, a power cycle will resolve that.

If any checksums fail to match you will be unable to start flashing the
firmware. If this occurs, try copying the rApp files to the SD card again. Make
sure to safely remove/eject the SD card before physically disconnecting it from
your computer. Removing without ejecting first may cause data loss or otherwise
corrupt files.

Once firmware has successfully flashed, the rAppUpdater files are no longer
required and may be deleted from the SD Card.

## Upgrade via USB

usbUpdater...
