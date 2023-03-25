/builds?platforms=
  comma separated list of supported platforms to filter results by
  e.g /builds?platforms=R1,DE10

/builds?cores=
  comma separated list of core ids to filter results by
  e.g /builds?platforms=scramble,phoenix,galaga

/builds?releaseTrains=
  comma separated list of release trains to filter results by
  e.g /builds?releaseTrains=stable

/builds?buildType=
  filter results by build type. Only "core" is a valid buildType currently.
  e.g /builds?buildType=core

All results will be sorted by buildDate.

## Pagination

/builds?limit=
  limit number of builds returned. Min: 1, Max: 100.

/builds?offset=
  return up to limit number of builds skipping the first "offset" number
  This is provisionary and may change depending on how pagination ends up.
  Offset might end up replaced by cursor or date (e.g buildDate)
