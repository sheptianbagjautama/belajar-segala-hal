package com.sheptian.belajarjava;

public class MainClass {

    String nama;
    int umur;
    String jenisKelamin;

//    mendeklarasikan constructor dari class
    public MainClass(String nama, int umur, String jenisKelamin){
        this.nama = nama;
        this.umur = umur;
        this.jenisKelamin = jenisKelamin;
    }

//    method getter
    public String getNama(){
        return nama;
    }

    public int getUmur(){
        return umur;
    }

    public String getJenisKelamin(){
        return jenisKelamin;
    }

//    @Override
    public String toString(){
        return ("Hallo ! nama saya : " + this.getNama() + "Saya berumur : " + this.getUmur() + " dan saya adalah seorang " + this.getJenisKelamin());
    }

    public static void main(String[] args){
//        Menginisialisasi objek dengan argument di constructor
        MainClass sheptian = new MainClass("Sheptian",22,"Perempuan");

//        menampilkan nilai output hasil
        System.out.println(sheptian.toString());
    }
}
