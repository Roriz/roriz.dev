FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && \
    apt-get install -y \
        bash \
        imagemagick \
        webp \
        findutils \
        coreutils \
        ffmpeg


# Set working directory
WORKDIR /app

# Copy only the script (other files will be mounted)
COPY bin/optimize-images.sh bin/optimize-images.sh

# Make the script executable
RUN chmod +x bin/optimize-images.sh

# Default command
CMD ["bash", "bin/optimize-images.sh"]