import { Component, OnInit } from '@angular/core';

interface DataItem {
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  dataList: DataItem[] = [];
  sortAgeFn = (a: DataItem, b: DataItem): number => a.age - b.age;
  nameFilterFn = (list: string[], item: DataItem): boolean => list.some(name => item.name.indexOf(name) !== -1);
  filterName = [
    { text: "someone", value: "someone" },          // value property-n anhrajeshta usumnasirel! --> filter-y data-i value-n hamematuma tvyal value-i het ,
    { text: "someone2", value: "some value2" },     // isk text-i arjeq-y rendera linum, tramabanoren depqeri mecamasnutyunum textn u value-n petqa nuyny linen
    { text: "someone3", value: "some value3" },
  ]

  ngOnInit(): void {
    const data = [];
    for (let i = 1; i < 80; i++) {
      data.push({
        name: "someone" + i,
        age: (i < 16) ? i + 15 : i,
        street: "Tumanyan",
        building: i + 12 + "/" + i,
        number: i,
        companyAddress: "Admiral Isakov",
        companyName: "Digitain LLC",
        gender: (i % 3) ? "M" : "F"
      })
    }
    this.dataList = data
  }

}
