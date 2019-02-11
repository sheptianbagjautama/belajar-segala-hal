package com.sheptian;

public class Main {
    //belajar java di okedroid.com
    public static void main(String[]args){
        Integer integerObjek1 = new Integer(1234);
        Integer integerObjek2 = new Integer("1234");

        //membuat atau menginstansi objek dari wrapper class lalu
        //menggunakan dua tipe argumen dari tipe data primitif dan String

        Double doubleObjek1 = new Double(12.34);
        Double doubleObjek2 = new Double("12.34");

        Boolean booleanObjek1 = new Boolean(true);
        Boolean booleanObjek2 = new Boolean("true");

        Character characterObjek1 = new Character('0');

        System.out.println("Output Nilai Integer Class : "+integerObjek1+" dan "+integerObjek2+" sama. "+
                "Max Nilai Integer : " + Integer.MAX_VALUE);
        //output nilai wrapper class integer

        System.out.println("Output Nilai Double Class : " + doubleObjek1 + " dan " + doubleObjek2 + " sama. "+
                "Max Nilai Double : " + Double.MAX_VALUE);
        //output nilai wrapper class Double

        System.out.println("Output Nilai Boolean Class :" + booleanObjek1 + " sama " + booleanObjek2 + " sama ");
        //output nilai wrapper class character

        System.out.println("Output Nilai Character Class : "+characterObjek1);
    }
}
