// Generated by CoffeeScript 1.3.3
(function() {
  var Polls,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Polls = (function(_super) {

    __extends(Polls, _super);

    function Polls() {
      return Polls.__super__.constructor.apply(this, arguments);
    }

    Polls.prototype.urlRoot = POLLS_API;

    Polls.prototype.model = window.app.Models.Poll;

    return Polls;

  })(Backbone.Collection);

  window.app.Collections.Polls = Polls;

}).call(this);
