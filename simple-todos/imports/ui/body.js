import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import {ReactiveDict} from 'meteor/reactive-dict';

import { Task } from '../api/tasks';

import "./task";
import "./task.html";
 
import './body.html';

Template.body.onCreated(function bodyOnCreated () {
  this.state = new ReactiveDict();
});
 
Template.body.helpers({
  tasks() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      return Task.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
      
    }
    return Task.find({}, {sort: {createdAt: -1}});
  },
  incompletedCount(){
    return Task.find({checked: {$ne: true}}).count(); 
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
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    // clear form !!
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});