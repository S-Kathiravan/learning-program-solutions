package com.cognizant.api_gateway;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class LoggingFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, org.springframework.cloud.gateway.filter.GatewayFilterChain chain) {
        System.out.println("Incoming Request: " + exchange.getRequest().getURI());
        return chain.filter(exchange)
                .then(Mono.fromRunnable(() -> System.out.println("Outgoing Response: " + exchange.getResponse().getStatusCode())));
    }

    @Override
    public int getOrder() {
        return -1;
    }
}