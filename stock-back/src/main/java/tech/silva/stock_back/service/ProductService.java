package tech.silva.stock_back.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tech.silva.stock_back.entity.Product;
import tech.silva.stock_back.repository.IProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final IProductRepository productRepository;

    public ProductService(IProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Transactional
    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    @Transactional(readOnly = true)
    public List<Product> getByName(String name) {
        return productRepository.findAllByName(name);
    }

    @Transactional(readOnly = true)
    public List<Product> getAll(){
        return productRepository.findAll();
    }

    @Transactional
    public void delete(Long id){
        productRepository.deleteById(id);
    }

    public void update(Long id, Product newProduct) {
        Product product = productRepository.findById(id).orElse(null);
        product.setName(newProduct.getName());
        product.setAmount(newProduct.getAmount());
        productRepository.save(product);
    }
}
