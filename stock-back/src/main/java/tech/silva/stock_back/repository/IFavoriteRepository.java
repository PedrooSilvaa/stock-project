package tech.silva.stock_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.silva.stock_back.entity.Favorite;

public interface IFavoriteRepository extends JpaRepository<Favorite, Long> {
}
