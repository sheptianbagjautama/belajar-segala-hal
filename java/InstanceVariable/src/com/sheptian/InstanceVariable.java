package com.sheptian;

public class InstanceVariable {
    String namasiswa;
    char kelas;
    double nilaiujian;

//    deklarasi di dalam kelas tapi diluar method or konstruktor

    public void cetakNamaSiswa(){
        namasiswa = "Sheptian Bagja Utama";
        kelas = 'A';
        nilaiujian = 8.99;

        System.out.println("Nama Siswa :" + namasiswa);
        System.out.println("Kelas di :"+ kelas);
        System.out.println("Nilai Ujian : " + nilaiujian);
    }

    public static void main(String[]args){ //method void main utama
//        TODO code application logic here
        InstanceVariable cth = new InstanceVariable();
        cth.cetakNamaSiswa();
    }
}
