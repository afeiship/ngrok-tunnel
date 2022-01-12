# Version: 0.0.1
FROM alpine:latest
RUN mkdir /app
COPY ./linux /app
WORKDIR /app

CMD chmod 777 /app/linux/ding

ENTRYPOINT ["/entrypoint.sh"]

# how to run docker file
# docker run -it --rm -v /home/user/docker/:/app -w /app/linux/ding --entrypoint /entrypoint.sh dockerfile:0.0.1