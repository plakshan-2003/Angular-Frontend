import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [FormsModule, HttpClientModule, NgFor],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  orderid: number = 0;
  ordername: String = "";
  quantity: number = 0;
  orderdetails: String = "";

  OrdersArray: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllOrders();

  }


  //Get AllItems From Database
  getAllOrders() {

    this.http.get("http://localhost:8080/api/order/getorders")

      .subscribe((resultData: any) => {
        this.OrdersArray = resultData;
      });
  }


  //SaveOrder to Database
  saveOrder() {

    let bodyData = {
      "id": this.orderid,
      "ordername": this.ordername,
      "quantity": this.quantity,
      "orderdetails": this.orderdetails,

    };

    this.http.post("http://localhost:8080/api/order/saveOrder", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {

      this.getAllOrders();
      alert("Order Saved Successfully");

      this.orderid = 0;
      this.ordername = '';
      this.quantity = 0;
      this.orderdetails = '';

    });
  }


  //Clear Form Data
  clearForm() {
    this.orderid = 0;
    this.ordername = '';
    this.quantity = 0;
    this.orderdetails = '';
  }

  //Delete Order
  deleteOrder() {

    this.http.delete("http://localhost:8080/api/order/deleteOrder/" + this.orderid).subscribe((resultData: any) => {

      this.getAllOrders();
      alert("Order Deleted Successfully");

      this.orderid = 0;
      this.ordername = '';
      this.quantity = 0;
      this.orderdetails = '';

    });

  }

  //Update Order
  updateOrder() {

    let bodyData = {
      "id": this.orderid,
      "ordername": this.ordername,
      "quantity": this.quantity,
      "orderdetails": this.orderdetails,
    };

    this.http.put("http://localhost:8080/api/order/updateOrder", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {

      this.getAllOrders();
      alert("Order Updated Successfully");

      this.orderid = 0;
      this.ordername = '';
      this.quantity = 0;
      this.orderdetails = '';
    });
  }
}
