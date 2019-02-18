package com.sheptia;

public class Main {
    public static void main(String[] args){
        System.out.println("-------------------Fungsi Break--------------------");
        System.out.println("-------------------Test Case 1 --------------------");

        //test case 1
        for(int i = 1; i <= 7; i++){
            if(i > 5){
                //saat kondisi perulangan dari i lebih dari 5
                //maka perulangan di hentikan
                break;
            }
            System.out.println("Hasil fungsi break : " + i);
        }

        //test case 2
        System.out.println("------------------------- Test Case 2 ----------------------- ");
        String bahasaprogram[] = {"Java", "SQL", "PHP", "Jawa"};
        for(int i = 0; i < bahasaprogram.length; i++){
            if (bahasaprogram[i] == "Jawa"){
                //saat kondisi perulangan menuju pada jawa
                //perulangan di hentikan
                break;
            }
            System.out.println("Bahasa Pemrograman : " + bahasaprogram[i]);
        }
    }



}
