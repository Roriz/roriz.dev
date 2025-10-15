#!/bin/bash

echo "Optimizing images and videos in the assets folder..."

all_images_on_assets_folder=$(find assets -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.bmp" -o -name "*.tiff" -o -name "*.webp" \))
echo "Found $(echo $all_images_on_assets_folder | wc -w) images to optimize."

for image in $all_images_on_assets_folder
do
  if [[ $image == *"optimized"* ]]; then
    echo "Skipping already optimized image: $image"
    continue
  fi

  image_size=$(stat -c %s $image)
  image_without_file_extension=$(echo $image | cut -d'.' -f1)
  output_image="$image_without_file_extension.optimized.webp"
  convert "$image" -strip -interlace Plane -gaussian-blur 0.05 -quality 85% -define webp:method=6 $output_image

  echo "Optimizing $image from $(($image_size / 1024)) KB to $(($(stat -c %s $output_image) / 1024)) KB"
  rm $image
done

all_videos_on_assets_folder=$(find assets -type f \( -name "*.mp4" -o -name "*.mov" -o -name "*.avi" -o -name "*.mkv" \))
echo "Found $(echo $all_videos_on_assets_folder | wc -w) videos to optimize."
for video in $all_videos_on_assets_folder
do
  if [[ $video == *"optimized"* ]]; then
    echo "Skipping already optimized video: $video"
    continue
  fi
  video_size=$(stat -c %s $video)
  video_without_file_extension=$(echo $video | cut -d'.' -f1)
  output_video="$video_without_file_extension.optimized.mp4"
  ffmpeg -i "$video" -vcodec libx264 -crf 28 -preset veryslow -acodec aac -b:a 128k -movflags +faststart "$output_video"
  echo "Optimizing $video from $(($video_size / 1024)) KB to $(($(stat -c %s $output_video) / 1024)) KB"
  rm $video
done

echo "Optimization complete."
