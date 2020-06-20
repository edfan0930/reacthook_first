import React, { useState, } from 'react';

function OpenDb(props){
    let db
    this.request = window.indexedDB.open("TestDb",3);

/*     request.onupgradeneeded = function (event) {
      const db = event.target.result;
      const objectStore = db.createObjectStore("name",{keyPath:"myKey"});
    } */
    this.request.onupgradeneeded = function (event) {
       db = event.target.result;
       let objectStore;
       //table 是否已存在
       if (!db.objectStoreName.contains('register')) {
        //建立table
         objectStore = db.createObjectStore('register',{autoIncrement: true});
         //建立索引 @索引名稱, ＠索引所在的屬性, ＠配置
         objectStore.createIndex('pass','pass',{ unique: false});

       }
    }

    this.request.onerror = function (event) {
        this.Error = 'DB Open Error'
        console.log("open db error",event)
    }
    this.request.onsuccess = function (event) {
       console.log("db success",event) 
       db = event.target.result;
    }

    
}

export default class indexedDB {
    constructor(name, version) {
        this.name = name;
        this.version = version;
        this.db = {};
        this.objectStoreName = {};
    }
    open() {
      this.request = window.indexedDB.open(this.name,this.version);
      this.request.onupgradeneeded = function (event) {
      this.db = event.target.result;
   
      return ""
      };

      this.request.onerror = function (event) {
          console.log("open db error",event)
          return 'DB Open Error'
      };
      this.request.onsuccess = function (event) {
         this.db = event.target.result;
         return ""
      };
    }

    createTable(tableName){
        let objectStore;
        //table 是否已存在
        if (!this.db.objectStoreName.contains(tableName)) {
         //建立table
          /* objectStore =  */this.db.createObjectStore(tableName,{autoIncrement: true});
          //建立索引 @索引名稱, ＠索引所在的屬性, ＠配置
//          objectStore.createIndex('pass','pass',{ unique: false});
          return ""
        }; 
        return "create table exist"
    }
    add(tableName,addObject) {
       let request = this.db.transaction([tableName],'readwrite').objectStore(tableName).add(addObject)

       request.onsuccess = function (event){
           console.log("data add success");
           return ""
       }

       request.onerror = function (event){
           console.log("data add error",event);
           return "data add error"
       }
    }
    //read , @tableName, @pk primary key
    read(tableName,pk){
        let request = this.db.transaction([tableName]).objectStore(tableName).get(pk)
        request.onerror = function(event) {
            console.log("read error",event)
            return {
                data:{},
                error: 'read error'
            }
        }
        request.onsuccess = function(event) {
            if (request.result) {
                return {
                    data:request.result,
                    error:"",
                }
            }
            return {
                data:{},
                error:"data not found"
            }
        }


    }
}




