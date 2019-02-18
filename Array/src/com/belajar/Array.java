package com.belajar;

public class Array {
    public static void main(String[]args){
        String[] nama = new String[] {
                "Andi","Susi","Doni","Eric","Anie","Bayu","Kevin"
        };

        nama[3] = "Aldi";
        //menentukan atau mengubah kembali(reassign) nilai dari index array 3 doni menjadi aldi
        System.out.println(nama[3]);
        //menceteak index array posisi 3
        //output = Aldi
    }
}
