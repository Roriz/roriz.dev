docker build -t optimize-images .
docker run --rm --volume "$(pwd):/app" optimize-images