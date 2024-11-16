package tech.silva.stock_back.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.silva.stock_back.entity.Product;
import tech.silva.stock_back.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Product> save(@RequestBody Product product){
        Product product1 = productService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(product1);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<?> findByName(@PathVariable String name){
        List<Product> products = productService.getByName(name);
        if (products.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(products);
    }

    @GetMapping
    public ResponseEntity<?> findAll(){
        List<Product> products = productService.getAll();
        if (products.isEmpty()){
            return ResponseEntity.ok().body("vazio");
        }
        return ResponseEntity.ok(products);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        productService.delete(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> upddateById(@PathVariable Long id, @RequestBody Product product){
        productService.update(id, product);
        return ResponseEntity.ok().build();
    }
}
