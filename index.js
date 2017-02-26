const exportStops = require("hafas-export-stops-by-coordinates");

const ENDPOINT_BASE_URL_TEMPLATE = "http://vmt.hafas.de/bin/query.exe/dny?performLocating=2&tpl=stop2json&look_stopclass=2147483647&look_minx={minx}&look_miny={miny}&look_maxx={maxx}&look_maxy={maxy}";

exportStops(ENDPOINT_BASE_URL_TEMPLATE, 5, 47, 15, 56, null, [51, 54, 80, 81, 82, 83, 84, 85, 86, 87, 88]);
