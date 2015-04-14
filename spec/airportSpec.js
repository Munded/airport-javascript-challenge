describe('Airport', function(){

  describe('airport has a terminal', function(){

    it('initiates with empty terminal', function(){
      airport = new Airport();
      expect(airport.terminal).toEqual([]);
    });
    
    it('it can land a plane', function(){
      airport = new Airport;
      plane = jasmine.createSpy('plane');
      airport.land(plane)
      expect(plane.terminal).toEqual([plane]);
    });

  });

});