package com.sheptian;

public class Nested {
    public static void main(String[]okedroid){
        for (int angka2=0; angka2<=3; angka2++){
//            outer
            for (int angka1=0; angka1<=angka2; angka1++){
//                inner
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
