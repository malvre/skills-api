# SKILLS - API REST

## Sobre a aplicação

API REST para gerenciar as habilidades dos desenvolvedores de uma organização

## Casos de uso

- [ x ] User create account
- [ x ] User login
- [ x ] User create a new skill
- [ ] Admin remove a unused skill
- [ x ] User add a skill to hilself
- [ x ] User remove a skill from hilself
- [ ] User search users by one or more skills
- [ ] User view detail of an user

## Modelo de dados

### User

- id
- name
- email
- password
- bio

### Skill

- id
- name

### UserSkills

- id
- userId
- skillId
- value
