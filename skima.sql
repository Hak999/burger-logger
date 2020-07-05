CREATE DATABASE burgers_db;
use burgers_db;
create table burgers(id int not null auto_increment, burger_name varchar(50), devoured boolean DEFAULT FALSE, PRIMARY KEY(id) );