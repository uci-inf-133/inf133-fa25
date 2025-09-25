import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeUtils {
  static createFromString(dateStr:string = '') {
    //Works for Chrome to set in current time zone
    let newDate = new Date(dateStr + " GMT" + TimeUtils.getTimezoneOffset(dateStr));
    //If correct, assign
    if(newDate instanceof Date && !isNaN(newDate as any)) {
      return newDate;
    } else { //This will work for Safari
      return new Date(dateStr.replace(/-/g, "/"));
    }
  }

  //https://stackoverflow.com/questions/24500375/get-clients-gmt-offset-in-javascript
  static getTimezoneOffset(dateStr:string="") {
      let date = new Date();
      if(dateStr) {
          date = new Date(dateStr);
      }
      function z(n:any){return (n<10? '0' : '') + n}
      var offset = date.getTimezoneOffset();
      var sign = offset < 0? '+' : '-';
      offset = Math.abs(offset);
      return sign + z(offset/60 | 0) + z(offset%60);
  }

  static formatTime(date:Date):string {
      return (date.getHours()>12? (date.getHours()%12).toString(): date.getHours()) + ':' + date.getMinutes().toString().padStart(2, "0");
  }
}
