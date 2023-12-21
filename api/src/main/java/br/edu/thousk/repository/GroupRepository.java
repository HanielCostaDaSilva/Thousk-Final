package br.edu.thousk.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import br.edu.thousk.model.Group;

public interface GroupRepository  extends JpaRepository<Group, Long> {
    
    public Optional<Group> findById(Long id);

    public List<Group> findByname(String name);

}
