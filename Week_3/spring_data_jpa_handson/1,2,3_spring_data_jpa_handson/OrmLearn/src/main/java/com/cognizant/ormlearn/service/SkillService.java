package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Skill;
import com.cognizant.ormlearn.repository.SkillRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    @Transactional
    public Skill get(int id) {
        return skillRepository.findById(id).orElse(null);
    }

    @Transactional
    public void save(Skill skill) {
        skillRepository.save(skill);
    }
}
