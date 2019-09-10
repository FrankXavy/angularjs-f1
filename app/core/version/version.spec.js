'use strict';

describe('FunoChampionship.version module', function() {
  beforeEach(module('FunoChampionship.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
