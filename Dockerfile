FROM openjdk:8-jre


ENTRYPOINT ["/usr/local/openjdk-8/bin/java", "-jar", "/usr/share/myservice/myservice.war"]

# Add Maven dependencies (not shaded into the artifact; Docker-cached)

# Add the service itself

COPY target/*.war /usr/share/myservice/myservice.war
