package br.edu.thousk.controller;

import br.edu.thousk.model.Group;
import br.edu.thousk.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/groups")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @GetMapping("/groups")
    public ResponseEntity<List<Group>> getAllGroups() {
        List<Group> groups = groupService.getAllGroups();
        return new ResponseEntity<>(groups, HttpStatus.OK);
    }

    @GetMapping("/{groupId}")
    public ResponseEntity<Group> getGroupById(@PathVariable Long groupId) {
        Optional<Group> group = groupService.getGroupById(groupId);
        return group.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/groups")
    public ResponseEntity<Group> create(@RequestBody Group group) {
        Group createdGroup = groupService.create(group);
        return new ResponseEntity<>(createdGroup, HttpStatus.CREATED);
    }

    @DeleteMapping("/groups/{groupId}")
    public ResponseEntity<Void> remove(@PathVariable Long groupId) {
        groupService.remove(groupId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/groups/{groupId}")
    public ResponseEntity<Group> updateGroup(@PathVariable Long groupId, @RequestBody Group group) {
        group.setId(groupId);
        Group updatedGroup = groupService.update(group);
        return new ResponseEntity<>(updatedGroup, HttpStatus.OK);
    }
}
