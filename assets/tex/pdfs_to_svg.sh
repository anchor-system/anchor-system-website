#!/usr/bin/env bash

for fullfile in *.pdf
do
    filename=$(basename -- "$fullfile")
    extension="${filename##*.}"
    filename="${filename%.*}"
    pdf2svg "${filename}.pdf" "${filename}.svg" 
done
