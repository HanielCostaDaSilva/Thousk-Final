package br.edu.thousk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.thousk.model.User;
import java.util.List;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
    
    public Optional<User> findById(Long id);

    public List<User> findByNickname(String nickname);

}
