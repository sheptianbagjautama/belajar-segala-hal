package com.sheptian;
import com.sheptian.Cetak;

public class Cetak2 {
    //Main Class

    public static void tampilKata2(){
        //membuat method void menggunakan static
        System.out.println("Method Static");
        System.out.println("Method dengan menggunakan keyword static");
    }

    void tampilKata(){
        //membuat method void tanpa keyword static
        System.out.println("Method Non Static");
        System.out.println("Method tanpa menggunakan non static");
    }

    public static void main(String[]args){
        Cetak2 c1 = new Cetak2();
        //jika tidak menggunakan static
        //kita harus membuat atau menginisialisasi obyek terlebih dahulu

        c1.tampilKata();
        System.out.println("======================================================");
        //tidak perlu membuat objek terlebih dahulu
        //langsung panggil saja class nya lalu .dot method staticnya
        Cetak2.tampilKata2();
    }
}
