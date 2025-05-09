package org.meanxhimispitalit.menaxhimispitalit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MenaxhimispitalitApplication {

	public static void main(String[] args) {
		SpringApplication.run(MenaxhimispitalitApplication.class, args);
	}

}
