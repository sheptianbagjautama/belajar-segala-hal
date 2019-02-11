package com.sheptian;

public class Mobil {
    //deklarasi variabel id modifier private
    private int nomor;

    //mendeklarasikan constructor milik class Mobil
    public Mobil(int id){
        this.nomor = id;
    }

    //menggunakan inner class Mesin dengan modifier private
    private class Mesin{

        //menggunakan method hidup() lal mengakses variable instansi milik class Mobil
        public void hidup(){
            System.out.println("Mesin "+ nomor + "hidup...");
        }
    }

    //menggunakan static class Bensin
    public static class Bensin{
        //method di dalam static class Bensin
        public void biaya(){
            System.out.println("Biaya untuk isi bensin");
        }
    }

    //menggunakan method di dalam class mobil
    public void mulai(){
        System.out.println("Menyalakan mobil"+nomor);

        //membuat objek dari class Mesin
        Mesin mesin = new Mesin();
        mesin.hidup();

        //inisilisasi nilai var merek
        String merek = "BMW";

        //membuat local class di dalam method mulai()
        class Data{
            //membuat method local
            public void tampilData(){
                System.out.println("Nomor : "+nomor);
                System.out.println("Merek : "+merek);
            }
        }

        //membuat objek di dalam method mulai()
        Data data = new Data();
        data.tampilData();
    }

}
