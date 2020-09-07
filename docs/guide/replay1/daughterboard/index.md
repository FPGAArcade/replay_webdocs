# Overview

<ZoomableImage src='/images/replay1/daughterboard.jpg' alt='Daughter Board'/>

The 68K daughter board expands the capabilities of the Replay 1 by providing
a socket for an optional 68060 CPU and 128MB local/fastram for use by the 68060.

In addition, a floppy drive can be attached (for use with supporting cores), making
this an ideal upgrade for Amiga / AtariST enthusiasts.

The board also expands the Replay’s I/O capabilities with a second SD card
slot (dedicated to the FPGA), 100Mbit Ethernet, two USB 2.0 ports, a real time clock,
audio in socket (24-bit 96KHz stereo ADC) and Midi I/O interface.

::: tip Note
Use of daughter board features depends on per-core support. Audio In Record & Sampling will
be driver and core dependent.
:::

Refer to the [Hardware](./hardware) section for instructions on how to attach
the daughter board to the Replay 1 as well as an overview of the available I/O.

Software configuration depends on the core you wish to use with the daughter
board. To get you started, refer to the [Software](./software) section for
a walk through on configuring the Amiga core which takes full advantage of
everything the daughter board has to offer.