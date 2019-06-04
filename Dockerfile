FROM node:lts
MAINTAINER "Valentin Popov <info@valentineus.link>"

# Copy the application to the Docker image
COPY [".", "/usr/src/app"]
WORKDIR "/usr/src/app"

RUN set -ex \
    && npm install \
	&& npm run-script build

# Environment Variables
ENV PORT="4858"

# Running the application
EXPOSE 4858
CMD ["npm", "run-script", "serve"]
