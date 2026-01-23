#!/bin/bash

# Check if the required tools are installed
if ! command -v pdftotext &> /dev/null
then
    echo "pdftotext could not be found. Please install poppler-utils."
    exit
fi

# Define the input PDF and output markdown files
PDF_FILE="../originals/fulltext.pdf"
MD_FILE="./cv.md"

# Convert PDF to text and append to the markdown file
pdftotext "$PDF_FILE" - | sed 's/^/# /' >> "$MD_FILE"

echo "Content from $PDF_FILE has been imported into $MD_FILE."