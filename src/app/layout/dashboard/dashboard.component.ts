import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { single } from './data';
import * as XLSX from 'xlsx';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    

    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor(private http: HttpClient) {
       //was here
        this.places = [
            {
                imgSrc: 'assets/images/card-1.jpg',
                place: 'Cozy 5 Stars Apartment',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
                charge: '$899/night',
                location: 'Barcelona, Spain'
            },
            {
                imgSrc: 'assets/images/card-2.jpg',
                place: 'Office Studio',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
                charge: '$1,119/night',
                location: 'London, UK'
            },
            {
                imgSrc: 'assets/images/card-3.jpg',
                place: 'Beautiful Castle',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
                charge: '$459/night',
                location: 'Milan, Italy'
            }
        ];
    }

    ngOnInit() {
        let activityStructureFinal = [];
    
        let sheetDataJson;
        this.http.get('./assets/sample.xlsx', { responseType: 'arraybuffer' }).subscribe((file:ArrayBuffer)  => { 
        let data = new Uint8Array(file);
        var arr = new Array();    
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
        let bstr = arr.join("");
        let workbook = XLSX.read(bstr, {type:"binary"});
        let first_sheet_name = workbook.SheetNames[0];    
        let worksheet = workbook.Sheets[first_sheet_name];    
        sheetDataJson = XLSX.utils.sheet_to_json(worksheet,{raw:true})
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
        asMap.forEach((value:number, key:number)=> {
            if(value>0){
                let item = {
                    name: activityStructureMap.get(key),
                    value: Math.round(asMap.get(key)*100/60)
                };
                activityStructureFinal.push(item);
            }   
        });
        console.log(activityStructureFinal);
        Object.assign(this, { activityStructureFinal })
      })
           
    }

    single: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  onSelect(event) {
    console.log(event);
  }


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

  

  





}

interface Category {
    value: string;
    viewValue: string;
  }
