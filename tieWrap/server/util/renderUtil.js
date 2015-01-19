(function () {
    'use strict';
    var fs = require('fs');
    var path = require('path');
    var handlebars = require('handlebars');

    var renderUtil  = {};

    //TODO 추후 템플릿 엔진은 선택이 가능하도록 하기
    //또는 설정파일을 통해서 작업할 수 있도록 만들 것.
    renderUtil.render = function(tempalte, data){

        var template = handlebars.compile(tempalte);
        var result = template(data);

        return result;
    };

    function test(){
        var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
            "{{kids.length}} kids:</p>" +
            "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";

        var data = {
            "name": "Alan", "hometown": "Somewhere, TX",
            "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]
        };

        console.log(renderUtil.render(source, data));
    }

    //test코드를 어떻게 뺄 수 있을지는 고민해보자.


    module.exports = renderUtil;
}());
