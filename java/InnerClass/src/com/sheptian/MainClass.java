package com.sheptian;

public class MainClass {

    public static void main(String[]args){
        //membuat dan memanggil method objek class Mobil
        Mobil mobil = new Mobil(10043);
        mobil.mulai();

        System.out.println("==========================================================");
        //membuat dan memanggil method objek static class Bensin didalam class Mobil
        Mobil.Bensin bensin = new Mobil.Bensin();
        bensin.biaya();
    }
}
