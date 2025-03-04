import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-item',
  imports: [FormsModule, HttpClientModule, NgFor],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  itemid: number = 0;
  itemcatogory: String = "";
  itemname: String = "";
  itemprice: number = 0;
  itemquantity: number = 0;

  ItemsArray: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllItems();
    
  }


  //Get AllItems From Database
  getAllItems() {

    this.http.get("http://localhost:8080/api/item/getItems")

      .subscribe((resultData: any) => {
        this.ItemsArray = resultData;
      });
  }


  //SaveItem to Database
  saveItem() {

    let bodyData = {
      "id": this.itemid,
      "catogory": this.itemcatogory,
      "name": this.itemname,
      "price": this.itemprice,
      "quantity": this.itemquantity
    };

    this.http.post("http://localhost:8080/api/item/saveItem", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {

      this.getAllItems();
      alert("Item Saved Successfully");

      this.itemid = 0;
      this.itemcatogory = '';
      this.itemname = '';
      this.itemprice = 0;
      this.itemquantity = 0;

    });
  }


  //Clear Form Data
  clearForm() {
    this.itemid = 0;
    this.itemcatogory = '';
    this.itemname = '';
    this.itemprice = 0;
    this.itemquantity = 0;
  }

  //Delete Item
  deleteItem() {

    this.http.delete("http://localhost:8080/api/item/deleteItem/" + this.itemid).subscribe((resultData: any) => {

      this.getAllItems();
      alert("Item Deleted Successfully");

      this.itemid = 0;
      this.itemcatogory = '';
      this.itemname = '';
      this.itemprice = 0;
      this.itemquantity = 0;


    });

  }

    //Update Item  
    updateItem() {

      let bodyData = {
        "id": this.itemid,
        "catogory": this.itemcatogory,
        "name": this.itemname,
        "price": this.itemprice,
        "quantity": this.itemquantity
      };
  
      this.http.put("http://localhost:8080/api/item/updateItem", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
  
        this.getAllItems();
        alert("Item Updated Successfully");
  
        this.itemid = 0;
        this.itemcatogory = '';
        this.itemname = '';
        this.itemprice = 0;
        this.itemquantity = 0;
  
      });
    }
  }



