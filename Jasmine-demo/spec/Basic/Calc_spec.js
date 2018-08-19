describe('Calculator',function(){
    var calc;
    beforeAll(function(){
        calc = new Calculator();
    });

    describe('Test Add',function(){
        it('add 1 and 3 should equal 4',function(){
            var result = calc.add(1,3);
            expect(result).toBe(4);
        })
    });
});