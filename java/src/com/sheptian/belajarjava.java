package com.sheptian;

public class belajarjava {
    public void cetakNamaLengkap(){
//        menginisialisasi variable nama
        String nama = "Sheptian Bagja Utama";

//        menginisialisasi variabel kota
        String kota = "Bogor";
        System.out.println("Nama " + nama);
        System.out.println("Kota " + kota);
    }

    public static void main(String[] args){ //method void main utama
//        TODO code application logic here
//        membuat obyek baru cth dari class belajarjava
        belajarjava cth = new belajarjava();

//        memanggil method void cetakNamaLengkap() dari obyek cth yang telah dibuat
        cth.cetakNamaLengkap();
    }
}
