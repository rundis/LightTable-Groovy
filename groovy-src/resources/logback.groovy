appender("LT_FILE", FileAppender) {
    file = "lt_groovy.log"
    append = true
    encoder(PatternLayoutEncoder) {
        pattern = "%d{HH:mm:ss.SSS} %level %logger - %msg%n"
    }
}

root(INFO, ["LT_FILE"])