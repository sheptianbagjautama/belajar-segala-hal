package com.sheptian;

public class perulangan {
//    public static void main(String[] args){
//        int[] nomor = new int[] {5,6,7,8,9,10,11,12,13};
//        int angka = 0;
//        for (int i=0; i<nomor.length; i=i+1){
////            length digunakan untuk mengetahui panjang dari suatu array
//            angka = angka + nomor[i];
////            variabel angka dijumlahkan berdasarkan panjang array
//        }
//        System.out.println(angka);
//    }

    public static void main(String[]args){
        String[] names = new String[] {"Andri", "Susi", "Lisa", "Anisa"};
        for (int i=0;i<names.length;i=i+1){
            System.out.println("Hey " + names[i] + "!");
        }
    }
}
