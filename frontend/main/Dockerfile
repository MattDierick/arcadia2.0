FROM nginx:latest

COPY dist/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN chown nginx:nginx -R /usr/share/nginx/html/

EXPOSE 8080
