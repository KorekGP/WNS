package wmi.students;

/**
 * Created by Grzegorz on 2016-03-31.
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@EnableAutoConfiguration
@SpringBootApplication
public class SpringBootWebApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(SpringBootWebApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBootWebApplication.class, args);
    }
}