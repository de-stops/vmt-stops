psql^
 --username=postgres^
 --dbname VG^
 -f 01-filter-stops.sql^
 --set=stops_input="'%cd%\unfiltered-stops.txt'"^
 --set=stops_output="'%cd%\stops.txt'"^
 --set=selected_rs="'16051,16052,16053,16055,16067,16071,16074'"