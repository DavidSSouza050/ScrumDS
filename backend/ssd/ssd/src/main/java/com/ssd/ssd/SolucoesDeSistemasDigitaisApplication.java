package com.ssd.ssd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

//@EnableJpaRepositories(basePackages = "com.ssd.ssd.repository")
//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@ComponentScan(basePackages = {"com.ssd.ssd"})
@SpringBootApplication
public class SolucoesDeSistemasDigitaisApplication {

	public static void main(String[] args) {
		SpringApplication.run(SolucoesDeSistemasDigitaisApplication.class, args);
	}


}
