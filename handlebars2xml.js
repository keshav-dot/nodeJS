const Handlebars=require('handlebars');
const fs=require('fs');
let source=
`<products>
    <product>
        <baseId>{{baseId}}</baseId>
        <isActive>{{isActive}}</isActive>
        <contentType>
        {{#each contentType}}
            <contentTypeValue>{{value}}</contentTypeValue>
        {{/each}}
        </contentType>
        <features>
          {{#each this.feature}}
            <feature>{{this}}</feature>
          {{/each}}
        </features>
        <searchTerms>
            {{#each this.searchTerms}}
            <searchTermValue>{{this}}</searchTermValue>
            {{/each}}
        </searchTerms>
        <childProducts>
        {{#each childProducts}}
            <childProduct>
                <baseId>{{baseId}}</baseId>
                <isActive>{{isActive}}</isActive>
                <contentType>
                  {{#each contentType}}
                      <contentTypeValue>{{value}}</contentTypeValue>
                  {{/each}}
                </contentType>
                <features>
                  {{#each this.feature}}
                  <feature>{{this}}</feature>
                  {{/each}}
                </features>
                <searchTerms>
                    {{#each this.searchTerms}}
                    <searchTermValue>{{this}}</searchTermValue>
                    {{/each}}
                </searchTerms>
            </childProduct>
        {{/each}}
        </childProducts>
        </contentType>
    </product>
</products>`;
let template=Handlebars.compile(source);
let data=[
    {
      "baseId": "1",
      "feature": {
        "1": "parent",
        "2": "first entry"
      },
      "contentType": {
        "1": {
          "value": "pure"
        },
        "2": {
          "value": "mix"
        }
      },
      "isActive": true,
      "childProducts": [
        {
          "baseId": "1-1",
          "isActive": true
        },
        {
          "baseId": "1-2",
          "isActive": false
        },
        {
          "baseId": "1-3",
          "isActive": true
        },
        {
          "baseId": "1-4",
          "isActive": true,
          "feature": {
            "1": "parent",
            "2": "first entry"
          },
          "searchTerms": {
            "0": "glue",
            "1": "adhesive",
            "2": "stick"
          }
        }
      ]
    },
    {
      "baseId": "10",
      "isActive": true,
      "searchTerms": {
        "0": "glue",
        "1": "adhesive",
        "2": "stick"
      },
      "childProducts": [
        {
          "baseId": "10-1",
          "isActive": true,
          "searchTerms": {
            "0": "glue"
          }
        },
        {
          "baseId": "10-2",
          "isActive": false
        },
        {
          "baseId": "10-3",
          "isActive": true
        },
        {
          "baseId": "10-4",
          "isActive": true
        }
      ]
    }
  ];  
//let result=template(data[0]);
let result='';
data.forEach((d)=>{
    result+=template(d);
    result+='\n';
});
fs.writeFileSync('./output.xml',result);
//console.log(result);