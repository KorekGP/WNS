package pl.edu.amu.wmi.students.wns.user.config;

/**
 * Created by Grzegorz on 2016-03-31.
 */

import org.apache.catalina.security.SecurityConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private static final Logger LOGGER = LoggerFactory.getLogger(SecurityConfig.class);

    private UserDetailsService detailsService;

    @Autowired
    public SecurityConfiguration(UserDetailsServiceImpl detailsService) {
        this.detailsService = detailsService;
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) {
        try {
            httpSecurity
                    .exceptionHandling()
                    .authenticationEntryPoint(new Http403ForbiddenEntryPoint());
            httpSecurity
                    .csrf().disable()
                    .authorizeRequests()
                    .antMatchers("/user").hasRole("ADMIN")
                    .antMatchers("/user/*").hasRole("ADMIN")
                    .anyRequest().permitAll()
                    .and()
                    .formLogin()
                    .permitAll()
                    .and()
                    .logout()
                    .permitAll();
        } catch (Exception e) {
            LOGGER.error("Błąd podczas konfiguracji autoryzowanych stron", e);
        }
    }

    @Override
    public void configure(final WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/*.js");
        web.ignoring().antMatchers("/*.map");
        web.ignoring().antMatchers("/*.woff");
        web.ignoring().antMatchers("/*.woff2");
        web.ignoring().antMatchers("/*.css");
        web.ignoring().antMatchers("/*.html");
        web.ignoring().antMatchers("/*.jpg");
        web.ignoring().antMatchers("/*.png");
        web.ignoring().antMatchers("/*.ico");
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new StandardPasswordEncoder();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder authenticationManagerBuilder) {
        try {
            authenticationManagerBuilder
                    .userDetailsService(detailsService)
                    .passwordEncoder(passwordEncoder());
        } catch (Exception e) {
            LOGGER.error("Błąd konfiguracji dostępu do bazy dla sesji", e);
        }
    }
}