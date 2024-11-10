package tech.silva.stock_back.service;

import org.springframework.stereotype.Service;
import tech.silva.stock_back.repository.IProductRepository;

@Service
public class ProductService {

    private final IProductRepository productRepository;

    public ProductService(IProductRepository productRepository) {
        this.productRepository = productRepository;
    }
}
