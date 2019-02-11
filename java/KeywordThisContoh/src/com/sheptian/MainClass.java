package com.sheptian;

public class MainClass {
    MainClass(){
        //ketika menggunakan this ini , kita sedang memanggil constructor parameter
        this(15);
        System.out.println("Menjalankan Constructor");
    }

    MainClass(int x){
        System.out.println("Menjalankan Constructor Dengan Parameter");
    }

    public static void main(String[]args){
        new MainClass();
    }
}
