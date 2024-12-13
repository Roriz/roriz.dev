#!/bin/bash

all_images_on_assets_folder=$(find assets -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.bmp" -o -name "*.tiff" \))

for image in $all_images_on_assets_folder
do
  if [[ $image == *"optimized"* ]]; then
    continue
  fi

  image_size=$(stat -c %s $image)
  image_without_file_extension=$(echo $image | cut -d'.' -f1)
  output_image="$image_without_file_extension.optimized.jpg"
  convert "$image" -strip -interlace Plane -gaussian-blur 0.05 -quality 85% $output_image

  echo "Optimizing $image from $(($image_size / 1024)) KB to $(($(stat -c %s $output_image) / 1024)) KB"
  rm $image
done
