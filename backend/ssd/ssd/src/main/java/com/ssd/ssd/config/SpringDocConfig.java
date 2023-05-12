package com.ssd.ssd.config;

import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.Generated;

@Generated
@Configuration
public class SpringDocConfig {
	
		//http://localhost:8080/swagger-ui/index.html
	    //http://localhost:8080/sistemas-solucoes-digitais/swagger-ui/index.html
		@Bean
		GroupedOpenApi swagger() {
			return GroupedOpenApi.builder()
					.group("com.ssd.ssd")
					.packagesToScan("com.ssd.ssd.controller")
					.build();
		}

}
