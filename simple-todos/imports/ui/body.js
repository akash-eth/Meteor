import { Template } from 'meteor/templating';
import { Task } from '../api/tasks';
 
import './body.html';
 
Template.body.helpers({
  tasks() {
    return Task.find({});
  }
});