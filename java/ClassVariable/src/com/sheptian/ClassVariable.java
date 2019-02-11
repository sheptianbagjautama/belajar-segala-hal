package com.sheptian;

public class ClassVariable {
    public static double nilaiujian;
    public static final String namasiswa = "Andi Wijayanto";

    public static void main(String[]args){
        nilaiujian = 7.89;
        System.out.println("Nama Siswa : " + namasiswa);
        System.out.println("Nilai Ujiannya " + nilaiujian);
    }
}
