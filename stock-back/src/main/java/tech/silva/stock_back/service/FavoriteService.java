package tech.silva.stock_back.service;

import org.springframework.stereotype.Service;
import tech.silva.stock_back.repository.IFavoriteRepository;

@Service
public class FavoriteService {

    private final IFavoriteRepository favoriteRepository;

    public FavoriteService(IFavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }
}
