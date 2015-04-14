describe('Plane', function(){

  describe('plane has a flying status', function(){

    it('is flying', function(){
      plane = new Plane();
      expect(plane.isFlying).toBe(true);
    });

    it('can land', function(){
      plane = new Plane();
      plane.land();
      expect(plane.isFlying).toBe(false);
    });
    
  });

});