window._ = require('underscore');
var Backbone = require('backbone');
var Marionette  = require('backbone.marionette');

var TodoList = Marionette.LayoutView.extend({
    el : '#main',
    template : require('./templates/layout.html')
});

var todo = new TodoList({
    model : new Backbone.Model({
        items : [
            {
                assignee: "Scot", text : "Write a book about Marionette"
            },
            {
                assignee: "Andrew", text : "Do some coding"
            }
        ]
    })
});

todo.render();


