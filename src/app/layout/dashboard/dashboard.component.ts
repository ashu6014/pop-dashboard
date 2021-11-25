import { Component, ComponentFactoryResolver, OnInit, ElementRef,  ViewChild} from '@angular/core';
import { single } from './data';
import * as XLSX from 'xlsx';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    ngOnInit() {
        this.getCsvData();
    }

    @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

    constructor(private http: HttpClient) {}
    single: any[];
    activityStructureFinal: any[];
    sheetDataJson: any;
    modeFinal: any[];
    eslStrategyFinal:any[];
    languageContentFinal: any[];
    cirriculumAreaCategory: string;
    SLofIFinal : any[];
    TLofIFinal : any[];
    physicalGroupList : any[];
    languageContentCombined: any[];
    districtId : any;
    schoolId : any;
    teacherId: any;
    allCategories: boolean = true;
    uploaded: boolean = false;
   

    //adding here
    arrayBuffer:any;
    file:File;
    incomingfile(event) {
      this.file= event.target.files[0]; 
      this.uploaded = true;
    }
    
     Upload() {
          let fileReader = new FileReader();
            fileReader.onload = (e) => {
                this.arrayBuffer = fileReader.result;
                var data = new Uint8Array(this.arrayBuffer);
                var arr = new Array();
                for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                var bstr = arr.join("");
                var workbook = XLSX.read(bstr, {type:"binary"});
                var first_sheet_name = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[first_sheet_name];
                //adding here
                this.sheetDataJson = XLSX.utils.sheet_to_json(worksheet,{raw:true})
                console.log("this.sheetDataJson", this.sheetDataJson)
                this.districtId = this.sheetDataJson[0]['District ID']
                this.schoolId = this.sheetDataJson[0]['School ID'];
                this.teacherId = this.sheetDataJson[0]['Teacher ID']
                this.activityStructure();
                this.physicalGroup();
                this.mode();
                this.eslStrategy();
                this.cirriculumArea();
                this.languageContent();
                this.studentLanguageOfInstruction();
                this.teacherLanguageOfInstruction();
            }
            fileReader.readAsArrayBuffer(this.file);
    }

    categoryChange(event){
        console.log(event.value)
        this.allCategories = false;
        this.selectedCategory = event.value;
        if(this.selectedCategory == 'all'){
            this.allCategories = true;
        }

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
            this.districtId = this.sheetDataJson[0]['District ID']
            this.schoolId = this.sheetDataJson[0]['School ID'];
            this.teacherId = this.sheetDataJson[0]['Teacher ID']
            this.activityStructure();
            this.physicalGroup();
            this.mode();
            this.eslStrategy();
            this.cirriculumArea();
            this.languageContent();
            this.studentLanguageOfInstruction();
            this.teacherLanguageOfInstruction();

            
          })
    }

    // options
    view: any[] = [480, 250];  //700, 400
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

    //labels for the charts
    xActivtiyStructure = 'Activity Structure';
    xPhysicalGroup = 'Physical Group';
    xModeOfCommunication = 'Mode of Communication';
    xESLStrategy = 'ESL Strategy'
    xLanguageContent = 'Language Content'

    colorScheme = {
         domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

  categories: Category[] = [
    {value: 'all', viewValue: 'All Categories'},
    {value: 'eslStrategy', viewValue: 'ESL Strategy'},
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
            [1 , "TC"], [2, "LG"], 
            [3, "SG"], [4, "Pairs"],
            [5 , "Single"]
        ]);
        let testList = [];
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
                testList.push(item);
            }   
        });
     
        Object.assign(this, { testList })
        this.physicalGroupList = testList;
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
                let item = {
                    
                    name: modeMap.get(key),
                    value: Math.round(mMap.get(key)*100/60)
                };
                testList.push(item);
            }   
        });
        this.modeFinal = testList
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
                [1 , "Questioning Strategies"], [2, "Academic Language Scaffolding"], [3, "Visual scaffolding"], [4, "Manipulatives and Realia"],
                [5 , "Advance Organizers"], [6, "Collaborative / Cooperative Grouping"], [7, "Content connections"], [8, "L1 Clarification"],
                [9 , "Integrate Technology"], [10, "NA"]
            ]);
            let testList = [];
            eslMap.forEach((value:number, key:number)=> {
                if(value>0){
                    let item = {
                        
                        name: eslStrategyMap.get(key),
                        value: Math.round(eslMap.get(key)*100/60)
                    };
                    testList.push(item);
                }   
            });
            this.eslStrategyFinal = testList
            Object.assign(this, { testList })
    }

    cirriculumArea(){
        let cirriculumAreaMap = new Map([
            [1 , "Reading/Literacy"], [2, "Math"], [3, "Spell"], [4, "Handwriting"],
            [5 , "Science"], [6, "Social Sciences / Social Studies"], [7, "Health"], [8, "PE"],
            [9 , "Music"], [10, "Art"], [11, "Language"], [12, "Composition"],
            [13, "Non-academic"], [14, "English as Second Language"]
        ]);

        let caMap = new Map();
        this.cirriculumAreaCategory = cirriculumAreaMap.get(this.sheetDataJson[0]['Curriculum'])
    }

    languageContent(){
        let languageContentMap = new Map([
            [1 , "Social"], [2, "Academic"], [3, "Light Cog"], [4, "Dns Cog"]
        ]);

        let lcMap = new Map();
        lcMap.set(1,0);
        lcMap.set(2,0);
        lcMap.set(3,0);
        lcMap.set(4,0);
        this.sheetDataJson.forEach(element => {
            let cnt = lcMap.get(element["Language Content"]);
            cnt+=1;
            lcMap.set(element["Language Content"], cnt);
            
        });

        this.languageContentFinal = [
            {
                name: "Social routines",
                value: (lcMap.get(1))*100/60
            },
            {
                name: "Academic routines",
                value: (lcMap.get(2))*100/60
            },
            {
                name: "Light Cognitive",
                value: (lcMap.get(3))*100/60
            },
            {
                name: "Dense Cognitive",
                value: (lcMap.get(4))*100/60
            },
        ]

        this.languageContentCombined = [
            {
                name: "Social routines + Academic routines",
                value: (lcMap.get(1) + lcMap.get(2) )*100/60
            },
            {
                name: "Light Cognitive + Dense Cognitive",
                value: (lcMap.get(3) + lcMap.get(4) )*100/60
            }
        ]
        let testlist = this.languageContentFinal;
        Object.assign(this, { testlist })
    } 

    studentLanguageOfInstruction(){
        let langOfInsMap = new Map([
            [1 , "L1"], [2, "L2"], [3, "L1-2"], [4, "L2-1"], [5 , "NA"]
        ]);
        //Lang. of Instruction(S)
        //Lang. of Instruction(T)
        let SlofIMap = new Map();
        
        this.sheetDataJson.forEach(element => {
            if(!SlofIMap.has(element["Lang. of Instruction(S)"])){
                SlofIMap.set(element["Lang. of Instruction(S)"], 0)
            }else{
                let cnt = SlofIMap.get(element["Lang. of Instruction(S)"]);
                cnt+=1;
                SlofIMap.set(element["Lang. of Instruction(S)"], cnt);
            }
        });
        
        let testList1 = [];
        
        SlofIMap.forEach((value:number, key:number)=> {
                if(value>0){
                    let item = {
                        name: langOfInsMap.get(key),
                        value: Math.round(SlofIMap.get(key)*100/60)
                    };
                    testList1.push(item);
                }   
            });
          
        
        this.SLofIFinal = testList1;
        Object.assign(this, { testList1 })
        
    }

    teacherLanguageOfInstruction(){
        let langOfInsMap = new Map([
            [1 , "L1"], [2, "L2"], [3, "L1-2"], [4, "L2-1"], [5 , "NA"]
        ]);
        let TlofIMap = new Map();
        this.sheetDataJson.forEach(element => {
            if(!TlofIMap.has(element["Lang. of Instruction(T)"])){
                TlofIMap.set(element["Lang. of Instruction(T)"], 0)
            }else{
                let cnt = TlofIMap.get(element["Lang. of Instruction(T)"]);
                cnt+=1;
                TlofIMap.set(element["Lang. of Instruction(T)"], cnt);
            }
        });
        let testList2 = [];
        TlofIMap.forEach((value:number, key:number)=> {
            if(value>0){
              
                let item = {
                    name: langOfInsMap.get(key),
                    value: Math.round(TlofIMap.get(key)*100/60)
                };
                testList2.push(item);
            }   
        });
        this.TLofIFinal = testList2;
        Object.assign(this, { testList2 })
    }

    

  }


interface Category {
    value: string;
    viewValue: string;
  }
