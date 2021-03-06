var assert = require('assert');

describe('Object 테스트', () => {
    it('객체 생성하기', () => {
        // Object 생성자 함수로 빈오브젝트 생성
        let people = new Object();

        // 객체에 프로퍼티 동적 생성
        people.name = "na yun su";
        people.age = 32;

        assert.equal("na yun su", people.name);
        assert.equal('object', typeof people);

        //객체 리터럴을 이용하여 객체생성
        let people2 = {
            name: 'nayunsu',
            age: 32
        };

        assert.equal('nayunsu', people2.name);
        assert.equal('object', typeof people2);
    });

    it('delete 키워드로 속성삭제하기', () => {
        let people = {
            name: "nayunsu",
            age: 32
        };

        // 객체의 프로퍼티를 제거할수 있는 delete 키워드를 제공한다.
        delete people.age;

        assert.equal(false, people.hasOwnProperty("age"));
    });

    it('forin문으로 객체의 프로퍼티 순회하기', () => {
        let people = {
            name: "nayunsu",
            age: 32
        };

        // for in 문으로 key를 이용하여 객체의 프로퍼티를 가져올수 있다.
        for (const key in people) {
            if (people.hasOwnProperty(key)) {
                const element = people[key];
                if (key === 'name') {
                    assert.equal('nayunsu', element);
                } else if (key === 'age') {
                    assert.equal(32, element);
                }
            }
        }
    });

    it('Call By Reference', () => {
        let people = {
            name: "nayunsu",
            age: 32
        };

        let people2 = people;

        people2.age = 25;
        assert.equal(25, people2.age);
        assert.equal(25, people.age);
    })

    it('Object assign', function () {
        let source = {
            value1: 'Test',
            value2: 'Test2'
        };

        let target = {
            value3: 'Test3'
        };

        // source 객체의 내용을 target에 복사한다.
        // 복사된 target 객체를 리턴한다.
        Object.assign(target, source);

        assert.equal('Test', target.value1);
        assert.equal('Test2', target.value2);
        assert.equal('Test3', target.value3);
    })

    it('...키워드로 객체복사하기', () => {
        let obj = {
            value1: 'Test',
            value2: 'Test2',
        };

        // '...' 키워드로 obj의 내용을 새로운 객체에 복사한다.
        obj2 = {
            ...obj,
            value2: 'Test22',
            value3: 'Test3'
        };

        // 복사의 대상이 되는 기존의 객체에는 영향이 없다는것을 알수있다.
        assert.equal(false, obj.hasOwnProperty('value3'));
        assert.equal('Test2', obj.value2);

        // 'Test'의 값이 정상적으로 잘 복사되었다.
        assert.equal('Test', obj2.value1);
        assert.equal('Test22', obj2.value2);
        assert.equal('Test3', obj2.value3);
    })
});