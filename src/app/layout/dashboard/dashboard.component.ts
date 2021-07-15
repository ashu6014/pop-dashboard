import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
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
    sheetDataJson: any;
    modeFinal: any[];
    eslStrategyFinal:any[];

    ngOnInit() {
        this.getCsvData();
    }

    getCsvData(){
        this.http.get('./assets/sample.xlsx', { responseType: 'arraybuffer' }).subscribe((file:ArrayBuffer)  => { 
            let data = new Uint8Array(file);
            var arr = new Array();    
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
            let bstr = arr.join("");
            let workbook = XLSX.read(bstr, {type:"binary"});
            let first_sheet_name = workbook.SheetNames[0];    
            let worksheet = workbook.Sheets[first_sheet_name];    
            this.sheetDataJson = XLSX.utils.sheet_to_json(worksheet,{raw:true})
            this.activityStructure();
            this.physicalGroup();
            this.mode();
            this.eslStrategy();
          })
    }

    // options
    view: any[] = [600, 300];  //700, 400
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Activity Structure';
    showYAxisLabel = true;
    yAxisLabel = 'Percentage';

    showLabels: boolean = true;
    isDoughnut: boolean = false;
    legendPosition: string = 'below';

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
        let asMap = new Map();
        this.sheetDataJson.forEach(element => {
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
        Object.assign(this, { testList })

      }


      physicalGroup(){
        let physicalGroupMap = new Map([
            [1 , "Total Class(Whole Group)"], [2, "Large Group"], 
            [3, "Small Group"], [4, "2 Students Working Together"],
            [5 , "1 Student"]
        ]);
        let physicalGroupList = [];
        let pgMap = new Map();
        
        this.sheetDataJson.forEach(element => {
            if(!pgMap.has(element["Physical Group"])){
                pgMap.set(element["Physical Group"], 0)
            }else{
                let cnt = pgMap.get(element["Physical Group"]);
                cnt+=1;
                pgMap.set(element["Physical Group"], cnt);
            }
        });
        pgMap.forEach((value:number, key:number)=> {
            if(value>0){
                let item = {
                    name: physicalGroupMap.get(key),
                    value: Math.round(pgMap.get(key)*100/60)
                };
                physicalGroupList.push(item);
            }   
        });
     
        Object.assign(this, { physicalGroupList })
        console.log("phy", physicalGroupList)
      }

    mode(){
        let mMap = new Map();
        this.sheetDataJson.forEach(element => {
            if(!mMap.has(element["Mode"])){
                mMap.set(element["Mode"], 0)
            }else{
                let cnt = mMap.get(element["Mode"]);
                cnt+=1;
                mMap.set(element["Mode"], cnt);
            }
        });
        let modeMap = new Map([
            [1 , "writing"], [2, "reading"], [3, "aural"], [4, "verbal"],
            [5 , "wr-re"], [6, "wr-au"], [7, "wr-ver"], [8, "re-wr"],
            [9 , "re-au"], [10, "re-ver"], [11, "au-wr"], [12, "au-re"],
            [13, "ver-wr"], [14, "ver-re"], [15, "ver-au"],[16, "au-re-ver"],
            [17, "NA"], [18, "au-ver"]
        ]);
        let testList = [];
        mMap.forEach((value:number, key:number)=> {
            if(value>0){
                console.log(key);
                let item = {
                    
                    name: modeMap.get(key),
                    value: Math.round(mMap.get(key)*100/60)
                };
                testList.push(item);
            }   
        });
        this.modeFinal = testList
        console.log(this.modeFinal);
        Object.assign(this, { testList })
      
    }

    eslStrategy(){
            let eslMap = new Map();
            this.sheetDataJson.forEach(element => {
                if(!eslMap.has(element["ESL Strategy"])){
                    eslMap.set(element["ESL Strategy"], 0)
                }else{
                    let cnt = eslMap.get(element["ESL Strategy"]);
                    cnt+=1;
                    eslMap.set(element["ESL Strategy"], cnt);
                }
            });
            let eslStrategyMap = new Map([
                [1 , "QS"], [2, "ALS"], [3, "VS"], [4, "MR"],
                [5 , "AO"], [6, "CG"], [7, "CC"], [8, "LC"],
                [9 , "IT"], [10, "NA"]
            ]);
            let testList = [];
            eslMap.forEach((value:number, key:number)=> {
                if(value>0){
                    console.log(key);
                    let item = {
                        
                        name: eslStrategyMap.get(key),
                        value: Math.round(eslMap.get(key)*100/60)
                    };
                    testList.push(item);
                }   
            });
            this.eslStrategyFinal = testList
            console.log(this.eslStrategyFinal);
            Object.assign(this, { testList })
    }
  }


interface Category {
    value: string;
    viewValue: string;
  }
