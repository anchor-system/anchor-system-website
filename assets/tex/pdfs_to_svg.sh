#!/usr/bin/env bash

for fullfile in *.pdf
do
    filename=$(basename -- "$fullfile")
    extension="${filename##*.}"
    filename="${filename%.*}"
    inkscape \
      --without-gui \
      --file="${filename}.pdf" \
      --export-plain-svg="${filename}.svg" 
done
