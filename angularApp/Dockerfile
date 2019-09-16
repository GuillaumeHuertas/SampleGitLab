FROM 192.168.206.27:5000/envbuild:v6 AS builder

WORKDIR /app

COPY . .

RUN ng build --prod --outputPath="dist"




FROM httpd:alpine

COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/



#FROM nginx:alpine

#RUN rm -f /usr/share/nginx/html/*

#COPY --from=builder /app/dist/ /usr/share/nginx/html/
