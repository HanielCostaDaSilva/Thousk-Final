package br.edu.thousk.service;

import br.edu.thousk.model.Group;
import br.edu.thousk.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GroupService {

    @Autowired
    private GroupRepository groupRepository;

    public Optional<Group> getGroupById(Long groupId) {
        return groupRepository.findById(groupId);
    }

    public List<Group> getGroupByName(String name) {
        return groupRepository.findByname(name);
    }

    public List<Group> getAllGroups() {
        return groupRepository.findAll();
    }

    public Group create(Group group) {
        return groupRepository.save(group);
    }

    public void remove(Long groupId) {
        groupRepository.deleteById(groupId);
    }

    public Group update(Group group) {
        return groupRepository.save(group);
    }
}
