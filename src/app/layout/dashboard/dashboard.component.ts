import { Component, OnInit } from '@angular/core';
import { single } from './data';
import * as XLSX from 'xlsx';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(private http: HttpClient) {}
    single: any[];
    activityStructureFinal: any[];

    ngOnInit() {
        this.activityStructure();
    }

    // options
    view: any[] = [700, 400];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Activity Structure';
    showYAxisLabel = true;
    yAxisLabel = 'Percentage';

    colorScheme = {
         domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

  categories: Category[] = [
    {value: 'all', viewValue: 'All Categories'},
    {value: 'eslStrategy', viewValue: 'ESL Strategy'},
    {value: 'curriculum', viewValue: 'Curriculum'},
    {value: 'physicalGroup', viewValue: 'Physical Group'},
    {value: 'activityStructure', viewValue: 'Activity structure'},
    {value: 'communicationMode', viewValue: 'Communication Mode'},
    {value: 'languageContent', viewValue: 'Language Content'},
    {value: 'languageOfInstruction', viewValue: 'Language of Instruction'}
  ];

  selectedCategory = this.categories[0].value;

  activityStructure(){
        this.http.get('./assets/sample.xlsx', { responseType: 'arraybuffer' }).subscribe((file:ArrayBuffer)  => { 
        let data = new Uint8Array(file);
        var arr = new Array();    
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
        let bstr = arr.join("");
        let workbook = XLSX.read(bstr, {type:"binary"});
        let first_sheet_name = workbook.SheetNames[0];    
        let worksheet = workbook.Sheets[first_sheet_name];    
        let sheetDataJson = XLSX.utils.sheet_to_json(worksheet,{raw:true})
        let asMap = new Map();
        sheetDataJson.forEach(element => {
            if(!asMap.has(element["Activity Structure"])){
                asMap.set(element["Activity Structure"], 0)
            }else{
                let cnt = asMap.get(element["Activity Structure"]);
                cnt+=1;
                asMap.set(element["Activity Structure"], cnt);
            }
        });
        let activityStructureMap = new Map([
            [1 , "lec/lis"], [2, "lec/per"], [3, "dir/lis"], [4, "dir/per"],
            [5 , "dem/lis"], [6, "led/per"], [7, "ask/per"], [8, "ask/ans"],
            [9 , "ans/ask"], [10, "ev/per"], [11, "obs/per"], [12, "ev/dis"],
            [13, "ev/cop"], [14, "obs/dis"], [15, "obs/cop"],[16, "NA/free"],
            [17, "NA/feed"], [18, "NA/tran"], [19, "NA/int"], [20, "NA/out"],
            [21 , "interact"]
        ]);
        let testList = [];
        asMap.forEach((value:number, key:number)=> {
            if(value>0){
                let item = {
                    name: activityStructureMap.get(key),
                    value: Math.round(asMap.get(key)*100/60)
                };
                testList.push(item);
            }   
        });
        this.activityStructureFinal = testList
        console.log(this.activityStructureFinal);
        Object.assign(this, { testList })
        console.log(single)
      })
  }

}

interface Category {
    value: string;
    viewValue: string;
  }
