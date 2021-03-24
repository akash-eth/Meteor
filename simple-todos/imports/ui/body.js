import { Template } from 'meteor/templating';
import { Task } from '../api/tasks';
 
import './body.html';
 
Template.body.helpers({
  tasks() {
    return Task.find({}, {sort: {createdAt: -1}});
  }
});


Template.body.events({
  
  'submit .new-task'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Task.insert({
      text,
      createdAt: new Date(),
    });

    target.text.value = '';
  },
});