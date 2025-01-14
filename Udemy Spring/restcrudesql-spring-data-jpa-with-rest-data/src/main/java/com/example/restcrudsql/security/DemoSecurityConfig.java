package com.example.restcrudsql.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
public class DemoSecurityConfig {

//    @Bean
//    public InMemoryUserDetailsManager userDetailsManager(){
//
//        UserDetails john = User.builder()
//                .username("john")
//                .password("{noop}john")
//                .roles("EMPLOYEE")
//                .build();
//        UserDetails mary = User.builder()
//                .username("mary")
//                .password("{noop}mary")
//                .roles("EMPLOYEE", "MANAGER")
//                .build();
//        UserDetails susan = User.builder()
//                .username("susan")
//                .password("{noop}susan")
//                .roles("EMPLOYEE", "MANAGER", "ADMIN")
//                .build();
//
//        return new InMemoryUserDetailsManager(john, mary, susan);
//    }

    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource){
        return new JdbcUserDetailsManager(dataSource);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception{

        httpSecurity.authorizeHttpRequests(configurer ->
                configurer
                        .requestMatchers(HttpMethod.GET, "/new-api/employees").hasRole("EMPLOYEE")
                        .requestMatchers(HttpMethod.GET, "/new-api/employees/**").hasRole("EMPLOYEE")
                        .requestMatchers(HttpMethod.POST, "/new-api/employees").hasRole("MANAGER")
                        .requestMatchers(HttpMethod.PUT, "/new-api/employees/**").hasRole("MANAGER")
                        .requestMatchers(HttpMethod.DELETE, "/new-api/employees/**").hasRole("ADMIN")
                );

        //use basic auth
        httpSecurity.httpBasic(Customizer.withDefaults());

        //disable csrf
        httpSecurity.csrf(csrf -> csrf.disable());
//        httpSecurity.csrf(AbstractHttpConfigurer::disable);

        return httpSecurity.build();
    }
}
