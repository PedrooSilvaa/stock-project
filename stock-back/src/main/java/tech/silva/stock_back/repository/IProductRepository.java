package tech.silva.stock_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tech.silva.stock_back.entity.Product;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query("select p from Product p where name like %:name%")
    List<Product> findAllByName(String name);
}
