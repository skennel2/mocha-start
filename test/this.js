var assert = require('assert');

describe('this 테스트', function(){
    it('this', function(){
        // this 는 일반적으로는 메소드를 호출한 객체가 저장되어 있는 속성이다.
        var name = 'kevin'

        var jane = {
            name : 'jane',
            age  : 27,
            job  : 'designer',
            getName : function(){
                return this.name;
            },
            setName : function(name){
                this.name = name;
            }
        };
        
        jane.setName('Jane');
        
        assert.equal('Jane', jane.getName());
        assert.equal('Jane', jane.name);
        assert.equal('kevin', this.name);
    });

    it('this2', function(){
        function someFunction(){
            this.age = 10;
            assert.equal(10, this.age);
            console.log(this)
        }
    
        someFunction();
        assert.equal(10, this.age);
    });
});