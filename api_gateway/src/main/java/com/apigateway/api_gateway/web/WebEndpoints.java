package com.apigateway.api_gateway.web;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Configuration
public class WebEndpoints {

    @Bean
    public RouterFunction<ServerResponse> routerFunction() {
        return RouterFunctions.route()
                .GET("/menaxhimispitalit-fallback", request ->
                        ServerResponse.ok().body(Mono.just("Menaxhim i spitalit eshte i paperfshire per momentin"), String.class))
                .GET("/medical-fallback", request ->
                        ServerResponse.ok().body(Mono.just("Sherbimi medical nuk eshte ne dispozicion tani"), String.class))
                .build();
    }
}

