package tech.silva.stock_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.silva.stock_back.entity.Product;

public interface IProductRepository extends JpaRepository<Product, Long> {
}
