'use strict';

angular.module('FunoChampionship.version', [
  'FunoChampionship.version.interpolate-filter',
  'FunoChampionship.version.version-directive'
])

.value('version', '0.1');
