import {Template} from 'meteor/templating';

import {Task} from "../api/tasks";

import "./task.html";

Template.task.events({
    'clicked .toggle-checked'() {
        Task.update(this._id, {
            $set: {checked: ! this.checked},
        });
    },
    'clicked .delete'() {
        Task.remove(this._id);
    }
});