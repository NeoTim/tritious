// Copyright 2015 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
//     distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
//     limitations under the License.

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax(window.TritiousENV.APP.APP_BASE + "/api/me").then(function(me) {
      var result = {};
      result['me'] = me;

      var map_id = me['position']['map'];

      return Ember.$.ajax(window.TritiousENV.APP.APP_BASE + "/api/map/" + map_id).then(function(map) {
        result['map'] = map;

        return result;
      });
    });
  },


});
