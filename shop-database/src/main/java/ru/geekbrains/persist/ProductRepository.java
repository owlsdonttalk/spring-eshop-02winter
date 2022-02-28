package ru.geekbrains.persist;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.geekbrains.persist.model.Role;

public interface ProductRepository extends JpaRepository<Role, Long> {
}
