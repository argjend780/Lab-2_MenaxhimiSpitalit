package com.apigateway.api_gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusReactiveJwtDecoder;

@Configuration
public class JwtDecoderConfig {

    @Bean
    public ReactiveJwtDecoder jwtDecoder() {
        // Replace with your actual issuer URI or JWK Set URI
        return NimbusReactiveJwtDecoder.withJwkSetUri("http://localhost:8080/realms/menaxhimiIspitalit/protocol/openid-connect/certs")
                .build();
    }
}