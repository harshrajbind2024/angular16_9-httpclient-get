import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'

export class TestData implements InMemoryDbService{
    // override createDb(reqInfo?: RequestInfo) {
        
    // }
     
    createDb(){
        let bookDetails=[
            {
                id:100 ,
                name:'harsh',
                category:'angular'
            },
            {
                id:100 ,
                name:'harsh',
                category:'angular'
            },
            {
                id:100 ,
                name:'harsh',
                category:'angular'
            },
        ];
           
        return {books:bookDetails}
    }
}